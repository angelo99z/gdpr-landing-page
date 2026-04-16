"use client";

import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const faqs = [
  { q: "faq.q1", a: "faq.a1" },
  { q: "faq.q2", a: "faq.a2" },
  { q: "faq.q3", a: "faq.a3" },
  { q: "faq.q4", a: "faq.a4" },
  { q: "faq.q5", a: "faq.a5" },
];

export default function FAQ() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-medium mb-5">
            {t("faq.badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t("faq.headline")}
          </h2>
          <p className="text-lg text-slate-500">{t("faq.subheadline")}</p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className={`rounded-xl border transition-all ${
                open === index ? "border-blue-200 bg-blue-50/50" : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className={`text-sm font-semibold ${open === index ? "text-blue-700" : "text-slate-900"}`}>
                  {t(faq.q)}
                </span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${
                    open === index ? "rotate-180 text-blue-600" : "text-slate-400"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === index && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-slate-600 leading-relaxed">{t(faq.a)}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
