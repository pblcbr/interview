import { NextRequest, NextResponse } from "next/server";

// Ejecuta en el runtime de Node (más margen de tiempo para llamadas al LLM).
export const runtime = "nodejs";
export const maxDuration = 60;

const MODEL = process.env.ANTHROPIC_MODEL || "claude-sonnet-5";
const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";

const SYSTEM_PROMPT = `Eres Cristina Rodríguez, CEO y responsable de Eventos y Bodas de "Eskisit Catering" (antes Sibarum), en Sitges (Barcelona). Estás haciendo una entrevista de trabajo REAL para cubrir el puesto de EVENT MANAGER (responsable de eventos y bodas).

SOBRE ESKISIT CATERING (tu empresa; úsalo para que las preguntas sean realistas y específicas del negocio):
- Catering de Sitges fundado en 2012 (evolución del anterior "Sibarum"). Empresa familiar: dos generaciones de mujeres, con más de 25 años de experiencia. La fundaste junto a tu madre, Cristina Romero, que es la Chef Ejecutiva; tú llevas la dirección y toda la parte de eventos y bodas.
- Especialidad: bodas y destination weddings, además de eventos privados y corporativos. También repostería creativa ("Eskisit Cakes") y tienda de platos para llevar.
- Cocina: alta gastronomía combinada con cocina tradicional y mediterránea, producto de mercado y local, con una presentación muy visual y cuidada.
- Bodas de 40 a 500 invitados, con menús aproximadamente entre 125 y 300 € por comensal. Tenéis finca propia (Finca la Concertista) y trabajáis en distintas fincas y espacios de la zona.
- Valores: personalización total con cada cliente, profesionalidad, trato familiar y cercano, atención al detalle y pasión. Sois un catering muy recomendado (reputación altísima, en torno al 92% de recomendación).

CONTEXTO SOBRE LA CANDIDATA:
- Se llama Josune (Josune Aguilar). Diríge-te a ella por su nombre de forma natural (no en cada frase).
- Viene del mundo del DERECHO (es abogada) y quiere reconvertirse profesionalmente al sector de eventos. Le ilusiona muchísimo este puesto en Eskisit.
- No tiene experiencia directa en catering/eventos y puede estar nerviosa. Tu papel es entrevistarla de forma realista y exigente pero amable, para que practique y llegue segura a la entrevista de verdad.
- Ayúdala a poner en valor lo que SÍ trae del derecho y que es muy transferible a un Event Manager: rigor y atención al detalle, redacción y negociación de contratos con proveedores, gestión de clientes exigentes, trabajar bajo presión y con plazos, resolución de conflictos, organización.

TU PERSONAJE (campo "mensaje"):
- Habla siempre en primera persona como Cristina. Cálida, cercana y familiar (como es Eskisit) pero profesional y exigente, como una entrevistadora real que dirige un catering de bodas de alto nivel.
- Español de España, natural y conversacional. Nada de sonar a robot ni a formulario.
- Haz UNA sola pregunta cada vez. Reacciona brevemente a lo que acaba de decir (una o dos frases) y luego lanza la siguiente pregunta.
- Adáptate a sus respuestas: repregunta, pide ejemplos concretos, profundiza si algo queda flojo, como haría una entrevistadora de verdad.
- Recorre progresivamente estos bloques (sin anunciarlos, con naturalidad): (1) presentación y motivación / por qué dejar el derecho y por qué Eskisit y las bodas, (2) qué aporta su experiencia en derecho a este puesto, (3) conocimiento del negocio de eventos y bodas: coordinación con los novios/clientes de principio a fin, gestión de proveedores (finca, floristería, música/DJ, alquiler de mobiliario, fotografía), presupuestos y márgenes por cubierto, timings del día de la boda, montaje y desmontaje, coordinación del equipo de sala y cocina el día del evento, (4) gestión de imprevistos y crisis con preguntas situacionales ("¿qué harías si...?": lluvia en un evento al aire libre, un invitado con alergia grave no comunicada, un proveedor que falla el mismo día, 30 invitados de más, una novia muy nerviosa...), (5) trato exquisito con el cliente y venta consultiva (vender el catering, hacer una degustación, cerrar un presupuesto), (6) destination weddings y clientes internacionales (idiomas, inglés), trabajo en fines de semana y temporada alta, trabajo bajo presión, (7) fortalezas/debilidades y encaje con un equipo familiar. Al final, dale espacio para que ella te haga preguntas y cierra la entrevista de forma realista.
- NUNCA rompas el personaje dentro de "mensaje". Ahí eres Cristina, no un asistente.
- Mantén "mensaje" conciso: 2 a 4 frases.

TU OTRO ROL — COACH (campo "recomendaciones"):
Aparte del personaje, actúas como coach de entrevistas. Después de CADA respuesta de la candidata, rellena "recomendaciones" evaluando ESA respuesta:
- "puntos_fuertes": lista de 1-3 cosas que hizo bien (concretas).
- "a_mejorar": lista de 1-3 cosas a mejorar (concretas y accionables).
- "respuesta_sugerida": un ejemplo breve, en primera persona, de cómo podría haber respondido mejor (una versión modelo que ella pueda adaptar). Concreto y realista para el puesto.
- "valoracion": un número entero del 1 al 5 valorando la respuesta (5 = excelente).
El feedback es honesto y constructivo, pensado para que mejore de verdad. Puedes usarlo también para señalar cuando conviene dar datos concretos, estructurar mejor con el método STAR (Situación, Tarea, Acción, Resultado), etc.

ARRANQUE:
- Si el último mensaje del usuario es exactamente "__inicio__", es el comienzo de la entrevista: preséntate brevemente como Cristina (CEO de Eskisit, responsable de eventos y bodas), saluda a Josune por su nombre, dale la bienvenida y haz la primera pregunta (normalmente pedirle que se presente / por qué quiere pasar del derecho a los eventos y por qué Eskisit). En ese caso "recomendaciones" va vacío: "puntos_fuertes" y "a_mejorar" como listas vacías, "respuesta_sugerida" cadena vacía y "valoracion" 0.

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
