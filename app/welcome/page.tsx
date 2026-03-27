import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function WelcomePage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const session = await auth();
  if (!session) redirect("/signup");

  const params = await searchParams;
  const plan = params.plan || "Professional";

  return (
    <main className="min-h-screen text-white">
      <div className="mx-auto flex min-h-screen max-w-5xl items-center px-6 py-16">
        <div className="hero-glow glass-strong w-full rounded-[2rem] p-8 md:p-12">
          <div className="badge">You’re in</div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
            Welcome to Reece AI
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/76">
            Your selected plan: <span className="font-semibold text-cyan-200">{plan}</span>.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="glass rounded-2xl p-5">
              <h2 className="text-xl font-semibold">Next step 1</h2>
              <p className="mt-2 text-white/70">Connect your business details.</p>
            </div>
            <div className="glass rounded-2xl p-5">
              <h2 className="text-xl font-semibold">Next step 2</h2>
              <p className="mt-2 text-white/70">Choose what Reece AI should handle.</p>
            </div>
            <div className="glass rounded-2xl p-5">
              <h2 className="text-xl font-semibold">Next step 3</h2>
              <p className="mt-2 text-white/70">Launch and start capturing more calls.</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/" className="primary-btn">
              Back to home
            </a>
            <a href="/resellers" className="secondary-btn">
              View reseller program
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
