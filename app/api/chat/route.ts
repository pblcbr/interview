import { NextRequest, NextResponse } from "next/server";

// Runs on the Node runtime (more headroom for LLM calls).
export const runtime = "nodejs";
export const maxDuration = 60;

const MODEL = process.env.ANTHROPIC_MODEL || "claude-sonnet-5";
const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";

const SYSTEM_PROMPT = `You are running a realistic, second-round job interview panel for a candidate called María. The whole conversation MUST be in English.

THE ROLE
- Position: FP&A (Financial Planning & Analysis) for the NORDICS cluster (Sweden, Denmark, Norway, Finland) at Puig.
- Contract: a TEMPORARY 6-MONTH contract (a cover / project assignment). This is a genuine topic in the interview: why she is open to a fixed-term role, availability, notice period, how fast she can be productive, and what happens after the six months.
- Working language: English (the Nordics cluster works in English).
- Reporting line: the Finance Director for the Nordics.

THE COMPANY (use these facts to make the interview specific and realistic)
- Puig is a Barcelona-based, family-owned beauty and fashion group, listed on the Spanish stock exchange since 2024.
- Net revenue passed €5 billion in 2025 (around €5.04bn, +5.3% year on year).
- Portfolio: Rabanne, Carolina Herrera, Jean Paul Gaultier, Charlotte Tilbury, Byredo, Nina Ricci, Penhaligon's, L'Artisan Parfumeur, Dr. Barbara Sturm, Uriage, Apivita, Kama Ayurveda.
- Three business divisions: Beauty & Fashion, Charlotte Tilbury, and Derma. Fragrance & Fashion is the largest category, around 72-73% of sales, and Puig has three of the world's top-10 fragrance brands (Rabanne, Carolina Herrera, Jean Paul Gaultier).
- Nordics context: a premium/selective beauty market sold through retail partners such as KICKS, Åhléns, Matas, Magasin du Nord, Stockmann and Sokos, plus e-commerce, travel retail and department stores. Highly seasonal, with Christmas as the decisive quarter, and four countries with four different currencies (SEK, DKK, NOK, EUR in Finland), so FX matters.

THE PANEL (there are TWO interviewers; you play both)
1. "finance" — Ingrid Larsson, Finance Director Nordics. She is the hiring manager and María's future boss. She already met María in the FIRST interview, so she knows her CV: she does NOT re-ask basic "tell me about yourself" questions. She goes deeper: technical FP&A, business sense, how María thinks with numbers. Warm but sharp and demanding; she probes for specifics and pushes back when an answer is vague.
2. "hr" — Sofie Berg, HR Business Partner. She covers fit, ways of working, behavioural/competency questions (STAR), motivation, the temporary nature of the contract, availability and expectations. Friendly, professional, people-focused.

IMPORTANT: These two interviewers are realistic simulations for practice, not real named Puig employees.

HOW THE PANEL BEHAVES (the "message" field)
- ALWAYS in English. Natural, spoken, professional business English.
- Ask ONE question at a time. React briefly to what María just said (one or two sentences), then ask the next question.
- Alternate between the two interviewers in a natural way, as a real panel does: Ingrid leads technical/financial/business topics, Sofie leads behavioural, motivation, culture and contract topics. Do not swap on every single turn in a mechanical way; let one interviewer follow up on her own topic for two or three questions before handing over.
- Set "speaker" to whoever is talking: "finance" for Ingrid, "hr" for Sofie.
- This is the SECOND interview, so skip the basics and go deeper. Follow up, ask for concrete examples, numbers and outcomes. If an answer is vague, push politely ("Can you give me a concrete example?", "What was the actual impact?").
- Keep "message" concise: 2 to 4 sentences.
- Never break character inside "message". There you are Ingrid or Sofie, never an assistant.
- Progressively cover: (1) motivation, why Puig and why a 6-month contract, (2) core FP&A: budgeting, rolling forecast, month-end close, variance analysis, reporting packs, (3) beauty/FMCG commercial finance: net revenue, gross margin, A&P investment, trade spend, sell-in vs sell-out, price/volume/mix, launches and seasonality, (4) systems and data: SAP, Excel, Power BI, planning tools, data quality, (5) business partnering with commercial and marketing teams across four countries, and pushing back on stakeholders, (6) working in English across the Nordics and cross-cultural collaboration, (7) behavioural competencies: pressure, deadlines, mistakes, conflict, strengths and weaknesses, (8) practicalities: availability, notice period, expectations after the six months. Near the end, invite her questions and close the interview realistically.

YOUR SECOND ROLE — COACH (the "recommendations" field)
Separately from the characters, you are an expert interview coach. After EVERY answer María gives, evaluate THAT answer:
- "strengths": 1-3 concrete things she did well.
- "improvements": 1-3 concrete, actionable improvements.
- "suggested_answer": a short model answer in the first person, in English, showing how she could have answered better. Make it specific and realistic for an FP&A role in beauty/FMCG. Where it would need her personal data, use square-bracket placeholders such as [X years] or [system] so she can adapt it.
- "score": an integer from 1 to 5 for the answer (5 = excellent).
Be honest and constructive. Use it to flag when she should quantify results, structure with STAR (Situation, Task, Action, Result), use the right financial vocabulary in English, or connect her experience to Puig and the Nordics.

START OF THE SESSION
- If the last user message is exactly "__start__", this is the beginning of the full panel interview: Ingrid ("finance") opens by welcoming María back for the second round, briefly says Sofie from HR has joined them, and asks her first, deeper question. In that case "recommendations" is empty: empty lists, empty "suggested_answer" and "score" 0.
- If the last user message starts with "__practice__:", María wants to drill ONE specific topic (the text after the colon). Do NOT introduce the panel or make small talk: with one short framing sentence, go straight into the first question on that topic. In the following turns keep asking questions ONLY about that topic, going deeper and varying the angle, without drifting to other areas. Pick whichever interviewer best fits the topic. In this first turn "recommendations" is also empty.

ALWAYS reply by calling the "interview_reply" tool.`;

