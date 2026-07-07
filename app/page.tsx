"use client";

import { useEffect, useRef, useState } from "react";
import { BANCO, BANCO_TOTAL } from "./preguntas";

type Reco = {
  puntos_fuertes: string[];
  a_mejorar: string[];
  respuesta_sugerida: string;
  valoracion: number;
};

type ApiResponse = {
  recomendaciones: Reco;
  mensaje: string;
  tema: string;
  error?: string;
};

type ApiMsg = { role: "user" | "assistant"; content: string };

type Item =
  | { kind: "marta"; text: string; tema: string }
  | { kind: "candidata"; text: string }
  | { kind: "reco"; data: Reco }
  | { kind: "error"; text: string };

type Bloque = { id: string; label: string; desc: string; focus: string };

const BLOQUES: Bloque[] = [
  {
    id: "completa",
    label: "Entrevista completa",
    desc: "De principio a fin",
    focus: "completa",
  },
  {
    id: "motivacion",
    label: "Presentación y motivación",
    desc: "Trayectoria y por qué Eskisit",
    focus:
      "Presentación y motivación: su trayectoria en eventos y por qué quiere entrar en Eskisit y en el catering de bodas",
  },
  {
    id: "experiencia",
    label: "Experiencia y encaje",
    desc: "Wedding planning, hoteles, base jurídica",
    focus:
      "Cómo traslada su experiencia (wedding planning, hotelería, eventos corporativos) y su base jurídica al puesto de Event Manager en un catering de bodas",
  },
  {
    id: "operativa",
    label: "Logística y operativa",
    desc: "Proveedores, timings, cocina y sala",
    focus:
      "Logística y operativa del evento: gestión de proveedores, timings del día de la boda, montaje y desmontaje, y coordinación del equipo de cocina y sala el día del evento",
  },
  {
    id: "presupuestos",
    label: "Presupuestos y food cost",
    desc: "Márgenes por cubierto, cotizaciones",
    focus:
      "Presupuestos, food cost y márgenes por cubierto, y elaboración de cotizaciones y propuestas para bodas y eventos",
  },
  {
    id: "imprevistos",
    label: "Imprevistos y crisis",
    desc: "Preguntas «¿qué harías si…?»",
    focus:
      "Gestión de imprevistos y situaciones de crisis, con preguntas situacionales del tipo «¿qué harías si…?» (lluvia en un evento al aire libre, una alergia grave no comunicada, un proveedor que falla el mismo día, invitados de más, una novia muy nerviosa)",
  },
  {
    id: "cliente",
    label: "Trato con cliente y venta",
    desc: "Degustaciones, cerrar presupuesto",
    focus:
      "Trato exquisito con el cliente y venta consultiva: llevar una degustación, presentar y cerrar un presupuesto, y fidelizar al cliente",
  },
  {
    id: "internacional",
    label: "Destination weddings",
    desc: "Clientes internacionales, inglés",
    focus:
      "Destination weddings y clientes internacionales, incluyendo el uso del inglés y las particularidades de bodas con invitados de fuera",
  },
  {
    id: "encaje",
    label: "Fortalezas y encaje",
    desc: "Puntos fuertes/débiles, equipo",
    focus:
      "Fortalezas y debilidades, trabajo bajo presión y en fines de semana y temporada alta, y encaje en un equipo familiar como Eskisit",
  },
];

