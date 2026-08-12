export type QA = { q: string; a: string };
export type Category = { title: string; questions: QA[] };

// Question bank for a second-round FP&A interview (Nordics cluster, Puig),
// with a model answer for each question. Answers are written in the first
// person so María can adapt them. Square brackets mark the places where she
// must plug in her own data — they are prompts, not a script to memorise.
export const BANK: Category[] = [
  {
    title: "Motivation, Puig and the 6-month contract",
    questions: [
      {
        q: "Why Puig, and why this FP&A role for the Nordics?",
        a: "Puig is a beauty and fashion group that has grown past €5 billion in revenue while still being family-led, and that combination of scale and long-term thinking really appeals to me. On the finance side, it is a genuinely interesting business: a strong fragrance portfolio with brands like Rabanne, Carolina Herrera and Jean Paul Gaultier, a highly seasonal market, and four Nordic countries with different currencies and retail partners. That means FP&A here is not just reporting numbers, it is explaining performance and helping the commercial teams make better decisions, which is exactly the kind of finance work I enjoy and where my [X years] of experience fit best.",
      },
      {
        q: "This is a six-month temporary contract. Why does that work for you?",
        a: "I am looking for a role where I can add value quickly, and a six-month assignment suits my situation right now because I am [available immediately / finishing my notice period on X]. I have joined projects at short notice before and I am used to getting up to speed fast: in my first weeks I would focus on understanding the reporting calendar, the data sources and the key stakeholders, so I am contributing to the cycle rather than just learning it. I also see it as a real opportunity — if the fit is good on both sides, I would be very happy to explore continuing, but either way I am committed to leaving the role in better shape than I found it.",
      },
      {
        q: "What do you know about our business and our brands?",
        a: "Puig is Barcelona-based, family-owned and listed since 2024, and it closed 2025 above €5 billion in net revenue, growing around 5%. The portfolio is organised in three divisions — Beauty & Fashion, Charlotte Tilbury and Derma — with Fragrance & Fashion as the biggest category at roughly 72% of sales, and three of the top-10 global fragrance brands. For the Nordics specifically, it is a premium selective market that runs through partners like KICKS, Åhléns, Matas and Stockmann, plus e-commerce and travel retail, and it is extremely seasonal with Christmas driving a large share of the year.",
      },
      {
        q: "Why are you leaving your current role?",
        a: "I am not leaving because of a problem; I am moving towards something that fits better. In my current role I [reason: the scope became more transactional / the project I was hired for has closed / I want more commercial exposure], and what I am looking for now is FP&A work with real business partnering, in an international environment where I use English every day. This role gives me that, in a category and a company that I find genuinely interesting.",
      },
      {
        q: "How quickly could you start, and what is your notice period?",
        a: "I could start on [date], as my notice period is [X weeks / I am available immediately]. I know that in a six-month assignment the ramp-up matters a lot, so I would be happy to have a short handover conversation before day one if that helps, and in my first two weeks I would prioritise the reporting calendar, the systems access and meeting the commercial stakeholders in each country.",
      },
      {
        q: "What are your salary expectations?",
        a: "Based on my experience and the scope of the role, I am looking at a range of [X to Y] gross per year, adjusted for the fact that it is a six-month contract. That said, I am flexible, and I care about the whole package and the opportunity to work with a team and a business like this one. I would rather find the right fit and agree something that works for both sides — could you tell me the range you have budgeted for the position?",
      },
    ],
  },
  {
    title: "Core FP&A: budget, forecast and close",
    questions: [
      {
        q: "Walk me through how you run a budget cycle from start to finish.",
        a: "I start from the calendar and the assumptions: top-down guidance from management, then the phasing and the drivers each market needs to build their numbers. I prepare the templates and a clear set of assumptions — volumes, pricing, FX, A&P envelopes, headcount — so everyone builds on the same basis. Then I consolidate, challenge the submissions against trend and market reality, and prepare the bridge that explains the gap versus guidance and versus last year. Finally I present the pack to management, incorporate the decisions from the review, and lock the version so it becomes the reference for the year's variance analysis.",
      },
      {
        q: "What is the difference between a budget, a forecast and a rolling forecast, and how do you use each?",
        a: "The budget is the annual commitment: it is built once, it is detailed, and it becomes the benchmark for the year. A forecast is the current best view of how the year will actually land, updated periodically with real performance and the latest assumptions. A rolling forecast always looks the same number of periods ahead, so it never runs out of horizon and forces a forward-looking discussion rather than a backward-looking one. I use the budget for accountability, the forecast for decisions — where to push or hold investment — and the rolling view to spot risks and opportunities early enough to act on them.",
      },
      {
        q: "You have a significant variance versus budget. How do you investigate it?",
        a: "I first size it and isolate it: which market, which brand, which line of the P&L, and whether it is volume, price, mix, FX or phasing. I bridge it step by step so the variance is explained by drivers rather than by a single number, and I check whether it is timing — a shipment that moved between months — or a genuine underlying trend. Then I go to the business: I validate my reading with the commercial or marketing owner, because they usually know the cause. The output I want is not just an explanation but an action: is it recoverable, what would it take, and what do we change in the forecast.",
      },
      {
        q: "Talk me through your month-end close routine.",
        a: "I work backwards from the reporting deadline with a checklist. Before close I make sure accruals are aligned with the business — especially A&P and trade spend, which are the ones that move most in beauty — and I chase the inputs I depend on. During close I review the P&L line by line against forecast and prior year, flag anything that looks wrong before it is locked, and reconcile to the source systems. After close I prepare the reporting pack with the commentary: what happened, why, and what it means for the full year. The discipline I care about most is that no number goes out without me being able to explain it.",
      },
      {
        q: "How do you make sure the numbers you publish are accurate?",
        a: "I build checks into the process rather than relying on a final review: reconciliation to the source system, control totals, comparisons against prior period and forecast, and sanity checks on the drivers. I automate whatever repeats, so there are fewer manual steps to break. When something looks unusual, I investigate it before publishing rather than explaining it afterwards. And if I do find an error after the fact, I flag it immediately with the impact and the fix — hiding it is far more expensive than correcting it.",
      },
      {
        q: "How do you build a P&L bridge from one year to the next?",
        a: "I start with the prior year figure and walk to the current one through the drivers, in a logical order: volume, price, mix, then FX, then the cost lines — gross margin effects, A&P investment, overheads and one-offs. Each step has to be quantified and owned by someone in the business. The point of a bridge is that a non-finance stakeholder can look at it and immediately see what actually caused the movement, so I keep the number of buckets small and make sure they add up cleanly to the total.",
      },
      {
        q: "How do you handle a forecast when the business keeps changing its assumptions?",
        a: "I separate the base case from the sensitivities. The base case reflects the most likely scenario with agreed assumptions, and then I quantify the main risks and opportunities separately, so management can see the range rather than arguing over a single number. I put a cut-off on assumption changes for each cycle, otherwise the forecast never closes, and anything that arrives after the cut-off goes into the risks and opportunities list for the next round. That keeps the process disciplined while still reflecting reality.",
      },
      {
        q: "How would you improve a reporting pack that nobody reads?",
        a: "I would start by asking the audience what decisions they need to make, because a pack that is not tied to a decision will always be ignored. Usually the fix is to lead with the message rather than the data: a short summary of what happened and what we recommend, then the supporting detail behind it. I would cut duplicated views, standardise the definitions so people stop debating the numbers themselves, and automate the production so the time goes into the commentary instead of the formatting. I have done exactly this in [context], and the result was [outcome].",
      },
    ],
  },
  {
    title: "Beauty and FMCG commercial finance",
    questions: [
      {
        q: "How do you get from gross sales to net revenue in a business like ours?",
        a: "Gross sales are the invoiced value, and from there you deduct the trade terms to reach net revenue: on-invoice discounts, off-invoice conditions, rebates and volume bonuses, returns provisions and any listing or promotional allowances agreed with the retailer. In selective beauty this matters a lot because the deductions are significant and negotiated by customer, so two markets with the same gross sales can have very different net revenue. That is why I always look at net revenue and the deduction rate by customer, not just the top line.",
      },
      {
        q: "What is the difference between sell-in and sell-out, and why does it matter?",
        a: "Sell-in is what we invoice to the retailer; sell-out is what the retailer sells to the end consumer. Sell-in drives our reported revenue, but sell-out is the real signal of consumer demand. They can diverge — for example when we load a retailer ahead of Christmas, sell-in is strong while sell-out has not happened yet, which creates a risk of returns or a weak following quarter if the stock does not move. In FP&A I watch both, because a forecast built only on sell-in can look healthy while the underlying demand is deteriorating.",
      },
      {
        q: "How do you analyse a price, volume and mix variance?",
        a: "I isolate each effect so they do not contaminate each other: volume is the change in units at constant price and mix, price is the change in realised price at constant volume, and mix captures the shift between products, brands or channels with different price points and margins. In beauty, mix is often the most interesting one — a shift towards larger formats or towards premium fragrance can lift both revenue and margin even with flat volumes. When I present it, I always say what it means commercially, not just what the number is.",
      },
      {
        q: "How do you evaluate whether A&P investment is paying off?",
        a: "I look at it by brand and by campaign rather than as a single spend line: what we invested, what happened to sell-out and market share in that period, and what the incremental contribution was after gross margin. I try to compare against a baseline — the trend before the activity, or a comparable market without it — so we are not crediting the campaign with growth that would have happened anyway. Perfect attribution is rarely possible, so I focus on consistency and on making sure the business has a common way of judging effectiveness, and I flag where the return is clearly weak so we can reallocate.",
      },
      {
        q: "How do you build the financials for a new product launch?",
        a: "I start with the volume assumption and where it comes from: is it incremental, or is it cannibalising an existing line? Then I build the P&L — gross sales, trade terms, gross margin after cost of goods, the launch A&P investment and the phasing, because launches are front-loaded on cost and back-loaded on payback. I stress-test it with a downside case, and I check the working capital and stock implications with supply chain. The most valuable thing I add is usually the challenge on the volume assumption, since that is where launch cases tend to be optimistic.",
      },
      {
        q: "The Nordics business is highly seasonal. How does that affect your work?",
        a: "Christmas concentrates a large share of the year, so phasing is critical: a shipment moving between November and December can distort a month completely without changing the year. I make sure the forecast is phased on shipment timing rather than spread evenly, I watch sell-out through the season to see whether the retail stock will actually clear, and I plan the reporting calendar around the peak so the business gets information when it can still act. I also flag the risk early — if the season is tracking behind by week two, waiting for the month-end close is too late.",
      },
      {
        q: "You have four countries with four currencies. How do you handle FX in your analysis?",
        a: "I always separate FX from underlying performance, because otherwise you cannot tell whether a market actually grew. I report the movement at constant currency to show the real commercial performance, then show the FX effect as a separate line in the bridge. It matters in the Nordics because Sweden, Denmark and Norway have their own currencies and Finland is on the euro, so a group-level number can move purely on translation. I also make sure the rate assumptions used in the forecast are documented, so we are not comparing versions built on different rates.",
      },
    ],
  },
  {
    title: "Systems, data and tools",
    questions: [
      {
        q: "How strong is your Excel, and what do you actually use it for?",
        a: "Excel is my core tool and I use it at an advanced level: index/match and xlookup, sumifs, pivot tables, Power Query for pulling and cleaning data, and dynamic models with scenario switches. What I care about most is building models other people can use safely — clear input, calculation and output sections, no hard-coded numbers buried in formulas, and checks that break loudly if something does not tie. In my last role I built [example: a rolling forecast model / an automated variance pack] which cut the preparation time from [X] to [Y].",
      },
      {
        q: "What is your experience with SAP or other ERP systems?",
        a: "I have worked with [SAP / the ERP you use] for [X years], mainly for extracting actuals, running reports and reconciling the P&L back to the source. I am comfortable navigating the reporting side and understanding how the data is structured — cost centres, profit centres, and how transactions map to the reporting lines — which matters because most reporting errors come from misunderstanding the data model rather than from the analysis itself. I pick up new systems quickly; when I joined [company] I was running the standard reports independently within [X weeks].",
      },
      {
        q: "Do you use Power BI or similar tools, and how?",
        a: "Yes, I have used [Power BI / Tableau] to build dashboards for [audience], mainly so the business can self-serve the routine questions instead of asking finance for another extract. I focus on getting the data model and the definitions right first, because a dashboard on inconsistent data just spreads the inconsistency faster. The benefit I have seen is that it frees up finance time for actual analysis, and it moves the conversation from 'is this number right' to 'what do we do about it'.",
      },
      {
        q: "How do you deal with poor data quality?",
        a: "I fix it at the source wherever I can, rather than patching it in my own file, because a workaround has to be repeated every cycle and eventually breaks. Practically, I trace the error back to where it enters the process, agree the correction with whoever owns it, and add a validation check so it gets caught next time. In the short term I am transparent about the limitation — I would rather present a number with a clearly stated caveat than a clean-looking number I cannot stand behind.",
      },
    ],
  },
  {
    title: "Business partnering and stakeholders",
    questions: [
      {
        q: "What does good business partnering mean to you?",
        a: "It means being close enough to the business to be useful before the decision is made, not just reporting on it afterwards. In practice that is understanding what the commercial team is trying to achieve, translating financial information into something they can act on, and being the person they call when they are considering an investment. It also means being independent: a good partner supports the business but still challenges the numbers and says no when the case does not hold. The test is simple — if the business only talks to me at month-end, I am not partnering, I am reporting.",
      },
      {
        q: "How would you explain a complex financial issue to a non-financial stakeholder?",
        a: "I lead with the conclusion and the implication, then give the detail only if they want it. I use their vocabulary rather than finance terminology — talking about units, customers and campaigns instead of accruals and phasing — and I use one clear visual, usually a bridge, so they can see what drove the movement. Then I check understanding by asking what they would do with the information. If they cannot tell me the action, I have not explained it well enough yet.",
      },
      {
        q: "Tell me about a time you had to challenge or say no to a senior stakeholder.",
        a: "In [company], [person/role] wanted to [decision] based on [assumption]. I had reviewed the numbers and the case did not hold: [specific finding, e.g. the volume assumption implied a share gain that had never happened in that market]. Rather than simply refusing, I went back with the analysis, showed the downside scenario, and offered an alternative that achieved most of the objective at a lower risk. They took the alternative, and the outcome was [result]. What made it work was that I challenged the assumption with data, not the person.",
      },
      {
        q: "How would you work with commercial teams across four different countries?",
        a: "I would start by meeting each market individually to understand their customers, their calendar and their pain points, because Sweden, Denmark, Norway and Finland do not behave identically. Then I would standardise what should be common — definitions, templates, deadlines — so the numbers are comparable, while leaving room for local context in the commentary. Practically, I would keep a short regular rhythm with each market rather than only meeting at close, and I would be very clear about what I need from them and by when, since in a cluster role most of your delivery depends on other people's inputs.",
      },
      {
        q: "A market misses its deadline for the forecast submission. What do you do?",
        a: "First I find out why, because the fix is different if it is workload, unclear requirements or a systems problem. In the short term I protect the cycle: I use the best available estimate, flag it clearly as such, and keep the consolidation moving so the whole cluster is not blocked by one country. Then I address the root cause with them — simplifying the template, moving their deadline earlier in the chain, or getting support if it is capacity. I try to make it easy to comply rather than escalating first, but if it keeps happening I would raise it with the Finance Director.",
      },
    ],
  },
  {
    title: "Behavioural and competency (HR)",
    questions: [
      {
        q: "Tell me about a time you worked under significant pressure with a tight deadline.",
        a: "During [close / budget submission] at [company], [situation: a system issue meant the actuals arrived two days late while the deadline stayed fixed]. My task was still to deliver the full pack on time. I re-prioritised immediately: I identified what was truly required versus nice to have, prepared everything that did not depend on the missing data, agreed a reduced scope for the first version with my manager, and kept the stakeholders informed rather than going quiet. We delivered on time with the key analysis intact, and afterwards I [action taken to prevent recurrence], which stopped it happening again in the following cycles.",
      },
      {
        q: "Tell me about a mistake you made and what you did about it.",
        a: "At [company] I [mistake: published a report where a formula did not pick up a new cost line, understating the result by X]. I noticed it [when], and I raised it immediately with my manager and the affected stakeholders with the corrected figure and the impact, before anyone else found it. Then I fixed the root cause by adding a validation check so the model breaks visibly if the ranges do not tie. It was uncomfortable, but the lesson I took was that speed and transparency matter far more than trying to quietly correct something — and building the control was what made sure it was a one-off.",
      },
      {
        q: "How do you prioritise when everything is urgent?",
        a: "I separate what is genuinely deadline-driven and externally visible — close, reporting, submissions — from what is important but movable, and I am explicit about the trade-off rather than silently letting something slip. If two things genuinely cannot both be done, I go to my manager with the options and a recommendation, not just the problem. I also try to protect the recurring cycle, because in finance a missed close creates far more work downstream than a delayed ad hoc analysis.",
      },
      {
        q: "What are your greatest strengths for this role?",
        a: "First, rigour: I am detail-oriented and I do not publish numbers I cannot explain, which matters in a role where the business relies on your figures. Second, the ability to translate — I can take a complex variance and turn it into a clear message that a commercial stakeholder can act on. And third, I get up to speed quickly and I am comfortable in an international, English-speaking environment with multiple markets, which is exactly what a six-month cluster role needs.",
      },
      {
        q: "What is your biggest weakness?",
        a: "I tend towards perfectionism: my instinct is to keep refining an analysis when a good, well-caveated answer delivered today is worth more than a perfect one delivered next week. I have worked on it by agreeing the level of accuracy needed up front — a directional answer for a quick decision versus a fully reconciled number for the reporting pack — and by setting my own internal deadlines. It is still something I watch, but being conscious of it has made me much faster at judging what a question actually requires.",
      },
      {
        q: "Give me an example of a process you improved.",
        a: "At [company] the [process, e.g. monthly reporting pack] took [X days] and involved a lot of manual copying between files, which made it slow and error-prone. I mapped where the time actually went, automated the data extraction with [Power Query / macro / new report], standardised the template and added validation checks. It reduced the preparation time from [X] to [Y] and, more importantly, freed up time for the commentary and the analysis, which is the part the business actually values. It also meant that when I was away, someone else could run it.",
      },
      {
        q: "How do you handle disagreement with a colleague?",
        a: "I start by making sure I actually understand their position, because a lot of disagreements in finance turn out to be different definitions or different data rather than a genuine difference of opinion. I focus on the facts and keep it away from personalities, and I am willing to change my view if the evidence supports theirs. If we still disagree on something material, I would rather escalate it openly and together than let it sit unresolved, since ambiguity in the numbers costs the business more than the disagreement itself.",
      },
      {
        q: "How do you feel about working in English every day across the Nordics?",
        a: "Very comfortable — I have worked in English in [context] for [X years], including [presenting to management / working with international stakeholders]. Working across four countries also means being aware of cultural differences in how people communicate, and my experience is that Nordic teams tend to value directness, preparation and keeping to commitments, which suits how I work. I would also make an effort to build the relationships early, because remote cluster work only functions if people trust you.",
      },
    ],
  },
  {
    title: "Closing the interview",
    questions: [
      {
        q: "What questions do you have for us?",
        a: "I would ask three things. First, for Ingrid: what would success in this role look like at the end of the six months — what are the two or three things you most need delivered? Second, how is the FP&A work split between the cluster and the local markets today, and where do you see the biggest gap? And third, for Sofie: how does the team work together across the Nordics day to day, and what kind of person tends to do well here? I would also ask what the next steps in the process are and the timing.",
      },
      {
        q: "Is there anything else you would like to add?",
        a: "Just to say that I leave this conversation more interested than when I came in. I think the combination of a strong brand portfolio, a seasonal and quite complex Nordics market and a lean finance team is exactly the kind of environment where I do my best work. I know six months is a defined window, and I would come in ready to be useful quickly rather than spending the first month settling in. Thank you both for your time.",
      },
    ],
  },
];

export const BANK_TOTAL = BANK.reduce((n, c) => n + c.questions.length, 0);
