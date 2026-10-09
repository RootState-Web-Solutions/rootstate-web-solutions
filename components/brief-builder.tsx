"use client";

import { ArrowRight, Check, Copy, LoaderCircle, Sparkles, WandSparkles } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";

type BriefResult = { brief: string; mode: "ai" | "preview" };

export function BriefBuilder() {
  const [projectType, setProjectType] = useState("Business website");
  const [goal, setGoal] = useState("Get more qualified enquiries");
  const [stage, setStage] = useState("I have an idea and need a plan");
  const [budget, setBudget] = useState("Not sure yet");
  const [result, setResult] = useState<BriefResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  async function generateBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setCopied(false);
    try {
      const response = await fetch("/api/brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectType, goal, stage, budget }),
      });
      const data = (await response.json()) as { brief?: string; mode?: "ai" | "preview"; error?: string };
      if (!response.ok || !data.brief || !data.mode) {
        throw new Error(data.error || "The brief could not be generated. Please try again.");
      }
      setResult({ brief: data.brief, mode: data.mode });
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function copyBrief() {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result.brief);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setError("Clipboard access was blocked. Select the brief text and copy it manually.");
    }
  }

  return (
    <div className="brief-builder">
      <div className="brief-form-side">
        <div className="brief-title-row">
          <span className="brief-icon"><WandSparkles size={19} /></span>
          <div>
            <span className="eyebrow">A BETTER FIRST STEP</span>
            <h3>Give your idea a shape.</h3>
          </div>
        </div>
        <p className="brief-intro">A few thoughtful inputs. A clearer starting point for the first conversation.</p>
        <form className="brief-form" onSubmit={generateBrief}>
          <label>
            What are we building?
            <select value={projectType} onChange={(event) => setProjectType(event.target.value)}>
              <option>Business website</option>
              <option>SaaS / web application</option>
              <option>E-commerce experience</option>
              <option>AI feature or assistant</option>
              <option>Internal workflow tool</option>
              <option>Not sure yet</option>
            </select>
          </label>
          <label>
            What matters most?
            <select value={goal} onChange={(event) => setGoal(event.target.value)}>
              <option>Get more qualified enquiries</option>
              <option>Launch a new product</option>
              <option>Reduce repetitive work</option>
              <option>Improve an existing experience</option>
              <option>Validate an early-stage idea</option>
              <option>Connect tools and data</option>
            </select>
          </label>
          <label>
            Where are you right now?
            <select value={stage} onChange={(event) => setStage(event.target.value)}>
              <option>I have an idea and need a plan</option>
              <option>I have a rough design or brief</option>
              <option>I have an existing product to improve</option>
              <option>I am ready to build</option>
            </select>
          </label>
          <label>
            Approximate budget
            <select value={budget} onChange={(event) => setBudget(event.target.value)}>
              <option>Not sure yet</option>
              <option>Under ₹25,000</option>
              <option>₹25,000 – ₹75,000</option>
              <option>₹75,000 – ₹2,00,000</option>
              <option>₹2,00,000+</option>
            </select>
          </label>
          <button className="button button--primary brief-submit" type="submit" disabled={loading}>
            {loading ? <><LoaderCircle size={17} className="spin" /> Shaping your brief…</> : <>Build my starter brief <ArrowRight size={16} /></>}
          </button>
          <p className="brief-privacy"><span className="privacy-dot" /> No sign-up. Avoid entering confidential information.</p>
        </form>
      </div>

      <div className={`brief-output${result ? " brief-output--ready" : ""}`} aria-live="polite">
        <div className="output-topline">
          <span className="output-indicator"><span /> PROJECT_NOTES.TXT</span>
          {result ? (
            <span className={`mode-pill${result.mode === "ai" ? " mode-pill--ai" : ""}`}>
              {result.mode === "ai" ? <Sparkles size={12} /> : null}
              {result.mode === "ai" ? "AI assisted" : "Template preview"}
            </span>
          ) : <span className="output-number">RS / 001</span>}
        </div>
        {result ? (
          <>
            <div className="generated-brief">{result.brief}</div>
            <div className="output-actions">
              <span className="output-ready"><span /> READY TO REFINE</span>
              <button className="copy-button" type="button" onClick={copyBrief}>
                {copied ? <Check size={14} /> : <Copy size={14} />} {copied ? "Copied" : "Copy brief"}
              </button>
            </div>
          </>
        ) : (
          <div className="empty-output">
            <div className="output-orbit orbit-one" />
            <div className="output-orbit orbit-two" />
            <div className="output-center"><Sparkles size={22} /></div>
            <span className="empty-kicker">YOUR IDEA, WITH A LITTLE STRUCTURE</span>
            <p>Your starter brief will appear here.</p>
            <span className="empty-subtext">Scope · Goals · First useful release</span>
          </div>
        )}
        {error ? <p className="form-error brief-error">{error}</p> : null}
        <div className="output-footer"><span>HUMAN JUDGMENT INCLUDED</span><span className="output-footer-mark">R<span>.</span>S</span></div>
      </div>
    </div>
  );
}
