import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function NotFound() {
  return (
    <main id="top">
      <SiteHeader />
      <section className="not-found shell">
        <div className="not-found-mark">ERROR / 404</div>
        <h1>Lost the signal<span className="hero-period">.</span></h1>
        <p>This page doesn&apos;t exist, or it may have moved. Let&apos;s get you back on track.</p>
        <Link className="button button--primary" href="/"> <ArrowLeft size={15} /> Back to RootState <ArrowUpRight size={15} /></Link>
      </section>
      <SiteFooter />
    </main>
  );
}
