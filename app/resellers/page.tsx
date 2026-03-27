"use client";

import { FormEvent, useMemo, useState } from "react";

const COMMISSION_RATE = 0.5;

type ResellerForm = {
  name: string;
  email: string;
  company: string;
  website: string;
  resellerType: string;
  message: string;
};

const initialResellerForm: ResellerForm = {
  name: "",
  email: "",
  company: "",
  website: "",
  resellerType: "Referral Partner",
  message: "",
};

const audience = [
  "Agencies",
  "Freelancers",
  "Closers",
  "Consultants",
  "Local connectors",
  "Anyone with business relationships",
];

const models = [
  {
    title: "Referral",
    text: "Make introductions. Get paid monthly on the accounts you help bring in.",
  },
  {
    title: "Side hustle",
    text: "Start with one business owner you already know and expand from there.",
  },
  {
    title: "Agency add-on",
    text: "Turn client relationships into recurring software revenue instead of one-time project income.",
  },
];

const support = [
  {
    title: "Easy pain to explain",
    text: "You are not teaching people a brand-new problem. Missed calls already cost businesses money.",
  },
  {
    title: "Simple product story",
    text: "Answer calls. Capture leads. Book appointments. Route when needed. That is easy for owners to understand quickly.",
  },
  {
    title: "Recurring upside",
    text: "The pitch is not about hype. It is about useful software that can create monthly income.",
  },
];

const faqs = [
  {
    q: "Do I need experience?",
    a: "No. Business relationships matter more than technical experience. The pitch works because the pain is obvious.",
  },
  {
    q: "What makes this easier to sell than many offers?",
    a: "Owners already understand what a missed call costs. That makes the conversation simpler and shorter.",
  },
  {
    q: "What commission is used here?",
    a: "This page uses a fixed 50% baseline model in the calculator so the earnings logic stays easy to understand.",
  },
  {
    q: "Can this be a side hustle?",
    a: "Yes. It works for agencies, operators, connectors, and people who simply know business owners with inbound calls.",
  },
];

const scripts = [
  {
    title: "Simple opener",
    text: "Do you ever miss calls when things get busy?",
  },
  {
    title: "Follow-up",
    text: "I have something that helps businesses answer 24/7, capture more leads, and book appointments without hiring more staff.",
  },
  {
    title: "DM version",
    text: "Quick question — are you currently capturing every inbound call, even after hours?",
  },
];

const verticals = [
  "Home services",
  "Med spas and clinics",
  "Law firms",
  "Real estate teams",
  "Automotive services",
  "Any local business with inbound demand",
];

