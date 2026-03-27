const features = [
  {
    title: "24/7 AI Call Answering",
    text: "Reece AI answers calls around the clock so your business sounds available, responsive, and professional even when your team is busy.",
  },
  {
    title: "Lead Capture",
    text: "Capture names, phone numbers, service requests, urgency, and next-step details automatically instead of letting calls die in voicemail.",
  },
  {
    title: "Appointment Booking",
    text: "Help callers move forward faster with booking flows that reduce delay and increase the chance of conversion.",
  },
  {
    title: "Natural Conversations",
    text: "Create a better caller experience with voice interactions that feel calm, clear, and human-like.",
  },
  {
    title: "FAQ Handling",
    text: "Answer common business questions like hours, services, pricing ranges, availability, and location details automatically.",
  },
  {
    title: "Stronger First Impression",
    text: "Make your business feel bigger, faster, and more organized from the first ring.",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$39",
    description: "For solo owners and small businesses.",
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
    description: "For growing businesses that want more automation.",
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
    description: "For higher-volume or more advanced use cases.",
    featured: false,
    features: [
      "Everything in Professional",
      "More advanced workflows",
      "More routing flexibility",
      "Higher-volume support",
      "Custom onboarding help",
    ],
  },
];

const comparison = [
  {
    title: "Missed Calls",
    text: "Lost leads, delayed follow-up, weaker trust, and revenue that never gets recovered.",
  },
  {
    title: "Voicemail",
    text: "Most callers do not want to leave one, and many never call back.",
  },
  {
    title: "Full-Time Receptionist",
    text: "Useful, but much more expensive and harder to keep available 24/7.",
  },
  {
    title: "Reece AI",
    text: "Fast, always on, lead-focused, scalable, and easier to deploy as a revenue tool.",
  },
];

const resellerReasons = [
  "You do not need to be technical",
  "You do not need a big audience",
  "You can start with a few business contacts",
  "You can sell it as a side hustle or agency offer",
  "It solves an easy-to-understand business problem",
  "Recurring revenue is more attractive than one-time commissions",
];

const resellerExamples = [
  {
    title: "Local Connector",
    text: "Know roofers, med spas, agents, lawyers, or contractors in your city? That is enough to start.",
  },
  {
    title: "Freelancer Upsell",
    text: "If you already build sites, run ads, do automation, or help businesses grow, this is an easy add-on.",
  },
  {
    title: "Agency Revenue Lever",
    text: "Turn your client base into a recurring software revenue stream instead of only selling services.",
  },
];

const verticals = [
  "Roofers, plumbers, HVAC, electricians, and local service businesses",
  "Med spas, dentists, clinics, and appointment-based businesses",
  "Real estate teams and property-related businesses",
  "Law firms and professional service businesses",
  "Home service companies with after-hours call loss",
  "Any business that misses calls during busy periods",
];

const scripts = [
  {
    title: "Simple opener",
    text: "Hey — quick question. Do you ever miss calls when you get busy?",
  },
  {
    title: "Follow-up line",
    text: "I have something that answers your business calls 24/7 and helps capture more leads.",
  },
  {
    title: "DM idea",
    text: "Quick question — are you guys currently capturing every inbound call? I have an AI solution for that.",
  },
  {
    title: "Email hook",
    text: "Subject: Quick question about missed calls\n\nAre you currently capturing every inbound call that comes into your business?",
  },
];

