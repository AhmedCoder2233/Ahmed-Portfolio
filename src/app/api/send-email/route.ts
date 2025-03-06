import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Define the expected request body type
interface EmailRequestBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  const { name, email, message }: EmailRequestBody = await request.json();

  // Validate the request body
  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "All fields are required." },
      { status: 400 }
    );
  }

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail email
      pass: process.env.EMAIL_PASS, // Your Gmail app password
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "ahmedmemon3344@gmail.com", // Your email address
    subject: `New Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to send message." },
      { status: 500 }
    );
  }
}