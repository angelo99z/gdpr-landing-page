"use client";

import { useLanguage } from "../contexts/LanguageContext";

const testimonials = [
  {
    quote:
      "ClearConsent cut our consent banner setup from three weeks of back-and-forth with our legal team down to one afternoon. The audit log alone is worth the subscription — our DPO finally stopped asking us for manual reports.",
    author: "Franziska Hartmann",
    role: "Head of Digital, MediaHaus GmbH",
    location: "Berlin, Germany",
    rating: 5,
    initials: "FH",
    color: "bg-blue-600",
  },
  {
    quote:
      "We operate in 11 EU markets. Before ClearConsent, our compliance team managed consent banners in spreadsheets. Now everything is centralized, multilingual, and automatically syncs to our analytics stack via the API.",
    author: "Pieter van den Berg",
    role: "CTO, EuroRetail BV",
    location: "Amsterdam, Netherlands",
    rating: 5,
    initials: "PB",
    color: "bg-violet-600",
  },
  {
    quote:
      "We got a CNIL inquiry within weeks of launching our French B2C site. Thanks to ClearConsent's timestamped consent records, we responded with a complete audit trail in under 48 hours. The inquiry was closed without penalty.",
    author: "Camille Dubois",
    role: "Legal & Compliance Lead, Lumière SAS",
    location: "Lyon, France",
    rating: 5,
    initials: "CD",
    color: "bg-emerald-600",
  },
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-full text-blue-600 text-sm font-medium mb-5 shadow-sm">
            {t("testimonials.badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t("testimonials.headline")}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t_) => (
            <div
              key={t_.author}
              className="flex flex-col bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t_.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-600 text-sm leading-relaxed mb-8 flex-1">
                &ldquo;{t_.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t_.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {t_.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t_.author}</p>
                  <p className="text-xs text-slate-500">{t_.role}</p>
                  <p className="text-xs text-slate-400">{t_.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
