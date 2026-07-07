import { NextRequest, NextResponse } from "next/server";

// Ejecuta en el runtime de Node (más margen de tiempo para llamadas al LLM).
export const runtime = "nodejs";
export const maxDuration = 60;

const MODEL = process.env.ANTHROPIC_MODEL || "claude-sonnet-5";
const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";

const SYSTEM_PROMPT = `Eres Marta Rovira, propietaria y directora de "Catering Sabors de Barcelona", una empresa de catering para eventos (bodas, eventos corporativos, celebraciones privadas) con sede en Barcelona. Estás haciendo una entrevista de trabajo REAL para cubrir el puesto de EVENT MANAGER (responsable de eventos).

CONTEXTO SOBRE LA CANDIDATA:
- Viene del mundo del derecho y quiere reconvertirse profesionalmente al sector de eventos.
- Le ilusiona mucho este puesto, pero no tiene experiencia directa en catering/eventos y puede estar nerviosa.
- Tu trabajo es entrevistarla de forma realista para que practique y llegue segura a la entrevista de verdad.

TU PERSONAJE (campo "mensaje"):
- Habla siempre en primera persona como Marta. Cálida y cercana pero profesional y exigente, como una entrevistadora real.
- Español de España, natural y conversacional. Nada de sonar a robot ni a formulario.
- Haz UNA sola pregunta cada vez. Reacciona brevemente a lo que acaba de decir (una o dos frases) y luego lanza la siguiente pregunta.
- Adáptate a sus respuestas: repregunta, pide ejemplos concretos, profundiza si algo queda flojo, como haría una entrevistadora de verdad.
- Recorre progresivamente estos bloques (sin anunciarlos, con naturalidad): (1) presentación y motivación / por qué eventos, (2) qué aporta su experiencia en derecho a este puesto, (3) conocimiento del sector: logística de eventos, gestión de proveedores, presupuestos y márgenes, timings y montaje/desmontaje, coordinación del equipo el día del evento, (4) gestión de imprevistos y situaciones de crisis (preguntas situacionales tipo "¿qué harías si...?"), (5) trato con el cliente y venta, (6) trabajo bajo presión y organización, (7) fortalezas/debilidades y encaje con el equipo. Al final, dale espacio para que ella te haga preguntas y cierra la entrevista de forma realista.
- NUNCA rompas el personaje dentro de "mensaje". Ahí eres Marta, no un asistente.
- Mantén "mensaje" conciso: 2 a 4 frases.

TU OTRO ROL — COACH (campo "recomendaciones"):
Aparte del personaje, actúas como coach de entrevistas. Después de CADA respuesta de la candidata, rellena "recomendaciones" evaluando ESA respuesta:
- "puntos_fuertes": lista de 1-3 cosas que hizo bien (concretas).
- "a_mejorar": lista de 1-3 cosas a mejorar (concretas y accionables).
- "respuesta_sugerida": un ejemplo breve, en primera persona, de cómo podría haber respondido mejor (una versión modelo que ella pueda adaptar). Concreto y realista para el puesto.
- "valoracion": un número entero del 1 al 5 valorando la respuesta (5 = excelente).
El feedback es honesto y constructivo, pensado para que mejore de verdad. Puedes usarlo también para señalar cuando conviene dar datos concretos, estructurar mejor con el método STAR (Situación, Tarea, Acción, Resultado), etc.

ARRANQUE:
- Si el último mensaje del usuario es exactamente "__inicio__", es el comienzo de la entrevista: preséntate brevemente como Marta, da la bienvenida y haz la primera pregunta (normalmente pedirle que se presente / por qué le interesa el puesto). En ese caso "recomendaciones" va vacío: "puntos_fuertes" y "a_mejorar" como listas vacías, "respuesta_sugerida" cadena vacía y "valoracion" 0.

Devuelve SIEMPRE tu respuesta llamando a la herramienta "responder_entrevista".`;

const RESPONDER_TOOL = {
  name: "responder_entrevista",
  description:
    "Devuelve la intervención de la entrevistadora y las recomendaciones de coach sobre la última respuesta de la candidata.",
  input_schema: {
    type: "object",
    properties: {
      recomendaciones: {
        type: "object",
        description:
          "Feedback de coach sobre la ÚLTIMA respuesta de la candidata. Vacío en el turno inicial.",
        properties: {
          puntos_fuertes: {
            type: "array",
            items: { type: "string" },
            description: "1-3 cosas que hizo bien. Lista vacía en el turno inicial.",
          },
          a_mejorar: {
            type: "array",
            items: { type: "string" },
            description: "1-3 mejoras accionables. Lista vacía en el turno inicial.",
          },
          respuesta_sugerida: {
            type: "string",
            description:
              "Ejemplo modelo de respuesta en primera persona. Cadena vacía en el turno inicial.",
          },
          valoracion: {
            type: "integer",
            description: "Valoración de 1 a 5 de la respuesta. 0 en el turno inicial.",
          },
        },
        required: ["puntos_fuertes", "a_mejorar", "respuesta_sugerida", "valoracion"],
        additionalProperties: false,
      },
      mensaje: {
        type: "string",
        description:
          "Lo que dice Marta (la entrevistadora): breve reacción + la siguiente pregunta. En personaje.",
      },
      tema: {
        type: "string",
        description:
          "Etiqueta corta del tema o bloque de la entrevista al que corresponde la pregunta (ej. 'Motivación', 'Gestión de imprevistos').",
      },
    },
    required: ["recomendaciones", "mensaje", "tema"],
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
          "Falta la clave de la API. Configura ANTHROPIC_API_KEY en las variables de entorno.",
      },
      { status: 500 },
    );
  }

  let messages: Msg[];
  try {
    const body = await req.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
  } catch {
    return NextResponse.json({ error: "Petición no válida." }, { status: 400 });
  }

  // La conversación tiene que empezar por un turno de usuario.
  if (messages.length === 0 || messages[0].role !== "user") {
    messages = [{ role: "user", content: "__inicio__" }, ...messages];
  }

  const payload = {
    model: MODEL,
    max_tokens: 1500,
    system: SYSTEM_PROMPT,
    // Sin "extended thinking" para que la conversación sea ágil.
    thinking: { type: "disabled" },
    tools: [RESPONDER_TOOL],
    tool_choice: { type: "tool", name: "responder_entrevista" },
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
      { error: "No se pudo contactar con el servicio. Inténtalo de nuevo." },
      { status: 502 },
    );
  }

  if (!anthropicRes.ok) {
    const detail = await anthropicRes.text().catch(() => "");
    return NextResponse.json(
      {
        error: "El servicio de IA devolvió un error.",
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
      { error: "Respuesta inesperada del servicio de IA." },
      { status: 502 },
    );
  }

  return NextResponse.json(toolUse.input);
}
