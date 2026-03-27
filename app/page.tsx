const features = [
  {
    title: "24/7 AI Call Answering",
    text: "Reece AI answers business calls around the clock so leads do not hit voicemail, wait too long, or disappear while your team is busy.",
  },
  {
    title: "Lead Capture",
    text: "Capture names, phone numbers, service requests, urgency, and next-step details automatically instead of losing opportunities.",
  },
  {
    title: "Appointment Booking",
    text: "Help callers move forward faster with booking and intake flows that reduce delay and increase conversion.",
  },
  {
    title: "Natural Conversations",
    text: "Create a cleaner customer experience with conversations designed to feel calm, clear, and helpful.",
  },
  {
    title: "FAQ Handling",
    text: "Answer common questions like hours, services, availability, and basic business information automatically.",
  },
  {
    title: "Better First Impressions",
    text: "Make your business sound more responsive, organized, and premium from the first ring.",
  },
];

const buyerOutcomes = [
  "Capture more inbound opportunities",
  "Respond faster without adding headcount",
  "Look more professional to new callers",
  "Reduce after-hours lead loss",
];

const pricing = [
  {
    name: "Starter",
    price: "$39",
    description: "For solo owners and small businesses.",
    bestFor: "Simple answering and lead capture",
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
    bestFor: "Booking, FAQs, and stronger intake",
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
    description: "For more advanced business workflows.",
    bestFor: "Higher volume and more complexity",
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
    text: "Useful, but typically much more expensive and harder to keep available all the time.",
  },
  {
    title: "Reece AI",
    text: "Always on, lead-focused, easier to scale, and designed to help businesses capture more opportunity.",
  },
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
  "Recurring revenue potential",
  "Works for agencies, freelancers, and side hustlers",
  "Can start with referrals before becoming more hands-on",
];

const resellerExamples = [
  {
    title: "Local connector",
    text: "Know a few owners in your city? That can be enough to start.",
  },
  {
    title: "Freelancer upsell",
    text: "Already building websites, running ads, or doing automation? Add Reece AI.",
  },
  {
    title: "Agency growth lever",
    text: "Turn your client base into a software-style recurring revenue stream.",
  },
];

const pitchScripts = [
  {
    title: "Simple opener",
    text: "Hey — quick question. Do you ever miss calls when things get busy?",
  },
  {
    title: "Fast follow-up",
    text: "I have something that helps businesses answer calls 24/7 and capture more leads.",
  },
  {
    title: "DM version",
    text: "Quick question — are you currently capturing every inbound call, even after hours?",
  },
  {
    title: "Email hook",
    text: "Subject: Quick question about missed calls",
  },
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
    q: "Can I start small as a reseller?",
    a: "Yes. Even a few strong business contacts can be enough to start with simple referrals.",
  },
];

