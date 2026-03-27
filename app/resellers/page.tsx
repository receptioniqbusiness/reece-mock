"use client";

import { useMemo, useState } from "react";

const COMMISSION_RATE = 0.5;

const audience = [
  "Agencies and freelancers",
  "Appointment setters and closers",
  "Marketing consultants",
  "Website builders and automators",
  "Local business owners with strong networks",
  "Anyone who wants extra monthly income",
];

const reasons = [
  "You do not need to build the product",
  "You do not need to be technical",
  "You can start with simple referrals",
  "The calculator uses a fixed 50% commission baseline",
  "Business owners already understand the pain",
  "It fits many industries that miss calls every day",
];

const models = [
  {
    title: "Simple referral income",
    text: "Know business owners who miss calls? Introduce Reece AI and participate in recurring revenue when they become customers.",
  },
  {
    title: "Side hustle model",
    text: "You do not need a huge audience or agency. A few business contacts can become real monthly income over time.",
  },
  {
    title: "Agency / closer model",
    text: "If you already sell marketing, websites, automation, consulting, or lead generation, Reece AI becomes a natural add-on.",
  },
];

const steps = [
  {
    num: "1",
    title: "Find businesses",
    text: "Look for companies that miss calls, use voicemail too much, or struggle to respond quickly.",
  },
  {
    num: "2",
    title: "Pitch the pain",
    text: "Show them how unanswered calls mean lost leads, slower response, and weaker customer experience.",
  },
  {
    num: "3",
    title: "Refer or help close",
    text: "You can send the lead over or play a bigger role in selling depending on your model.",
  },
  {
    num: "4",
    title: "Earn monthly",
    text: "As active accounts stay live, you participate in recurring revenue.",
  },
];

const incomeExamples = [
  {
    title: "1 customer",
    text: "Even one active account can feel better than a one-time referral fee because the value can continue monthly.",
  },
  {
    title: "5 customers",
    text: "A handful of accounts can become a real extra income stream every month.",
  },
  {
    title: "10+ customers",
    text: "For agencies, closers, and strong networkers, this can become a serious recurring revenue channel.",
  },
];

const whoToSell = [
  "Roofers, plumbers, HVAC, electricians, and contractors",
  "Med spas, dentists, clinics, and appointment-based businesses",
  "Real estate teams and property-related operators",
  "Law firms and professional service businesses",
  "Agencies with clients who already need better call handling",
  "Any business that misses calls during busy hours or after hours",
];

const urgencyPoints = [
  "Missed calls are lost revenue right now, not someday",
  "Owners already understand the problem without much education",
  "The earlier you build recurring income, the longer it compounds",
  "This is easier to introduce when businesses want better responsiveness fast",
];

const scripts = [
  {
    title: "Simple opener",
    text: "Hey — quick question. Do you ever miss calls when things get busy?",
  },
  {
    title: "Problem-based follow-up",
    text: "A lot of businesses lose leads because no one answers fast enough. I have something that helps fix that.",
  },
  {
    title: "DM script",
    text: "Quick question — are you currently capturing every inbound call? I have an AI solution that helps businesses stop losing leads.",
  },
  {
    title: "Email script",
    text: "Subject: Quick question about missed calls\n\nHey, quick question — are you currently capturing every inbound call that comes into your business?\n\nI’ve been helping businesses use AI phone answering to respond faster, capture more leads, and avoid losing revenue when calls go unanswered.",
  },
  {
    title: "Cold call opener",
    text: "Hey, this is a quick one — I wanted to ask whether your team ever misses calls during busy hours or after hours.",
  },
  {
    title: "Closer line",
    text: "If I showed you a way to answer more calls, capture more leads, and sound more responsive without adding staff, would that be worth a look?",
  },
];

const objections = [
  {
    title: "I am not technical",
    text: "That is fine. You do not need to build the product. You just need to identify businesses that need it.",
  },
  {
    title: "I do not have a huge audience",
    text: "You do not need one. A few strong business relationships can be enough to start.",
  },
  {
    title: "I have never sold software before",
    text: "You are not pitching complicated software. You are solving a simple pain: missed calls cost money.",
  },
  {
    title: "I just want extra income",
    text: "That is exactly why this angle works. It can be sold as a side hustle, not only a full-time business.",
  },
];

const partnerTiers = [
  {
    name: "Referral Partner",
    text: "Best for people who want a simple path: identify businesses, make introductions, and earn on active accounts.",
  },
  {
    name: "Growth Partner",
    text: "Best for consultants, freelancers, and marketers who want to actively help drive sales.",
  },
  {
    name: "Agency Partner",
    text: "Best for operators who want to fold Reece AI into a bigger service offer and maximize account value.",
  },
];

