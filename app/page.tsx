"use client";

import { FormEvent, useState } from "react";

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

const plans = [
  {
    name: "Starter",
    price: "$39",
    description: "Simple call coverage",
    featured: false,
  },
  {
    name: "Professional",
    price: "$79",
    description: "Best for most businesses",
    featured: true,
  },
  {
    name: "Scale",
    price: "$119",
    description: "For more advanced workflows",
    featured: false,
  },
];

const features = [
  "Answers calls 24/7",
  "Captures every lead",
  "Books faster",
  "Handles FAQs",
  "Sounds more professional",
  "Stops missed-call loss",
];

const compare = [
  {
    title: "Missed calls",
    text: "Revenue disappears quietly.",
  },
  {
    title: "Voicemail",
    text: "Most callers never bother.",
  },
  {
    title: "Receptionist",
    text: "Useful, but expensive and limited.",
  },
  {
    title: "Reece AI",
    text: "Fast, scalable, always available.",
  },
];

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
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#040914]/75 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-lg font-semibold tracking-tight">
            Reece AI
          </a>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#why" className="hover:text-white">
              Why
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
            <a href="#trial" className="hover:text-white">
              Free Trial
            </a>
            <a href="/resellers" className="hover:text-white">
              Resellers
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

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:pb-28 md:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="badge">AI Receptionist + Reseller Opportunity</div>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl md:leading-[0.98]">
              Every missed call is
              <br />
              <span className="gradient-text">money leaving.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
              Reece AI answers instantly, captures leads, and keeps your business from leaking opportunity.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#trial" className="primary-btn">
                Start Free Trial
              </a>
              <a href="/resellers" className="secondary-btn">
                Make Money Selling This
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="glass rounded-2xl p-4">
                <div className="text-2xl font-semibold">24/7</div>
                <p className="mt-1 text-sm text-white/62">Always answering</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <div className="text-2xl font-semibold">Fast</div>
                <p className="mt-1 text-sm text-white/62">Lead-first response</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <div className="text-2xl font-semibold">Clear</div>
                <p className="mt-1 text-sm text-white/62">Simple offer. Strong upside.</p>
              </div>
            </div>
          </div>

          <div className="hero-glow glass-strong rounded-[2rem] p-6">
            <div className="soft-grid rounded-[1.5rem] border border-white/10 bg-[#091224] p-6">
              <p className="section-label">What changes</p>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/35">Before</p>
                  <p className="mt-2 text-sm text-white/86">
                    Missed calls. Delayed follow-up. Lost trust. Quiet revenue loss.
                  </p>
                </div>

                <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">After</p>
                  <p className="mt-2 text-sm text-white/90">
                    Faster answers. Better capture. Stronger first impression. More opportunity saved.
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-300/15 bg-emerald-300/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-100">Reseller angle</p>
                  <p className="mt-2 text-sm text-white/88">
                    Same pain. Same solution. Different payoff: recurring income.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="mx-auto max-w-7xl px-6 py-8 md:py-10">
        <div className="glass rounded-[2rem] p-8 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="section-label">Why this hits</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
                Businesses already feel this problem.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/74">
                That is why the offer works. You are not inventing pain. You are naming it.
              </p>
            </div>

            <div className="grid gap-3">
              {features.map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="rounded-[2rem] border border-indigo-300/15 bg-gradient-to-br from-indigo-300/10 to-cyan-300/10 p-8 md:p-12">
          <div className="max-w-3xl">
            <p className="section-label">Comparison</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              The old ways feel slower the second you compare them.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {compare.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-[#0b1327] p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="max-w-2xl">
          <p className="section-label">Pricing</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Low friction. Clear decision.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] border p-8 ${
                plan.featured
                  ? "hero-glow border-cyan-300/20 bg-cyan-300/10"
                  : "glass"
              }`}
            >
              {plan.featured && (
                <div className="mb-4 inline-flex rounded-full bg-cyan-300 px-3 py-1 text-xs font-semibold text-slate-950">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p className="mt-2 text-sm text-cyan-100/80">{plan.description}</p>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-5xl font-semibold tracking-tight">{plan.price}</span>
                <span className="pb-2 text-white/45">/month</span>
              </div>

              <a href="#trial" className={plan.featured ? "primary-btn mt-8 w-full" : "secondary-btn mt-8 w-full"}>
                Start Free Trial
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="trial" className="mx-auto max-w-7xl px-6 py-12 pb-20 md:py-16">
        <div className="hero-glow rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 via-white/[0.04] to-indigo-300/10 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="section-label">Free Trial</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
                Try the version of your business that answers.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/75">
                Start here if you want to see what it feels like when fewer opportunities slip away.
              </p>

              <div className="mt-8 grid gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/82">
                  Pick a plan
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/82">
                  Tell us what calls you want handled
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/82">
                  We help you evaluate fit fast
                </div>
              </div>
            </div>

            <div className="glass rounded-[1.75rem] p-6">
              <h3 className="text-2xl font-semibold">Start your free trial</h3>

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