export default function ResellersPage() {
  const [clients, setClients] = useState(5);
  const [plan, setPlan] = useState(79);
  const [callsPerMonth, setCallsPerMonth] = useState(40);
  const [closeRate, setCloseRate] = useState(25);
  const [avgJobValue, setAvgJobValue] = useState(500);

  const [resellerForm, setResellerForm] = useState<ResellerForm>(initialResellerForm);
  const [resellerStatus, setResellerStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [resellerError, setResellerError] = useState("");

  const monthlyRevenue = useMemo(() => clients * plan * COMMISSION_RATE, [clients, plan]);
  const yearlyRevenue = monthlyRevenue * 12;
  const monthlyJobsRecovered = useMemo(() => callsPerMonth * (closeRate / 100), [callsPerMonth, closeRate]);
  const monthlyMissedCallValue = useMemo(() => monthlyJobsRecovered * avgJobValue, [monthlyJobsRecovered, avgJobValue]);

  async function handleResellerSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setResellerStatus("submitting");
    setResellerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "reseller",
          ...resellerForm,
          plan: "",
          trialGoal: "",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setResellerStatus("success");
      setResellerForm(initialResellerForm);
    } catch (err) {
      setResellerStatus("error");
      setResellerError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <main className="min-h-screen text-white">
      <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-24px)] max-w-md -translate-x-1/2 rounded-full border border-cyan-300/25 bg-[#07101d]/90 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur md:right-6 md:left-auto md:w-auto md:translate-x-0">
        <div className="flex items-center justify-between gap-2">
          <div className="hidden px-3 text-sm text-white/75 md:block">50% baseline model</div>
          <a href="#calculator" className="secondary-btn px-4 py-2 text-sm">
            Calculator
          </a>
          <a href="#contact" className="primary-btn px-4 py-2 text-sm">
            Apply
          </a>
        </div>
      </div>

      <header className="border-b border-white/10 bg-[rgba(4,9,20,0.72)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-lg font-semibold tracking-tight">
            Reece AI
          </a>

          <div className="flex items-center gap-3">
            <a href="/" className="secondary-btn hidden sm:inline-flex">
              Back Home
            </a>
            <a href="/signup?intent=reseller" className="secondary-btn hidden md:inline-flex">
              Try the Product First
            </a>
            <a href="#contact" className="primary-btn">
              Become a Reseller
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:pb-28 md:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="badge">Reece AI Reseller Program</div>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl md:leading-[0.98]">
              Sell one obvious fix.
              <br />
              <span className="gradient-text">Get paid every month.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
              Businesses already hate missed calls. Reece AI fixes that. You do not need to build
              anything, explain something complicated, or invent demand. You just need the right
              offer in front of the right owner.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#calculator" className="primary-btn">
                See the numbers
              </a>
              <a href="#contact" className="secondary-btn">
                Apply now
              </a>
              <a href="/signup?intent=reseller" className="secondary-btn">
                Try the product first
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="glass rounded-2xl p-4">
                <div className="text-2xl font-semibold text-cyan-200">Easy</div>
                <p className="mt-1 text-sm text-white/62">Owners already understand the pain</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <div className="text-2xl font-semibold text-cyan-200">50%</div>
                <p className="mt-1 text-sm text-white/62">Baseline recurring model</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <div className="text-2xl font-semibold text-cyan-200">Sticky</div>
                <p className="mt-1 text-sm text-white/62">Useful software, not one-time hype</p>
              </div>
            </div>
          </div>

          <div className="hero-glow glass-strong rounded-[2rem] p-6 shadow-[0_35px_100px_rgba(0,0,0,0.38)]">
            <div className="soft-grid rounded-[1.5rem] border border-white/10 bg-[#091224] p-6">
              <p className="section-label">Why this offer sticks</p>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/35">The pain</p>
                  <p className="mt-2 text-sm text-white/86">
                    Missed calls mean missed money. Owners already believe that before you ever talk to them.
                  </p>
                </div>

                <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">The offer</p>
                  <p className="mt-2 text-sm text-white/90">
                    Reece AI answers, captures, books, and moves leads forward without adding front-desk strain.
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-300/15 bg-emerald-300/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-100">The upside</p>
                  <p className="mt-2 text-sm text-white/88">
                    You bring in the client. The client gets a useful product. You get recurring income.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 md:py-8">
        <div className="glass rounded-[2rem] p-8 md:p-10">
          <div className="max-w-3xl">
            <p className="section-label">Who this is for</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              More people qualify than they think.
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/72">
              This is not just for agencies. It works for anyone who already has trust,
              relationships, or access to business owners dealing with inbound calls.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {audience.map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-4">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 md:py-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {support.map((item) => (
            <div key={item.title} className="glass rounded-[2rem] p-8">
              <p className="section-label">Why it works</p>
              <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-7 text-white/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="calculator" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 to-indigo-300/10 p-8 md:p-10">
            <p className="section-label">Earnings Calculator</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Fixed 50% baseline.
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/75">
              Keep the math simple. The easier the upside is to understand, the harder it is to ignore.
            </p>

            <div className="mt-8 grid gap-6">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-white/70">Active clients</span>
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
                <p className="text-sm text-white/70">Commission model</p>
                <div className="mt-2 text-3xl font-semibold text-emerald-100">50% recurring baseline</div>
              </div>
            </div>
          </div>

          <div className="glass rounded-[2rem] p-8 md:p-10">
            <p className="section-label">Your estimate</p>

            <div className="mt-6 rounded-[1.5rem] border border-cyan-300/20 bg-cyan-300/10 p-6">
              <p className="text-sm text-white/60">Monthly recurring income</p>
              <div className="number-glow mt-2 text-5xl font-semibold tracking-tight text-white">
                ${monthlyRevenue.toFixed(0)}
              </div>
            </div>

            <div className="mt-4 rounded-[1.5rem] border border-emerald-300/15 bg-emerald-300/10 p-6">
              <p className="text-sm text-white/60">Annualized value</p>
              <div className="mt-2 text-4xl font-semibold tracking-tight text-emerald-100">
                ${yearlyRevenue.toFixed(0)}
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-white/60">Simple interpretation</p>
              <p className="mt-3 leading-7 text-white/76">
                This is why the page should feel like a business opportunity instead of a generic affiliate pitch.
              </p>
            </div>

            <a href="#contact" className="primary-btn mt-6 w-full">
              Apply to start selling
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 md:py-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-[2rem] p-8">
            <p className="section-label">Ways in</p>

            <div className="mt-4 space-y-4">
              {models.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-white/72">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-indigo-300/15 bg-gradient-to-br from-indigo-300/10 to-cyan-300/10 p-8">
            <p className="section-label">Who to sell to</p>

            <div className="mt-4 grid gap-3">
              {verticals.map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-[#0b1327] px-4 py-3">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-white/62">Fast positioning</p>
              <p className="mt-3 leading-7 text-white/76">
                “This helps you answer every call, capture more leads, and book more appointments without hiring more front-desk coverage.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 md:py-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div id="missed-call" className="glass rounded-[2rem] p-8 md:p-10">
            <p className="section-label">Pain calculator</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Show what missed calls are costing.
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/72">
              This gives the pitch teeth. You are not selling software in the abstract. You are quantifying lost opportunity.
            </p>

            <div className="mt-8 grid gap-6">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-white/70">Missed calls per month</span>
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
                  <span className="text-white/70">Close rate on recovered calls</span>
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
                  <span className="text-white/70">Average job value</span>
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

          <div className="rounded-[2rem] border border-amber-300/15 bg-amber-300/10 p-8 md:p-10">
            <p className="section-label">What that means</p>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-[#0b1327] p-6">
              <p className="text-sm text-white/60">Recovered jobs per month</p>
              <div className="mt-2 text-5xl font-semibold tracking-tight text-white">
                {monthlyJobsRecovered.toFixed(0)}
              </div>
            </div>

            <div className="mt-4 rounded-[1.5rem] border border-amber-300/20 bg-amber-300/10 p-6">
              <p className="text-sm text-white/60">Recovered business value</p>
              <div className="mt-2 text-4xl font-semibold tracking-tight text-amber-100">
                ${monthlyMissedCallValue.toFixed(0)}
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              <div className="warn-chip rounded-xl px-4 py-3 text-sm">
                This is why the pitch lands.
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                The pain already exists. You are just attaching a solution to it.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="glass rounded-[2rem] p-8 md:p-10">
          <div className="max-w-3xl">
            <p className="section-label">Tactical help</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Give people words, not just motivation.
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/72">
              The best reseller page lowers friction by making the first conversation easier, not just more exciting.
            </p>
          </div>

          <details className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
            <summary className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">What to say</h3>
                <p className="mt-1 text-sm text-white/60">Scripts and lines</p>
              </div>
              <span className="text-white/55">Open</span>
            </summary>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {scripts.map((item) => (
                <div key={item.title} className="rounded-[1.25rem] border border-white/10 bg-[#0b1327] p-5">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-white/75">{item.text}</p>
                </div>
              ))}
            </div>
          </details>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-12 pb-24 md:py-16">
        <div className="hero-glow glass-strong rounded-[2rem] p-8 md:p-10">
          <p className="section-label">Become a reseller</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Apply now.
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/70">
            Start with who you know. Build from there. Keep the application focused and easy to complete.
          </p>

          <form onSubmit={handleResellerSubmit} className="mt-8 grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Full name"
                className="input-dark"
                value={resellerForm.name}
                onChange={(e) => setResellerForm((prev) => ({ ...prev, name: e.target.value }))}
                required
              />
              <input
                type="email"
                placeholder="Email address"
                className="input-dark"
                value={resellerForm.email}
                onChange={(e) => setResellerForm((prev) => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Company or personal brand"
                className="input-dark"
                value={resellerForm.company}
                onChange={(e) => setResellerForm((prev) => ({ ...prev, company: e.target.value }))}
              />
              <input
                type="text"
                placeholder="Website, LinkedIn, or profile"
                className="input-dark"
                value={resellerForm.website}
                onChange={(e) => setResellerForm((prev) => ({ ...prev, website: e.target.value }))}
              />
            </div>

            <select
              className="input-dark"
              value={resellerForm.resellerType}
              onChange={(e) => setResellerForm((prev) => ({ ...prev, resellerType: e.target.value }))}
            >
              <option>Referral Partner</option>
              <option>Growth Partner</option>
              <option>Agency Partner</option>
              <option>Not sure yet</option>
            </select>

            <textarea
              placeholder="Tell us who you know, what kinds of businesses you can reach, and how you want to sell."
              rows={5}
              className="input-dark"
              value={resellerForm.message}
              onChange={(e) => setResellerForm((prev) => ({ ...prev, message: e.target.value }))}
            />

            <button type="submit" className="primary-btn w-full" disabled={resellerStatus === "submitting"}>
              {resellerStatus === "submitting" ? "Submitting..." : "Submit Application"}
            </button>

            {resellerStatus === "success" && (
              <p className="text-sm text-emerald-200">
                Thanks — your reseller application was sent successfully.
              </p>
            )}

            {resellerStatus === "error" && (
              <p className="text-sm text-rose-200">
                {resellerError || "Something went wrong. Please try again."}
              </p>
            )}
          </form>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="max-w-2xl">
          <p className="section-label">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            The important questions.
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
