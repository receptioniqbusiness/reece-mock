const plans = [
  {
    name: "Starter",
    price: "$39",
    description: "For simple call coverage.",
    featured: false,
  },
  {
    name: "Professional",
    price: "$79",
    description: "Best for most businesses.",
    featured: true,
  },
  {
    name: "Scale",
    price: "$119",
    description: "For more advanced workflows.",
    featured: false,
  },
];

const coreFeatures = [
  "Answers your business phone 24/7",
  "Takes messages",
  "Books appointments",
  "Handles questions",
  "Natural, human-like conversation",
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
    title: "Manual follow-up",
    text: "Too slow when timing matters.",
  },
  {
    title: "Reece AI",
    text: "Fast, clear, always available.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#040914]/75 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-lg font-semibold tracking-tight">
            Reece AI
          </a>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#why" className="hover:text-white">
              Why it works
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
            <a href="#reseller-promo" className="hover:text-white">
              Resellers
            </a>
            <a href="/signup" className="hover:text-white">
              Free Trial
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="/resellers" className="secondary-btn hidden sm:inline-flex">
              Reseller Program
            </a>
            <a href="/signup?plan=Professional" className="primary-btn">
              Start 7-Day Free Trial
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:pb-28 md:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="badge">AI Receptionist + Reseller Opportunity</div>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl md:leading-[0.98]">
              Every missed call is
              <br />
              <span className="gradient-text">money leaving.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
              Reece AI answers instantly, captures leads, takes messages, books appointments, and handles questions with natural conversation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/signup?plan=Professional" className="primary-btn">
                Start 7-Day Free Trial
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
                <div className="text-2xl font-semibold">Natural</div>
                <p className="mt-1 text-sm text-white/62">Human-like conversation</p>
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
                    Faster answers. Better capture. Better booking. More opportunities saved.
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

      <section id="why" className="mx-auto max-w-7xl px-6 py-6 md:py-8">
        <div className="glass rounded-[2rem] p-8 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="section-label">Why it works</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
                The problem is already there.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/74">
                You are not trying to invent a need. You are naming one businesses already feel.
              </p>
            </div>

            <div className="grid gap-3">
              {coreFeatures.map((item) => (
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
        <div className="hero-glow rounded-[2rem] border border-cyan-300/18 bg-gradient-to-br from-cyan-300/10 via-white/[0.03] to-indigo-300/10 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <p className="section-label">Reseller opportunity</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl md:leading-[1.02]">
                You do not just have to use it.
                <br />
                You can sell it.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
                Businesses already hate missed calls. That makes Reece AI easier to sell than offers that need a long explanation.
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
                <p className="text-sm text-white/62">Why it sticks</p>
                <div className="mt-2 text-2xl font-semibold">Owners already feel the pain.</div>
              </div>
              <div className="glass rounded-2xl p-5">
                <p className="text-sm text-white/62">Why it feels real</p>
                <div className="mt-2 text-2xl font-semibold">Recurring income, not one-time hype.</div>
              </div>
              <div className="glass rounded-2xl p-5">
                <p className="text-sm text-white/62">Why people act</p>
                <div className="mt-2 text-2xl font-semibold">Simple offer. Clear upside.</div>
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
