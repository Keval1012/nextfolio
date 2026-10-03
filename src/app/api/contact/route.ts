import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mail";
import { connectToDatabase } from "@/lib/mongodb";
import Contact from "@/models/Contact";

// In-memory rate limiting map: ip -> array of request timestamps (ms)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5; // Max 5 messages per 10 minutes per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // Filter out timestamps older than the window
  const activeTimestamps = timestamps.filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS
  );

  if (activeTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, activeTimestamps);
    return true;
  }

  activeTimestamps.push(now);
  rateLimitMap.set(ip, activeTimestamps);

  // Periodically clean up stale entries if map grows
  if (rateLimitMap.size > 1000) {
    rateLimitMap.forEach((times, key) => {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) {
        rateLimitMap.delete(key);
      }
    });
  }

  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";
    const userAgent = req.headers.get("user-agent") || undefined;

    const body = await req.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid request payload." },
        { status: 400 }
      );
    }

    const { name, email, subject, message, _gotcha } = body;

    // 2. Spam Protection: Honeypot check
    // Bots will automatically fill hidden inputs; genuine visitors will not
    if (_gotcha) {
      console.warn(`[SPAM BLOCKED] Honeypot triggered from IP: ${ip}`);
      // Return 200 to trick bot into believing it succeeded
      return NextResponse.json(
        { success: true, message: "Your message has been sent successfully!" },
        { status: 200 }
      );
    }

    // 3. Validation: Required fields check
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { error: "Email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedSubject = typeof subject === "string" ? subject.trim() : "";
    const trimmedMessage = message.trim();

    // 4. Validation: Length boundaries
    if (trimmedName.length < 2 || trimmedName.length > 100) {
      return NextResponse.json(
        { error: "Name must be between 2 and 100 characters." },
        { status: 400 }
      );
    }

    if (trimmedEmail.length > 100) {
      return NextResponse.json(
        { error: "Email address is too long." },
        { status: 400 }
      );
    }

    if (trimmedSubject.length > 150) {
      return NextResponse.json(
        { error: "Subject cannot exceed 150 characters." },
        { status: 400 }
      );
    }

    if (trimmedMessage.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    if (trimmedMessage.length > 5000) {
      return NextResponse.json(
        { error: "Message cannot exceed 5000 characters." },
        { status: 400 }
      );
    }

    // 5. Validation: Email pattern check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // 6. Security: Header injection prevention
    // Prevent CRLF characters in single-line headers like Name and Subject
    if (/[\r\n]/.test(trimmedName) || /[\r\n]/.test(trimmedSubject)) {
      return NextResponse.json(
        { error: "Invalid characters in form fields." },
        { status: 400 }
      );
    }

    // 7. Rate Limiting Check: Maximum 5 messages per 10 minutes per IP
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          error:
            "Too many requests. Please wait a few minutes before sending another message.",
        },
        { status: 429 }
      );
    }

    // 8. Persist Submission in MongoDB
    let savedContact;
    try {
      await connectToDatabase();
      savedContact = await Contact.create({
        name: trimmedName,
        email: trimmedEmail,
        subject: trimmedSubject,
        message: trimmedMessage,
        ip,
        userAgent,
      });
    } catch (dbErr: unknown) {
      console.error("[CONTACT DB ERROR]:", dbErr);
      return NextResponse.json(
        {
          error:
            "Failed to save contact submission. Please try again later or email directly.",
        },
        { status: 500 }
      );
    }

    // 9. Dispatch Email Server-Side (Nodemailer)
    let emailResult;
    try {
      emailResult = await sendContactEmail({
        name: trimmedName,
        email: trimmedEmail,
        subject: trimmedSubject,
        message: trimmedMessage,
        ip,
        userAgent,
      });
    } catch (emailErr: unknown) {
      console.error("[CONTACT EMAIL ERROR]:", emailErr);
      // The contact is safely persisted in MongoDB Atlas
      return NextResponse.json(
        {
          success: true,
          message: "Your message has been received and saved!",
          warning:
            "Email notification could not be dispatched, but your message was safely recorded.",
          id: savedContact._id,
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully!",
        preview: emailResult?.preview,
        id: savedContact._id,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[CONTACT API ERROR]:", err);
    return NextResponse.json(
      {
        error:
          "An unexpected error occurred while processing your message. Please try emailing directly.",
      },
      { status: 500 }
    );
  }
}

