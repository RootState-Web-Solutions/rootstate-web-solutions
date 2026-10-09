"use client";

import { ArrowUpRight, CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { siteConfig } from "@/lib/site";

type FormState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormState>("idle");
  const [notice, setNotice] = useState("");

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setNotice("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { message?: string; error?: string };
      if (!response.ok) throw new Error(data.error || "Your message could not be sent.");
      setStatus("success");
      setNotice(data.message || "Message sent. We'll be in touch.");
      form.reset();
    } catch (caught) {
      setStatus("error");
      setNotice(caught instanceof Error ? caught.message : "Something went wrong.");
    }
  }

  return (
    <div className="contact-form-wrap">
      <div className="contact-form-heading">
        <span className="eyebrow">THE FIRST HELLO</span>
        <h3>Tell us what you&apos;re thinking.</h3>
        <p>Rough ideas are welcome. We&apos;ll help turn the right ones into a clear next step.</p>
      </div>
      <form className="contact-form" onSubmit={submitForm}>
        <div className="form-row">
          <label>Name <input name="name" type="text" autoComplete="name" placeholder="Your name" minLength={2} maxLength={80} required /></label>
          <label>Email <input name="email" type="email" autoComplete="email" placeholder="you@company.com" maxLength={254} required /></label>
        </div>
        <div className="form-row">
          <label>What do you need?
            <select name="projectType" defaultValue="Website / web app" required>
              <option>Website / web app</option>
              <option>AI integration</option>
              <option>Product design</option>
              <option>Automation / internal tool</option>
              <option>Technical consultation</option>
              <option>Something else</option>
            </select>
          </label>
          <label>Budget range
            <select name="budget" defaultValue="Not sure yet">
              <option>Not sure yet</option>
              <option>Under ₹25,000</option>
              <option>₹25,000 – ₹75,000</option>
              <option>₹75,000 – ₹2,00,000</option>
              <option>₹2,00,000+</option>
            </select>
          </label>
        </div>
        <label>Tell us a little about it
          <textarea name="message" placeholder="The problem, the audience, the dream version…" minLength={10} maxLength={5000} rows={4} required />
        </label>
        <div className="honeypot" aria-hidden="true">
          <label>Leave this field empty <input name="website" tabIndex={-1} autoComplete="off" /></label>
        </div>
        <div className="contact-submit-row">
          <p>By sending this, you agree to our <a href="/privacy">privacy note</a>.</p>
          <button type="submit" className="button button--primary" disabled={status === "sending"}>
            {status === "sending" ? <><LoaderCircle size={16} className="spin" /> Sending…</> : <>Send the details <Send size={15} /></>}
          </button>
        </div>
        {status !== "idle" ? (
          <div className={`form-notice form-notice--${status}`} role="status">
            {status === "success" ? <CheckCircle2 size={17} /> : null}
            <span>{notice}</span>
            {status === "error" ? <a href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Project enquiry for RootState")}`}>Email us instead <ArrowUpRight size={13} /></a> : null}
          </div>
        ) : null}
      </form>
    </div>
  );
}
