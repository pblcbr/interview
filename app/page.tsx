"use client";

import { useEffect, useRef, useState } from "react";

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
  const [started, setStarted] = useState(false);

  const apiMessages = useRef<ApiMsg[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const taRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [items, loading]);

  async function callApi(messages: ApiMsg[]): Promise<ApiResponse> {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ messages }),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data?.error || "Ha ocurrido un error.");
    }
    return data as ApiResponse;
  }

  async function comenzar() {
    setStarted(true);
    setLoading(true);
    apiMessages.current = [];
    setItems([]);
    try {
      const data = await callApi([]);
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
    if (!texto || loading) return;

    setInput("");
    if (taRef.current) taRef.current.style.height = "auto";

    setItems((prev) => [...prev, { kind: "candidata", text: texto }]);
    apiMessages.current.push({ role: "user", content: texto });
    setLoading(true);

    try {
      const data = await callApi(apiMessages.current);
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
      // Quitamos el último turno del historial para poder reintentar.
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
            <p>Entrevista de práctica · Event Manager</p>
          </div>
        </div>
        {started && (
          <button className="restart" onClick={comenzar} disabled={loading}>
            Reiniciar
          </button>
        )}
      </header>

      {!started ? (
        <section className="welcome">
          <div className="welcome-card">
            <h2>¿Lista para practicar, Josune?</h2>
            <p>
              Vas a tener una entrevista simulada con <strong>Cristina</strong>,
              CEO de <strong>Eskisit Catering</strong> (Sitges) y responsable de
              eventos y bodas, para el puesto de <strong>Event Manager</strong>.
              Responde con naturalidad, como si fuera real.
            </p>
            <p className="muted">
              Después de cada respuesta verás un bloque de <strong>recomendaciones</strong>{" "}
              para mejorar antes de la siguiente pregunta. Puedes estar el tiempo
              que quieras: tómatelo como un ensayo.
            </p>
            <button className="cta" onClick={comenzar}>
              Empezar la entrevista
            </button>
          </div>
        </section>
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
            <p className="hint">Enter para enviar · Shift + Enter para salto de línea</p>
          </div>
        </>
      )}
    </main>
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