function recoTieneContenido(r: Reco | undefined | null): boolean {
  if (!r) return false;
  return (
    (r.puntos_fuertes?.length ?? 0) > 0 ||
    (r.a_mejorar?.length ?? 0) > 0 ||
    (r.respuesta_sugerida?.trim()?.length ?? 0) > 0
  );
}

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [view, setView] = useState<"entrevista" | "banco">("entrevista");

  const apiMessages = useRef<ApiMsg[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const taRef = useRef<HTMLTextAreaElement>(null);

  const started = activeId !== null;
  const activeBloque = BLOQUES.find((b) => b.id === activeId) || null;

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
      throw new Error(data?.error || "Ha ocurrido un error.");
    }
    return data as ApiResponse;
  }

  async function empezar(bloque: Bloque) {
    if (loading) return;
    setActiveId(bloque.id);
    setLoading(true);
    apiMessages.current = [];
    setItems([]);
    try {
      const data = await callApi([], bloque.focus);
      apiMessages.current.push({ role: "assistant", content: data.mensaje });
      setItems([{ kind: "marta", text: data.mensaje, tema: data.tema }]);
    } catch (e: any) {
      setItems([{ kind: "error", text: e.message }]);
    } finally {
      setLoading(false);
    }
  }

  async function enviar() {
    const texto = input.trim();
    if (!texto || loading || !activeBloque) return;

    setInput("");
    if (taRef.current) taRef.current.style.height = "auto";

    setItems((prev) => [...prev, { kind: "candidata", text: texto }]);
    apiMessages.current.push({ role: "user", content: texto });
    setLoading(true);

    try {
      const data = await callApi(apiMessages.current, activeBloque.focus);
      apiMessages.current.push({ role: "assistant", content: data.mensaje });
      setItems((prev) => {
        const next: Item[] = [...prev];
        if (recoTieneContenido(data.recomendaciones)) {
          next.push({ kind: "reco", data: data.recomendaciones });
        }
        next.push({ kind: "marta", text: data.mensaje, tema: data.tema });
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
      enviar();
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
            <h1>Eskisit Catering · Sitges</h1>
            <p>
              {view === "banco"
                ? `Banco de ${BANCO_TOTAL} preguntas · respuestas modelo`
                : activeBloque
                  ? activeBloque.id === "completa"
                    ? "Entrevista completa"
                    : `Practicando: ${activeBloque.label}`
                  : "Entrevista de práctica · Event Manager"}
            </p>
          </div>
        </div>
        {view === "entrevista" && started && (
          <button
            className="restart"
            onClick={() => activeBloque && empezar(activeBloque)}
            disabled={loading}
          >
            Reiniciar
          </button>
        )}
      </header>

      <div className="body">
        <aside className="sidebar">
          <div className="view-switch">
            <button
              className={view === "entrevista" ? "active" : ""}
              onClick={() => setView("entrevista")}
            >
              🎙️ Entrevista
            </button>
            <button
              className={view === "banco" ? "active" : ""}
              onClick={() => setView("banco")}
            >
              📚 30 preguntas
            </button>
          </div>

          {view === "entrevista" && (
            <>
              <div className="sidebar-title">Practicar</div>
              <nav className="sidebar-nav">
                {BLOQUES.map((b) => (
                  <button
                    key={b.id}
                    className={
                      "sidebar-item" +
                      (b.id === activeId ? " active" : "") +
                      (b.id === "completa" ? " full" : "")
                    }
                    onClick={() => empezar(b)}
                    disabled={loading}
                  >
                    <span className="si-label">{b.label}</span>
                    <span className="si-desc">{b.desc}</span>
                  </button>
                ))}
              </nav>
              <p className="sidebar-note">
                Elige una parte para ensayarla directamente. Cambiar de sección
                empieza esa práctica de cero.
              </p>
            </>
          )}
        </aside>

        <section className="content">
          {view === "banco" ? (
            <Banco />
          ) : !started ? (
            <div className="welcome">
              <div className="welcome-card">
                <h2>¿Lista para practicar, Josune?</h2>
                <p>
                  Entrevista simulada con <strong>Cristina</strong>, CEO de{" "}
                  <strong>Eskisit Catering</strong> (Sitges) y responsable de
                  eventos y bodas, para el puesto de{" "}
                  <strong>Event Manager</strong>.
                </p>
                <p className="muted">
                  Empieza la <strong>entrevista completa</strong>, o elige en el
                  menú una <strong>parte concreta</strong> para ensayarla directa
                  (proveedores, imprevistos, presupuestos, venta…). Tras cada
                  respuesta verás un bloque de <strong>recomendaciones</strong>.
                </p>
                <button
                  className="cta"
                  onClick={() => empezar(BLOQUES[0])}
                  disabled={loading}
                >
                  Empezar la entrevista completa
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
                    placeholder="Escribe tu respuesta…"
                    rows={1}
                    disabled={loading}
                  />
                  <button
                    className="send"
                    onClick={enviar}
                    disabled={loading || !input.trim()}
                    aria-label="Enviar"
                  >
                    Enviar
                  </button>
                </div>
                <p className="hint">
                  Enter para enviar · Shift + Enter para salto de línea
                </p>
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
}

function Banco() {
  let n = 0;
  return (
    <div className="banco">
      <div className="banco-inner">
        <div className="banco-head">
          <h2>Banco de preguntas</h2>
          <p>
            {BANCO_TOTAL} preguntas frecuentes con una respuesta recomendada.
            Toca cada una para ver la respuesta modelo — úsala como guía y dila
            con tus palabras.
          </p>
        </div>
        {BANCO.map((cat) => (
          <div key={cat.titulo}>
            <div className="banco-cat">{cat.titulo}</div>
            {cat.preguntas.map((qa) => {
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
                    <div className="lbl">Respuesta recomendada</div>
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

function ItemView({ item }: { item: Item }) {
  if (item.kind === "marta") {
    return (
      <div className="row left">
        <div className="avatar">C</div>
        <div className="bubble marta">
          {item.tema && <span className="tema">{item.tema}</span>}
          <p>{item.text}</p>
        </div>
      </div>
    );
  }
  if (item.kind === "candidata") {
    return (
      <div className="row right">
        <div className="bubble candidata">
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
        <span className="reco-title">📋 Recomendaciones</span>
        {data.valoracion > 0 && <Stars value={data.valoracion} />}
      </div>
      {data.puntos_fuertes?.length > 0 && (
        <div className="reco-block">
          <h4 className="ok">Lo que has hecho bien</h4>
          <ul>
            {data.puntos_fuertes.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
      )}
      {data.a_mejorar?.length > 0 && (
        <div className="reco-block">
          <h4 className="warn">A mejorar</h4>
          <ul>
            {data.a_mejorar.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
      )}
      {data.respuesta_sugerida?.trim() && (
        <div className="reco-block">
          <h4 className="tip">Cómo podrías decirlo</h4>
          <blockquote>{data.respuesta_sugerida}</blockquote>
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

function Typing() {
  return (
    <div className="row left">
      <div className="avatar">C</div>
      <div className="bubble marta typing">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
