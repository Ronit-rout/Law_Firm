import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, practiceArea, message } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Please provide your name." },
        { status: 400 }
      );
    }

    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a description of at least 10 characters.",
        },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER || "ronitrishi05@gmail.com";
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const rawRecipients =
      process.env.CONTACT_RECIPIENTS ||
      "ronitrishi05@gmail.com,sahooswarut60@gmail.com,routarnov@gmail.com";
    const recipients = rawRecipients
      .split(",")
      .map((r) => r.trim())
      .filter(Boolean);

    // Format IST timestamp
    const now = new Date();
    const formattedDate = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    }).format(now);

    const safeName = String(name).trim();
    const safeEmail = String(email).trim();
    const safePhone = phone ? String(phone).trim() : "Not provided";
    const safePracticeArea = practiceArea
      ? String(practiceArea).trim()
      : "Not specified";
    const safeMessage = String(message).trim();

    // Plaintext email format
    const plainText = `Subject: New enquiry — D.K. Mohanty & Associates website

New website enquiry received.

Name:            ${safeName}
Email:           ${safeEmail}
Phone:           ${safePhone}
Practice area:   ${safePracticeArea}
Submitted:       ${formattedDate} (IST)

Message:
${safeMessage}

—
Submitted via the contact form at D.K. Mohanty & Associates. This does not create an advocate-client relationship.`;

    // HTML email formatted in firm minimalist style
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #0B1420; background-color: #F6F3EC; margin: 0; padding: 24px; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid rgba(11,20,32,0.12); padding: 32px; }
    .header { font-size: 20px; font-weight: 700; color: #10233D; border-bottom: 2px solid #A9822C; padding-bottom: 12px; margin-bottom: 24px; }
    .meta-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .meta-table td { padding: 8px 12px; border-bottom: 1px solid rgba(11,20,32,0.08); font-size: 14px; }
    .meta-table .label { font-weight: 600; color: #10233D; width: 140px; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em; }
    .message-box { background: #F6F3EC; border-left: 3px solid #10233D; padding: 16px; margin: 20px 0; font-size: 14px; white-space: pre-wrap; }
    .disclaimer { font-size: 11px; color: #5B6472; border-top: 1px solid rgba(11,20,32,0.12); padding-top: 16px; margin-top: 24px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">New Website Enquiry — D.K. Mohanty & Associates</div>
    <table class="meta-table">
      <tr>
        <td class="label">Name</td>
        <td>${safeName}</td>
      </tr>
      <tr>
        <td class="label">Email</td>
        <td><a href="mailto:${safeEmail}">${safeEmail}</a></td>
      </tr>
      <tr>
        <td class="label">Phone</td>
        <td>${safePhone}</td>
      </tr>
      <tr>
        <td class="label">Practice Area</td>
        <td>${safePracticeArea}</td>
      </tr>
      <tr>
        <td class="label">Submitted</td>
        <td>${formattedDate}</td>
      </tr>
    </table>
    <div style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #10233D;">Message Content:</div>
    <div class="message-box">${safeMessage}</div>
    <div class="disclaimer">
      Submitted via the contact form at D.K. Mohanty & Associates website. This transmission does not create an advocate-client relationship.
    </div>
  </div>
</body>
</html>`;

    if (!gmailAppPassword || gmailAppPassword === "your_app_password_here") {
      // In development when app password is not configured yet, log details and return success for preview
      console.log(
        "[Contact Route] Gmail SMTP App Password not configured. Email preview:\n",
        plainText
      );
      return NextResponse.json({
        success: true,
        note: "Development mode: Enquiry logged. Add GMAIL_APP_PASSWORD in .env.local to dispatch live emails.",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    await transporter.sendMail({
      from: `"D.K. Mohanty & Associates" <${gmailUser}>`,
      to: recipients,
      replyTo: safeEmail,
      subject: `New enquiry: ${safePracticeArea} — D.K. Mohanty & Associates`,
      text: plainText,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Contact Route Error]:", error);
    return NextResponse.json(
      { success: false, error: "Failed to dispatch enquiry email." },
      { status: 500 }
    );
  }
}
