"use client";

import { FormEvent, useState } from "react";

const features = [
  {
    title: "24/7 AI Call Answering",
    text: "Reece AI answers calls around the clock so leads do not fall into voicemail or disappear while your team is busy.",
  },
  {
    title: "Lead Capture",
    text: "Capture names, phone numbers, service requests, urgency, and next-step details automatically.",
  },
  {
    title: "Appointment Booking",
    text: "Help callers move forward faster with booking and intake flows that reduce delay and increase conversion.",
  },
  {
    title: "Natural Conversations",
    text: "Create a cleaner customer experience with interactions designed to feel calm, clear, and helpful.",
  },
  {
    title: "FAQ Handling",
    text: "Answer common questions like hours, services, availability, and basic business information automatically.",
  },
  {
    title: "Stronger First Impression",
    text: "Make your business sound more responsive, organized, and premium from the first ring.",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$39",
    bestFor: "Solo operators and small businesses",
    featured: false,
    features: [
      "AI phone answering",
      "Message capture",
      "Basic call workflows",
      "After-hours coverage",
      "Simple routing",
    ],
  },
  {
    name: "Professional",
    price: "$79",
    bestFor: "Growing teams that want more automation",
    featured: true,
    features: [
      "Everything in Starter",
      "Appointment booking flows",
      "Advanced FAQ handling",
      "Lead qualification prompts",
      "Priority setup support",
    ],
  },
  {
    name: "Scale",
    price: "$119",
    bestFor: "Higher-volume or more advanced workflows",
    featured: false,
    features: [
      "Everything in Professional",
      "Advanced routing logic",
      "More workflow flexibility",
      "Higher-volume support",
      "Custom onboarding help",
    ],
  },
];

const compareCards = [
  {
    title: "Missed Calls",
    text: "Lost leads, delayed follow-up, weaker trust, and revenue that often never comes back.",
  },
  {
    title: "Voicemail",
    text: "Many callers do not want to leave one, and a lot of them never try again.",
  },
  {
    title: "Full-Time Receptionist",
    text: "Useful, but usually much more expensive and harder to keep available all the time.",
  },
  {
    title: "Reece AI",
    text: "Always on, lead-focused, easier to scale, and built to help businesses capture more opportunity.",
  },
];

const buyerOutcomes = [
  "Capture more inbound opportunities",
  "Respond faster without adding headcount",
  "Look more professional to new callers",
  "Reduce after-hours lead loss",
];

const industries = [
  "Home services",
  "Med spas",
  "Dental & clinics",
  "Real estate",
  "Law firms",
  "Agencies",
  "Consultants",
  "Appointment-based businesses",
];

const resellerReasons = [
  "Simple business problem owners already understand",
  "50% recurring commission baseline",
  "Works for agencies, freelancers, and side hustlers",
  "Can start with referrals before becoming more hands-on",
];

const faqs = [
  {
    q: "What does Reece AI do?",
    a: "Reece AI answers inbound business calls, captures leads, handles common questions, and helps businesses respond faster without needing a traditional front-desk setup.",
  },
  {
    q: "Who is this best for?",
    a: "It works especially well for service businesses, appointment-based businesses, agencies, and operators who lose opportunities when calls go unanswered.",
  },
  {
    q: "Is there a reseller program?",
    a: "Yes. Reece AI can also be sold by agencies, freelancers, consultants, local connectors, and people who want an extra stream of monthly income.",
  },
  {
    q: "How does the free trial work?",
    a: "The free-trial form lets you request setup and talk through your business needs so you can evaluate whether Reece AI is the right fit.",
  },
];

type TrialForm = {
  name: string;
  email: string;
  company: string;
  website: string;
  plan: string;
  trialGoal: string;
};

const initialTrialForm: TrialForm = {
  name: "",
  email: "",
  company: "",
  website: "",
  plan: "Professional",
  trialGoal: "",
};

