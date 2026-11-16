import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, organization, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Configure the transporter with environment variables
    // Note: The user needs to set these in a .env.local file
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL || `"AI8HT Website" <noreply@ai8ht.pro>`,
      to: "info@ai8ht.pro",
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Organization: ${organization || "N/A"}

Message:
${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization || "N/A"}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    if (!process.env.SMTP_HOST) {
      console.warn("SMTP_HOST is not set. Simulating successful email sending for development.");
      console.log("Mock Email payload:", mailOptions);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      return NextResponse.json({ success: true, mocked: true });
    }

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error sending email" },
      { status: 500 }
    );
  }
}
