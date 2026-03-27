export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Header */}
      <header className="border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">
            Reece AI
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#demo"
              className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-50"
            >
              Book Demo
            </a>

            <a
              href="#contact"
              className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            AI Phone Answering
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 md:text-6xl">
            Never miss another call.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Reece answers your business phone 24/7, takes messages, books
            appointments, and handles customer questions with natural,
            human-like conversation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#demo"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Book a Demo
            </a>

            <a
              href="#features"
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium hover:bg-zinc-50"
            >
              See Features
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-200 p-6">
            <h3 className="text-lg font-semibold">24/7 Call Answering</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              Capture calls after hours, on weekends, and when your team is busy.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 p-6">
            <h3 className="text-lg font-semibold">Appointment Booking</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              Let callers schedule appointments without waiting for a callback.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 p-6">
            <h3 className="text-lg font-semibold">Lead Capture</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              Collect names, numbers, and inquiry details automatically.
            </p>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] bg-zinc-50 p-8 md:p-12">
          <h2 className="text-3xl font-semibold tracking-tight">
            Built for businesses that can’t afford to miss calls
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-600 leading-8">
            Ideal for service businesses, appointment-based companies, and teams
            that want faster response times without hiring full-time reception staff.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="demo" className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            Ready to test a mock version?
          </h2>

          <p className="mt-4 text-zinc-600 leading-8">
            This rebuild gives us a clean environment to safely test new layouts,
            messaging, and features before pushing anything live.
          </p>
        </div>
      </section>
    </main>
  );
}