const proofPlaceholders = [
  {
    title: "Built for lead capture",
    text: "Designed around the outcome buyers actually care about: more opportunities captured.",
  },
  {
    title: "Easy to understand",
    text: "The pain is obvious, which makes both buying and reselling easier.",
  },
  {
    title: "Scales with the business",
    text: "A stronger fit than generic voicemail or inconsistent phone coverage.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06101f]/75 backdrop-blur">
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

      <section className="section-fade mx-auto max-w-7xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="badge">
              <span>AI Receptionist + Reseller Opportunity</span>
            </div>

            <h1 className="prose-balance mt-6 max-w-5xl text-4xl font-semibold tracking-tight md:text-6xl md:leading-[1.03]">
              Never miss another call.
              <br />
              Capture more leads.
              <br />
              <span className="bg-gradient-to-r from-cyan-200 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                Or make money selling the solution.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              Reece AI helps businesses answer calls 24/7, capture leads, book appointments,
              handle common questions, and sound more professional. It is also built to be an
              easy-to-understand reseller offer for anyone who knows business owners.
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
                <div className="text-2xl font-semibold">Recurring</div>
                <p className="mt-1 text-sm text-white/65">Built for monthly revenue</p>
              </div>
            </div>
          </div>

          <div className="glass accent-ring rounded-[2rem] p-6 shadow-2xl">
            <div className="soft-grid rounded-[1.5rem] border border-white/10 bg-[#0a1326] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/45">Live AI Call Flow</p>
                  <h2 className="mt-1 text-xl font-semibold">How Reece handles calls</h2>
                </div>
                <div className="badge px-3 py-1 text-xs">Always On</div>
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
                      Name, phone, service type, timing, and follow-up details.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/35">Outcome</p>
                    <p className="mt-2 text-sm text-white/82">
                      Better experience, less lead loss, and more opportunities saved.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-indigo-300/15 bg-indigo-300/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-indigo-200">
                    Why it sells
                  </p>
                  <p className="mt-2 text-sm text-white/88">
                    The pitch is easy because missed calls are expensive and business owners
                    already know it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="glass rounded-[2rem] p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="section-label">Why buyers care</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                Every missed call is not just inconvenience.
                <br />
                It can be lost revenue.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/74">
                The strongest AI receptionist offers are not about novelty. They are about
                protecting revenue, improving response speed, and making the business feel more
                available.
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
            A premium AI receptionist experience built to convert.
          </h2>
          <p className="mt-4 text-white/68">
            This version is designed to feel more premium, more outcome-driven, and easier to buy.
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

      <section className="mx-auto max-w-7xl px-6 py-4 md:py-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {proofPlaceholders.map((item) => (
            <div key={item.title} className="glass rounded-[1.5rem] p-6">
              <p className="section-label">Why it works</p>
              <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
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
              That is what makes the product strong and the reseller angle easy to explain.
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
                Start with the markets where calls directly connect to appointments, service jobs,
                consultations, or qualified inbound leads.
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
            Clear offers reduce friction for both buyers and resellers.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] border p-8 ${
                plan.featured
                  ? "accent-ring bg-cyan-300/10"
                  : "glass"
              }`}
            >
              {plan.featured && (
                <div className="mb-4 inline-flex rounded-full bg-cyan-300 px-3 py-1 text-xs font-semibold text-slate-950">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p className="mt-2 text-white/60">{plan.description}</p>
              <p className="mt-2 text-sm text-cyan-100/85">Best for: {plan.bestFor}</p>

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
              You do not need to be a tech expert. If you know business owners, agencies,
              contractors, med spas, local operators, or service companies, you already have a way
              into this opportunity.
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
              A very easy offer to understand and introduce.
            </h3>

            <div className="mt-6 space-y-3">
              {resellerReasons.map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/82">
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

            <a href="/resellers#contact" className="secondary-btn mt-6">
              Apply as a Reseller
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 md:py-10">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass rounded-[2rem] p-8">
            <p className="section-label">Who this is for</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Agencies, freelancers, consultants, closers, and local connectors.
            </h2>
            <p className="mt-4 leading-8 text-white/72">
              The reseller page is intentionally framed so regular people with business
              relationships can imagine themselves succeeding with it.
            </p>
            <a href="/resellers" className="primary-btn mt-6">
              View reseller page
            </a>
          </div>

          <div className="rounded-[2rem] border border-indigo-300/15 bg-gradient-to-br from-indigo-300/10 to-cyan-300/10 p-8">
            <p className="section-label">How to pitch it</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Give people words they can use immediately.
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {pitchScripts.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-[#0b1327] p-5">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/75">{item.text}</p>
                </div>
              ))}
            </div>

            <a href="/resellers#scripts" className="secondary-btn mt-6">
              See full scripts
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
        <div className="accent-ring rounded-[2rem] bg-gradient-to-br from-cyan-300/12 to-indigo-300/12 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="section-label">Final call to action</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                Buy it for your business.
                <br />
                Or build recurring income selling it.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/75">
                This version is structured to support both paths cleanly without making the site
                feel messy.
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
