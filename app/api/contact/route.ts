import { NextResponse } from "next/server";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const replacements: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return replacements[character];
  });
}

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || "0");
  if (contentLength > 12_000) {
    return NextResponse.json({ error: "The form submission is too large. Please shorten your message and try again." }, { status: 413 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  // Honeypot: silently accept automated submissions without sending email.
  if (clean(body.website, 200)) {
    return NextResponse.json({ message: "Thanks. Your message has been received." });
  }

  const name = clean(body.name, 80);
  const email = clean(body.email, 254);
  const projectType = clean(body.projectType, 100);
  const budget = clean(body.budget, 100);
  const message = clean(body.message, 5000);
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (name.length < 2 || !validEmail || message.length < 10) {
    return NextResponse.json({ error: "Please enter a valid name, email address and message (at least 10 characters)." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email delivery is not configured on this deployment yet. Please email hello@rootstate.tech directly." }, { status: 503 });
  }

  const recipient = process.env.CONTACT_TO_EMAIL || "hello@rootstate.tech";
  const sender = process.env.CONTACT_FROM_EMAIL;
  if (!sender) {
    return NextResponse.json({ error: "Email delivery needs a verified sender address. Please email hello@rootstate.tech directly." }, { status: 503 });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeProject = escapeHtml(projectType || "Not specified");
  const safeBudget = escapeHtml(budget || "Not specified");
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br>");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: `RootState project enquiry — ${name}`,
        text: `New RootState website enquiry\n\nName: ${name}\nEmail: ${email}\nProject: ${projectType}\nBudget: ${budget}\n\nMessage:\n${message}`,
        html: `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#181818"><h2>New RootState website enquiry</h2><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Project:</strong> ${safeProject}</p><p><strong>Budget:</strong> ${safeBudget}</p><hr><p>${safeMessage}</p></div>`,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json({ error: "We couldn't deliver your message right now. Please email hello@rootstate.tech directly." }, { status: 502 });
    }
    return NextResponse.json({ message: "Message sent. Thanks for reaching out — we’ll be in touch." });
  } catch {
    return NextResponse.json({ error: "We couldn't deliver your message right now. Please email hello@rootstate.tech directly." }, { status: 502 });
  }
}
