import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ClearConsent — GDPR Cookie Consent Made Simple",
  description:
    "ClearConsent helps European businesses collect, manage, and audit cookie consent effortlessly. Stay GDPR compliant with automated cookie scanning, consent logging, and one-click reports.",
  keywords: "GDPR, cookie consent, compliance, DSGVO, ePrivacy, consent management",
  openGraph: {
    title: "ClearConsent — GDPR Cookie Consent Made Simple",
    description:
      "Stay GDPR compliant with automated cookie scanning, consent logging, and one-click audit reports.",
    type: "website",
    locale: "en_EU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
