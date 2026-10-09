import { ImageResponse } from "next/og";

export const alt = "RootState Web Solutions — Digital, with a human signal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#080a09", color: "#f0f3ed", padding: "68px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.28, backgroundImage: "linear-gradient(rgba(155,199,144,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(155,199,144,.08) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
        <div style={{ position: "absolute", right: "-40px", top: "-140px", width: "650px", height: "650px", borderRadius: "50%", border: "1px solid rgba(166,246,111,.36)", boxShadow: "0 0 0 28px rgba(166,246,111,.025), 0 0 0 68px rgba(166,246,111,.02), 0 0 120px rgba(166,246,111,.11)" }} />
        <div style={{ display: "flex", alignItems: "center", gap: "15px", position: "relative" }}>
          <div style={{ width: "45px", height: "45px", borderRadius: "12px", border: "1px solid rgba(166,246,111,.5)", display: "flex", alignItems: "center", justifyContent: "center", gap: "4px", background: "rgba(166,246,111,.07)" }}><div style={{ width: "4px", height: "19px", background: "#a6f66f", borderRadius: "4px" }} /><div style={{ width: "4px", height: "28px", background: "#a6f66f", borderRadius: "4px" }} /><div style={{ width: "4px", height: "13px", background: "#a6f66f", borderRadius: "4px" }} /></div>
          <div style={{ fontSize: "28px", fontWeight: 600, letterSpacing: "-1.5px" }}>rootstate<span style={{ color: "#a6f66f" }}>.</span></div>
          <div style={{ marginLeft: "5px", fontSize: "12px", color: "#9ba49b", letterSpacing: "3px" }}>WEB SOLUTIONS</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", position: "relative", maxWidth: "830px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "13px", color: "#a6f66f", letterSpacing: "3px", marginBottom: "25px" }}><div style={{ width: "7px", height: "7px", background: "#a6f66f", borderRadius: "50%" }} /> DIGITAL STUDIO / HUMAN BY DESIGN</div>
          <div style={{ fontSize: "76px", fontWeight: 500, lineHeight: 1.02, letterSpacing: "-5px" }}>Digital that thinks ahead.</div>
          <div style={{ fontSize: "76px", fontWeight: 450, lineHeight: 1.08, letterSpacing: "-5px", color: "#a6f66f", fontStyle: "italic" }}>Human by design.</div>
        </div>
        <div style={{ position: "relative", display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,.15)", paddingTop: "20px", color: "#9ba49b", fontSize: "13px", letterSpacing: "2px" }}><div>WEBSITES · PRODUCTS · PRACTICAL AI</div><div>ROOTSTATE.TECH</div></div>
      </div>
    ),
    { ...size },
  );
}