export default function Home() {
  const [trialForm, setTrialForm] = useState<TrialForm>(initialTrialForm);
  const [trialStatus, setTrialStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [trialError, setTrialError] = useState("");

  async function handleTrialSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTrialStatus("submitting");
    setTrialError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "trial",
          ...trialForm,
          message: "",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setTrialStatus("success");
      setTrialForm(initialTrialForm);
    } catch (err) {
      setTrialStatus("error");
      setTrialError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <main className="min-h-screen text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050b16]/75 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-lg font-semibold tracking-tight">
            Reece AI
          </a>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#pricing" className="transition hover:text-white">
              Pricing
            </a>
            <a href="#compare" className="transition hover:text-white">
              Compare
            </a>
            <a href="#trial" className="transition hover:text-white">
              Free Trial
            </a>
            <a href="/resellers" className="transition hover:text-white">
              Resellers
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="/resellers" className="secondary-btn hidden sm:inline-flex">
              Reseller Program
            </a>
            <a href="#trial" className="primary-btn">
              Start Free Trial
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="badge">AI Receptionist + Reseller Opportunity</div>

            <h1 className="mt-6 max-w-5xl text-4xl font-semibold tracking-tight md:text-6xl md:leading-[1.02]">
              Every missed call is
              <br />
              <span className="gradient-text">lost revenue.</span>
              <br />
              Reece AI helps you capture it.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
              Reece AI answers calls 24/7, captures leads, books appointments, and helps
              businesses stop losing revenue from missed opportunities. You can also earn recurring
              income by selling it.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#trial" className="primary-btn">
                Start Free Trial
              </a>
              <a href="/resellers" className="secondary-btn">
                Make Money Selling This
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-4">
              <div className="glass rounded-2xl p-4">
                <div className="text-2xl font-semibold">24/7</div>
                <p className="mt-1 text-sm text-white/65">Always-on call coverage</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <div className="text-2xl font-semibold">Fast</div>
                <p className="mt-1 text-sm text-white/65">Instant first response</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <div className="text-2xl font-semibold">More</div>
                <p className="mt-1 text-sm text-white/65">Leads captured automatically</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <div className="text-2xl font-semibold">50%</div>
                <p className="mt-1 text-sm text-white/65">Baseline reseller model</p>
              </div>
            </div>
          </div>

          <div className="hero-glow glass-strong rounded-[2rem] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.42)]">
            <div className="soft-grid rounded-[1.5rem] border border-white/10 bg-[#091224] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/45">Why this works</p>
                  <h2 className="mt-1 text-xl font-semibold">The pain is obvious. The value is immediate.</h2>
                </div>
                <div className="badge px-3 py-1 text-xs">Lead-First</div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/35">For businesses</p>
                  <p className="mt-2 text-sm text-white/86">
                    Answer more calls, capture more leads, and sound more responsive without adding staff.
                  </p>
                </div>

                <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">For buyers</p>
                  <p className="mt-2 text-sm text-white/90">
                    Missed calls turn into lost opportunities. Reece AI helps stop that immediately.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/35">For teams</p>
                    <p className="mt-2 text-sm text-white/82">
                      Handle overflow, after-hours, and busy periods with more consistency.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-indigo-300/15 bg-indigo-300/10 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-indigo-200">For resellers</p>
                    <p className="mt-2 text-sm text-white/86">
                      Sell something business owners already understand and get paid monthly.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-emerald-300/15 bg-emerald-300/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-100">Low-friction path</p>
                  <p className="mt-2 text-sm text-white/88">
                    Start with a free trial if you want the product. Start with the reseller page if you want the opportunity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4">
        <div className="glass rounded-[2rem] p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="section-label">Why businesses care</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                Most businesses are losing money
                <br />
                and do not even realize it.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/75">
                The strongest AI receptionist offers are not about novelty. They are about revenue
                protection, speed-to-lead, and a better first impression.
              </p>
            </div>

            <div className="grid gap-3">
              {buyerOutcomes.map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="max-w-2xl">
          <p className="section-label">Core Features</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Built to answer faster, capture more, and convert better.
          </h2>
          <p className="mt-4 text-white/68">
            The messaging, hierarchy, and design are all focused on outcomes instead of filler.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="glass rounded-[1.75rem] p-6 transition hover:border-cyan-300/25 hover:bg-white/[0.07]"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="compare" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="rounded-[2rem] border border-indigo-300/15 bg-gradient-to-br from-indigo-300/10 to-cyan-300/10 p-8 md:p-12">
          <div className="max-w-3xl">
            <p className="section-label">Compare the options</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Reece AI solves a problem businesses already feel every day.
            </h2>
            <p className="mt-4 text-white/72">
              That is what makes the product strong and the reseller path easy to explain.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {compareCards.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-[#0b1327] p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-2">
        <div className="glass rounded-[2rem] p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="section-label">Built for real business use</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Strong fit for the industries that hate missing calls.
              </h2>
              <p className="mt-4 text-white/72">
                Start with the markets where calls directly connect to appointments, consultations,
                service jobs, or qualified inbound leads.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {industries.map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="max-w-2xl">
          <p className="section-label">Pricing</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Simple pricing. Clear value. Low friction.
          </h2>
          <p className="mt-4 text-white/68">
            The goal is to make the next step obvious.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] border p-8 ${
                plan.featured
                  ? "hero-glow bg-cyan-300/10 border-cyan-300/20"
                  : "glass"
              }`}
            >
              {plan.featured && (
                <div className="mb-4 inline-flex rounded-full bg-cyan-300 px-3 py-1 text-xs font-semibold text-slate-950">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p className="mt-2 text-sm text-cyan-100/80">{plan.bestFor}</p>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-5xl font-semibold tracking-tight">{plan.price}</span>
                <span className="pb-2 text-white/45">/month</span>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid gap-3">
                <a href="#trial" className={plan.featured ? "primary-btn w-full" : "secondary-btn w-full"}>
                  Start Free Trial
                </a>
                <a href="/resellers#calculator" className="secondary-btn w-full">
                  See reseller upside
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="trial" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="hero-glow rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 via-white/[0.04] to-indigo-300/10 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="section-label">Free Trial</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                Try Reece AI with a low-friction first step.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/75">
                If your business misses calls, gets overloaded, or wants faster response without
                more front-desk overhead, this is the right place to start.
              </p>

              <div className="mt-8 grid gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/82">
                  Start with the plan you are most interested in
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/82">
                  Share what you want Reece AI to handle
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/82">
                  We follow up to help you evaluate fit quickly
                </div>
              </div>
            </div>

            <div className="glass rounded-[1.75rem] p-6">
              <h3 className="text-2xl font-semibold">Start your free trial</h3>
              <p className="mt-2 text-white/65">
                Tell us a little about your business.
              </p>

              <form onSubmit={handleTrialSubmit} className="mt-6 grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="input-dark"
                    value={trialForm.name}
                    onChange={(e) => setTrialForm((prev) => ({ ...prev, name: e.target.value }))}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="input-dark"
                    value={trialForm.email}
                    onChange={(e) => setTrialForm((prev) => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Business name"
                    className="input-dark"
                    value={trialForm.company}
                    onChange={(e) => setTrialForm((prev) => ({ ...prev, company: e.target.value }))}
                  />
                  <input
                    type="text"
                    placeholder="Website"
                    className="input-dark"
                    value={trialForm.website}
                    onChange={(e) => setTrialForm((prev) => ({ ...prev, website: e.target.value }))}
                  />
                </div>

                <select
                  className="input-dark"
                  value={trialForm.plan}
                  onChange={(e) => setTrialForm((prev) => ({ ...prev, plan: e.target.value }))}
                >
                  <option value="Starter">Starter</option>
                  <option value="Professional">Professional</option>
                  <option value="Scale">Scale</option>
                </select>

                <textarea
                  rows={5}
                  placeholder="What would you want Reece AI to handle for your business?"
                  className="input-dark"
                  value={trialForm.trialGoal}
                  onChange={(e) => setTrialForm((prev) => ({ ...prev, trialGoal: e.target.value }))}
                />

                <button
                  type="submit"
                  className="primary-btn w-full"
                  disabled={trialStatus === "submitting"}
                >
                  {trialStatus === "submitting" ? "Submitting..." : "Start Free Trial"}
                </button>

                {trialStatus === "success" && (
                  <p className="text-sm text-emerald-200">
                    Thanks — your free-trial request was sent successfully.
                  </p>
                )}

                {trialStatus === "error" && (
                  <p className="text-sm text-rose-200">
                    {trialError || "Something went wrong. Please try again."}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 to-indigo-300/10 p-8 md:p-10">
            <p className="section-label">Make money selling Reece AI</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl md:leading-[1.05]">
              Turn business relationships into recurring monthly income.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
              The pitch is simple because the pain is simple. Businesses lose money when calls go
              unanswered. Reece AI helps fix that, and the reseller model makes the opportunity
              easy to understand fast.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/resellers" className="primary-btn">
                Become a Reseller
              </a>
              <a href="/resellers#calculator" className="secondary-btn">
                Try Earnings Calculator
              </a>
            </div>
          </div>

          <div className="glass rounded-[2rem] p-8">
            <p className="section-label">Why it is attractive</p>
            <h3 className="mt-3 text-2xl font-semibold">
              Simple problem. Clear product. Recurring model.
            </h3>

            <div className="mt-6 space-y-3">
              {resellerReasons.map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/82">
                  {item}
                </div>
              ))}
            </div>

            <a href="/resellers" className="secondary-btn mt-6">
              Explore reseller page
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="max-w-2xl">
          <p className="section-label">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Questions people usually ask before they start.
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

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-4">
        <div className="hero-glow rounded-[2rem] border border-cyan-300/14 bg-gradient-to-br from-cyan-300/10 via-white/[0.04] to-indigo-300/10 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="section-label">Final call to action</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                Stop losing calls.
                <br />
                Start capturing revenue.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/75">
                Reece AI is built for businesses that care about response speed, lead capture, and
                making every inbound call count.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a href="#trial" className="primary-btn">
                Start Free Trial
              </a>
              <a href="/resellers" className="secondary-btn">
                Become a Reseller
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Reece AI</p>
          <div className="flex gap-5">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <a href="/resellers" className="hover:text-white">
              Resellers
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
