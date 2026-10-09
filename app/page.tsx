import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  AudioWaveform,
  Bot,
  BrainCircuit,
  Check,
  ChevronDown,
  Code2,
  Fingerprint,
  Layers3,
  MessageCircle,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { BriefBuilder } from "@/components/brief-builder";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { faqs, services, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "RootState Web Solutions — Digital, with a human signal",
  description:
    "Thoughtful websites, web applications, product design and practical AI integrations. RootState turns ambitious ideas into useful digital experiences.",
  alternates: { canonical: "/" },
};

function ServiceIcon({ icon }: { icon: (typeof services)[number]["icon"] }) {
  const props = { size: 22, strokeWidth: 1.6 };
  switch (icon) {
    case "code": return <Code2 {...props} />;
    case "brain": return <BrainCircuit {...props} />;
    case "layers": return <Layers3 {...props} />;
    case "shield": return <ShieldCheck {...props} />;
    default: return null;
  }
}

function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <span className="section-label-line" />
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="hero section-grid" aria-labelledby="hero-title">
        <div className="hero-grid-overlay" aria-hidden="true" />
        <div className="shell hero-layout">
          <div className="hero-copy">
            <Reveal y={12}>
              <div className="hero-kicker"><span className="status-dot" /> INDEPENDENT DIGITAL STUDIO <span className="kicker-divider">/</span> INDIA + WORLDWIDE</div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 id="hero-title">Digital that thinks ahead.<br /><span className="hero-italic">Human</span> by design<span className="hero-period">.</span></h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="hero-description">We build websites, products and AI-powered experiences that solve real problems — without losing the people they&apos;re made for.</p>
            </Reveal>
            <Reveal delay={0.23}>
              <div className="hero-actions">
                <a className="button button--primary button--large" href="#contact">Let&apos;s build something <ArrowUpRight size={17} /></a>
                <a className="text-link" href="#work">See what we can do <ArrowDownRight size={17} /></a>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="hero-proofline">
                <div className="avatar-stack" aria-hidden="true"><span>R</span><span>+</span><span>AI</span></div>
                <p><strong>Small-studio focus.</strong><br />Strategy to shipped product, with you in the loop.</p>
              </div>
            </Reveal>
          </div>

          <Reveal className="hero-visual-wrap" delay={0.16} y={14}>
            <div className="hero-visual" aria-label="Abstract RootState digital product workflow illustration">
              <div className="visual-topline"><span className="visual-live"><i /> SYSTEM THINKING, HUMAN FIRST</span><span className="visual-index">FIG. 001</span></div>
              <div className="visual-art" aria-hidden="true">
                <div className="orb-glow" />
                <div className="orb-grid orb-grid--outer" />
                <div className="orb-grid orb-grid--inner" />
                <div className="orb-core"><span className="orb-core-symbol">r<span>.</span>s</span><span className="orb-core-line" /></div>
                <div className="orbit orbit--a"><span /></div>
                <div className="orbit orbit--b"><span /></div>
                <div className="orbit orbit--c"><span /></div>
                <div className="orbit-label orbit-label--one"><span>01</span> HUMAN SIGNAL</div>
                <div className="orbit-label orbit-label--two"><span>02</span> MACHINE LEVERAGE</div>
                <div className="orbit-label orbit-label--three"><span>03</span> USEFUL OUTPUT</div>
                <svg className="orbit-connectors" viewBox="0 0 500 360" fill="none"><path d="M75 105 L148 145"/><path d="M390 90 L337 137"/><path d="M380 285 L331 244"/><circle cx="75" cy="105" r="3"/><circle cx="390" cy="90" r="3"/><circle cx="380" cy="285" r="3"/></svg>
              </div>
              <div className="visual-bottomline"><span>IDEA <b>→</b> CLARITY <b>→</b> BUILD</span><span className="tiny-wave"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></span><span>ALWAYS ITERATING</span></div>
              <div className="floating-note floating-note--top"><span className="note-icon"><Sparkles size={14} /></span><span><b>AI, with intent</b><small>Useful before impressive</small></span><span className="note-pulse" /></div>
              <div className="floating-note floating-note--bottom"><span className="note-icon note-icon--purple"><Fingerprint size={15} /></span><span><b>Human in the loop</b><small>Context changes everything</small></span><Check size={15} className="note-check" /></div>
            </div>
            <div className="hero-caption"><span>01 / OUR POINT OF VIEW</span><span>Less noise. More signal. <span className="caption-spark">✳</span></span></div>
          </Reveal>
        </div>
        <div className="shell hero-bottom-strip">
          <span>GOOD WORK STARTS WITH GOOD QUESTIONS</span>
          <span className="strip-separator" />
          <span>PRODUCT THINKING</span><span className="strip-dot">✳</span><span>ENGINEERING CRAFT</span><span className="strip-dot">✳</span><span>HUMAN JUDGMENT</span>
        </div>
      </section>

      <section className="services-section section-pad" id="services" aria-labelledby="services-title">
        <div className="shell">
          <Reveal><SectionLabel index="01">WHAT WE DO</SectionLabel></Reveal>
          <div className="section-heading-row">
            <Reveal className="section-heading-block">
              <h2 id="services-title">From first thought<br />to <span className="text-gradient">real-world impact.</span></h2>
            </Reveal>
            <Reveal className="section-aside" delay={0.1}>
              <p>One partner for the thinking, design and engineering it takes to get a digital idea out of your head and into the world.</p>
              <a className="inline-arrow-link" href="#contact">Explore a collaboration <ArrowUpRight size={15} /></a>
            </Reveal>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <Reveal key={service.number} delay={index * 0.07} className="service-card-wrap">
                <article className="service-card">
                  <div className="service-card-top"><span>{service.number} / {service.eyebrow}</span><span className="service-icon"><ServiceIcon icon={service.icon} /></span></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-capabilities">
                    {service.capabilities.map((capability) => <span key={capability}><i />{capability}</span>)}
                  </div>
                  <a className="card-arrow" href="#contact" aria-label={`Discuss ${service.title}`}><ArrowUpRight size={18} /></a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section section-pad" id="work" aria-labelledby="work-title">
        <div className="shell">
          <Reveal><SectionLabel index="02">SELECTED DIRECTIONS</SectionLabel></Reveal>
          <div className="work-heading-row">
            <Reveal>
              <h2 id="work-title">A peek at what<br />we <span className="hero-italic">could</span> create.</h2>
            </Reveal>
            <Reveal delay={0.1} className="work-heading-note">
              <span className="concept-stamp">CONCEPT EXPLORATIONS</span>
              <p>These are illustrative directions, not client case studies — a look at the kind of experiences we like to make.</p>
            </Reveal>
          </div>

          <div className="project-grid">
            <Reveal className="project-card project-card--wide" delay={0.03}>
              <a href="#contact" className="project-hit-area" aria-label="Discuss an AI knowledge workspace project">
                <div className="project-preview project-preview--knowledge">
                  <div className="preview-glow preview-glow--green" />
                  <div className="mock-window mock-window--knowledge">
                    <div className="mock-sidebar"><div className="mock-brand-dot" /><span className="mock-side-active">◈ &nbsp; Workspace</span><span>⌘ &nbsp; Collections</span><span>⌁ &nbsp; Activity</span><div className="mock-sidebar-bottom"><span className="mock-user-dot">A</span><span>Alex Morgan</span></div></div>
                    <div className="mock-content"><div className="mock-content-head"><span>YOUR KNOWLEDGE HUB</span><span className="mock-chip">BETA</span></div><h4>Good morning, Alex<span>.</span></h4><p>What are we figuring out today?</p><div className="mock-search"><Sparkles size={13} /><span>Ask your workspace anything…</span><span className="mock-enter">↵</span></div><div className="mock-suggestion-row"><span>↗ Product notes</span><span>↗ Team handbook</span><span>↗ Recent docs</span></div><div className="mock-insight"><span className="mock-insight-icon"><BrainCircuit size={16} /></span><div><small>AI-GENERATED INSIGHT</small><b>3 useful connections found</b><p>Across 8 documents · Sources linked</p></div><span className="mock-insight-arrow">↗</span></div></div>
                  </div>
                  <div className="preview-corner-label">INTERFACE STUDY / 01</div>
                </div>
                <div className="project-meta"><div><span className="project-type">AI PRODUCT / WORKSPACE</span><h3>Signal<span className="project-period">.</span></h3><p>Knowledge that connects the dots, not just the documents.</p></div><span className="project-open"><ArrowUpRight size={19} /></span></div>
              </a>
            </Reveal>

            <Reveal className="project-card" delay={0.1}>
              <a href="#contact" className="project-hit-area" aria-label="Discuss a SaaS dashboard project">
                <div className="project-preview project-preview--dashboard">
                  <div className="preview-glow preview-glow--purple" />
                  <div className="dash-top"><span className="dash-mark">N<span>.</span></span><span className="dash-small-nav">OVERVIEW &nbsp; REPORTS &nbsp; SETTINGS</span><span className="dash-avatar">JD</span></div>
                  <div className="dash-greeting"><small>MONDAY, 09:41 AM</small><h4>Clarity, at a glance.</h4><p>A calmer way to see the whole picture.</p></div>
                  <div className="dash-metrics"><div><small>ACTIVE USERS</small><b>2,480</b><span>↗ 12.8%</span></div><div><small>CONVERSION</small><b>4.82%</b><span>↗ 0.6%</span></div></div>
                  <div className="dash-chart"><div className="chart-y"><span>3k</span><span>2k</span><span>1k</span><span>0</span></div><svg viewBox="0 0 320 88" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#a6f66f" stopOpacity=".24"/><stop offset="100%" stopColor="#a6f66f" stopOpacity="0"/></linearGradient></defs><path d="M0 70 C20 66 25 53 44 58 S72 42 91 48 S124 18 143 33 S177 45 196 27 S226 38 244 20 S277 26 295 11 S309 20 320 5 L320 88 L0 88Z" fill="url(#chartFill)"/><path d="M0 70 C20 66 25 53 44 58 S72 42 91 48 S124 18 143 33 S177 45 196 27 S226 38 244 20 S277 26 295 11 S309 20 320 5" fill="none" stroke="#a6f66f" strokeWidth="2"/></svg></div>
                  <div className="preview-corner-label">INTERFACE STUDY / 02</div>
                </div>
                <div className="project-meta"><div><span className="project-type">SAAS / PRODUCT DESIGN</span><h3>Northstar<span className="project-period">.</span></h3><p>Complex data, made easier to act on.</p></div><span className="project-open"><ArrowUpRight size={19} /></span></div>
              </a>
            </Reveal>

            <Reveal className="project-card" delay={0.17}>
              <a href="#contact" className="project-hit-area" aria-label="Discuss an e-commerce project">
                <div className="project-preview project-preview--commerce">
                  <div className="commerce-nav"><span>FORM<span className="commerce-dot">/</span>FUNCTION</span><span>OBJECTS &nbsp; STORY &nbsp; ABOUT</span><span> BAG (02)</span></div>
                  <div className="commerce-hero"><span className="commerce-eyebrow">LESS, BUT BETTER.</span><h4>Everyday things.<br /><i>Considered</i> deeply.</h4><span className="commerce-cta">EXPLORE THE COLLECTION <ArrowUpRight size={12} /></span></div>
                  <div className="commerce-products"><div className="commerce-product commerce-product--lamp"><div className="lamp-shade" /><div className="lamp-stem" /><div className="lamp-base" /></div><div className="commerce-product commerce-product--vase"><div className="vase-neck" /><div className="vase-body" /></div><div className="commerce-product commerce-product--chair"><div className="chair-back" /><div className="chair-seat" /><div className="chair-leg chair-leg--a" /><div className="chair-leg chair-leg--b" /></div></div>
                  <div className="preview-corner-label">INTERFACE STUDY / 03</div>
                </div>
                <div className="project-meta"><div><span className="project-type">COMMERCE / BRAND EXPERIENCE</span><h3>Form / Function<span className="project-period">.</span></h3><p>A storefront with the same care as the product.</p></div><span className="project-open"><ArrowUpRight size={19} /></span></div>
              </a>
            </Reveal>
          </div>
          <div className="work-footnote"><span className="footnote-mark">✳</span><p>Your project deserves its own point of view. No copy-paste case studies, no off-the-shelf thinking.</p><a href="#contact">Bring us your idea <ArrowRight size={14} /></a></div>
        </div>
      </section>

      <section className="human-section section-pad" id="approach" aria-labelledby="human-title">
        <div className="shell">
          <Reveal><SectionLabel index="03">THE ROOTSTATE WAY</SectionLabel></Reveal>
          <div className="human-heading-grid">
            <Reveal><h2 id="human-title">AI is powerful.<br /><span className="hero-italic">Judgment</span> is the edge.</h2></Reveal>
            <Reveal delay={0.1}><p className="human-lede">We like what technology makes possible. We care just as much about what it should make possible — for the people using it, paying for it, and living with it.</p></Reveal>
          </div>
          <div className="human-principles">
            <Reveal className="human-principle" delay={0.02}>
              <div className="principle-visual principle-visual--human"><div className="principle-orbit" /><div className="principle-figure"><span /><i /><b /></div><div className="principle-coordinate">HUMAN / 01</div><MessageCircle className="principle-floating-icon" size={22} /></div>
              <div className="principle-number">01 <span>START WITH PEOPLE</span></div>
              <h3>Understand before optimising.</h3>
              <p>We ask better questions, listen for the real constraint, and design around the person on the other side of the screen.</p>
            </Reveal>
            <Reveal className="human-principle" delay={0.1}>
              <div className="principle-visual principle-visual--ai"><div className="ai-node ai-node--a"><Sparkles size={14} /></div><div className="ai-node ai-node--b"><ScanLine size={14} /></div><div className="ai-node ai-node--c"><Workflow size={14} /></div><div className="ai-node ai-node--d"><Bot size={14} /></div><div className="ai-path ai-path--a" /><div className="ai-path ai-path--b" /><div className="ai-path ai-path--c" /><div className="ai-path ai-path--d" /><div className="ai-center"><BrainCircuit size={26} /></div><div className="principle-coordinate">INTELLIGENCE / 02</div></div>
              <div className="principle-number">02 <span>USE AI WITH INTENT</span></div>
              <h3>Automate the busywork, not the thinking.</h3>
              <p>We look for places where AI adds practical value, build guardrails around it, and keep the experience understandable.</p>
            </Reveal>
            <Reveal className="human-principle" delay={0.18}>
              <div className="principle-visual principle-visual--build"><div className="build-window"><div className="build-window-top"><span /><span /><span /></div><div className="code-line code-line--short" /><div className="code-line code-line--long" /><div className="code-line code-line--mid" /><div className="code-line code-line--short code-line--accent" /><div className="build-check"><Check size={19} /></div></div><div className="build-spark">✳</div><div className="principle-coordinate">CRAFT / 03</div></div>
              <div className="principle-number">03 <span>SHIP WITH CARE</span></div>
              <h3>Make it work. Make it clear. Make it last.</h3>
              <p>Thoughtful details, maintainable code, and clear trade-offs — so launch day is a beginning, not a finish line.</p>
            </Reveal>
          </div>
          <Reveal className="approach-banner" delay={0.12}>
            <div className="approach-banner-symbol"><AudioWaveform size={25} strokeWidth={1.4} /></div>
            <div><span className="eyebrow">OUR PROMISE</span><h3>Good technology should feel like clarity.</h3></div>
            <a className="button button--outline" href="#contact">Meet your build partner <ArrowUpRight size={15} /></a>
          </Reveal>
        </div>
      </section>

      <section className="process-section section-pad" aria-labelledby="process-title">
        <div className="shell process-layout">
          <div className="process-intro">
            <Reveal><SectionLabel index="04">HOW WE WORK</SectionLabel></Reveal>
            <Reveal><h2 id="process-title">Clear steps.<br /><span className="text-gradient">No black box.</span></h2></Reveal>
            <Reveal><p>You should always know what we&apos;re doing, why it matters, and what happens next.</p><a className="inline-arrow-link" href="#contact">Talk through your project <ArrowUpRight size={15} /></a></Reveal>
          </div>
          <div className="process-steps">
            <Reveal className="process-step" delay={0.02}><span className="process-count">01</span><div><h3>Listen & frame</h3><p>Understand the problem, audience, constraints and what success should look like.</p><div className="process-tags"><span>Discovery</span><span>Priorities</span><span>Scope</span></div></div><span className="process-step-icon"><MessageCircle size={17} /></span></Reveal>
            <Reveal className="process-step" delay={0.08}><span className="process-count">02</span><div><h3>Design the direction</h3><p>Turn the brief into user journeys, interface direction and a plan everyone can align on.</p><div className="process-tags"><span>UX / UI</span><span>Prototype</span><span>Milestones</span></div></div><span className="process-step-icon"><Layers3 size={17} /></span></Reveal>
            <Reveal className="process-step" delay={0.14}><span className="process-count">03</span><div><h3>Build & validate</h3><p>Ship in useful increments, test the important paths and keep feedback part of the process.</p><div className="process-tags"><span>Engineering</span><span>QA</span><span>Integration</span></div></div><span className="process-step-icon"><Code2 size={17} /></span></Reveal>
            <Reveal className="process-step" delay={0.2}><span className="process-count">04</span><div><h3>Launch & improve</h3><p>Make the handover clear, measure what matters and identify the next best improvement.</p><div className="process-tags"><span>Deployment</span><span>Documentation</span><span>Iteration</span></div></div><span className="process-step-icon"><Zap size={17} /></span></Reveal>
          </div>
        </div>
      </section>

      <section className="brief-section section-pad" id="brief" aria-labelledby="brief-title">
        <div className="shell">
          <Reveal><SectionLabel index="05">MAKE THE IDEA TANGIBLE</SectionLabel></Reveal>
          <div className="brief-intro-grid">
            <Reveal><h2 id="brief-title">A little structure<br />goes a <span className="hero-italic">long</span> way.</h2></Reveal>
            <Reveal delay={0.1}><p>Use this starter brief builder to organise the first version of your idea. With an AI key configured, it can generate a tailored draft; without one, it returns a useful template-based preview.</p></Reveal>
          </div>
          <Reveal delay={0.12}><BriefBuilder /></Reveal>
        </div>
      </section>

      <section className="faq-section section-pad" id="faq" aria-labelledby="faq-title">
        <div className="shell faq-layout">
          <div className="faq-intro">
            <Reveal><SectionLabel index="06">GOOD QUESTIONS</SectionLabel></Reveal>
            <Reveal><h2 id="faq-title">Before we<br /><span className="text-gradient">get into it.</span></h2><p>A few useful answers before the first hello.</p></Reveal>
            <Reveal><a href={`mailto:${siteConfig.email}`} className="faq-email">Still curious? Ask us directly <ArrowUpRight size={14} /></a></Reveal>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.045}>
                <details className="faq-item" open={index === 0}>
                  <summary><span className="faq-index">0{index + 1}</span><span>{faq.question}</span><ChevronDown size={17} className="faq-chevron" /></summary>
                  <div className="faq-answer"><p>{faq.answer}</p></div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section section-pad" id="contact" aria-labelledby="contact-title">
        <div className="shell">
          <Reveal><SectionLabel index="07">YOUR MOVE</SectionLabel></Reveal>
          <div className="contact-heading-grid">
            <Reveal><h2 id="contact-title">Have a good<br /><span className="hero-italic">problem?</span><br />Let&apos;s build.</h2></Reveal>
            <Reveal delay={0.1} className="contact-aside">
              <div className="contact-aside-mark"><span className="contact-aside-ring" /><span className="contact-aside-core">r<span>.</span>s</span></div>
              <p>Tell us where you want to go. We&apos;ll bring curiosity, clear thinking and the technical chops to help you get there.</p>
              <div className="contact-email-line"><span className="eyebrow">OR SEND A DIRECT NOTE</span><a href={`mailto:${siteConfig.email}`}>{siteConfig.email} <ArrowUpRight size={15} /></a></div>
            </Reveal>
          </div>
          <Reveal delay={0.12}><ContactForm /></Reveal>
          <div className="contact-bottom-note"><span><span className="status-dot" /> OPEN TO IDEAS, COLLABORATIONS & GOOD QUESTIONS</span><span>NO PRESSURE. JUST A CONVERSATION.</span></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
