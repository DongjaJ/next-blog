import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "naver",
  host: "smtp.naver.com", // SMTP 서버명
  port: 587,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

export async function POST(request: NextRequest) {
  const { email, subject, message } = await request.json();

  const mailData = {
    from: process.env.NODEMAILER_USER,
    to: process.env.NODEMAILER_USER,
    subject,
    text: message,
    html: `<h1>안녕하세요</h1>
          <div>
            <p>${message}</p>
            <p>보낸사람 : ${email}</p>
          </div>`,
  };

  return await transporter
    .sendMail(mailData)
    .then((response: nodemailer.SentMessageInfo) => {
      return NextResponse.json(
        { error: false, emailSent: true, errors: [], response },
        { status: 200 }
      );
    })
    .catch((error: nodemailer.SentMessageInfo) => {
      return NextResponse.json(
        { error: true, emailSent: false, errors: [error] },
        { status: 500 }
      );
    });
}
