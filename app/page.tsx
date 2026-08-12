"use client";

import { useEffect, useRef, useState } from "react";
import { BANK, BANK_TOTAL } from "./questions";

type Reco = {
  strengths: string[];
  improvements: string[];
  suggested_answer: string;
  score: number;
};

type Speaker = "finance" | "hr";

type ApiResponse = {
  recommendations: Reco;
  speaker: Speaker;
  message: string;
  topic: string;
  error?: string;
};

type ApiMsg = { role: "user" | "assistant"; content: string };

type Item =
  | { kind: "panel"; text: string; topic: string; speaker: Speaker }
  | { kind: "candidate"; text: string }
  | { kind: "reco"; data: Reco }
  | { kind: "error"; text: string };

type Stage = { id: string; label: string; desc: string; focus: string };

const PANEL: Record<Speaker, { name: string; role: string; initials: string }> = {
  finance: {
    name: "Ingrid Larsson",
    role: "Finance Director, Nordics",
    initials: "IL",
  },
  hr: {
    name: "Sofie Berg",
    role: "HR Business Partner",
    initials: "SB",
  },
};

const STAGES: Stage[] = [
  {
    id: "full",
    label: "Full interview",
    desc: "Complete second-round panel",
    focus: "full",
  },
  {
    id: "motivation",
    label: "Motivation & contract",
    desc: "Why Puig, why 6 months",
    focus:
      "Motivation and fit: why Puig, why this FP&A role for the Nordics, why she is open to a six-month temporary contract, availability and notice period",
  },
  {
    id: "core",
    label: "Budget, forecast & close",
    desc: "Cycles, variance, reporting",
    focus:
      "Core FP&A technical work: the budget cycle, rolling forecast, month-end close, variance analysis, P&L bridges and reporting packs",
  },
  {
    id: "beauty",
    label: "Beauty & FMCG finance",
    desc: "Net revenue, A&P, sell-out",
    focus:
      "Commercial finance in beauty and FMCG: gross to net revenue and trade terms, gross margin, A&P investment effectiveness, sell-in versus sell-out, price/volume/mix, product launches and Christmas seasonality",
  },
  {
    id: "systems",
    label: "Systems & data",
    desc: "SAP, Excel, Power BI",
    focus:
      "Systems and data skills: SAP or other ERP, advanced Excel and modelling, Power BI or similar reporting tools, automation and data quality",
  },
  {
    id: "partnering",
    label: "Business partnering",
    desc: "Stakeholders, 4 markets",
    focus:
      "Business partnering and stakeholder management: working with commercial and marketing teams across Sweden, Denmark, Norway and Finland, explaining finance to non-financial people, and challenging or pushing back on senior stakeholders",
  },
  {
    id: "behavioural",
    label: "Behavioural (HR)",
    desc: "STAR, pressure, teamwork",
    focus:
      "Behavioural and competency questions led by HR, using the STAR format: working under pressure and tight deadlines, mistakes, prioritisation, conflict with colleagues, strengths and weaknesses, and working in English across cultures",
  },
  {
    id: "closing",
    label: "Closing",
    desc: "Your questions, next steps",
    focus:
      "The closing part of the interview: the questions María asks the panel, expectations after the six months, salary expectations and next steps",
  },
];