const faqs = [
  {
    q: "What does Reece AI do?",
    a: "Reece AI helps businesses answer inbound calls, capture leads, handle common questions, and create a stronger caller experience without needing full-time phone coverage.",
  },
  {
    q: "Who is this best for?",
    a: "It is especially strong for service businesses, appointment-based businesses, agencies, and operators who lose leads when calls go unanswered.",
  },
  {
    q: "Is there a reseller opportunity?",
    a: "Yes. Agencies, freelancers, consultants, setters, closers, local connectors, and even regular people with business relationships can use the reseller program.",
  },
  {
    q: "Can I start small?",
    a: "Yes. You do not need a huge network. A few strong business relationships can be enough to start with simple referrals.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/75 backdrop-blur">
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
            <a href="#reseller" className="transition hover:text-white">
              Make Money Selling It
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/resellers"
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/90 transition hover:border-white/30 hover:bg-white/5"
            >
              Become a Reseller
            </a>
            <a
              href="#pricing"
              className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              View Pricing
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
              AI Phone Answering + Reseller Opportunity
            </div>

            <h1 className="mt-6 max-w-5xl text-4xl font-semibold tracking-tight md:text-6xl md:leading-[1.03]">
              Never miss another call.
              <br />
              Capture more leads.
              <br />
              <span className="bg-gradient-to-r from-cyan-200 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                Or make money selling the solution.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
              Reece AI helps businesses answer calls 24/7, capture leads, book appointments,
              handle common questions, and sound more professional. It is also a high-leverage
              reseller offer for anyone who knows business owners and wants recurring monthly
              income.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                See Pricing
              </a>
              <a
                href="/resellers"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Explore Reseller Program
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold text-white">24/7</div>
                <p className="mt-1 text-sm text-white/65">Always-on call coverage</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold text-white">Fast</div>
                <p className="mt-1 text-sm text-white/65">Instant first response</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold text-white">Recurring</div>
                <p className="mt-1 text-sm text-white/65">Built for monthly revenue</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-indigo-950/40 backdrop-blur">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#0a1326] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/45">Live AI Call Flow</p>
                  <h2 className="mt-1 text-xl font-semibold">How Reece handles calls</h2>
                </div>
                <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200">
                  Always On
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/35">Caller</p>
                  <p className="mt-2 text-sm text-white/85">
                    “Hi, I need to book service this week. Do you have any openings?”
                  </p>
                </div>

                <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Reece AI</p>
                  <p className="mt-2 text-sm text-white/90">
                    “Absolutely — I can help with that. What day works best for you?”
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/35">Captures</p>
                    <p className="mt-2 text-sm text-white/82">
                      Name, phone, timing, service type, and follow-up details.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/35">Outcome</p>
                    <p className="mt-2 text-sm text-white/82">
                      Better experience, less lead loss, more opportunities captured.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-indigo-300/15 bg-indigo-300/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-indigo-200">
                    Reseller angle
                  </p>
                  <p className="mt-2 text-sm text-white/88">
                    This is easy to sell because the pain is obvious: missed calls cost businesses
                    money.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Core Features
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            A premium AI receptionist experience built to convert.
          </h2>
          <p className="mt-4 text-white/68">
            This version is designed to feel sharper, more premium, and more persuasive than a
            standard AI landing page.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition hover:border-cyan-300/25 hover:bg-white/[0.07]"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="compare" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="rounded-[2rem] border border-indigo-300/15 bg-gradient-to-br from-indigo-400/10 to-cyan-300/10 p-8 md:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Compare the options
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Reece AI solves a problem businesses already feel every day.
            </h2>
            <p className="mt-4 text-white/72">
              That is what makes the product strong and the reseller offer easy to explain.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {comparison.map((item) => (
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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Simple pricing that is easy to understand and easy to sell.
          </h2>
          <p className="mt-4 text-white/68">
            The clearest offers are usually the easiest for both buyers and resellers.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] border p-8 ${
                plan.featured
                  ? "border-cyan-300/35 bg-cyan-300/10 shadow-xl shadow-cyan-950/25"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {plan.featured && (
                <div className="mb-4 inline-flex rounded-full bg-cyan-300 px-3 py-1 text-xs font-semibold text-slate-950">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p className="mt-2 text-white/60">{plan.description}</p>

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
                <a
                  href="/resellers"
                  className={`inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                    plan.featured
                      ? "bg-cyan-300 text-slate-950 hover:bg-cyan-200"
                      : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  Get Started
                </a>
                <a
                  href="/resellers#calculator"
                  className="inline-flex w-full justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/5"
                >
                  See reseller upside
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="reseller" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 to-indigo-300/10 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Make money selling Reece AI
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl md:leading-[1.05]">
              Turn business relationships into recurring monthly income.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
              You do not need to be a tech expert. If you know business owners, local operators,
              agencies, service companies, or appointment-based businesses, you already have a path
              into this opportunity.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/resellers"
                className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Become a Reseller
              </a>
              <a
                href="/resellers#calculator"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Try Earnings Calculator
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Why this is enticing
            </p>
            <h3 className="mt-3 text-2xl font-semibold">
              It is simple, useful, and easier to pitch than most offers.
            </h3>

            <div className="mt-6 grid gap-3">
              {resellerReasons.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/82"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3">
              {resellerExamples.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-indigo-300/15 bg-indigo-300/10 px-4 py-4"
                >
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-white/75">{item.text}</p>
                </div>
              ))}
            </div>

            <a
              href="/resellers#contact"
              className="mt-6 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Apply as a Reseller
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Who you can sell to
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Lead sources are everywhere once you know what to look for.
            </h2>

            <div className="mt-6 space-y-3">
              {verticals.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-indigo-300/15 bg-gradient-to-br from-indigo-300/10 to-cyan-300/10 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
              How to pitch it
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Give people something they can use immediately.
            </h2>

            <div className="mt-6 grid gap-4">
              {scripts.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-[#0b1327] p-5">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 whitespace-pre-line text-sm leading-7 text-white/75">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="/resellers#scripts"
              className="mt-6 inline-flex rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              See full reseller page
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Questions people usually have before buying or reselling.
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

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Reece AI Mock Build</p>
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
