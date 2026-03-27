import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reece AI | AI Receptionist, 7-Day Free Trial & Reseller Program",
  description:
    "Reece AI answers calls 24/7, takes messages, books appointments, handles questions with natural conversation, and helps businesses stop losing revenue from missed calls.",
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
