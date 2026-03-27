"use client";

import { signIn } from "next-auth/react";

export default function LoginButton({
  text = "Start Free with Google",
}: {
  text?: string;
}) {
  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/welcome" })}
      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition w-full sm:w-auto"
    >
      {text}
    </button>
  );
}
