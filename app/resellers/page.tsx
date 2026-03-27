"use client";

import { useMemo, useState } from "react";

export default function ResellersPage() {
  const [clients, setClients] = useState(5);
  const [plan, setPlan] = useState(79);
  const [split, setSplit] = useState(30);

  const monthlyRevenue = useMemo(() => {
    return clients * plan * (split / 100);
  }, [clients, plan, split]);

  const yearlyRevenue = monthlyRevenue * 12;

  const audience = [
    "Agencies and freelancers",
    "Appointment setters and closers",
    "Marketing consultants",
    "Local business owners",
    "People with strong business networks",
    "Anyone who wants extra monthly income",
  ];

  const reasons = [
    "You do not need to build the product yourself",
    "You do not need to be technical",
    "You can start with simple referrals",
    "You can earn recurring monthly income",
    "It solves a business problem owners already understand",
    "It works across many industries that miss calls every day",
  ];

  const models = [
    {
      title: "Simple Referral Income",
      text: "Know business owners who miss calls? Refer them to Reece AI and earn recurring revenue when they become customers.",
    },
    {
      title: "Side Hustle Offer",
      text: "You do not need an agency or huge audience. Even a few business connections can turn into extra monthly income.",
    },
    {
      title: "Agency / Closer Model",
      text: "If you already sell marketing, websites, lead gen, automation, or consulting, Reece AI becomes an easy upsell.",
    },
  ];

  const steps = [
    {
      num: "1",
      title: "Find businesses",
      text: "Look for businesses that miss calls, reply slowly, or need better lead capture.",
    },
    {
      num: "2",
      title: "Pitch the problem",
      text: "Show them how missed calls cost money and how Reece AI helps capture more opportunities.",
    },
    {
      num: "3",
      title: "Send or close the lead",
      text: "You can refer them over or help close the deal depending on how you want to operate.",
    },
    {
      num: "4",
      title: "Earn monthly",
      text: "As those accounts stay active, you participate in recurring monthly revenue.",
    },
  ];

  const examples = [
    {
      title: "1 customer",
      text: "Even one active account can be more exciting than a one-time referral fee.",
    },
    {
      title: "5 customers",
      text: "A few strong referrals can become a real side-income stream every month.",
    },
    {
      title: "10+ customers",
      text: "For agencies and strong networkers, this can become a serious recurring revenue channel.",
    },
  ];

  const whoToSell = [
    "Roofers, plumbers, HVAC, electricians, and other local service businesses",
    "Med spas, clinics, dentists, and appointment-based businesses",
    "Real estate teams and property-related businesses",
    "Law firms and professional service businesses",
    "Agencies with clients who already need better lead handling",
    "Any business that misses calls during busy hours or after hours",
  ];

  const urgencyPoints = [
    "Missed calls are lost revenue right now, not six months from now",
    "Businesses already understand the pain without needing heavy education",
    "AI answering is easier to introduce when owners are actively looking to save time",
    "Recurring revenue compounds over time instead of resetting every month",
  ];

  const faqs = [
    {
      q: "Do I need experience to become a reseller?",
      a: "No. You do not need to be technical or experienced. If you can identify businesses that miss calls and make introductions, you can participate.",
    },
    {
      q: "Who is this best for?",
      a: "It is great for agencies, freelancers, consultants, closers, setters, marketers, local operators, and anyone with access to business owners.",
    },
    {
      q: "Why is this easy to sell?",
      a: "Because missed calls are a clear business problem. Owners already understand that every unanswered call can mean lost revenue.",
    },
    {
      q: "Can this be a side hustle?",
      a: "Yes. This page is intentionally positioned so regular people with business contacts can turn referrals into recurring monthly income.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(41,121,255,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(45,212,191,0.16),transparent_25%),linear-gradient(to_bottom,#050816,#081124,#0a1020)]" />

      <header className="border-b border-white/10 bg-[#050816]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-lg font-semibold tracking-tight">
            Reece AI
          </a>

          <div className="flex items-center gap-3">
            <a
              href="/"
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/5"
            >
              Back to Home
            </a>
            <a
              href="#contact"
              className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Become a Reseller
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
              Reece AI Reseller Program
            </div>

            <h1 className="mt-6 max-w-5xl text-4xl font-semibold tracking-tight md:text-6xl md:leading-[1.05]">
              Sell Reece AI and turn simple business connections into recurring monthly income.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
              This is not just for agencies. If you know business owners, have local connections,
              run a side hustle, sell services, or simply want an extra stream of income, you can
              use Reece AI as a powerful offer and participate in recurring monthly revenue.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#calculator"
                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Calculate Earnings
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Apply Now
              </a>
            </div>

            <div className="mt-10 grid gap-4 text-sm text-white/70 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold text-cyan-300">Easy</div>
                <p className="mt-1">Simple to explain to business owners</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold text-cyan-300">Recurring</div>
                <p className="mt-1">Monthly income potential</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold text-cyan-300">Flexible</div>
                <p className="mt-1">Works as side hustle or offer</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#0b1327] p-6">
              <p className="text-sm text-cyan-300">Why this is easy to sell</p>
              <h2 className="mt-2 text-2xl font-semibold">
                Owners already understand the problem.
              </h2>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    The pain
                  </p>
                  <p className="mt-2 text-sm text-white/85">
                    Businesses lose leads and money every time calls go unanswered.
                  </p>
                </div>

                <div className="rounded-2xl bg-cyan-400/10 p-4 ring-1 ring-cyan-400/20">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                    The solution
                  </p>
                  <p className="mt-2 text-sm text-white/90">
                    Reece AI answers calls, captures leads, and improves response speed.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    The upside
                  </p>
                  <p className="mt-2 text-sm text-white/85">
                    You help solve a real business problem and can participate in recurring revenue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Who this is for
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            You do not need to be an expert to win with this.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {audience.map((item) => (
            <div
              key={item}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
            >
              <h3 className="text-xl font-semibold">{item}</h3>
              <p className="mt-3 leading-7 text-white/70">
                A strong fit for introducing Reece AI to businesses that need better call handling.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="calculator" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Earnings Calculator
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              See what a few active accounts could look like.
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/75">
              This is the kind of section that gets people imagining the opportunity for
              themselves. Adjust the numbers and let them picture the upside.
            </p>

            <div className="mt-8 grid gap-6">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-white/70">Number of active clients</span>
                  <span className="font-semibold text-cyan-300">{clients}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={clients}
                  onChange={(e) => setClients(Number(e.target.value))}
                  className="w-full accent-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">Average plan sold</label>
                <select
                  value={plan}
                  onChange={(e) => setPlan(Number(e.target.value))}
                  className="w-full rounded-2xl border border-white/10 bg-[#0b1327] px-4 py-3 text-white outline-none"
                >
                  <option value={39}>Starter — $39/month</option>
                  <option value={79}>Professional — $79/month</option>
                  <option value={119}>Scale — $119/month</option>
                </select>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-white/70">Estimated revenue share</span>
                  <span className="font-semibold text-cyan-300">{split}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="50"
                  step="5"
                  value={split}
                  onChange={(e) => setSplit(Number(e.target.value))}
                  className="w-full accent-cyan-400"
                />
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Your estimate
            </p>

            <div className="mt-6 rounded-[1.5rem] border border-cyan-400/20 bg-cyan-400/10 p-6">
              <p className="text-sm text-white/65">Estimated monthly recurring income</p>
              <div className="mt-2 text-5xl font-semibold tracking-tight text-white">
                ${monthlyRevenue.toFixed(0)}
              </div>
            </div>

            <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-[#0b1327] p-6">
              <p className="text-sm text-white/65">Estimated annualized value</p>
              <div className="mt-2 text-4xl font-semibold tracking-tight text-cyan-300">
                ${yearlyRevenue.toFixed(0)}
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">Clients</p>
                <p className="mt-2 text-2xl font-semibold">{clients}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">Plan</p>
                <p className="mt-2 text-2xl font-semibold">${plan}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">Split</p>
                <p className="mt-2 text-2xl font-semibold">{split}%</p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-white/55">
              Example only. Actual earnings depend on deal structure, plan mix, account retention,
              and your reseller arrangement. This is here to illustrate potential, not guarantee results.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex w-full justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Apply to Start Selling
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Why people say yes
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              It is simple, useful, and easy to pitch.
            </h2>

            <ul className="mt-6 space-y-3">
              {reasons.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/82"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Opportunity angles
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Multiple ways to use this offer
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

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Who to sell to
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Lead sources are everywhere once you know what to look for.
            </h2>

            <div className="mt-6 space-y-3">
              {whoToSell.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Why now
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              The best time to build recurring income is before everyone else catches on.
            </h2>

            <div className="mt-6 space-y-3">
              {urgencyPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-[#0b1327] px-4 py-3 text-white/82"
                >
                  {item}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-6 inline-flex rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Join the Reseller Program
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-8 md:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Income framing
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Start small. Grow it into real recurring revenue.
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/78">
              This page should make someone think, “I do not need to be a big agency to make this work.”
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {examples.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-[#0b1327] p-6">
                <h3 className="text-2xl font-semibold text-cyan-300">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/75">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            A very simple 4-step reseller path
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-[#0b1327] p-6">
                <div className="text-3xl font-semibold text-cyan-300">{item.num}</div>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-white/72">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Become a reseller
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Apply now and start selling Reece AI
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/70">
            Whether you are an agency owner, freelancer, closer, consultant, or someone who just
            wants an extra income stream, this is your chance to turn business relationships into
            recurring revenue.
          </p>

          <form className="mt-8 grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Full name"
                className="rounded-2xl border border-white/10 bg-[#0b1327] px-4 py-3 text-white outline-none placeholder:text-white/35"
              />
              <input
                type="email"
                placeholder="Email address"
                className="rounded-2xl border border-white/10 bg-[#0b1327] px-4 py-3 text-white outline-none placeholder:text-white/35"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Company name or personal brand"
                className="rounded-2xl border border-white/10 bg-[#0b1327] px-4 py-3 text-white outline-none placeholder:text-white/35"
              />
              <input
                type="text"
                placeholder="Website, LinkedIn, or social profile"
                className="rounded-2xl border border-white/10 bg-[#0b1327] px-4 py-3 text-white outline-none placeholder:text-white/35"
              />
            </div>

            <textarea
              placeholder="Tell us who you know, how you want to sell, and whether you want this as a side hustle, agency offer, or referral income stream."
              rows={6}
              className="rounded-2xl border border-white/10 bg-[#0b1327] px-4 py-3 text-white outline-none placeholder:text-white/35"
            />

            <button
              type="button"
              className="inline-flex w-full justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Common questions
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">{item.q}</h3>
              <p className="mt-3 leading-7 text-white/70">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
