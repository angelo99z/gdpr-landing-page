"use client";

import { useLanguage } from "../contexts/LanguageContext";

const starterFeatures = [
  "1 domain",
  "Up to 10,000 monthly visitors",
  "Cookie banner (3 templates)",
  "Consent logging (90 days)",
  "Basic GDPR reports",
  "Email support",
];

const businessFeatures = [
  "5 domains",
  "Up to 500,000 monthly visitors",
  "All banner templates + CSS editor",
  "Consent logging (unlimited)",
  "Full GDPR & audit reports",
  "GA4 & Meta Pixel integration",
  "Priority support",
];

const enterpriseFeatures = [
  "Unlimited domains",
  "Unlimited visitors",
  "Custom banner development",
  "SLA 99.9% uptime guarantee",
  "Dedicated compliance manager",
  "SSO & advanced access controls",
  "Custom DPA & contracts",
  "24/7 phone support",
];

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-medium mb-5">
            {t("pricing.badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t("pricing.headline")}
          </h2>
          <p className="text-lg text-slate-500">{t("pricing.subheadline")}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Starter */}
          <div className="relative flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6">
              <h3 className="text-base font-bold text-slate-900 mb-1">{t("pricing.starter.name")}</h3>
              <div className="flex items-end gap-1 mb-3">
                <span className="text-4xl font-extrabold text-slate-900">{t("pricing.starter.price")}</span>
                <span className="text-slate-500 text-sm mb-1">/{t("pricing.monthly")}</span>
              </div>
              <p className="text-sm text-slate-500">{t("pricing.starter.desc")}</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {starterFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#faq"
              className="block text-center py-3 px-6 rounded-full border-2 border-blue-600 text-blue-600 font-semibold text-sm hover:bg-blue-50 transition-colors"
            >
              {t("pricing.starter.cta")}
            </a>
          </div>

          {/* Business — highlighted */}
          <div className="relative flex flex-col rounded-2xl bg-blue-600 p-8 shadow-xl shadow-blue-200">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="px-4 py-1 bg-blue-900 text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-lg">
                {t("pricing.business.badge")}
              </span>
            </div>
            <div className="mb-6">
              <h3 className="text-base font-bold text-white mb-1">{t("pricing.business.name")}</h3>
              <div className="flex items-end gap-1 mb-3">
                <span className="text-4xl font-extrabold text-white">{t("pricing.business.price")}</span>
                <span className="text-blue-200 text-sm mb-1">/{t("pricing.monthly")}</span>
              </div>
              <p className="text-sm text-blue-200">{t("pricing.business.desc")}</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {businessFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-blue-100">
                  <svg className="w-4 h-4 text-blue-300 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#faq"
              className="block text-center py-3 px-6 rounded-full bg-white text-blue-600 font-semibold text-sm hover:bg-blue-50 transition-colors shadow-md"
            >
              {t("pricing.business.cta")}
            </a>
          </div>

          {/* Enterprise */}
          <div className="relative flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6">
              <h3 className="text-base font-bold text-slate-900 mb-1">{t("pricing.enterprise.name")}</h3>
              <div className="flex items-end gap-1 mb-3">
                <span className="text-4xl font-extrabold text-slate-900">{t("pricing.enterprise.price")}</span>
              </div>
              <p className="text-sm text-slate-500">{t("pricing.enterprise.desc")}</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {enterpriseFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="mailto:sales@clearconsent.eu"
              className="block text-center py-3 px-6 rounded-full border-2 border-slate-900 text-slate-900 font-semibold text-sm hover:bg-slate-50 transition-colors"
            >
              {t("pricing.enterprise.cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
