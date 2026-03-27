const plans = [
  {
    name: "Starter",
    price: "$39",
    description: "For solo operators and simple call coverage.",
    featured: false,
    fit: "Best for low call volume",
    bullets: [
      "24/7 answering",
      "Message capture",
      "Basic appointment handling",
      "Common question handling",
    ],
  },
  {
    name: "Professional",
    price: "$79",
    description: "Best for most businesses that want lead capture and booking.",
    featured: true,
    fit: "Best for growing service businesses",
    bullets: [
      "Everything in Starter",
      "Lead qualification",
      "Booking + rescheduling",
      "After-hours coverage",
    ],
  },
  {
    name: "Scale",
    price: "$119",
    description: "For advanced workflows, multiple locations, and more call complexity.",
    featured: false,
    fit: "Best for higher-volume teams",
    bullets: [
      "Everything in Professional",
      "Routing logic",
      "Multi-location handling",
      "Escalation paths",
    ],
  },
];

const proofChips = [
  "Answers 24/7",
  "Books appointments",
  "Captures leads",
  "Handles FAQs",
  "Routes urgent calls",
  "Works after hours",
];

const featurePillars = [
  {
    title: "Never miss another revenue call",
    text: "Reece AI answers instantly so new leads do not hit voicemail, ring out, or vanish while your team is busy.",
  },
  {
    title: "Book, qualify, and move callers forward",
    text: "Take messages, qualify intent, answer common questions, and book appointments in a single conversation.",
  },
  {
    title: "Handle real-world business scenarios",
    text: "Overflow, after-hours calls, multi-location routing, service questions, and handoff when a human is needed.",
  },
  {
    title: "Feel fast, natural, and on-brand",
    text: "Clear responses, structured intake, and consistent language that makes callers feel looked after instead of stuck in a menu.",
  },
];

const scenarios = [
  {
    eyebrow: "After hours",
    title: "Someone calls at 8:47 PM",
    text: "Reece answers, explains availability, captures the need, and books or schedules a callback instead of losing the lead overnight.",
  },
  {
    eyebrow: "Busy team",
    title: "Your staff cannot grab the phone",
    text: "Reece handles the first conversation, collects key details, and protects the opportunity while your team stays focused.",
  },
  {
    eyebrow: "FAQ-heavy businesses",
    title: "The caller has the same questions you hear every day",
    text: "Hours, service area, basic pricing context, policies, and next steps can be handled instantly instead of interrupting your team.",
  },
  {
    eyebrow: "Higher urgency",
    title: "The caller needs the right person now",
    text: "Reece can route, escalate, and pass context forward so the next step feels smooth instead of frustrating.",
  },
];

const useCases = [
  "Home services",
  "Med spas and clinics",
  "Legal and professional services",
  "Real estate teams",
  "Automotive and local businesses",
  "Any business losing inbound opportunities",
];

const comparison = [
  {
    title: "Missed calls",
    text: "Revenue disappears quietly while nobody notices the cost in real time.",
  },
  {
    title: "Voicemail",
    text: "Most callers do not wait around to leave one when another business is one tap away.",
  },
  {
    title: "Manual follow-up",
    text: "By the time someone responds, urgency is gone and trust is lower.",
  },
  {
    title: "Reece AI",
    text: "Answers immediately, captures context, and keeps the conversation moving.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Connect your business line",
    text: "Use your current number and route calls into Reece AI without forcing a complicated rebuild of your workflow.",
  },
  {
    step: "02",
    title: "Train it on your business",
    text: "Give it your hours, services, FAQs, rules, and handoff logic so the answers match how your business actually runs.",
  },
  {
    step: "03",
    title: "Start capturing more opportunities",
    text: "Reece answers, qualifies, books, routes, and follows up so your front desk no longer becomes a bottleneck.",
  },
];

