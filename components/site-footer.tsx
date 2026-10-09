import Link from "next/link";
import { ArrowUpRight, Github, Instagram, Linkedin } from "lucide-react";
import { BrandMark } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-main">
          <div className="footer-brand-block">
            <Link className="brand" href="#top" aria-label="RootState home">
              <BrandMark />
              <span className="brand-wordmark">
                <span>rootstate<span className="brand-dot">.</span></span>
                <small>WEB SOLUTIONS</small>
              </span>
            </Link>
            <p>Thoughtful technology.<br />Human by design.</p>
          </div>
          <div className="footer-links">
            <div>
              <span className="footer-label">EXPLORE</span>
              <a href="#services">Services</a>
              <a href="#work">Selected directions</a>
              <a href="#approach">Our approach</a>
            </div>
            <div>
              <span className="footer-label">SAY HELLO</span>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email} <ArrowUpRight size={13} /></a>
              <Link href="/privacy">Privacy note</Link>
            </div>
          </div>
          <div className="footer-cta">
            <span className="eyebrow"><span className="status-dot" /> HAVE A GOOD PROBLEM?</span>
            <a href="#contact" className="footer-cta-link">Let&apos;s solve it. <ArrowUpRight size={19} /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} RootState Web Solutions</span>
          <span className="footer-built"><span className="mini-spark">✳</span> Built with intent, not templates.</span>
          <span className="footer-location">Independent digital studio · India / Worldwide</span>
        </div>
      </div>
    </footer>
  );
}
