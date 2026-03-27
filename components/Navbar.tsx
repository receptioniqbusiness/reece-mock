import Link from "next/link";
import LoginButton from "./LoginButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#040914]/75 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Reece AI
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a href="#why" className="hover:text-white">Why it works</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <Link href="/resellers" className="hover:text-white">Resellers</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/resellers" className="secondary-btn hidden sm:inline-flex">
            Reseller Program
          </Link>

          <LoginButton text="Start Free Trial" />
        </div>
      </div>
    </header>
  );
}