const fastStart = [
  "Find 3 business owners you already know",
  "Ask whether they ever miss calls",
  "Use one simple pitch line",
  "Send interested people to the offer",
  "Start with small wins and build recurring income from there",
];

const faqs = [
  {
    q: "Do I need experience to become a reseller?",
    a: "No. If you can spot businesses that miss calls and make introductions, you can participate.",
  },
  {
    q: "Who is this best for?",
    a: "Agencies, freelancers, consultants, setters, closers, local connectors, service providers, and people with business relationships.",
  },
  {
    q: "Can this be a side hustle?",
    a: "Yes. This page is intentionally framed so people who want extra income can picture themselves doing it.",
  },
  {
    q: "Why is this easy to sell?",
    a: "Because the pain is obvious. Owners already understand that unanswered calls can mean lost business.",
  },
  {
    q: "What commission is used here?",
    a: "This version uses a fixed 50% baseline commission model in the calculator to keep the offer simple and easy to understand.",
  },
  {
    q: "Can agencies use this as an upsell?",
    a: "Yes. It fits naturally into websites, marketing, lead generation, automation, and growth services.",
  },
];

export default function ResellersPage() {
  const [clients, setClients] = useState(5);
  const [plan, setPlan] = useState(79);
  const [callsPerMonth, setCallsPerMonth] = useState(40);
  const [closeRate, setCloseRate] = useState(25);
  const [avgJobValue, setAvgJobValue] = useState(500);

  const monthlyRevenue = useMemo(() => {
    return clients * plan * COMMISSION_RATE;
  }, [clients, plan]);

  const yearlyRevenue = monthlyRevenue * 12;
  const twentyFourMonthRevenue = monthlyRevenue * 24;

  const monthlyJobsRecovered = useMemo(() => {
    return callsPerMonth * (closeRate / 100);
  }, [callsPerMonth, closeRate]);

  const monthlyMissedCallValue = useMemo(() => {
    return monthlyJobsRecovered * avgJobValue;
  }, [monthlyJobsRecovered, avgJobValue]);

  const conservativeRevenue = monthlyRevenue * 0.75;
  const aggressiveRevenue = monthlyRevenue * 1.35;

  return (
    <main className="min-h-screen text-white">
      <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-24px)] max-w-md -translate-x-1/2 rounded-full border border-cyan-300/25 bg-[#07101d]/90 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur md:right-6 md:left-auto md:w-auto md:translate-x-0">
        <div className="flex items-center justify-between gap-2">
          <div className="hidden px-3 text-sm text-white/75 md:block">
            50% baseline reseller model
          </div>
          <a href="#calculator" className="secondary-btn px-4 py-2 text-sm">
            Calculator
          </a>
          <a href="#contact" className="primary-btn px-4 py-2 text-sm">
            Apply Now
          </a>
        </div>
      </div>

      <header className="border-b border-white/10 bg-[#050b16]/75 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-lg font-semibold tracking-tight">
            Reece AI
          </a>

          <div className="flex items-center gap-3">
            <a href="/" className="secondary-btn hidden sm:inline-flex">
              Back to Home
            </a>
            <a href="#contact" className="primary-btn">
              Become a Reseller
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="badge">Reece AI Reseller Program</div>

            <h1 className="mt-6 max-w-5xl text-4xl font-semibold tracking-tight md:text-6xl md:leading-[1.02]">
              Sell Reece AI and turn simple business connections into recurring monthly income.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
              This page is cleaner, tighter, and more focused. Instead of throwing everything at
              people at once, it highlights the opportunity first, then lets interested visitors
              jump deeper through quick links and expandable sections.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#calculator" className="primary-btn">
                Calculate Earnings
              </a>
              <a href="#quick-links" className="secondary-btn">
                Jump Through Sections
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="glass rounded-2xl p-4">
                <div className="text-2xl font-semibold text-cyan-200">Easy</div>
                <p className="mt-1 text-sm text-white/65">Simple business problem to pitch</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <div className="text-2xl font-semibold text-cyan-200">50%</div>
                <p className="mt-1 text-sm text-white/65">Baseline recurring commission model</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <div className="text-2xl font-semibold text-cyan-200">Flexible</div>
                <p className="mt-1 text-sm text-white/65">Works as side hustle or offer</p>
              </div>
            </div>
          </div>

          <div className="hero-glow glass-strong rounded-[2rem] p-6">
            <div className="soft-grid rounded-[1.5rem] border border-white/10 bg-[#091224] p-6">
              <p className="section-label">Why this opportunity works</p>
              <h2 className="mt-2 text-2xl font-semibold">
                Owners already understand the problem.
              </h2>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/35">The pain</p>
                  <p className="mt-2 text-sm text-white/86">
                    Businesses lose leads and money every time calls go unanswered.
                  </p>
                </div>

                <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">The offer</p>
                  <p className="mt-2 text-sm text-white/90">
                    Reece AI answers calls, captures leads, and helps businesses respond faster.
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-300/15 bg-emerald-300/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-100">Your upside</p>
                  <p className="mt-2 text-sm text-white/88">
                    You solve a real problem and participate in recurring revenue with a simple
                    50% baseline model.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quick-links" className="mx-auto max-w-7xl px-6 py-4">
        <div className="glass rounded-[2rem] p-8 md:p-10">
          <div className="max-w-3xl">
            <p className="section-label">Quick links</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Keep the page clean. Let people jump to what they care about.
            </h2>
            <p className="mt-4 text-white/72">
              This is the better experience. The page stays premium and condensed, while deeper
              content is still there when someone wants it.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#calculator" className="quick-chip">Earnings Calculator</a>
            <a href="#missed-call" className="quick-chip">Missed-Call Value</a>
            <a href="#who-its-for" className="quick-chip">Who This Is For</a>
            <a href="#models" className="quick-chip">Ways To Sell</a>
            <a href="#how-it-works" className="quick-chip">How It Works</a>
            <a href="#deeper" className="quick-chip">How To Sell</a>
            <a href="#contact" className="quick-chip">Apply Now</a>
            <a href="#faq" className="quick-chip">FAQ</a>
          </div>
        </div>
      </section>

      <section id="calculator" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 to-indigo-300/10 p-8 md:p-10">
            <p className="section-label">Earnings Calculator</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Fixed 50% commission. Simple. Easy to understand.
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/75">
              Removing the split slider makes the opportunity feel cleaner and more direct. People
              do not have to think about different structures before they get excited.
            </p>

            <div className="mt-8 grid gap-6">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-white/70">Number of active clients</span>
                  <span className="font-semibold text-cyan-200">{clients}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={clients}
                  onChange={(e) => setClients(Number(e.target.value))}
                  className="range-cyan w-full"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">Average plan sold</label>
                <select
                  value={plan}
                  onChange={(e) => setPlan(Number(e.target.value))}
                  className="input-dark"
                >
                  <option value={39}>Starter — $39/month</option>
                  <option value={79}>Professional — $79/month</option>
                  <option value={119}>Scale — $119/month</option>
                </select>
              </div>

              <div className="rounded-2xl border border-emerald-300/15 bg-emerald-300/10 p-5">
                <p className="text-sm text-white/70">Commission model used here</p>
                <div className="mt-2 text-3xl font-semibold text-emerald-100">50% recurring baseline</div>
              </div>
            </div>
          </div>

          <div className="glass rounded-[2rem] p-8 md:p-10">
            <p className="section-label">Your estimate</p>

            <div className="mt-6 rounded-[1.5rem] border border-cyan-300/20 bg-cyan-300/10 p-6">
              <p className="text-sm text-white/60">Estimated monthly recurring income</p>
              <div className="number-glow mt-2 text-5xl font-semibold tracking-tight text-white">
                ${monthlyRevenue.toFixed(0)}
              </div>
            </div>

            <div className="mt-4 rounded-[1.5rem] border border-indigo-300/15 bg-indigo-300/10 p-6">
              <p className="text-sm text-white/60">Estimated annualized value</p>
              <div className="mt-2 text-4xl font-semibold tracking-tight text-cyan-200">
                ${yearlyRevenue.toFixed(0)}
              </div>
            </div>

            <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-[#0b1327] p-6">
              <p className="text-sm text-white/60">Estimated 24-month value</p>
              <div className="mt-2 text-3xl font-semibold tracking-tight text-white">
                ${twentyFourMonthRevenue.toFixed(0)}
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              <div className="money-chip rounded-xl px-4 py-3 text-sm">
                Conservative scenario: ${conservativeRevenue.toFixed(0)}/month
              </div>
              <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm text-white/90">
                Baseline scenario: ${monthlyRevenue.toFixed(0)}/month
              </div>
              <div className="rounded-xl border border-indigo-300/20 bg-indigo-300/10 px-4 py-3 text-sm text-white/90">
                Aggressive scenario: ${aggressiveRevenue.toFixed(0)}/month
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-white/55">
              Example only. Actual earnings depend on retention, fit, and how many active accounts
              you help bring in.
            </p>

            <a href="#contact" className="primary-btn mt-6 w-full">
              Apply to Start Selling
            </a>
          </div>
        </div>
      </section>

      <section id="missed-call" className="mx-auto max-w-7xl px-6 py-6 md:py-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="glass rounded-[2rem] p-8 md:p-10">
            <p className="section-label">Missed-call value calculator</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Show buyers what unanswered calls could be costing them.
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/75">
              This is one of the strongest sales tools on the page because it translates pain into
              dollars.
            </p>

            <div className="mt-8 grid gap-6">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-white/70">Missed or poorly handled calls per month</span>
                  <span className="font-semibold text-cyan-200">{callsPerMonth}</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="200"
                  step="5"
                  value={callsPerMonth}
                  onChange={(e) => setCallsPerMonth(Number(e.target.value))}
                  className="range-cyan w-full"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-white/70">Estimated close rate on recovered calls</span>
                  <span className="font-semibold text-cyan-200">{closeRate}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="80"
                  step="5"
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="range-cyan w-full"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-white/70">Average job or customer value</span>
                  <span className="font-semibold text-cyan-200">${avgJobValue}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="100"
                  value={avgJobValue}
                  onChange={(e) => setAvgJobValue(Number(e.target.value))}
                  className="range-cyan w-full"
                />
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-indigo-300/15 bg-gradient-to-br from-indigo-300/10 to-cyan-300/10 p-8 md:p-10">
            <p className="section-label">Recovery estimate</p>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-[#0b1327] p-6">
              <p className="text-sm text-white/60">Potential jobs recovered per month</p>
              <div className="mt-2 text-5xl font-semibold tracking-tight text-white">
                {monthlyJobsRecovered.toFixed(0)}
              </div>
            </div>

            <div className="mt-4 rounded-[1.5rem] border border-cyan-300/20 bg-cyan-300/10 p-6">
              <p className="text-sm text-white/60">Estimated value of recovered business</p>
              <div className="mt-2 text-4xl font-semibold tracking-tight text-cyan-200">
                ${monthlyMissedCallValue.toFixed(0)}
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              <div className="warn-chip rounded-xl px-4 py-3 text-sm">
                Make the pain feel expensive.
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                Use this as a selling tool, not just a calculator.
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                The stronger the pain feels, the easier the sale feels.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="who-its-for" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="max-w-2xl">
          <p className="section-label">Who this is for</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            You do not need to be an expert to win with this.
          </h2>
          <p className="mt-4 text-white/70">
            The best version of this page makes ordinary people with business relationships feel
            like they can actually do it.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {audience.map((item) => (
            <div
              key={item}
              className="glass rounded-[1.75rem] p-6 transition hover:border-cyan-300/25 hover:bg-white/[0.07]"
            >
              <h3 className="text-xl font-semibold">{item}</h3>
              <p className="mt-3 leading-7 text-white/70">
                A strong fit for introducing Reece AI to businesses that need better call handling.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="models" className="mx-auto max-w-7xl px-6 py-6 md:py-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-[2rem] p-8">
            <p className="section-label">Why people say yes</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              It is simple, useful, and easy to pitch.
            </h2>

            <ul className="mt-6 space-y-3">
              {reasons.map((item) => (
                <li key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/82">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-indigo-300/15 bg-gradient-to-br from-indigo-300/10 to-cyan-300/10 p-8">
            <p className="section-label">Ways to sell</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Multiple paths into the same opportunity.
            </h2>

            <div className="mt-6 space-y-4">
              {models.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-[#0c1730] p-5">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/75">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 md:py-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-[2rem] p-8">
            <p className="section-label">Who to sell to</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Lead sources are everywhere once you know what to look for.
            </h2>

            <div className="mt-6 space-y-3">
              {whoToSell.map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-8">
            <p className="section-label">Why now</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              The best time to build recurring income is before everyone else catches on.
            </h2>

            <div className="mt-6 space-y-3">
              {urgencyPoints.map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-[#0b1327] px-4 py-3 text-white/82">
                  {item}
                </div>
              ))}
            </div>

            <a href="#contact" className="primary-btn mt-6">
              Join the Reseller Program
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 to-indigo-300/10 p-8 md:p-12">
          <div className="max-w-3xl">
            <p className="section-label">Income framing</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Start small. Grow it into real recurring revenue.
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/78">
              This section should make someone think, “I do not need to be a big agency to make
              this work.”
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {incomeExamples.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-[#0b1327] p-6">
                <h3 className="text-2xl font-semibold text-cyan-200">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/75">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-white/55">
            Keep this persuasive, but do not present it as guaranteed earnings.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 md:py-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {partnerTiers.map((tier) => (
            <div key={tier.name} className="glass rounded-[1.75rem] p-6">
              <p className="section-label">Partner tier</p>
              <h3 className="mt-3 text-2xl font-semibold">{tier.name}</h3>
              <p className="mt-4 leading-7 text-white/72">{tier.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 md:py-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-[2rem] p-8">
            <p className="section-label">Fast start</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              A beginner-friendly path to get moving fast.
            </h2>

            <div className="mt-6 space-y-3">
              {fastStart.map((item, index) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/82">
                  <span className="mr-2 font-semibold text-cyan-200">{index + 1}.</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-indigo-300/15 bg-indigo-300/10 p-8">
            <p className="section-label">Objection handling</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Remove the reasons people hesitate.
            </h2>

            <div className="mt-6 space-y-4">
              {objections.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-[#0b1327] p-5">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/75">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="deeper" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="glass rounded-[2rem] p-8 md:p-10">
          <div className="max-w-3xl">
            <p className="section-label">Deeper sales help</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Hide the detailed sales content until someone actually wants it.
            </h2>
            <p className="mt-4 text-white/72">
              This is cleaner than dumping everything on the page at once. People who want the
              details can open them. People who do not can keep moving.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <details className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <summary className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">How to sell Reece AI</h3>
                  <p className="mt-1 text-sm text-white/60">Open scripts, lines, and outreach examples</p>
                </div>
                <span className="text-white/55">Open</span>
              </summary>

              <div className="muted-divider my-5" />

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {scripts.map((item) => (
                  <div key={item.title} className="rounded-[1.25rem] border border-white/10 bg-[#0b1327] p-5">
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="mt-3 whitespace-pre-line text-sm leading-7 text-white/75">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </details>

            <details className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <summary className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">Simple 4-step reseller path</h3>
                  <p className="mt-1 text-sm text-white/60">Open the fast overview of how it works</p>
                </div>
                <span className="text-white/55">Open</span>
              </summary>

              <div className="muted-divider my-5" />

              <div id="how-it-works" className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {steps.map((item) => (
                  <div key={item.title} className="rounded-[1.25rem] border border-white/10 bg-[#0b1327] p-5">
                    <div className="text-3xl font-semibold text-cyan-200">{item.num}</div>
                    <h4 className="mt-4 text-xl font-semibold">{item.title}</h4>
                    <p className="mt-3 text-white/72">{item.text}</p>
                  </div>
                ))}
              </div>
            </details>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="hero-glow glass-strong rounded-[2rem] p-8 md:p-10">
          <p className="section-label">Become a reseller</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Apply now and start selling Reece AI
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/70">
            Whether you are an agency owner, freelancer, closer, consultant, local connector, or
            just someone who wants extra income, this is built to feel approachable and profitable.
          </p>

          <form className="mt-8 grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input type="text" placeholder="Full name" className="input-dark" />
              <input type="email" placeholder="Email address" className="input-dark" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input type="text" placeholder="Company name or personal brand" className="input-dark" />
              <input type="text" placeholder="Website, LinkedIn, or social profile" className="input-dark" />
            </div>

            <select className="input-dark">
              <option>Preferred reseller type</option>
              <option>Referral Partner</option>
              <option>Growth Partner</option>
              <option>Agency Partner</option>
              <option>Not sure yet</option>
            </select>

            <textarea
              placeholder="Tell us who you know, how you want to sell, and whether you want this as a side hustle, referral income stream, or bigger agency offer."
              rows={6}
              className="input-dark"
            />

            <div className="grid gap-3 md:grid-cols-2">
              <button type="button" className="primary-btn w-full">
                Submit Application
              </button>
              <a href="mailto:hello@reece.ai" className="secondary-btn w-full">
                Email Instead
              </a>
            </div>

            <p className="text-sm text-white/50">
              This is still a front-end form layout. Connect it next to Formspree, Resend,
              HubSpot, or your CRM.
            </p>
          </form>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-12 pb-24 md:py-16">
        <div className="max-w-2xl">
          <p className="section-label">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Common reseller questions
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {faqs.map((item) => (
            <div key={item.q} className="glass rounded-[1.75rem] p-6">
              <h3 className="text-lg font-semibold">{item.q}</h3>
              <p className="mt-3 leading-7 text-white/70">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
