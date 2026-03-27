"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  const plan = searchParams.get("plan") || "Professional";
  const callbackUrl = `/welcome?plan=${encodeURIComponent(plan)}`;

  async function handleGoogleSignIn() {
    setLoading(true);
    await signIn("google", { callbackUrl });
  }

  return (
    <main className="min-h-screen text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-16">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="badge">7-Day Free Trial</div>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl md:leading-[1.02]">
              Start your free trial
              <br />
              <span className="gradient-text">in one click.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
              Continue with Google to start your {plan} trial and move into onboarding.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="glass rounded-2xl p-4">
                <div className="text-xl font-semibold">24/7</div>
                <p className="mt-1 text-sm text-white/62">Business phone answering</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <div className="text-xl font-semibold">Leads</div>
                <p className="mt-1 text-sm text-white/62">Message taking and capture</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <div className="text-xl font-semibold">Bookings</div>
                <p className="mt-1 text-sm text-white/62">Appointments and questions handled</p>
              </div>
            </div>
          </div>

          <div className="hero-glow glass-strong rounded-[2rem] p-8">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#091224] p-6">
              <p className="section-label">Selected plan</p>
              <h2 className="mt-3 text-3xl font-semibold">{plan}</h2>
              <p className="mt-3 text-white/70">
                Sign in with Google to continue.
              </p>

              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="primary-btn mt-8 w-full"
              >
                {loading ? "Redirecting..." : "Continue with Google"}
              </button>

              <a href="/" className="secondary-btn mt-4 w-full">
                Back to home
              </a>

              <p className="mt-6 text-sm text-white/50">
                After sign-in, you’ll land on a welcome page with your chosen plan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
