export default function Home() {
  const features = [
    {
      title: "24/7 AI Answering",
      text: "Answer calls day and night, after hours, on weekends, and when your team is busy.",
    },
    {
      title: "Appointment Booking",
      text: "Book appointments and route callers without making them wait for a callback.",
    },
    {
      title: "Lead Capture",
      text: "Collect names, phone numbers, service details, and next-step intent automatically.",
    },
    {
      title: "Human-Like Conversations",
      text: "Give callers a natural voice experience that sounds polished, calm, and helpful.",
    },
    {
      title: "Business Q&A",
      text: "Handle FAQs about hours, services, pricing ranges, locations, and availability.",
    },
    {
      title: "Always-On First Impression",
      text: "Make every inbound call feel like your business is responsive, organized, and premium.",
    },
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$39",
      description: "For solo owners & small businesses.",
      features: [
        "AI phone answering",
        "Message capture",
        "Basic call handling flows",
        "Business hours + after-hours coverage",
        "Email follow-up contact routing",
      ],
      cta: "Get Starter",
      featured: false,
    },
    {
      name: "Professional",
      price: "$79",
      description: "For growing businesses.",
      features: [
        "Everything in Starter",
        "Appointment booking flows",
        "Advanced FAQ handling",
        "Lead qualification prompts",
        "Priority setup support",
      ],
      cta: "Get Professional",
      featured: true,
    },
    {
      name: "Scale",
      price: "$119",
      description: "For complex businesses.",
      features: [
        "Everything in Professional",
        "Multi-service routing logic",
        "More advanced call workflows",
        "Higher-volume use cases",
        "Custom onboarding assistance",
      ],
      cta: "Talk to Sales",
      featured: false,
    },
  ];

  const faqs = [
    {
      q: "What does Reece AI do?",
      a: "Reece AI answers inbound business calls, captures leads, handles common questions, and helps businesses respond faster without relying on a full-time receptionist.",
    },
    {
      q: "Who is this best for?",
      a: "It works especially well for service businesses, appointment-based businesses, agencies, and operators who lose revenue when calls go unanswered.",
    },
    {
      q: "Can I use this as a mock site first?",
      a: "Yes. This build is perfect for testing design, pricing presentation, reseller messaging, and demo flows before launching anything public-facing.",
    },
    {
      q: "Do I need a reseller page?",
      a: "Yes if you want agencies, consultants, or operators to resell the product. A dedicated page makes the offer clearer and gives those leads a focused path to convert.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(41,121,255,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(45,212,191,0.14),transparent_25%),linear-gradient(to_bottom,#050816,#081124,#0a1020)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-lg font-semibold tracking-tight">
            Reece AI
          </a>

          <nav className="hidden items-center gap-6 text-sm text-white/75 md:flex">
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
            <a href="/resellers" className="hover:text-white">
              Resellers
            </a>
            <a href="#faq" className="hover:text-white">
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
              className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View Pricing
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
              AI Phone Answering for Modern Businesses
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.05]">
              Never miss another call. Turn every inbound call into a better customer experience.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Reece AI answers your business phone 24/7, captures leads, books appointments,
              handles common questions, and helps your business sound responsive even when your
              team is busy.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
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

            <div className="mt-10 grid gap-4 text-sm text-white/70 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold text-white">24/7</div>
                <p className="mt-1">Always-on call coverage</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold text-white">Fast</div>
                <p className="mt-1">Instant first response</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold text-white">Scalable</div>
                <p className="mt-1">Works for growing teams</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#0b1327] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/50">Live AI Call Flow</p>
                  <h2 className="mt-1 text-xl font-semibold">How Reece handles calls</h2>
                </div>
                <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                  Always On
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">Caller</p>
                  <p className="mt-2 text-sm text-white/85">
                    “Hi, I need to schedule service for this week.”
                  </p>
                </div>

                <div className="rounded-2xl bg-cyan-400/10 p-4 ring-1 ring-cyan-400/20">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Reece AI</p>
                  <p className="mt-2 text-sm text-white/90">
                    “Absolutely — I can help with that. What day works best for you?”
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                      Captures
                    </p>
                    <p className="mt-2 text-sm text-white/85">
                      Name, phone, service need, timing, and follow-up preference.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                      Outcome
                    </p>
                    <p className="mt-2 text-sm text-white/85">
                      Faster response, better experience, fewer lost opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Core Features
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            A stronger AI receptionist experience, built to convert.
          </h2>
          <p className="mt-4 text-white/70">
            This mock version keeps the Reece AI positioning, but makes the product feel more
            premium, clearer, and easier to buy.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="rounded-[2rem] border border-cyan-400/15 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Why it wins
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Built for businesses that lose money when calls go unanswered.
              </h2>
            </div>
            <p className="text-lg leading-8 text-white/75">
              The best version of this offer is not just “AI answers calls.” It is “your business
              feels faster, more available, and more professional from the first ring.”
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Simple, transparent pricing.
          </h2>
          <p className="mt-4 text-white/70">
            A cleaner pricing presentation built around the public Reece AI tier names and prices.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] border p-8 ${
                plan.featured
                  ? "border-cyan-400/40 bg-cyan-400/10 shadow-xl shadow-cyan-950/30"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {plan.featured && (
                <div className="mb-4 inline-flex rounded-full bg-cyan-400 px-3 py-1 text-xs font-semibold text-slate-950">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p className="mt-2 text-white/60">{plan.description}</p>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-5xl font-semibold tracking-tight">{plan.price}</span>
                <span className="pb-2 text-white/50">/month</span>
              </div>

              <ul className="mt-8 space-y-3 text-sm text-white/80">
                {plan.features.map((feature) => (
                  <li key={feature} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="/resellers"
                className={`mt-8 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                  plan.featured
                    ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                    : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Reseller Opportunity
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Want to resell Reece AI?
            </h2>
            <p className="mt-4 leading-8 text-white/70">
              We added a dedicated reseller page for agencies, operators, consultants, and growth
              partners who want to sell the product and share in recurring revenue.
            </p>
            <a
              href="/resellers"
              className="mt-6 inline-flex rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
            >
              View Reseller Program
            </a>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Ready to move fast?
            </h2>
            <p className="mt-4 leading-8 text-white/70">
              Use this mock as your conversion-first version, then we can add a real form,
              calendar booking, or CRM connection next.
            </p>
            <a
              href="mailto:hello@reece.ai"
              className="mt-6 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Questions people usually have before buying.
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
