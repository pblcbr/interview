# Prepara tu entrevista · Event Manager (catering)

Web de práctica para preparar una entrevista de **Event Manager** en
**Eskisit Catering** (Sitges, Barcelona). Es un chat: **Josune** habla con
**Cristina**, CEO de Eskisit y responsable de eventos y bodas, que le hace una
entrevista realista adaptada al negocio real (bodas y destination weddings,
proveedores, timings, imprevistos…). Después de **cada respuesta** aparece un
bloque de **📋 Recomendaciones** (lo que hizo bien, qué mejorar y un ejemplo de
cómo decirlo mejor) antes de la siguiente pregunta.

Está pensada para poder practicar el tiempo que haga falta, como un ensayo real.
El contexto de la empresa y de la entrevistadora está en `SYSTEM_PROMPT`
(`app/api/chat/route.ts`); ajústalo si cambian los datos.

## Cómo funciona

- **Next.js** (App Router) desplegable en **Vercel**.
- Una función serverless (`app/api/chat/route.ts`) llama a la **API de Claude
  (Anthropic)**. La clave nunca está en el navegador: va como variable de entorno.
- Claude hace dos papeles a la vez: **entrevistadora** (el mensaje que ves en el
  chat) y **coach** (las recomendaciones). La respuesta viene estructurada para
  poder mostrar cada parte por separado.

## Puesta en marcha en local

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Copia `.env.example` a `.env.local` y pon tu clave:
   ```bash
   cp .env.example .env.local
   # edita .env.local y pega tu ANTHROPIC_API_KEY
   ```
   La clave se obtiene en <https://console.anthropic.com>.
3. Arranca en modo desarrollo:
   ```bash
   npm run dev
   ```
   Abre <http://localhost:3000>.

## Desplegar en Vercel

1. Sube el repo a Vercel (Import Project) o usa la integración de despliegue.
2. En **Project Settings → Environment Variables** añade:
   - `ANTHROPIC_API_KEY` = tu clave de Anthropic (obligatoria).
   - `ANTHROPIC_MODEL` = `claude-sonnet-5` (opcional; por defecto ya es ese).
3. Vuelve a desplegar (Redeploy). Sin la clave, la web carga pero muestra un
   aviso de que falta configurarla.

Las funciones se ejecutan en la región **`cdg1` (París)**, la más cercana a
Barcelona con baja latencia (ver `vercel.json`).

## Variables de entorno

| Variable            | Obligatoria | Descripción                                                        |
| ------------------- | ----------- | ------------------------------------------------------------------ |
| `ANTHROPIC_API_KEY` | Sí          | Clave de la API de Claude (Anthropic).                             |
| `ANTHROPIC_MODEL`   | No          | Modelo a usar. Por defecto `claude-sonnet-5`. Puedes subir a `claude-opus-4-8` para máxima calidad (más caro). |

## Personalización rápida

- **Empresa, puesto y estilo de la entrevistadora:** edita `SYSTEM_PROMPT` en
  `app/api/chat/route.ts`.
- **Temas de la entrevista:** también en `SYSTEM_PROMPT` (la lista de bloques).
- **Colores y estética:** variables CSS al principio de `app/globals.css`.