const trustBlocks = [
  {
    title: "Made for real businesses",
    text: "This is positioned around practical business outcomes: answered calls, captured leads, better booking, and less interruption.",
  },
  {
    title: "Built for operational clarity",
    text: "The strongest AI receptionist sites explain what happens during real calls. Yours now does the same instead of staying abstract.",
  },
  {
    title: "Designed to feel premium and safe",
    text: "Cleaner hierarchy, calmer color contrast, stronger spacing, and more structured sections create more trust at first glance.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(4,9,20,0.72)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-lg font-semibold tracking-tight">
            Reece AI
          </a>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#product" className="hover:text-white">
              Product
            </a>
            <a href="#how-it-works" className="hover:text-white">
              How it works
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
            <a href="#reseller-promo" className="hover:text-white">
              Resellers
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="/resellers" className="secondary-btn hidden sm:inline-flex">
              Reseller Program
            </a>
            <a href="/signup?plan=Professional" className="primary-btn">
              Start Free Trial
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:pb-28 md:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <div className="badge">AI Receptionist for Businesses That Cannot Afford Missed Calls</div>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl md:leading-[0.96]">
              Never miss another
              <br />
              <span className="gradient-text">revenue call.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
              Reece AI answers your business phone 24/7, captures leads, books appointments,
              handles questions, routes urgent calls, and keeps opportunities moving even when
              your team is busy or offline.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/signup?plan=Professional" className="primary-btn">
                Start 7-Day Free Trial
              </a>
              <a href="#product" className="secondary-btn">
                See What It Actually Does
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {proofChips.map((chip) => (
                <div key={chip} className="quick-chip">
                  {chip}
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="glass rounded-2xl p-4">
                <div className="text-2xl font-semibold">24/7</div>
                <p className="mt-1 text-sm text-white/62">Always answering, even after hours</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <div className="text-2xl font-semibold">Fast</div>
                <p className="mt-1 text-sm text-white/62">Immediate first response for inbound leads</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <div className="text-2xl font-semibold">Clear</div>
                <p className="mt-1 text-sm text-white/62">Structured handoff, capture, and routing</p>
              </div>
            </div>
          </div>

          <div className="hero-glow glass-strong rounded-[2rem] p-6 shadow-[0_35px_100px_rgba(0,0,0,0.38)]">
            <div className="soft-grid rounded-[1.5rem] border border-white/10 bg-[#091224] p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="section-label">Live call flow</p>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-100">
                  Always On
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/35">Caller</p>
                  <p className="mt-2 text-sm text-white/86">
                    “Hi, I’m trying to book something for this week and wanted to know if you
                    service my area.”
                  </p>
                </div>

                <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Reece AI</p>
                  <p className="mt-2 text-sm text-white/90">
                    “Absolutely — I can help with that. What service do you need, and what ZIP code
                    are you located in?”
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/35">Captured</p>
                  <div className="mt-3 grid gap-2 text-sm text-white/82 sm:grid-cols-2">
                    <div className="rounded-xl border border-white/10 bg-[#0b1327] px-3 py-2">Lead captured</div>
                    <div className="rounded-xl border border-white/10 bg-[#0b1327] px-3 py-2">Question answered</div>
                    <div className="rounded-xl border border-white/10 bg-[#0b1327] px-3 py-2">Appointment path opened</div>
                    <div className="rounded-xl border border-white/10 bg-[#0b1327] px-3 py-2">Team interruption avoided</div>
                  </div>
                </div>

                <div className="rounded-2xl border border-emerald-300/15 bg-emerald-300/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-100">Business outcome</p>
                  <p className="mt-2 text-sm text-white/88">
                    The opportunity moves forward instead of disappearing into voicemail or a delayed callback.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="mx-auto max-w-7xl px-6 py-6 md:py-8">
        <div className="glass rounded-[2rem] p-8 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div>
              <p className="section-label">Why this converts</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
                The problem is already there.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/74">
                You are not trying to invent a need. You are naming one businesses already feel:
                missed calls, delayed answers, lost leads, and front-desk overload.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {featurePillars.map((item) => (
                  <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-white/70">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                Answers your business phone 24/7
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                Takes messages and captures lead details
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                Books appointments and handles basic scheduling
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                Handles common questions about your business
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                Routes urgent calls and escalates when needed
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                Supports overflow and after-hours coverage
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                Preserves context so callers do not have to repeat themselves
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="rounded-[2rem] border border-indigo-300/15 bg-gradient-to-br from-indigo-300/10 via-white/[0.03] to-cyan-300/10 p-8 md:p-12">
          <div className="max-w-3xl">
            <p className="section-label">Real scenarios</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              The website should show how the product behaves, not just what it claims.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {scenarios.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-[#0b1327] p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{item.eyebrow}</p>
                <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 md:py-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="glass rounded-[2rem] p-8 md:p-10">
            <p className="section-label">Built for inbound businesses</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Where Reece AI fits best.
            </h2>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {useCases.map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-4">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-cyan-300/16 bg-gradient-to-br from-cyan-300/10 to-emerald-300/10 p-8 md:p-10">
            <p className="section-label">What changes operationally</p>
            <div className="mt-4 grid gap-4">
              <div className="glass rounded-2xl p-5">
                <p className="text-sm text-white/62">Before</p>
                <div className="mt-2 text-2xl font-semibold">Interruptions, voicemail, delayed follow-up, dropped opportunities.</div>
              </div>
              <div className="glass rounded-2xl p-5">
                <p className="text-sm text-white/62">After</p>
                <div className="mt-2 text-2xl font-semibold">Consistent answering, better capture, more bookings, clearer handoff.</div>
              </div>
              <div className="glass rounded-2xl p-5">
                <p className="text-sm text-white/62">What the buyer feels</p>
                <div className="mt-2 text-2xl font-semibold">“This is practical, premium, and easier to trust.”</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="glass rounded-[2rem] p-8 md:p-10">
          <div className="max-w-3xl">
            <p className="section-label">Comparison</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              The old ways feel weaker the second you compare them.
            </h2>
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

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] via-white/[0.03] to-white/[0.04] p-8 md:p-12">
          <div className="max-w-3xl">
            <p className="section-label">How it works</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Simple setup. Immediate value.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {processSteps.map((item) => (
              <div key={item.step} className="glass rounded-[1.5rem] p-6">
                <div className="text-sm font-semibold tracking-[0.22em] text-cyan-200">{item.step}</div>
                <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {trustBlocks.map((item) => (
            <div key={item.title} className="glass rounded-[2rem] p-8">
              <p className="section-label">Trust</p>
              <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-7 text-white/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="max-w-2xl">
          <p className="section-label">Pricing</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Low friction. Clear decision.
          </h2>
          <p className="mt-4 leading-8 text-white/72">
            Keep pricing simple, but make each tier feel operationally useful rather than arbitrary.
          </p>
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

              <div className="text-sm uppercase tracking-[0.18em] text-white/48">{plan.fit}</div>
              <h3 className="mt-3 text-2xl font-semibold">{plan.name}</h3>
              <p className="mt-2 text-sm text-cyan-100/80">{plan.description}</p>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-5xl font-semibold tracking-tight">{plan.price}</span>
                <span className="pb-2 text-white/45">/month</span>
              </div>

              <div className="mt-6 grid gap-2">
                {plan.bullets.map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/86">
                    {item}
                  </div>
                ))}
              </div>

              <a
                href={`/signup?plan=${encodeURIComponent(plan.name)}`}
                className={plan.featured ? "primary-btn mt-8 w-full" : "secondary-btn mt-8 w-full"}
              >
                Start Free Trial
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="reseller-promo" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="hero-glow rounded-[2rem] border border-cyan-300/18 bg-gradient-to-br from-cyan-300/10 via-white/[0.03] to-emerald-300/10 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <p className="section-label">Reseller opportunity</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl md:leading-[1.02]">
                Use it yourself.
                <br />
                Or sell one obvious fix.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
                Businesses already hate missed calls. That makes Reece AI easier to sell than
                offers that need a long explanation. Keep the homepage product-first, then let
                interested buyers discover the reseller path.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/resellers" className="primary-btn">
                  Become a Reseller
                </a>
                <a href="/resellers#calculator" className="secondary-btn">
                  See Earnings Calculator
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="glass rounded-2xl p-5">
                <p className="text-sm text-white/62">Why it closes</p>
                <div className="mt-2 text-2xl font-semibold">Owners already feel the pain.</div>
              </div>
              <div className="glass rounded-2xl p-5">
                <p className="text-sm text-white/62">Why it feels valuable</p>
                <div className="mt-2 text-2xl font-semibold">Recurring software revenue, not one-time hype.</div>
              </div>
              <div className="glass rounded-2xl p-5">
                <p className="text-sm text-white/62">Why it fits your brand</p>
                <div className="mt-2 text-2xl font-semibold">Premium product path. Separate income path.</div>
              </div>
            </div>
          </div>
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
              <p className="mt-4 max-w-2xl leading-8 text-white/72">
                Keep the last action simple. One clear primary CTA. One clear secondary path.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a href="/signup?plan=Professional" className="primary-btn">
                Start 7-Day Free Trial
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
            <a href="/signup" className="hover:text-white">
              Free Trial
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
