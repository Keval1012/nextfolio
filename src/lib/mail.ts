import nodemailer, { SendMailOptions } from "nodemailer";

export interface ContactMessagePayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
  ip?: string;
  userAgent?: string;
}

/**
 * Escapes HTML characters to prevent XSS / HTML injection in email clients.
 */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Dispatches the contact message directly to the recipient email server-side.
 */
export async function sendContactEmail(payload: ContactMessagePayload) {
  const { name, email, subject, message, ip, userAgent } = payload;

  const recipientEmail =
    process.env.CONTACT_RECIPIENT_EMAIL ||
    "kevaltrivedi1012@gmail.com";

  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT) || 465;
  const smtpSecure =
    process.env.SMTP_SECURE !== undefined
      ? process.env.SMTP_SECURE === "true"
      : smtpPort === 465;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  const cleanSubject = subject?.trim()
    ? `[Portfolio] ${subject.trim()}`
    : `[Portfolio] Direct message from ${name.trim()}`;

  const formattedDate = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium",
  });

  const escapedName = escapeHtml(name.trim());
  const escapedEmail = escapeHtml(email.trim());
  const escapedSubject = escapeHtml(cleanSubject);
  const escapedMessage = escapeHtml(message.trim()).replace(/\n/g, "<br/>");

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapedSubject}</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #0f172a;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #e2e8f0;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      max-width: 600px;
      margin: 30px auto;
      padding: 0 16px;
    }
    .card {
      background-color: #1e293b;
      border: 1px solid #334155;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
    }
    .header {
      background: linear-gradient(135deg, #00f0ff 0%, #6366f1 100%);
      padding: 24px;
      text-align: left;
    }
    .header h1 {
      margin: 0;
      font-size: 20px;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: -0.025em;
    }
    .header p {
      margin: 4px 0 0 0;
      font-size: 13px;
      color: rgba(255, 255, 255, 0.85);
    }
    .content {
      padding: 24px;
    }
    .meta-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
    }
    .meta-table td {
      padding: 8px 0;
      font-size: 14px;
      border-bottom: 1px solid #334155;
    }
    .meta-table .label {
      color: #94a3b8;
      width: 90px;
      font-weight: 600;
      font-family: monospace;
      text-transform: uppercase;
      font-size: 11px;
    }
    .meta-table .value {
      color: #f8fafc;
      font-weight: 500;
    }
    .meta-table .value a {
      color: #00f0ff;
      text-decoration: none;
    }
    .message-box {
      background-color: #0f172a;
      border-left: 4px solid #00f0ff;
      border-radius: 8px;
      padding: 16px 20px;
      font-size: 15px;
      line-height: 1.6;
      color: #f1f5f9;
      white-space: normal;
      word-break: break-word;
      margin: 20px 0;
    }
    .reply-action {
      margin-top: 24px;
      text-align: center;
    }
    .reply-btn {
      display: inline-block;
      background: linear-gradient(135deg, #00f0ff 0%, #6366f1 100%);
      color: #ffffff !important;
      padding: 12px 28px;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      border-radius: 8px;
    }
    .footer {
      padding: 16px 24px;
      background-color: #0f172a;
      border-top: 1px solid #1e293b;
      font-size: 11px;
      color: #64748b;
      font-family: monospace;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="card">
      <div class="header">
        <h1>New Direct Message</h1>
        <p>Received via your Portfolio Contact Form</p>
      </div>
      <div class="content">
        <table class="meta-table">
          <tr>
            <td class="label">From</td>
            <td class="value"><strong>${escapedName}</strong></td>
          </tr>
          <tr>
            <td class="label">Email</td>
            <td class="value"><a href="mailto:${escapedEmail}">${escapedEmail}</a></td>
          </tr>
          <tr>
            <td class="label">Subject</td>
            <td class="value">${escapedSubject}</td>
          </tr>
          <tr>
            <td class="label">Date</td>
            <td class="value">${formattedDate} (IST)</td>
          </tr>
        </table>

        <div style="font-size: 12px; font-weight: 600; text-transform: uppercase; color: #94a3b8; letter-spacing: 0.05em; margin-bottom: 6px;">
          Message
        </div>
        <div class="message-box">
          ${escapedMessage}
        </div>

        <div class="reply-action">
          <a href="mailto:${escapedEmail}?subject=Re:%20${encodeURIComponent(cleanSubject)}" class="reply-btn">
            Reply to ${escapedName}
          </a>
        </div>
      </div>
      <div class="footer">
        Sent from your personal portfolio &bull; Visitor IP: ${ip || "N/A"}<br/>
        User-Agent: ${escapeHtml(userAgent?.slice(0, 100) || "N/A")}
      </div>
    </div>
  </div>
</body>
</html>
`;

  const textContent = `
New Direct Message from Portfolio
=================================
From:    ${name.trim()}
Email:   ${email.trim()}
Subject: ${cleanSubject}
Date:    ${formattedDate} (IST)

Message:
--------
${message.trim()}

---------------------------------
Visitor IP: ${ip || "N/A"}
User-Agent: ${userAgent || "N/A"}
`.trim();

  // If SMTP credentials are not configured, handle mock / preview mode
  if (!smtpUser || !smtpPass) {
    console.warn(
      "\n=======================================================\n" +
        "⚠️ [PORTFOLIO CONTACT FORM - PREVIEW MODE]\n" +
        "SMTP credentials (SMTP_USER / SMTP_PASS) are not set in environment variables.\n" +
        "Message preview:\n" +
        `To:      ${recipientEmail}\n` +
        `From:    ${name} <${email}>\n` +
        `Subject: ${cleanSubject}\n` +
        `Message:\n${message.trim()}\n` +
        "=======================================================\n"
    );

    return {
      success: true,
      preview: true,
      message: "Message logged to server console (SMTP credentials not configured).",
    };
  }

  // Create Nodemailer Transporter
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const mailOptions: SendMailOptions = {
    from: `"${name.trim()} via Portfolio" <${smtpUser}>`,
    to: recipientEmail,
    replyTo: email.trim(),
    subject: cleanSubject,
    text: textContent,
    html: htmlContent,
  };

  const info = await transporter.sendMail(mailOptions);
  return {
    success: true,
    messageId: info.messageId,
  };
}
