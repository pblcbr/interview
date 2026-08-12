# Interview practice · FP&A Nordics at Puig

A practice web app for **María**, preparing her **second-round interview** for an
**FP&A role covering the Nordics cluster** (Sweden, Denmark, Norway, Finland) at
**Puig**, on a **6-month temporary contract**. Everything runs **in English**.

It is a chat with a two-person panel:

- **Ingrid Larsson** — Finance Director, Nordics (the hiring manager, who already
  met María in the first interview). Leads the technical and business questions.
- **Sofie Berg** — HR Business Partner. Leads behavioural, motivation, culture
  and contract questions.

After **every answer** a **coaching block** appears: what worked well, what to
improve, a model answer and a score out of 5 — before the next question.

The panel is loaded with María's real background (8+ years in controlling:
Regional Planning & Reporting at **Nestlé** for Central America, **Bershka /
Inditex** as Pricing Controller then Sr. Business Controller, plus Santander),
so the questions build on her actual experience and challenge her where it
matters — selective beauty being new to her, and the move from a Central America
cluster to a Nordics one. HR handles availability and mobility professionally and
never asks about family or personal circumstances.

> The two interviewers are realistic simulations for practice, not real named
> Puig employees.

## What's in it

- **Full panel interview** from start to finish, or **jump straight to a stage**
  from the left-hand menu: motivation & the 6-month contract, budget/forecast/close,
  beauty & FMCG commercial finance, systems & data, business partnering,
  behavioural (HR), and closing.
- **Question bank**: likely interview questions with a **model answer** for each,
  grouped by category. Text in `[brackets]` marks where María plugs in her own
  experience. This view uses no API calls.

## How it works

- **Next.js** (App Router), deployable on **Vercel**.
- A serverless function (`app/api/chat/route.ts`) calls the **Claude API**. The
  key never reaches the browser: it lives in an environment variable.
- Claude plays both interviewers *and* the coach; the reply is structured so the
  UI can show the panel message and the coaching separately, and knows which
  interviewer is speaking.

## Running locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env.local` and add your key:
   ```bash
   cp .env.example .env.local
   # edit .env.local and paste your ANTHROPIC_API_KEY
   ```
   Get a key at <https://console.anthropic.com>.
3. Start the dev server:
   ```bash
   npm run dev
   ```
   Open <http://localhost:3000>.

## Deploying on Vercel

1. Import the repo at <https://vercel.com/new>.
2. Under **Settings → Environment Variables** add:
   - `ANTHROPIC_API_KEY` — your Anthropic key (required).
   - `ANTHROPIC_MODEL` — optional, defaults to `claude-sonnet-5`.
3. Deploy. Without the key the site loads but shows a clear warning.

Functions run in the **`cdg1` (Paris)** region — see `vercel.json`.

## Environment variables

| Variable            | Required | Description                                                    |
| ------------------- | -------- | -------------------------------------------------------------- |
| `ANTHROPIC_API_KEY` | Yes      | Claude (Anthropic) API key.                                     |
| `ANTHROPIC_MODEL`   | No       | Defaults to `claude-sonnet-5`. Use `claude-opus-4-8` for maximum quality (pricier). |

## Customising

- **Company, role, interviewers and interview structure:** `SYSTEM_PROMPT` in
  `app/api/chat/route.ts`.
- **Stages in the left menu:** the `STAGES` array in `app/page.tsx`.
- **Question bank:** `app/questions.ts`.
- **Colours and styling:** the CSS variables at the top of `app/globals.css`.
