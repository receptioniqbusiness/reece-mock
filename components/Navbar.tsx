import Link from "next/link";
import LoginButton from "./LoginButton";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 border-b border-white/10">
      <Link href="/" className="text-xl font-bold">
        Reece
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/resellers" className="text-sm opacity-80 hover:opacity-100">
          Resellers
        </Link>

        <LoginButton text="Start Free" />
      </div>
    </nav>
  );
}
