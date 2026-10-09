import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy note",
  description: "How RootState Web Solutions handles information submitted through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main id="top">
      <SiteHeader />
      <section className="legal-page">
        <div className="shell">
          <Link href="/#contact" className="inline-arrow-link"><ArrowLeft size={14} /> Back to the conversation</Link>
          <div style={{ marginTop: 34 }}>
            <div className="section-label"><span>RS / 07</span><span className="section-label-line" /><span>PRIVACY, PLAINLY</span></div>
            <h1>A small note on<br /><span className="text-gradient">your information.</span></h1>
            <p className="legal-updated">LAST UPDATED: 9 OCTOBER 2026</p>
          </div>
          <div className="legal-content">
            <p>This website is designed to be straightforward. This note explains what information may be handled when you use the RootState Web Solutions website at <strong>rootstate.tech</strong>.</p>
            <h2>Information you choose to send</h2>
            <p>If you use the contact form, the site asks for your name, email address, project type, approximate budget range and message. These details are used to understand and respond to your enquiry. Please do not submit passwords, payment details, confidential client data or other sensitive information through this form.</p>
            <h2>Project brief builder</h2>
            <p>The brief builder uses the choices you make to generate a starter brief. When a live AI API key is configured for the deployment, those selected project details are sent to the configured AI provider to generate the response. If live AI is not configured, the site creates a template-based preview. Use the tool for non-confidential project context only.</p>
            <h2>Email delivery and service providers</h2>
            <p>When email delivery is configured, contact form submissions are sent through the deployment&apos;s configured email service. Information may be processed by that provider in order to deliver the message. The actual providers and retention settings should be confirmed by the site operator before launch.</p>
            <h2>Analytics and cookies</h2>
            <p>This starter project does not intentionally add an analytics platform, advertising pixels or non-essential tracking cookies. Hosting infrastructure may process ordinary technical request data for security and operations. If analytics or other services are added later, update this note to reflect the actual setup.</p>
            <h2>Retention and your choices</h2>
            <p>Enquiry information should be retained only as long as reasonably needed to respond, manage a potential engagement, or meet applicable legal obligations. To ask about a message you sent, request correction or deletion where applicable, or raise a privacy question, contact <a href={`mailto:${siteConfig.email}`}>{siteConfig.email} <ArrowUpRight size={12} /></a>.</p>
            <h2>Changes to this note</h2>
            <p>This is a practical starter privacy notice, not legal advice. The site operator should review it against the actual hosting, email, AI and analytics configuration and applicable law before the website goes live. The notice may be updated when the setup changes.</p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
