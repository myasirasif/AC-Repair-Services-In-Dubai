import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  phone?: string;
  area?: string;
  problem?: string;
  property?: string;
  time?: string;
  details?: string;
};

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const { name, phone, area, problem } = body;
  if (!name?.trim() || !phone?.trim() || !area?.trim() || !problem?.trim()) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 422 });
  }

  // TODO: deliver the booking by email. Add RESEND_API_KEY (or SMTP credentials) and BOOKING_TO_EMAIL
  // to the environment, then send `body` here, e.g. with the `resend` package:
  //   await new Resend(process.env.RESEND_API_KEY).emails.send({ from, to: process.env.BOOKING_TO_EMAIL, subject, text })
  // Until then requests are only logged on the server; WhatsApp remains the primary booking channel.
  console.info("[booking]", { ...body, receivedAt: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