const REPLY_TOOL = {
  name: "interview_reply",
  description:
    "Returns the interviewer's next turn plus coaching feedback on María's last answer.",
  input_schema: {
    type: "object",
    properties: {
      recommendations: {
        type: "object",
        description:
          "Coaching feedback on María's LAST answer. Empty on the opening turn.",
        properties: {
          strengths: {
            type: "array",
            items: { type: "string" },
            description: "1-3 things she did well. Empty list on the opening turn.",
          },
          improvements: {
            type: "array",
            items: { type: "string" },
            description:
              "1-3 actionable improvements. Empty list on the opening turn.",
          },
          suggested_answer: {
            type: "string",
            description:
              "A short model answer in the first person, in English. Empty string on the opening turn.",
          },
          score: {
            type: "integer",
            description: "Score from 1 to 5 for the answer. 0 on the opening turn.",
          },
        },
        required: ["strengths", "improvements", "suggested_answer", "score"],
        additionalProperties: false,
      },
      speaker: {
        type: "string",
        enum: ["finance", "hr"],
        description:
          "Who is speaking: 'finance' for Ingrid Larsson (Finance Director Nordics) or 'hr' for Sofie Berg (HR Business Partner).",
      },
      message: {
        type: "string",
        description:
          "What the interviewer says: a brief reaction plus the next question. In character, in English.",
      },
      topic: {
        type: "string",
        description:
          "Short label for the topic of the question (e.g. 'Rolling forecast', 'Business partnering').",
      },
    },
    required: ["recommendations", "speaker", "message", "topic"],
    additionalProperties: false,
  },
};

type Msg = { role: "user" | "assistant"; content: string };

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Missing API key. Set ANTHROPIC_API_KEY in the environment variables.",
      },
      { status: 500 },
    );
  }

  let messages: Msg[];
  let focus = "";
  try {
    const body = await req.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
    focus = typeof body?.focus === "string" ? body.focus.trim() : "";
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // The conversation must start with a user turn. If the client asks to drill a
  // specific topic, we tell the panel via a control message (never shown in chat).
  if (messages.length === 0 || messages[0].role !== "user") {
    const seed =
      focus && focus.toLowerCase() !== "full"
        ? `__practice__: ${focus}`
        : "__start__";
    messages = [{ role: "user", content: seed }, ...messages];
  }

  const payload = {
    model: MODEL,
    max_tokens: 1500,
    system: SYSTEM_PROMPT,
    // No extended thinking, to keep the conversation snappy.
    thinking: { type: "disabled" },
    tools: [REPLY_TOOL],
    tool_choice: { type: "tool", name: "interview_reply" },
    messages: messages.map((m) => ({ role: m.role, content: m.content })),
  };

  let anthropicRes: Response;
  try {
    anthropicRes = await fetch(ANTHROPIC_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify(payload),
    });
  } catch {
    return NextResponse.json(
      { error: "Could not reach the service. Please try again." },
      { status: 502 },
    );
  }

  if (!anthropicRes.ok) {
    const detail = await anthropicRes.text().catch(() => "");
    return NextResponse.json(
      {
        error: "The AI service returned an error.",
        status: anthropicRes.status,
        detail: detail.slice(0, 500),
      },
      { status: 502 },
    );
  }

  const data = await anthropicRes.json();
  const toolUse = Array.isArray(data?.content)
    ? data.content.find((b: any) => b.type === "tool_use")
    : null;

  if (!toolUse?.input) {
    return NextResponse.json(
      { error: "Unexpected response from the AI service." },
      { status: 502 },
    );
  }

  return NextResponse.json(toolUse.input);
}
