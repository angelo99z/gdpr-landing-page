"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const columns = [
    {
      labelKey: "footer.product",
      links: [
        { labelKey: "footer.features", href: "#features" },
        { labelKey: "footer.pricing", href: "#pricing" },
        { labelKey: "nav.testimonials", href: "#testimonials" },
        { labelKey: "nav.faq", href: "#faq" },
      ],
    },
    {
      labelKey: "footer.company",
      links: [
        { labelKey: "nav.faq", href: "#faq" },
        { labelKey: "footer.contact", href: "mailto:hello@clearconsent.eu" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2L14.196 5V11L9 14L3.804 11V5L9 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M9 6L11 9L9 12L7 9L9 6Z" fill="white" />
                </svg>
              </div>
              <span className="font-bold text-lg text-white">ClearConsent</span>
            </a>
            <p className="text-sm leading-relaxed">{t("footer.tagline")}</p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.labelKey}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-4">
                {t(col.labelKey)}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.labelKey}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {t(link.labelKey)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs">{t("footer.copyright")}</p>
          <div className="flex items-center gap-1.5 text-xs">
            <svg className="w-3.5 h-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {t("footer.madeIn")}
          </div>
        </div>
      </div>
    </footer>
  );
}
