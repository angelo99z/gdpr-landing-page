"use client";

import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { key: "nav.features", href: "#features" },
    { key: "nav.pricing", href: "#pricing" },
    { key: "nav.testimonials", href: "#testimonials" },
    { key: "nav.faq", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/60">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition-colors">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 2L14.196 5V11L9 14L3.804 11V5L9 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M9 6L11 9L9 12L7 9L9 6Z" fill="white" />
              </svg>
            </div>
            <span className="font-bold text-lg text-slate-900 tracking-tight">ClearConsent</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {t(link.key)}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex items-center bg-slate-100 rounded-full p-0.5 text-sm font-medium">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-full transition-all ${
                  language === "en"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("de")}
                className={`px-3 py-1 rounded-full transition-all ${
                  language === "de"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                DE
              </button>
            </div>

            <a
              href="#pricing"
              className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-sm"
            >
              {t("nav.getStarted")}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              {t(link.key)}
            </a>
          ))}
          <div className="pt-3 pb-1 flex items-center justify-between">
            <div className="flex items-center bg-slate-100 rounded-full p-0.5 text-sm font-medium">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-full transition-all ${
                  language === "en" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("de")}
                className={`px-3 py-1 rounded-full transition-all ${
                  language === "de" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"
                }`}
              >
                DE
              </button>
            </div>
            <a
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors"
            >
              {t("nav.getStarted")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
