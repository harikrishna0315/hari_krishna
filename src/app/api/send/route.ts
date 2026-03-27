import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { render } from "@react-email/render";
import validator from "validator";

import { EmailTemplate } from "@/components/template/Email";

export async function POST(request: Request) {
  const body = await request.json();
  const { senderName, senderEmail, reasonToContact, senderMsg } = body;

  if (
    !senderName ||
    !senderEmail ||
    !reasonToContact ||
    !senderMsg ||
    typeof senderName !== "string" ||
    typeof senderEmail !== "string" ||
    typeof reasonToContact !== "string" ||
    typeof senderMsg !== "string"
  ) {
    return NextResponse.json({ error: "Invalid input data" }, { status: 400 });
  }

  if (!validator.isEmail(senderEmail)) {
    return NextResponse.json(
      { error: "Email format is not valid" },
      { status: 400 }
    );
  }

  const htmlContent = await render(
    EmailTemplate({
      userName: senderName,
      contactReason: reasonToContact,
      userMessage: senderMsg,
    })
  );

  // 📩 EMAIL 1: OWNER (YOU)
  const ownerMessage = {
    from: `"Hari Krishna - Contact" <${process.env.email_from}>`,
    to: process.env.email_from,       // YOU get this
    replyTo: senderEmail,             // reply goes to sender
    subject: "New Contact Message",
    html: htmlContent,
    headers: {
      "X-Entity-Ref-ID": "newmail",
    },
  };

  // 📤 EMAIL 2: USER (CONFIRMATION)
  const userMessage = {
    from: `"Hari Krishna - Contact" <${process.env.email_from}>`,
    to: senderEmail,                  // USER gets this
    subject: "Your message has landed! 🚀 We'll get back to you shortly",
    html: htmlContent,
    headers: {
      "X-Entity-Ref-ID": "newmail",
    },
  };

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.email_from,
      pass: process.env.email_password,
    },
  });

  try {
    // ✉️ SEND BOTH EMAILS
    await transporter.sendMail(ownerMessage);
    await transporter.sendMail(userMessage);

    return NextResponse.json(
      {
        message: `Email has been sent successfully`,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error(`Error sending email:`, err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
