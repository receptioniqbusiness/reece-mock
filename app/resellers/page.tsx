export default function ResellersPage() {
  const benefits = [
    "Sell a product with strong recurring revenue potential",
    "Use Reece AI as a value-add for clients who miss inbound calls",
    "Position yourself as the growth partner, not just the referrer",
    "Expand your offer without building the voice AI product yourself",
  ];

  const included = [
    "Sales support for qualified opportunities",
    "Messaging guidance and offer positioning",
    "Simple onboarding path for referred or closed accounts",
    "A clean recurring revenue model to discuss with prospects",
  ];

  const splitExamples = [
    {
      title: "Referral Model",
      text: "You introduce the client, we close and onboard them, and you receive an ongoing revenue share.",
    },
    {
      title: "Closer / Agency Model",
      text: "You source and close the client, we fulfill the core product, and you participate in a stronger recurring split.",
    },
    {
      title: "White-Glove Growth Partner",
      text: "You wrap Reece AI into your service stack, own the client relationship, and use profit margin as part of your monthly retainer.",
    },
  ];

  const faqs = [
    {
      q: "Who is the reseller program best for?",
      a: "Agencies, consultants, lead-gen teams, appointment setters, local business growth operators, and anyone already selling services to businesses that miss calls.",
    },
    {
      q: "How does profit split work?",
      a: "The exact split can be tailored by deal type, but the cleanest structure is recurring monthly revenue share based on whether you refer, close, or fully manage the client relationship.",
    },
    {
      q: "Do I need to support the product technically?",
      a: "Not necessarily. The strongest offer for most partners is to focus on sourcing and selling while the core setup and fulfillment are handled centrally.",
    },
    {
      q: "Can I use this for my own clients under my service offer?",
      a: "Yes. Many partners use AI phone answering as a retention, upsell, or margin expansion play inside their existing services.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(41,121,255,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(45,212,191,0.14),transparent_25%),linear-gradient(to_bottom,#050816,#081124,#0a1020)]" />

      <header className="border-b border-white/10 bg-[#050816]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-lg font-semibold tracking-tight">
            Reece AI
          </a>

          <div className="flex items-center gap-3">
            <a
              href="/"
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/5"
            >
              Back to Home
            </a>
            <a
              href="#contact"
              className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Apply Now
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-14 pt-20 md:pb-20 md:pt-28">
        <div className="max-w-4xl">
          <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Reece AI Reseller Program
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl md:leading-[1.05]">
            Sell Reece AI to your clients and participate in recurring revenue.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            This page is designed for agencies, operators, consultants, and growth partners who
            want to resell AI phone answering, create monthly recurring revenue, and bring a
            stronger offer to their clients.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <div className="text-3xl font-semibold text-cyan-300">MRR</div>
            <p className="mt-2 text-white/70">Build recurring revenue instead of one-time fees.</p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <div className="text-3xl font-semibold text-cyan-300">Upsell</div>
            <p className="mt-2 text-white/70">Add a high-value offer to existing client accounts.</p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <div className="text-3xl font-semibold text-cyan-300">Retention</div>
            <p className="mt-2 text-white/70">Make your client relationships stickier over time.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Why partners like it
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Why resell this offer?</h2>

            <ul className="mt-6 space-y-3">
              {benefits.map((item) => (
                <li key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              What’s included
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              A simple partner structure that works.
            </h2>

            <ul className="mt-6 space-y-3">
              {included.map((item) => (
                <li key={item} className="rounded-xl border border-white/10 bg-[#0c1730] px-4 py-3 text-white/85">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Profit Split
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Use a simple split model people understand fast.
          </h2>
          <p className="mt-4 text-white/70">
            The best mock version is not overcomplicated. Show the economics clearly, then move
            serious prospects into a conversation.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {splitExamples.map((item) => (
            <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/70">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-8">
          <h3 className="text-2xl font-semibold">Example economics</h3>
          <p className="mt-4 max-w-3xl leading-8 text-white/75">
            Example only: if a client comes in on a monthly plan, the reseller can receive a
            recurring share for the life of the account based on role in the sale. Referral-only
            deals can be lighter. Closed-and-managed deals can justify a stronger split.
          </p>
          <p className="mt-4 text-sm text-white/50">
            Replace this section later with your exact partner percentages once you decide the model.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Simple 4-step reseller flow
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["1", "Apply", "Tell us about your audience, clients, and how you plan to sell."],
              ["2", "Get approved", "We align on fit, positioning, and the best reseller model."],
              ["3", "Bring deals", "Refer or close clients using the Reece AI offer."],
              ["4", "Earn monthly", "Participate in recurring revenue as accounts stay active."],
            ].map(([num, title, text]) => (
              <div key={title} className="rounded-[1.5rem] border border-white/10 bg-[#0b1327] p-6">
                <div className="text-3xl font-semibold text-cyan-300">{num}</div>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-white/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Apply to become a reseller
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/70">
            This is a mock contact form layout. Later we can connect this to Formspree, Resend,
            HubSpot, or your CRM.
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
                placeholder="Company / Agency name"
                className="rounded-2xl border border-white/10 bg-[#0b1327] px-4 py-3 text-white outline-none placeholder:text-white/35"
              />
              <input
                type="text"
                placeholder="Website or social profile"
                className="rounded-2xl border border-white/10 bg-[#0b1327] px-4 py-3 text-white outline-none placeholder:text-white/35"
              />
            </div>

            <textarea
              placeholder="Tell us about your audience, how you plan to sell Reece AI, and your preferred profit split model."
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
            Common reseller questions
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