function hasReco(r: Reco | undefined | null): boolean {
  if (!r) return false;
  return (
    (r.strengths?.length ?? 0) > 0 ||
    (r.improvements?.length ?? 0) > 0 ||
    (r.suggested_answer?.trim()?.length ?? 0) > 0
  );
}

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [view, setView] = useState<"interview" | "bank">("interview");

  const apiMessages = useRef<ApiMsg[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const taRef = useRef<HTMLTextAreaElement>(null);

  const started = activeId !== null;
  const activeStage = STAGES.find((s) => s.id === activeId) || null;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [items, loading]);

  async function callApi(messages: ApiMsg[], focus: string): Promise<ApiResponse> {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ messages, focus }),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data?.error || "Something went wrong.");
    }
    return data as ApiResponse;
  }

  async function start(stage: Stage) {
    if (loading) return;
    setActiveId(stage.id);
    setLoading(true);
    apiMessages.current = [];
    setItems([]);
    try {
      const data = await callApi([], stage.focus);
      apiMessages.current.push({ role: "assistant", content: data.message });
      setItems([
        {
          kind: "panel",
          text: data.message,
          topic: data.topic,
          speaker: data.speaker === "hr" ? "hr" : "finance",
        },
      ]);
    } catch (e: any) {
      setItems([{ kind: "error", text: e.message }]);
    } finally {
      setLoading(false);
    }
  }

  async function send() {
    const text = input.trim();
    if (!text || loading || !activeStage) return;

    setInput("");
    if (taRef.current) taRef.current.style.height = "auto";

    setItems((prev) => [...prev, { kind: "candidate", text }]);
    apiMessages.current.push({ role: "user", content: text });
    setLoading(true);

    try {
      const data = await callApi(apiMessages.current, activeStage.focus);
      apiMessages.current.push({ role: "assistant", content: data.message });
      setItems((prev) => {
        const next: Item[] = [...prev];
        if (hasReco(data.recommendations)) {
          next.push({ kind: "reco", data: data.recommendations });
        }
        next.push({
          kind: "panel",
          text: data.message,
          topic: data.topic,
          speaker: data.speaker === "hr" ? "hr" : "finance",
        });
        return next;
      });
    } catch (e: any) {
      apiMessages.current.pop();
      setItems((prev) => [...prev, { kind: "error", text: e.message }]);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  function autoGrow(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInput(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 160) + "px";
  }

  return (
    <main className="app">
      <header className="topbar">
        <div className="brand">
          <span className="dot" />
          <div>
            <h1>Puig · FP&amp;A Nordics</h1>
            <p>
              {view === "bank"
                ? `Question bank · ${BANK_TOTAL} model answers`
                : activeStage
                  ? activeStage.id === "full"
                    ? "Second interview · Finance Director + HR"
                    : `Practising: ${activeStage.label}`
                  : "Interview practice · 6-month contract"}
            </p>
          </div>
        </div>
        {view === "interview" && started && (
          <button
            className="restart"
            onClick={() => activeStage && start(activeStage)}
            disabled={loading}
          >
            Restart
          </button>
        )}
      </header>

      <div className="body">
        <aside className="sidebar">
          <div className="view-switch">
            <button
              className={view === "interview" ? "active" : ""}
              onClick={() => setView("interview")}
            >
              🎙️ Interview
            </button>
            <button
              className={view === "bank" ? "active" : ""}
              onClick={() => setView("bank")}
            >
              📚 {BANK_TOTAL} questions
            </button>
          </div>

          {view === "interview" && (
            <>
              <div className="sidebar-title">Practise a stage</div>
              <nav className="sidebar-nav">
                {STAGES.map((s) => (
                  <button
                    key={s.id}
                    className={
                      "sidebar-item" +
                      (s.id === activeId ? " active" : "") +
                      (s.id === "full" ? " full" : "")
                    }
                    onClick={() => start(s)}
                    disabled={loading}
                  >
                    <span className="si-label">{s.label}</span>
                    <span className="si-desc">{s.desc}</span>
                  </button>
                ))}
              </nav>
              <p className="sidebar-note">
                Jump straight into any stage. Switching stage starts that
                practice from scratch.
              </p>
            </>
          )}
        </aside>

        <section className="content">
          {view === "bank" ? (
            <Bank />
          ) : !started ? (
            <div className="welcome">
              <div className="welcome-card">
                <h2>Ready to practise, María?</h2>
                <p>
                  This is your <strong>second interview</strong> for the{" "}
                  <strong>FP&amp;A role covering the Nordics</strong> at{" "}
                  <strong>Puig</strong> — a 6-month contract. On the panel:{" "}
                  <strong>Ingrid Larsson</strong> (Finance Director, Nordics) and{" "}
                  <strong>Sofie Berg</strong> (HR Business Partner).
                </p>
                <p className="muted">
                  The whole interview runs in English. Start the full panel
                  interview, or pick a single stage from the menu to drill it
                  directly. After every answer you get a{" "}
                  <strong>coaching block</strong> with feedback and a model
                  answer.
                </p>
                <button
                  className="cta"
                  onClick={() => start(STAGES[0])}
                  disabled={loading}
                >
                  Start the full interview
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="chat" ref={scrollRef}>
                <div className="chat-inner">
                  {items.map((item, i) => (
                    <ItemView key={i} item={item} />
                  ))}
                  {loading && <Typing />}
                </div>
              </div>

              <div className="composer">
                <div className="composer-inner">
                  <textarea
                    ref={taRef}
                    value={input}
                    onChange={autoGrow}
                    onKeyDown={onKeyDown}
                    placeholder="Type your answer…"
                    rows={1}
                    disabled={loading}
                  />
                  <button
                    className="send"
                    onClick={send}
                    disabled={loading || !input.trim()}
                    aria-label="Send"
                  >
                    Send
                  </button>
                </div>
                <p className="hint">Enter to send · Shift + Enter for a new line</p>
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
}

function ItemView({ item }: { item: Item }) {
  if (item.kind === "panel") {
    const who = PANEL[item.speaker];
    return (
      <div className="row left">
        <div className={"avatar " + item.speaker}>{who.initials}</div>
        <div className="bubble panel">
          <div className="who">
            <span className="who-name">{who.name}</span>
            <span className="who-role">{who.role}</span>
          </div>
          {item.topic && <span className="topic">{item.topic}</span>}
          <p>{item.text}</p>
        </div>
      </div>
    );
  }
  if (item.kind === "candidate") {
    return (
      <div className="row right">
        <div className="bubble candidate">
          <p>{item.text}</p>
        </div>
      </div>
    );
  }
  if (item.kind === "error") {
    return (
      <div className="row left">
        <div className="bubble error">
          <p>{item.text}</p>
        </div>
      </div>
    );
  }
  return <RecoCard data={item.data} />;
}

function RecoCard({ data }: { data: Reco }) {
  return (
    <div className="reco">
      <div className="reco-head">
        <span className="reco-title">📋 Coaching</span>
        {data.score > 0 && <Stars value={data.score} />}
      </div>
      {data.strengths?.length > 0 && (
        <div className="reco-block">
          <h4 className="ok">What worked well</h4>
          <ul>
            {data.strengths.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
      )}
      {data.improvements?.length > 0 && (
        <div className="reco-block">
          <h4 className="warn">What to improve</h4>
          <ul>
            {data.improvements.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
      )}
      {data.suggested_answer?.trim() && (
        <div className="reco-block">
          <h4 className="tip">A stronger way to say it</h4>
          <blockquote>{data.suggested_answer}</blockquote>
        </div>
      )}
    </div>
  );
}

function Stars({ value }: { value: number }) {
  const full = Math.max(0, Math.min(5, value));
  return (
    <span className="stars" title={`${full}/5`}>
      {"★".repeat(full)}
      <span className="stars-empty">{"★".repeat(5 - full)}</span>
    </span>
  );
}

function Bank() {
  let n = 0;
  return (
    <div className="banco">
      <div className="banco-inner">
        <div className="banco-head">
          <h2>Question bank</h2>
          <p>
            {BANK_TOTAL} likely interview questions with a model answer for each
            one. Tap a question to reveal the answer — use it as a guide and say
            it in your own words. Text in [brackets] is where you plug in your
            own experience.
          </p>
        </div>
        {BANK.map((cat) => (
          <div key={cat.title}>
            <div className="banco-cat">{cat.title}</div>
            {cat.questions.map((qa) => {
              n += 1;
              const num = n;
              return (
                <details className="qa" key={num}>
                  <summary>
                    <span className="qnum">{num}.</span>
                    <span>{qa.q}</span>
                    <span className="chev">›</span>
                  </summary>
                  <div className="answer">
                    <div className="lbl">Model answer</div>
                    <blockquote>{qa.a}</blockquote>
                  </div>
                </details>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

function Typing() {
  return (
    <div className="row left">
      <div className="avatar finance">··</div>
      <div className="bubble panel typing">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
