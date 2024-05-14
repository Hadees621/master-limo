const mail = require("@sendgrid/mail");
import { NextResponse } from "next/server";

mail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  try {
    const {
      topic,
      firstName,
      lastName,
      email,
      phone,
      message: userMessage,
    } = await request.json();

    const message = `.....`;

    await mail.send({
      to: "to.name@email.com",
      from: "from.name@email.com",
      subject: "New Message!",
      text: message,
      html: message.replace(/\r\n/g, "<br>"),
    });

    return new NextResponse(JSON.stringify({ message: "Email sent." }), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: "Email not sent." }), {
      status: 500,
    });
  }
}
