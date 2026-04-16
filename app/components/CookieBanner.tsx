"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

type ConsentState = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export default function CookieBanner() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem("cc_consent");
    if (!saved) {
      // Show banner after a brief delay so page loads first
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const save = (state: ConsentState) => {
    localStorage.setItem("cc_consent", JSON.stringify({ ...state, timestamp: Date.now() }));
    setVisible(false);
    setShowCustomize(false);
  };

  const acceptAll = () => save({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () => save({ necessary: true, analytics: false, marketing: false });
  const savePreferences = () => save(consent);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6">
      <div className="max-w-2xl mx-auto sm:mx-0 sm:max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {!showCustomize ? (
          <div className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-1.488-.27-2.913-.764-4.236A11.955 11.955 0 0012.75 3V2.714z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">{t("cookie.title")}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{t("cookie.description")}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={acceptAll}
                className="flex-1 py-2.5 px-4 bg-blue-600 text-white text-xs font-semibold rounded-full hover:bg-blue-700 transition-colors"
              >
                {t("cookie.acceptAll")}
              </button>
              <button
                onClick={() => setShowCustomize(true)}
                className="flex-1 py-2.5 px-4 border border-slate-200 text-slate-700 text-xs font-semibold rounded-full hover:bg-slate-50 transition-colors"
              >
                {t("cookie.customize")}
              </button>
              <button
                onClick={rejectAll}
                className="flex-1 py-2.5 px-4 text-slate-500 text-xs font-medium rounded-full hover:text-slate-700 hover:bg-slate-50 transition-colors"
              >
                {t("cookie.rejectAll")}
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-slate-900 text-sm">{t("cookie.customize")}</h3>
              <button
                onClick={() => setShowCustomize(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-3 mb-5">
              {[
                { key: "necessary" as const, label: t("cookie.necessary"), locked: true },
                { key: "analytics" as const, label: t("cookie.analytics"), locked: false },
                { key: "marketing" as const, label: t("cookie.marketing"), locked: false },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between py-2.5 border-b border-slate-100 last:border-0">
                  <span className="text-sm font-medium text-slate-700">{item.label}</span>
                  <button
                    disabled={item.locked}
                    onClick={() =>
                      !item.locked &&
                      setConsent((prev) => ({ ...prev, [item.key]: !prev[item.key] }))
                    }
                    className={`relative inline-flex w-10 h-5 rounded-full transition-colors focus:outline-none ${
                      consent[item.key] ? "bg-blue-600" : "bg-slate-200"
                    } ${item.locked ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
                    aria-label={item.label}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${
                        consent[item.key] ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={savePreferences}
                className="flex-1 py-2.5 px-4 bg-blue-600 text-white text-xs font-semibold rounded-full hover:bg-blue-700 transition-colors"
              >
                {t("cookie.savePreferences")}
              </button>
              <button
                onClick={rejectAll}
                className="py-2.5 px-4 border border-slate-200 text-slate-600 text-xs font-semibold rounded-full hover:bg-slate-50 transition-colors"
              >
                {t("cookie.rejectAll")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
