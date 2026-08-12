export type QA = { q: string; a: string };
export type Category = { title: string; questions: QA[] };

// Question bank for María Troyano Bajo's second-round interview for the FP&A
// Nordics role at Puig (6-month contract). Model answers are written in the
// first person and built on her real background: Nestlé (Regional Planning &
// Reporting, Central America), Bershka/Inditex (Pricing Controller, then Sr.
// Business Controller) and Santander. Square brackets mark the few places where
// she still needs to plug in her own figures.
export const BANK: Category[] = [
  {
    title: "Motivation, Puig and the 6-month contract",
    questions: [
      {
        q: "Why Puig, and why this FP&A role for the Nordics?",
        a: "After eight years in controlling across FMCG, retail and financial services, beauty feels like the natural next step for me: it combines the FMCG discipline I learned at Nestlé with the pricing, margin and promotional intensity I lived every day at Bershka. Puig is particularly interesting because it has scale — over €5 billion in revenue with three of the top-10 global fragrance brands — while still being family-led and taking a long-term view. And the Nordics specifically appeals to me because it is a multi-country cluster: at Nestlé I ran planning and reporting for the whole Central America region, so managing several markets with different dynamics and currencies from one seat is exactly the work I have been doing for the last three years.",
      },
      {
        q: "This is a six-month temporary contract. Why does that work for you?",
        a: "It works well for me right now. I left Nestlé in September, relocated to Switzerland, and I am available immediately, so there is no notice period to manage. I am also used to being productive fast: when I joined the family business it was to cover a maternity leave and I had to make an impact from day one, and at Nestlé I built the regional target-setting tool within my first cycles. In six months I would focus on owning the reporting calendar cleanly, then leaving behind something that outlasts me — a better forecast process or a tool the team keeps using. And if it works well on both sides, I would be very open to continuing.",
      },
      {
        q: "Walk me through your career so far.",
        a: "I started in the family business as Administrative Coordinator, covering a maternity leave, where I led a 20-person sales team and standardised the pricing process from COGS to final price — that is where my interest in pricing began. I then did a Master in Business Consultancy at Carlos III, and joined Bershka, where I spent almost six years: first as Pricing Controller, building global pricing dashboards and real-time margin alerts, then as Senior Business Controller, taking on budget performance management. In 2022 I moved to Nestlé in Panama as Regional Planning & Reporting Coordinator for Central America, running the planning and reporting cycle for the region until September 2025. So: retail, then FMCG, always in controlling, and increasingly regional.",
      },
      {
        q: "What do you know about our business and our brands?",
        a: "Puig is Barcelona-based and family-owned, listed since 2024, and it closed 2025 above €5 billion in net revenue, growing around 5%. It is organised in three divisions — Beauty & Fashion, Charlotte Tilbury and Derma — with Fragrance & Fashion the biggest category at roughly 72% of sales, and brands like Rabanne, Carolina Herrera, Jean Paul Gaultier, Byredo and Charlotte Tilbury. For the Nordics it is a premium selective market that runs through partners such as KICKS, Åhléns, Matas and Stockmann, plus e-commerce and travel retail, it is highly seasonal with Christmas as the decisive quarter, and it spans four countries and four currencies.",
      },
      {
        q: "You have not been working since September 2025. Can you talk me through that?",
        a: "Yes, and it is straightforward. In April 2025 I went on maternity leave and returned to Spain, and after that I made the decision to relocate to Switzerland, so I finished my time at Nestlé in September. It was a planned transition rather than a drift: I used the period to settle the move and to keep myself sharp professionally — I have been following how data and AI are changing finance, which is something I am genuinely interested in applying. I am fully available now and keen to get back into a role where I can add value quickly.",
      },
      {
        q: "You are based in Switzerland and this role covers the Nordics. How would that work?",
        a: "I am based in La Tour-de-Peilz, in Vaud, and I am [open to relocating / set up to work remotely with regular travel — confirm what applies]. I am used to distance being part of the job: at Nestlé I was based in Panama covering the whole Central America region, so most of my stakeholders were in other countries and I built those relationships remotely, with focused travel when it mattered. What I learned is that it works if you are deliberate about it — a regular rhythm with each market rather than only meeting at close. I would want to understand what you expect in terms of presence in the office and travel, so we can make sure it works on both sides.",
      },
      {
        q: "What are your salary expectations?",
        a: "Based on my eight years in controlling and the scope of the role, I am looking at a range of [X to Y], adjusted for the fact that it is a six-month contract. I am flexible and I care about the whole package and the opportunity — this is a business and a team I would genuinely like to work with. Could you share the range you have budgeted for the position, so we can see quickly whether we are aligned?",
      },
    ],
  },
  {
    title: "Your track record: Nestlé and Bershka",
    questions: [
      {
        q: "Tell me about your role at Nestlé and what you personally owned.",
        a: "I was Regional Planning & Reporting Coordinator for the Central America region, based in Panama, from October 2022 until September 2025. I owned the planning and reporting cycle for the region: consolidating the markets, running the forecast and target-setting process, producing the regional P&L reporting and the profitability analysis, and presenting the performance view to regional management. The part I am proudest of is that I did not just run the cycle, I rebuilt parts of it — the target-setting tool and the dynamic P&L reporting were both things I created because the existing process was slower and less transparent than it needed to be. I supported [X markets] and around [€X] of net sales.",
      },
      {
        q: "You built a regional target-setting tool. Walk me through it.",
        a: "The problem was that setting and tracking targets across the region was manual and inconsistent: each market worked slightly differently, so consolidating took a long time and comparisons were unreliable. I designed a tool that standardised how targets were set and then tracked performance against them automatically, so the discussion moved from rebuilding numbers to explaining them. The impact was twofold: it cut the time we spent preparing the analysis by around [X%], and it made performance genuinely comparable across markets, which changed the quality of the conversations we had in the regional reviews.",
      },
      {
        q: "Tell me about the dynamic P&L reporting system you developed.",
        a: "The standard reporting told us where we were, but it did not show where we were heading, because risks and opportunities lived in people's heads and in separate files. I built a P&L reporting system that integrated evolving risks and opportunities into the view, so management could see the base case and the range around it in one place, updated as things changed. That mattered because it moved the monthly review from a backward-looking discussion to a forward-looking one: instead of explaining last month, we were deciding what to do about the [€X] of risk we could see coming.",
      },
      {
        q: "What did you do as Pricing Controller at Bershka?",
        a: "I was responsible for pricing controlling globally for the brand: I built global pricing dashboards so the business could protect margin and make decisions quickly, I oversaw pricing execution across multiple channels including the promotional strategy, and I implemented real-time pricing alerts so that when something moved out of range we could correct it immediately rather than discovering it at month-end. In fashion retail the price and promotional cycle is extremely fast, so the whole job was about giving the business visibility early enough to act — which is very close to how promotional and margin management works in beauty.",
      },
      {
        q: "How did you move from pricing into broader business controlling?",
        a: "After three years owning pricing I knew the margin side of the P&L extremely well, and the natural next step was to connect it to the rest. As Senior Business Controller my scope expanded into budget performance management, so I went from protecting margin on individual decisions to owning how the budget was tracked and delivered overall. That progression is useful for an FP&A role because I understand both ends: the granular commercial mechanics that actually move margin, and the consolidated P&L view that management uses to steer.",
      },
      {
        q: "You have worked in retail, FMCG and financial services. What transfers to beauty?",
        a: "Three things. From Nestlé, the FMCG discipline: the planning cycle, profitability analysis and how a regional structure works with local markets. From Bershka, pricing and margin management in a fast, promotional, multi-channel environment — which is the closest thing to how selective beauty behaves, with launches, seasonality and retailer negotiations. And from Santander, the rigour and control mindset you get in financial services. What is common to all three is that the business does not want a report, it wants a decision, and my job is to make the numbers usable.",
      },
      {
        q: "How does running FP&A for Central America compare with the Nordics?",
        a: "Structurally they are very similar: one coordinator supporting several countries, each with its own market dynamics, its own currency and its own local team, where your delivery depends on inputs you do not control. In both cases the job is to standardise what should be common — definitions, templates, deadlines — while leaving room for local reality in the commentary. The differences are the market maturity and the channel structure: Central America is a more fragmented, distributor-driven market, while the Nordics is a concentrated premium market with a handful of large retail partners, so the customer-level analysis matters more. The multi-currency complexity and the need to separate FX from real performance are the same.",
      },
      {
        q: "This would be your first role in selective beauty. How do you close that gap?",
        a: "I am honest that I have not sold fragrance through KICKS or Matas before, so I would not pretend the category knowledge is there on day one. What I do bring is the mechanics: pricing, promotional strategy, margin protection and multi-country planning are the same disciplines, and I have done them in a faster-moving category than beauty. To close the gap quickly I would spend my first two weeks with the commercial teams and the customer-level data — understanding the trade terms by retailer, the seasonality and where the margin actually sits — and I would be asking a lot of questions rather than assuming Bershka's answers apply here.",
      },
    ],
  },
  {
    title: "Core FP&A: budget, forecast and close",
    questions: [
      {
        q: "Walk me through how you run a budget cycle from start to finish.",
        a: "I start from the calendar and the assumptions: top-down guidance, then the drivers each market needs to build their numbers — volumes, pricing, FX, A&P envelopes, headcount — so everyone builds on the same basis. I prepare the templates and the assumption set, then consolidate and challenge the submissions against trend and market reality rather than just adding them up. Then I build the bridge that explains the gap versus guidance and versus last year, present it to management, incorporate the decisions from the review and lock the version. At Nestlé this is essentially the process I ran for the Central America region, and the target-setting tool I built was precisely to make the first two steps faster and more consistent.",
      },
      {
        q: "What is the difference between a budget, a forecast and a rolling forecast?",
        a: "The budget is the annual commitment: built once, detailed, and the benchmark for the year. The forecast is the current best view of how the year will actually land, updated with real performance and latest assumptions. A rolling forecast always looks the same number of periods ahead, so it never runs out of horizon and forces a forward-looking discussion. I use the budget for accountability, the forecast for decisions on where to push or hold investment, and the rolling view to spot risks early. That is exactly why I built the dynamic P&L at Nestlé — to make risks and opportunities visible inside the forecast rather than alongside it.",
      },
      {
        q: "You have a significant variance versus budget. How do you investigate it?",
        a: "First I size it and isolate it: which market, which brand, which P&L line, and whether it is volume, price, mix, FX or phasing. I bridge it step by step so it is explained by drivers rather than one number, and I check whether it is timing — a shipment moving between months — or a real trend. Then I validate my reading with the commercial owner, because they usually know the cause before the system does. The output I want is not an explanation but an action: is it recoverable, what would it take, and what changes in the forecast.",
      },
      {
        q: "Talk me through your month-end close routine.",
        a: "I work backwards from the reporting deadline with a checklist. Before close I make sure the accruals are aligned with the business — in beauty that would be A&P and trade spend, which move the most — and I chase the inputs I depend on from the markets. During close I review the P&L line by line against forecast and prior year and flag anything that looks wrong before it is locked. After close I prepare the pack with the commentary: what happened, why, and what it means for the full year. My rule is that no number goes out that I cannot explain.",
      },
      {
        q: "How do you build a P&L bridge from one year to the next?",
        a: "I start from the prior year figure and walk to the current one through the drivers in a logical order: volume, price, mix, then FX, then the cost lines — gross margin effects, A&P investment, overheads and one-offs. Each step has to be quantified and owned by someone in the business. The point is that a non-financial stakeholder should look at it and immediately see what caused the movement, so I keep the number of buckets small and make sure they tie cleanly to the total. This was the core of the regional reporting I produced at Nestlé.",
      },
      {
        q: "How do you make sure the numbers you publish are accurate?",
        a: "I build the checks into the process instead of relying on a final review: reconciliation to the source system, control totals, comparison against prior period and forecast, and sanity checks on the drivers. I automate what repeats, because fewer manual steps means fewer things to break — that was part of the thinking behind the pricing alerts at Bershka and the reporting tools at Nestlé. If something looks unusual I investigate before publishing, and if an error does slip through I flag it immediately with the impact and the fix.",
      },
      {
        q: "How do you handle a forecast when the business keeps changing its assumptions?",
        a: "I separate the base case from the sensitivities: the base case reflects the agreed assumptions, and the main risks and opportunities are quantified separately so management sees a range instead of arguing about a single number. I set a cut-off for assumption changes in each cycle, otherwise the forecast never closes, and anything arriving after that goes into the risks and opportunities list for the next round. That is essentially what the dynamic P&L system at Nestlé formalised.",
      },
      {
        q: "How would you improve a reporting pack that nobody reads?",
        a: "I would start by asking what decisions the audience needs to make, because a pack not tied to a decision will always be ignored. Usually the fix is to lead with the message rather than the data: a short summary of what happened and what we recommend, then the supporting detail. I would cut duplicated views, standardise definitions so people stop debating the numbers themselves, and automate the production so the time goes into commentary instead of formatting. I have done exactly this twice — the pricing dashboards at Bershka and the regional reporting at Nestlé.",
      },
    ],
  },
  {
    title: "Beauty and FMCG commercial finance",
    questions: [
      {
        q: "How do you get from gross sales to net revenue in a business like ours?",
        a: "Gross sales are the invoiced value, and from there you deduct the trade terms to reach net revenue: on-invoice discounts, off-invoice conditions, rebates and volume bonuses, returns provisions and listing or promotional allowances agreed with the retailer. In selective beauty this matters a lot because the deductions are significant and negotiated customer by customer, so two markets with identical gross sales can land very differently. I would want to look at the deduction rate by customer, not just the total — that is the same discipline I applied to margin by channel at Bershka.",
      },
      {
        q: "What is the difference between sell-in and sell-out, and why does it matter?",
        a: "Sell-in is what we invoice to the retailer; sell-out is what the retailer sells to the consumer. Sell-in drives our reported revenue, but sell-out is the real signal of consumer demand. They can diverge — loading a retailer ahead of Christmas makes sell-in look strong while the consumer purchase has not happened yet, which creates a risk of returns or a weak following quarter if the stock does not clear. In retail at Bershka I was watching that dynamic constantly, and in FP&A here I would want both in the forecast, because a plan built only on sell-in can look healthy while demand is deteriorating underneath.",
      },
      {
        q: "How do you analyse a price, volume and mix variance?",
        a: "I isolate each effect so they do not contaminate each other: volume is the change in units at constant price and mix, price is the change in realised price at constant volume, and mix captures the shift between products, brands or channels with different price points and margins. Mix is usually the most interesting one in beauty — a shift towards larger formats or premium fragrance can lift revenue and margin with flat volumes. This is the analysis I lived in as Pricing Controller, where the whole job was understanding whether a margin movement came from price, from promotion or from mix.",
      },
      {
        q: "How do you evaluate whether A&P investment is paying off?",
        a: "I look at it by brand and campaign rather than as a single spend line: what we invested, what happened to sell-out and share in that period, and the incremental contribution after gross margin. I try to compare against a baseline — the trend before the activity, or a comparable market without it — so we do not credit the campaign with growth that would have happened anyway. Perfect attribution is rarely possible, so I focus on a consistent method the business trusts, and I flag clearly where the return is weak so we can reallocate. It is the same logic I used to judge promotional effectiveness at Bershka.",
      },
      {
        q: "How would you build the financials for a new fragrance launch?",
        a: "I start with the volume assumption and where it comes from: is it incremental or cannibalising an existing line? Then I build the P&L — gross sales, trade terms, gross margin after cost of goods, the launch A&P and its phasing, since launches are front-loaded on cost and back-loaded on payback. I stress-test with a downside case and check the stock and working capital implications with supply chain. The most valuable thing I add is usually the challenge on the volume assumption, because launch cases tend to be optimistic — and I have seen that pattern in both retail and FMCG.",
      },
      {
        q: "The Nordics business is highly seasonal. How does that affect your work?",
        a: "Christmas concentrates a large share of the year, so phasing is critical: a shipment moving between November and December can distort a month completely without changing the year. I would phase the forecast on shipment timing rather than spreading it evenly, watch sell-out through the season to judge whether retail stock will clear, and plan the reporting calendar around the peak so the business gets information while it can still act. If the season is tracking behind by week two, waiting for month-end close is far too late — that early-warning instinct is exactly what the real-time pricing alerts at Bershka were built for.",
      },
      {
        q: "You have four countries with four currencies. How do you handle FX?",
        a: "I always separate FX from underlying performance, otherwise you cannot tell whether a market actually grew. I report the movement at constant currency to show real commercial performance and show the FX effect as a separate line in the bridge. In the Nordics that matters because Sweden, Denmark and Norway each have their own currency and Finland is on the euro. I dealt with the same issue across Central America, where several markets had their own currencies and volatility, so I am used to documenting the rate assumptions and making sure two forecast versions are not built on different rates.",
      },
    ],
  },
  {
    title: "Systems, data and tools",
    questions: [
      {
        q: "How strong is your Excel, and what do you use it for?",
        a: "Excel is my core tool and I use it at an advanced level: index/match and xlookup, sumifs, pivot tables, Power Query for pulling and cleaning data, and dynamic models with scenario switches. What matters most to me is building models other people can use safely — clear input, calculation and output sections, no hard-coded numbers hidden in formulas, and checks that break loudly when something does not tie. Both the regional target-setting tool at Nestlé and the global pricing dashboards at Bershka were built on that principle: they had to survive being used by people who did not build them.",
      },
      {
        q: "What is your experience with SAP or other ERP systems?",
        a: "I have worked with [SAP / the systems used at Nestlé and Inditex] for extracting actuals, running reports and reconciling the P&L back to source. I am comfortable with how the data is structured — cost centres, profit centres and how transactions map to reporting lines — which matters because most reporting errors come from misunderstanding the data model rather than from the analysis. I also pick up new systems quickly: moving from Inditex's environment to Nestlé's meant learning a completely different reporting stack, and I was running the cycle independently within [X weeks].",
      },
      {
        q: "Do you use Power BI or similar tools?",
        a: "Yes — the global pricing dashboards I built at Bershka were exactly that kind of work: giving the business a self-service view so they stopped asking finance for another extract. I focus on getting the data model and the definitions right first, because a dashboard built on inconsistent data just spreads the inconsistency faster. The payoff is that finance time moves from producing numbers to interpreting them, and the conversation shifts from 'is this number right' to 'what do we do about it'.",
      },
      {
        q: "You mention an interest in data and AI in finance. How would that show up here?",
        a: "Practically, not theoretically. Most FP&A teams lose a lot of time on data preparation, reconciliation and writing the same commentary every month, and that is where automation and AI genuinely help today. In a six-month assignment I would not try to launch a transformation project — I would look for the two or three repetitive steps in the cycle that can be automated safely and do those, the way I did with the pricing alerts and the reporting tools in my previous roles. The goal is more time for analysis and fewer manual errors, not technology for its own sake.",
      },
      {
        q: "How do you deal with poor data quality?",
        a: "I fix it at the source where I can, rather than patching it in my own file, because a workaround has to be repeated every cycle and eventually breaks. I trace the error back to where it enters the process, agree the correction with whoever owns it, and add a validation check so it is caught next time. In the short term I am transparent about the limitation — I would rather present a number with a clearly stated caveat than a clean-looking number I cannot stand behind.",
      },
    ],
  },
  {
    title: "Business partnering and stakeholders",
    questions: [
      {
        q: "What does good business partnering mean to you?",
        a: "Being close enough to the business to be useful before the decision is made, not just reporting on it afterwards. In practice that means understanding what the commercial team is trying to achieve, translating financial information into something they can act on, and being the person they call when they are weighing an investment. It also means staying independent — supporting the business but still challenging the numbers and saying no when the case does not hold. The test is simple: if they only talk to me at month-end, I am reporting, not partnering.",
      },
      {
        q: "How would you explain a complex financial issue to a non-financial stakeholder?",
        a: "I lead with the conclusion and the implication, then give detail only if they want it. I use their vocabulary — units, customers, campaigns — rather than accruals and phasing, and I use one clear visual, usually a bridge, so they can see what drove the movement. Then I check understanding by asking what they would do with the information; if they cannot tell me the action, I have not explained it well enough. This was most of my job at Nestlé, presenting regional performance to stakeholders who were commercial, not financial.",
      },
      {
        q: "Tell me about a time you had to challenge or say no to a senior stakeholder.",
        a: "At Bershka, [role] wanted to run [a promotional action / a price move] based on the expected volume uplift. I had built the margin view by channel and the numbers did not support it: the uplift needed to break even was well above anything we had achieved on comparable activity. Rather than simply refusing, I went back with the analysis and a downside scenario, and proposed an alternative that achieved most of the commercial objective with less margin exposure. They took the alternative, and it protected around [€X] of margin. What made it work was challenging the assumption with data, not the person.",
      },
      {
        q: "How would you work with commercial teams across four different countries?",
        a: "I would start by meeting each market individually to understand their customers, their calendar and their pain points, because Sweden, Denmark, Norway and Finland do not behave identically. Then I would standardise what should be common — definitions, templates, deadlines — while leaving room for local context in the commentary. I would keep a short regular rhythm with each market rather than appearing only at close, and be very explicit about what I need and by when. That is precisely how I worked across the Central America markets, where almost everything I delivered depended on other people's inputs.",
      },
      {
        q: "A market misses the deadline for its forecast submission. What do you do?",
        a: "First I find out why, because the fix differs if it is workload, unclear requirements or a system issue. In the short term I protect the cycle: I use the best available estimate, flag it clearly as such, and keep the consolidation moving so the whole cluster is not blocked by one country. Then I address the root cause with them — simplifying the template, moving their deadline earlier in the chain, or getting them support if it is capacity. I try to make compliance easy before escalating, but if it keeps happening I would raise it with the Finance Director.",
      },
    ],
  },
  {
    title: "Behavioural and competency (HR)",
    questions: [
      {
        q: "Tell me about a time you worked under significant pressure with a tight deadline.",
        a: "During a regional close at Nestlé, [situation: a market's data arrived late while the reporting deadline stayed fixed]. My task was still to deliver the regional pack on time. I re-prioritised immediately: I prepared everything that did not depend on the missing market, agreed a reduced scope for the first version with my manager, used a documented estimate for the gap and kept stakeholders informed instead of going quiet. We delivered on time with the key analysis intact, and afterwards I changed the input timeline so that market submitted a day earlier, which stopped it recurring.",
      },
      {
        q: "Tell me about a mistake you made and what you did about it.",
        a: "At [company] I [mistake: published an analysis where a formula did not pick up a new line, understating the result by X]. I spotted it [when] and raised it immediately with my manager and the affected stakeholders, with the corrected figure and the impact, before anyone else found it. Then I fixed the root cause by adding a validation check so the model fails visibly if the ranges do not tie. It was uncomfortable, but the lesson was that transparency and speed matter far more than a quiet correction — and building the control is what made it a one-off.",
      },
      {
        q: "Give me an example of a process you improved.",
        a: "The clearest one is the regional target-setting tool at Nestlé. Setting and tracking targets across the Central America markets was manual and inconsistent, so consolidation was slow and comparisons unreliable. I mapped where the time actually went, standardised how targets were set, and automated the tracking so performance flowed through without rebuilding it each cycle. It cut preparation time by around [X%] and, more importantly, made the markets genuinely comparable, which improved the quality of the regional reviews. The same instinct produced the real-time pricing alerts at Bershka.",
      },
      {
        q: "How do you prioritise when everything is urgent?",
        a: "I separate what is genuinely deadline-driven and externally visible — close, reporting, submissions — from what is important but movable, and I am explicit about the trade-off rather than letting something silently slip. If two things truly cannot both be done, I go to my manager with options and a recommendation, not just the problem. I also protect the recurring cycle, because a missed close creates far more downstream work than a delayed ad hoc analysis.",
      },
      {
        q: "What are your greatest strengths for this role?",
        a: "First, I have done this exact shape of job: regional FP&A across multiple markets and currencies, which is what the Nordics cluster needs. Second, pricing and margin depth — six years at Bershka means I understand what actually moves the commercial P&L, not just how to report it. And third, I build things: the target-setting tool, the dynamic P&L reporting, the pricing dashboards and alerts. In a six-month assignment that matters, because I can leave the process better than I found it rather than just keeping it running.",
      },
      {
        q: "What is your biggest weakness?",
        a: "I lean towards perfectionism — my instinct is to keep refining an analysis when a good, well-caveated answer today is worth more than a perfect one next week. I have worked on it by agreeing the required level of accuracy up front: a directional answer for a quick decision versus a fully reconciled number for the reporting pack. It is still something I watch, but being conscious of it has made me much faster at judging what a question actually needs.",
      },
      {
        q: "How do you handle disagreement with a colleague?",
        a: "I start by making sure I actually understand their position, because most finance disagreements turn out to be different definitions or different data rather than a genuine difference of opinion. I keep it on the facts and away from personalities, and I am willing to change my view if the evidence supports theirs. If we still disagree on something material I would rather escalate openly and together than leave it unresolved, because ambiguity in the numbers costs the business more than the disagreement does.",
      },
      {
        q: "How do you adapt to working with different cultures?",
        a: "It is something I have done for real rather than in theory. At Nestlé I was based in Panama, working across the Central America markets with multicultural teams, and before that I worked in a global role at Bershka. What I have learned is to adapt the communication rather than the standard: some cultures expect more context and relationship-building before getting to the point, others want the conclusion immediately. The Nordics tend to value directness, preparation and keeping commitments, which suits how I work, and I would invest early in building the relationships since a cluster role only functions on trust.",
      },
    ],
  },
  {
    title: "Closing the interview",
    questions: [
      {
        q: "What questions do you have for us?",
        a: "Three. For Ingrid: what would success look like at the end of the six months — what are the two or three things you most need delivered? Also, how is the FP&A work split today between the cluster and the local markets, and where do you see the biggest gap? And for Sofie: how does the team work together across the Nordics day to day, and what kind of person tends to do well here? I would also like to know the next steps and the timing of the process.",
      },
      {
        q: "Is there anything else you would like to add?",
        a: "Only that I leave this conversation more interested than when I came in. The combination of a strong brand portfolio, a seasonal multi-country market and a lean finance team is exactly where I do my best work, and it maps closely onto what I was doing at Nestlé for Central America. I know six months is a defined window, and I am available now and ready to be useful from the first cycle rather than spending a month settling in. Thank you both for your time.",
      },
      {
        q: "If you are asked something inappropriate about your personal or family situation, how should you respond?",
        a: "You are not obliged to answer questions about children, family plans or marital status — in most of Europe they are not legitimate selection criteria. The best move is to stay warm and redirect to the underlying professional concern, which is almost always availability and commitment: 'I prefer to keep my personal life separate, but to answer what I think is behind the question — I am fully available, I can start immediately, and I have no constraints on delivering what this role needs.' That answers the legitimate worry without conceding the inappropriate question, and it keeps the tone positive.",
      },
    ],
  },
];

export const BANK_TOTAL = BANK.reduce((n, c) => n + c.questions.length, 0);
