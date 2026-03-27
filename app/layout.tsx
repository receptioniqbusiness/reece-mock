import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reece AI | AI Receptionist, Free Trial & Reseller Program",
  description:
    "Reece AI answers calls 24/7, captures leads, books appointments, and helps businesses stop losing revenue from missed calls. Start your free trial or become a reseller.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
