import type { Metadata } from "next";  
import "./globals.css";

export const metadata: Metadata = {
  title: "Reece AI | AI Receptionist & Reseller Program",
  description:
    "AI phone answering for modern businesses. Capture more leads, book appointments, and explore the Reece AI reseller opportunity.",
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
