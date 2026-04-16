"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full bg-blue-50 opacity-60 blur-3xl" />
        <div className="absolute -bottom-20 -left-32 w-[400px] h-[400px] rounded-full bg-indigo-50 opacity-50 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231d4ed8' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          {t("hero.badge")}
        </div>

        {/* Headline */}
        <h1 className="max-w-4xl mx-auto text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
          {t("hero.headline").split(",").map((part, i) => (
            i === 0 ? (
              <span key={i}>{part},<br /></span>
            ) : (
              <span key={i} className="text-blue-600">{part}</span>
            )
          ))}
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-500 leading-relaxed mb-10">
          {t("hero.subheadline")}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#pricing"
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 text-base"
          >
            {t("hero.cta.primary")}
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 border border-slate-200 text-slate-700 font-semibold rounded-full hover:border-slate-300 hover:bg-slate-50 transition-all text-base"
          >
            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            {t("hero.cta.secondary")}
          </a>
        </div>

        {/* Trust badge */}
        <p className="text-sm text-slate-400 mb-8">{t("hero.trustBadge")}</p>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          {[
            { key: "hero.stat1", icon: "⚡" },
            { key: "hero.stat2", icon: "🛡️" },
            { key: "hero.stat3", icon: "🌍" },
          ].map((stat) => (
            <div key={stat.key} className="flex items-center gap-2 text-slate-600">
              <span className="text-lg">{stat.icon}</span>
              <span className="font-semibold text-sm">{t(stat.key)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hero visual — mock dashboard */}
      <div className="relative max-w-5xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/80 overflow-hidden">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-200">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <div className="flex-1 mx-4 bg-white border border-slate-200 rounded-md h-6 flex items-center px-3">
              <span className="text-xs text-slate-400">app.clearconsent.eu/dashboard</span>
            </div>
          </div>
          {/* Dashboard content */}
          <div className="p-6 bg-slate-50">
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { label: "Active Consents", value: "24,891", change: "+12%", color: "blue" },
                { label: "Compliant Pages", value: "98.4%", change: "+0.3%", color: "green" },
                { label: "Pending Audits", value: "3", change: "-2", color: "orange" },
              ].map((card) => (
                <div key={card.label} className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                  <p className="text-xs text-slate-500 mb-1">{card.label}</p>
                  <p className="text-2xl font-bold text-slate-900">{card.value}</p>
                  <p className={`text-xs font-medium mt-1 ${card.color === "green" ? "text-emerald-600" : card.color === "blue" ? "text-blue-600" : "text-orange-500"}`}>
                    {card.change} this week
                  </p>
                </div>
              ))}
            </div>
            {/* Fake chart bar */}
            <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
              <p className="text-xs font-semibold text-slate-700 mb-3">Consent Rate — Last 7 Days</p>
              <div className="flex items-end gap-2 h-16">
                {[65, 72, 68, 85, 91, 88, 96].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-sm bg-blue-100 relative" style={{ height: `${h}%` }}>
                    <div className="absolute inset-x-0 bottom-0 rounded-t-sm bg-blue-500" style={{ height: `${h * 0.7}%` }} />
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-1">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                  <span key={d} className="text-xs text-slate-400 flex-1 text-center">{d}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
