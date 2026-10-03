import mongoose, { Document, Model, Schema } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  subject?: string;
  message: string;
  ip?: string;
  userAgent?: string;
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
      minlength: [2, "Name must be at least 2 characters."],
      maxlength: [100, "Name cannot exceed 100 characters."],
    },
    email: {
      type: String,
      required: [true, "Email address is required."],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address."],
      maxlength: [100, "Email cannot exceed 100 characters."],
    },
    subject: {
      type: String,
      trim: true,
      maxlength: [150, "Subject cannot exceed 150 characters."],
      default: "",
    },
    message: {
      type: String,
      required: [true, "Message is required."],
      trim: true,
      minlength: [10, "Message must be at least 10 characters."],
      maxlength: [5000, "Message cannot exceed 5000 characters."],
    },
    ip: {
      type: String,
      default: null,
    },
    userAgent: {
      type: String,
      default: null,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: false,
  }
);

// Index for efficient sorting by creation timestamp
ContactSchema.index({ createdAt: -1 });

// Prevent model re-registration in Next.js hot reload / serverless warm starts
const Contact: Model<IContact> =
  mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema);

export default Contact;
