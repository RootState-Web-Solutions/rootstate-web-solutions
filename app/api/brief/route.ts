import { NextResponse } from "next/server";

export const runtime = "nodejs";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 8;
const globalForLimit = globalThis as typeof globalThis & { __rootstateBriefLimit?: Map<string, number[]> };
const requestLog = globalForLimit.__rootstateBriefLimit ?? new Map<string, number[]>();
globalForLimit.__rootstateBriefLimit = requestLog;

const allowed = {
  projectType: ["Business website", "SaaS / web application", "E-commerce experience", "AI feature or assistant", "Internal workflow tool", "Not sure yet"],
  goal: ["Get more qualified enquiries", "Launch a new product", "Reduce repetitive work", "Improve an existing experience", "Validate an early-stage idea", "Connect tools and data"],
  stage: ["I have an idea and need a plan", "I have a rough design or brief", "I have an existing product to improve", "I am ready to build"],
  budget: ["Not sure yet", "Under ₹25,000", "₹25,000 – ₹75,000", "₹75,000 – ₹2,00,000", "₹2,00,000+"],
} as const;

type BriefInput = { projectType: string; goal: string; stage: string; budget: string };

function fallbackBrief({ projectType, goal, stage, budget }: BriefInput) {
  const deliverable = projectType === "Not sure yet" ? "a focused digital solution" : `a ${projectType.toLowerCase()}`;
  const nextStep = stage === "I have an existing product to improve"
    ? "Review the current experience, identify the highest-friction moments, and prioritise improvements."
    : stage === "I am ready to build"
      ? "Confirm the must-have scope, content and integrations, then agree on milestones for the first release."
      : stage === "I have a rough design or brief"
        ? "Review the existing brief, close the biggest gaps, and turn it into a build-ready scope."
        : "Run a short discovery session to clarify the audience, core problem, success measure and smallest useful release.";
  return [
    "PROJECT STARTER BRIEF",
    "",
    `Direction: Explore ${deliverable} with a clear, accessible interface and a maintainable technical foundation.`,
    `Primary outcome: ${goal}. Define one measurable signal of success before implementation begins.`,
    `Current stage: ${stage}.`,
    `Budget signal: ${budget}. Treat this as an initial range, then validate scope and dependencies before quoting.`,
    "",
    "RECOMMENDED FIRST STEPS",
    `1. ${nextStep}`,
    "2. Map the key user journey and define the minimum features required for launch.",
    "3. Identify content, data, integrations, privacy and accessibility requirements early.",
    "4. Deliver in small milestones, validate with real users, and improve from evidence.",
    "",
    "OPEN QUESTIONS",
    "• Who is the primary user, and what are they trying to accomplish?",
    "• What would make the first release an obvious success?",
    "• Are there existing systems, content or constraints we need to work around?",
  ].join("\n");
}

function isAllowed(key: keyof typeof allowed, value: unknown): value is string {
  return typeof value === "string" && (allowed[key] as readonly string[]).includes(value);
}

function getClientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || request.headers.get("x-real-ip") || "unknown";
}

export async function POST(request: Request) {
  const now = Date.now();
  const clientKey = getClientKey(request);
  const recent = (requestLog.get(clientKey) ?? []).filter((timestamp) => now - timestamp < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    return NextResponse.json({ error: "Too many brief requests. Please try again in a few minutes." }, { status: 429 });
  }
  recent.push(now);
  requestLog.set(clientKey, recent);

  let body: Partial<BriefInput>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Please send a valid project brief request." }, { status: 400 });
  }

  if (!isAllowed("projectType", body.projectType) || !isAllowed("goal", body.goal) || !isAllowed("stage", body.stage) || !isAllowed("budget", body.budget)) {
    return NextResponse.json({ error: "Please choose a valid option in each field." }, { status: 400 });
  }

  const input: BriefInput = {
    projectType: body.projectType,
    goal: body.goal,
    stage: body.stage,
    budget: body.budget,
  };
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ brief: fallbackBrief(input), mode: "preview" as const });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
        temperature: 0.55,
        max_tokens: 650,
        messages: [
          {
            role: "system",
            content: "You are RootState Web Solutions' pragmatic digital product strategist. Write a concise, useful project starter brief in plain text, 180-280 words maximum. Include a one-sentence direction, desired outcome, sensible first-release scope, suggested milestones, risks/dependencies to clarify, and three discovery questions. Be honest about uncertainty, do not invent facts or promise results, do not provide a price quote. Tone: clear, optimistic, human, technically literate. Do not use markdown tables.",
          },
          {
            role: "user",
            content: `Create a starter brief using these selected project details:\nProject type: ${input.projectType}\nMain goal: ${input.goal}\nCurrent stage: ${input.stage}\nApproximate budget: ${input.budget}\n\nTreat these as early signals, not confirmed requirements.`,
          },
        ],
      }),
      cache: "no-store",
    });

    const result = await response.json() as {
      choices?: { message?: { content?: string | null } }[];
      error?: { message?: string };
    };
    if (!response.ok) {
      return NextResponse.json({ error: "Live AI generation is temporarily unavailable. Please try again shortly." }, { status: 502 });
    }
    const brief = result.choices?.[0]?.message?.content?.trim();
    if (!brief) {
      return NextResponse.json({ error: "The AI returned an empty brief. Please try again." }, { status: 502 });
    }
    return NextResponse.json({ brief, mode: "ai" as const });
  } catch {
    return NextResponse.json({ error: "Live AI generation is temporarily unavailable. Please try again shortly." }, { status: 502 });
  }
}
