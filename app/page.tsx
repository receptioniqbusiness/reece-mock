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
    text: "Always on, lead-focused, easier to scale, and designed to help businesses capture more opportunity.",
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

const quickSell = [
  "Know business owners? You can start.",
  "Owners already understand the pain.",
  "Recurring income is easier to get excited about than one-time commissions.",
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
    q: "What commission does the calculator use?",
    a: "The reseller calculator uses a simple 50% baseline commission so the opportunity is easier to understand quickly.",
  },
];

export default function Home() {
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
            <a href="#reseller" className="transition hover:text-white">
              Resellers
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="/resellers" className="secondary-btn hidden sm:inline-flex">
              Become a Reseller
            </a>
            <a href="#pricing" className="primary-btn">
              View Pricing
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="badge">AI Receptionist + Reseller Opportunity</div>

            <h1 className="mt-6 max-w-5xl text-4xl font-semibold tracking-tight md:text-6xl md:leading-[1.02]">
              Never miss another call.
              <br />
              Capture more leads.
              <br />
              <span className="gradient-text">Or build recurring income selling the solution.</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
              Reece AI helps businesses answer calls 24/7, capture leads, book appointments,
              handle common questions, and sound more professional. It is also structured to be an
              unusually easy reseller offer because the pain is obvious and the value is immediate.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#pricing" className="primary-btn">
                See Pricing
              </a>
              <a href="/resellers" className="secondary-btn">
                Explore Reseller Program
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="glass rounded-2xl p-4">
                <div className="text-2xl font-semibold">24/7</div>
                <p className="mt-1 text-sm text-white/65">Always-on call coverage</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <div className="text-2xl font-semibold">Fast</div>
                <p className="mt-1 text-sm text-white/65">Instant first response</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <div className="text-2xl font-semibold">50%</div>
                <p className="mt-1 text-sm text-white/65">Baseline reseller commission model</p>
              </div>
            </div>
          </div>

          <div className="hero-glow glass-strong rounded-[2rem] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="soft-grid rounded-[1.5rem] border border-white/10 bg-[#091224] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/45">How Reece AI performs</p>
                  <h2 className="mt-1 text-xl font-semibold">One product. Two powerful angles.</h2>
                </div>
                <div className="badge px-3 py-1 text-xs">Premium Offer</div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/35">For businesses</p>
                  <p className="mt-2 text-sm text-white/86">
                    Answer more calls, capture more leads, and sound more responsive without adding staff.
                  </p>
                </div>

                <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">For resellers</p>
                  <p className="mt-2 text-sm text-white/90">
                    Sell something owners already understand and earn recurring monthly income.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/35">Why it converts</p>
                    <p className="mt-2 text-sm text-white/82">
                      The pain is obvious. Missed calls cost money.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-indigo-300/15 bg-indigo-300/10 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-indigo-200">Why it scales</p>
                    <p className="mt-2 text-sm text-white/86">
                      Works across multiple industries that depend on inbound calls.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-emerald-300/15 bg-emerald-300/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-100">Opportunity framing</p>
                  <p className="mt-2 text-sm text-white/88">
                    Buyers see a better phone system. Resellers see recurring revenue.
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
              <p className="section-label">Why buyers care</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                Every missed call is not just inconvenient.
                <br />
                It can be lost revenue.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/75">
                The strongest AI receptionist sites sell outcomes, not novelty. This version is
                built around revenue protection, speed-to-lead, and a stronger first impression.
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
            A sharper, cleaner, more premium AI receptionist presentation.
          </h2>
          <p className="mt-4 text-white/68">
            The design is more intentional, the message is clearer, and the structure is stronger.
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
            Simple pricing that is easy to understand and easy to sell.
          </h2>
          <p className="mt-4 text-white/68">
            Cleaner presentation. Better visual hierarchy. Less clutter.
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
                <a
                  href="/resellers#contact"
                  className={plan.featured ? "primary-btn w-full" : "secondary-btn w-full"}
                >
                  Get Started
                </a>
                <a href="/resellers#calculator" className="secondary-btn w-full">
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
            <p className="section-label">Make money selling Reece AI</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl md:leading-[1.05]">
              Turn business relationships into recurring monthly income.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
              The pitch is simple because the pain is simple. Businesses lose money when calls go
              unanswered. Reece AI helps fix that, and the reseller model makes the opportunity
              easy to understand fast.
            </p>

            <div className="mt-8 grid gap-3">
              {quickSell.map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/6 px-4 py-3 text-white/84">
                  {item}
                </div>
              ))}
            </div>

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
              Better framed, less cluttered, and more premium.
            </h3>

            <div className="mt-6 space-y-3">
              {resellerReasons.map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/82">
                  {item}
                </div>
              ))}
            </div>

            <a href="/resellers#quick-links" className="secondary-btn mt-6">
              Jump into reseller page
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="max-w-2xl">
          <p className="section-label">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Questions people usually have before buying or reselling.
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
                Buy it for your business.
                <br />
                Or build recurring income selling it.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/75">
                This version is tighter, cleaner, and more persuasive without feeling chaotic.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a href="#pricing" className="primary-btn">
                View Pricing
              </a>
              <a href="/resellers#contact" className="secondary-btn">
                Apply to Resell
              </a>
            </div>
          </div>
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
