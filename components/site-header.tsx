"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#approach", label: "Approach" },
  { href: "#faq", label: "FAQ" },
];

export function BrandMark({ small = false }: { small?: boolean }) {
  return (
    <span className={`brand-mark${small ? " brand-mark--small" : ""}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="#top" aria-label="RootState home" onClick={() => setOpen(false)}>
          <BrandMark />
          <span className="brand-wordmark">
            <span>rootstate<span className="brand-dot">.</span></span>
            <small>WEB SOLUTIONS</small>
          </span>
        </Link>

        <nav className={`desktop-nav${open ? " desktop-nav--open" : ""}`} aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="mobile-cta" href="#contact" onClick={() => setOpen(false)}>
            Start a project <ArrowUpRight size={15} />
          </a>
        </nav>

        <a className="button button--nav" href="#contact">
          Start a project <ArrowUpRight size={15} />
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}
