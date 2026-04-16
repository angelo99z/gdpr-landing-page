"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "de";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.testimonials": "Testimonials",
    "nav.faq": "FAQ",
    "nav.getStarted": "Get Started Free",

    // Hero
    "hero.badge": "GDPR Compliant Since Day One",
    "hero.headline": "Cookie Consent Made Simple, Compliance Made Certain",
    "hero.subheadline":
      "ClearConsent helps European businesses collect, manage, and audit cookie consent effortlessly — so you stay compliant and your users stay trusted.",
    "hero.cta.primary": "Start Free Trial",
    "hero.cta.secondary": "See How It Works",
    "hero.trustBadge": "Trusted by 2,000+ European businesses",
    "hero.stat1": "99.9% Uptime",
    "hero.stat2": "GDPR Certified",
    "hero.stat3": "50+ Languages",

    // Features
    "features.badge": "Everything You Need",
    "features.headline": "Built for GDPR. Designed for Humans.",
    "features.subheadline":
      "Every feature is purpose-built to keep your website compliant without slowing down your team.",
    "features.cookie.title": "Cookie Management",
    "features.cookie.desc":
      "Automatically detect, categorize, and control all cookies on your site. Granular per-category consent with real-time sync.",
    "features.logging.title": "Consent Logging",
    "features.logging.desc":
      "Immutable audit logs for every consent event. Timestamped, user-attributed, and export-ready for regulatory review.",
    "features.reports.title": "GDPR Reports",
    "features.reports.desc":
      "One-click compliance reports for DPAs and internal audits. PDF export with full consent history and data flows.",
    "features.scan.title": "Auto Scan",
    "features.scan.desc":
      "Scheduled crawlers discover new cookies and trackers as your site evolves. Never get caught off-guard by a compliance gap.",
    "features.multilang.title": "Multi-language",
    "features.multilang.desc":
      "50+ pre-translated consent banners. Automatically serve the right language based on visitor locale — fully customizable.",
    "features.api.title": "API Integration",
    "features.api.desc":
      "REST & webhook APIs to sync consent signals to your CRM, DMP, or analytics platform. SDKs for JS, Python, and PHP.",

    // Pricing
    "pricing.badge": "Simple Pricing",
    "pricing.headline": "No Surprises. Just Compliance.",
    "pricing.subheadline":
      "All plans include a 14-day free trial. No credit card required.",
    "pricing.monthly": "per month",
    "pricing.starter.name": "Starter",
    "pricing.starter.price": "€29",
    "pricing.starter.desc": "Perfect for small websites and indie businesses.",
    "pricing.starter.cta": "Start Free Trial",
    "pricing.business.name": "Business",
    "pricing.business.price": "€79",
    "pricing.business.badge": "Most Popular",
    "pricing.business.desc": "For growing companies with multiple domains.",
    "pricing.business.cta": "Start Free Trial",
    "pricing.enterprise.name": "Enterprise",
    "pricing.enterprise.price": "Custom",
    "pricing.enterprise.desc": "Tailored solutions for large organizations.",
    "pricing.enterprise.cta": "Contact Sales",
    "pricing.cta.sent": "We'll be in touch!",

    // Testimonials
    "testimonials.badge": "Trusted Across Europe",
    "testimonials.headline": "Companies That Sleep Better at Night",

    // FAQ
    "faq.badge": "FAQ",
    "faq.headline": "Your GDPR Questions, Answered",
    "faq.subheadline":
      "Still have questions? Our compliance team is available Monday–Friday.",
    "faq.q1": "What exactly does GDPR require for cookie consent?",
    "faq.a1":
      "Under GDPR and the ePrivacy Directive, websites must obtain freely given, specific, informed, and unambiguous consent before placing non-essential cookies. Users must be able to withdraw consent as easily as they gave it. ClearConsent handles all of this automatically — from the initial banner to revocation flows.",
    "faq.q2": "How does ClearConsent prove compliance to a data protection authority?",
    "faq.a2":
      "ClearConsent stores a cryptographically signed, immutable record of every consent event — including IP (hashed), timestamp, banner version, and categories accepted. You can export a full audit trail as PDF or JSON at any time. This record satisfies Article 7(1) GDPR accountability requirements.",
    "faq.q3": "Can I customize the look and feel of the consent banner?",
    "faq.a3":
      "Yes. You can customize colors, fonts, position, button labels, and logo via our no-code visual editor. Advanced users can inject custom CSS or use our React/Web Component SDK for pixel-perfect control while preserving all compliance logic.",
    "faq.q4": "Does ClearConsent work with Google Analytics 4 and Meta Pixel?",
    "faq.a4":
      "Yes. Our Tag Manager integrations and native GA4 / Meta Pixel connectors automatically block tracking scripts until consent is granted — and re-enable them the moment the user accepts. Consent signals are also forwarded via Consent Mode v2 and the Meta Consent Signal API.",
    "faq.q5": "Is my data stored in the EU?",
    "faq.a5":
      "All data is processed and stored exclusively in EU-based data centers (Frankfurt, AWS eu-central-1). We are a German GmbH and operate under German data protection law. Our DPA is available for download, and we complete EU Standard Contractual Clauses for all sub-processors.",

    // Footer
    "footer.tagline": "GDPR compliance, simplified.",
    "footer.product": "Product",
    "footer.company": "Company",
    "footer.legal": "Legal",
    "footer.features": "Features",
    "footer.pricing": "Pricing",
    "footer.changelog": "Changelog",
    "footer.status": "Status",
    "footer.about": "About Us",
    "footer.blog": "Blog",
    "footer.careers": "Careers",
    "footer.contact": "Contact",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.dpa": "Data Processing Agreement",
    "footer.imprint": "Imprint",
    "footer.copyright": "© 2024 ClearConsent GmbH. All rights reserved.",
    "footer.madeIn": "Made in Berlin, Germany",

    // Cookie Banner
    "cookie.title": "We value your privacy",
    "cookie.description":
      "We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking \"Accept All\", you consent to our use of cookies.",
    "cookie.acceptAll": "Accept All",
    "cookie.rejectAll": "Reject All",
    "cookie.customize": "Customize",
    "cookie.necessary": "Strictly Necessary",
    "cookie.analytics": "Analytics",
    "cookie.marketing": "Marketing",
    "cookie.savePreferences": "Save Preferences",
    "cookie.learnMore": "Learn more",
  },
  de: {
    // Navbar
    "nav.features": "Funktionen",
    "nav.pricing": "Preise",
    "nav.testimonials": "Referenzen",
    "nav.faq": "FAQ",
    "nav.getStarted": "Kostenlos starten",

    // Hero
    "hero.badge": "DSGVO-konform von Anfang an",
    "hero.headline": "Cookie-Einwilligung einfach gemacht, Compliance sicher erreicht",
    "hero.subheadline":
      "ClearConsent hilft europäischen Unternehmen dabei, Cookie-Einwilligungen mühelos zu erfassen, zu verwalten und zu prüfen — damit Sie compliant bleiben und Ihre Nutzer Vertrauen haben.",
    "hero.cta.primary": "Kostenlos testen",
    "hero.cta.secondary": "Wie es funktioniert",
    "hero.trustBadge": "Vertraut von über 2.000 europäischen Unternehmen",
    "hero.stat1": "99,9 % Verfügbarkeit",
    "hero.stat2": "DSGVO-zertifiziert",
    "hero.stat3": "50+ Sprachen",

    // Features
    "features.badge": "Alles, was Sie brauchen",
    "features.headline": "Für die DSGVO gebaut. Für Menschen gestaltet.",
    "features.subheadline":
      "Jede Funktion wurde gezielt entwickelt, um Ihre Website compliant zu halten, ohne Ihr Team zu belasten.",
    "features.cookie.title": "Cookie-Verwaltung",
    "features.cookie.desc":
      "Automatische Erkennung, Kategorisierung und Steuerung aller Cookies auf Ihrer Website. Granulare Einwilligung pro Kategorie mit Echtzeit-Synchronisation.",
    "features.logging.title": "Einwilligungsprotokollierung",
    "features.logging.desc":
      "Unveränderliche Prüfprotokolle für jedes Einwilligungsereignis. Mit Zeitstempel, Nutzerzuordnung und exportbereit für behördliche Überprüfungen.",
    "features.reports.title": "DSGVO-Berichte",
    "features.reports.desc":
      "Ein-Klick-Compliance-Berichte für Datenschutzbehörden und interne Audits. PDF-Export mit vollständiger Einwilligungshistorie.",
    "features.scan.title": "Automatischer Scan",
    "features.scan.desc":
      "Geplante Crawler entdecken neue Cookies und Tracker, während sich Ihre Website weiterentwickelt. Compliance-Lücken werden sofort erkannt.",
    "features.multilang.title": "Mehrsprachigkeit",
    "features.multilang.desc":
      "50+ vorübersetzte Einwilligungsbanner. Automatisch die richtige Sprache basierend auf dem Standort des Besuchers — vollständig anpassbar.",
    "features.api.title": "API-Integration",
    "features.api.desc":
      "REST & Webhook-APIs zur Synchronisation von Einwilligungssignalen mit Ihrem CRM, DMP oder Analyse-Tool. SDKs für JS, Python und PHP.",

    // Pricing
    "pricing.badge": "Einfache Preisgestaltung",
    "pricing.headline": "Keine Überraschungen. Nur Compliance.",
    "pricing.subheadline":
      "Alle Tarife beinhalten eine 14-tägige kostenlose Testphase. Keine Kreditkarte erforderlich.",
    "pricing.monthly": "pro Monat",
    "pricing.starter.name": "Starter",
    "pricing.starter.price": "29 €",
    "pricing.starter.desc": "Ideal für kleine Websites und Einzelunternehmer.",
    "pricing.starter.cta": "Kostenlos testen",
    "pricing.business.name": "Business",
    "pricing.business.price": "79 €",
    "pricing.business.badge": "Beliebteste",
    "pricing.business.desc": "Für wachsende Unternehmen mit mehreren Domains.",
    "pricing.business.cta": "Kostenlos testen",
    "pricing.enterprise.name": "Enterprise",
    "pricing.enterprise.price": "Individuell",
    "pricing.enterprise.desc": "Maßgeschneiderte Lösungen für große Unternehmen.",
    "pricing.enterprise.cta": "Vertrieb kontaktieren",
    "pricing.cta.sent": "Wir melden uns!",

    // Testimonials
    "testimonials.badge": "Vertrauen in ganz Europa",
    "testimonials.headline": "Unternehmen, die ruhig schlafen",

    // FAQ
    "faq.badge": "FAQ",
    "faq.headline": "Ihre DSGVO-Fragen, beantwortet",
    "faq.subheadline":
      "Noch Fragen? Unser Compliance-Team ist montags bis freitags erreichbar.",
    "faq.q1": "Was verlangt die DSGVO genau bei der Cookie-Einwilligung?",
    "faq.a1":
      "Gemäß DSGVO und ePrivacy-Richtlinie müssen Websites eine freiwillige, spezifische, informierte und eindeutige Einwilligung einholen, bevor nicht wesentliche Cookies gesetzt werden. Nutzer müssen ihre Einwilligung ebenso einfach widerrufen können. ClearConsent regelt all das automatisch.",
    "faq.q2": "Wie beweist ClearConsent die Compliance gegenüber einer Datenschutzbehörde?",
    "faq.a2":
      "ClearConsent speichert einen kryptographisch signierten, unveränderlichen Datensatz jedes Einwilligungsereignisses — einschließlich IP (gehasht), Zeitstempel, Bannerversion und akzeptierten Kategorien. Sie können jederzeit ein vollständiges Prüfprotokoll als PDF oder JSON exportieren.",
    "faq.q3": "Kann ich das Aussehen des Einwilligungsbanners anpassen?",
    "faq.a3":
      "Ja. Sie können Farben, Schriften, Position, Schaltflächenbeschriftungen und Logo über unseren No-Code-Visual-Editor anpassen. Fortgeschrittene Nutzer können benutzerdefiniertes CSS einbinden oder unser React/Web Component SDK für pixelgenaue Kontrolle verwenden.",
    "faq.q4": "Funktioniert ClearConsent mit Google Analytics 4 und Meta Pixel?",
    "faq.a4":
      "Ja. Unsere Tag-Manager-Integrationen und nativen GA4/Meta-Pixel-Konnektoren blockieren Tracking-Skripte automatisch, bis die Einwilligung erteilt wird — und aktivieren sie sofort wieder, wenn der Nutzer zustimmt. Einwilligungssignale werden auch über Consent Mode v2 und die Meta Consent Signal API weitergeleitet.",
    "faq.q5": "Werden meine Daten in der EU gespeichert?",
    "faq.a5":
      "Alle Daten werden ausschließlich in EU-basierten Rechenzentren (Frankfurt, AWS eu-central-1) verarbeitet und gespeichert. Wir sind eine deutsche GmbH und unterliegen deutschem Datenschutzrecht. Unser AV-Vertrag ist zum Download verfügbar.",

    // Footer
    "footer.tagline": "DSGVO-Compliance, vereinfacht.",
    "footer.product": "Produkt",
    "footer.company": "Unternehmen",
    "footer.legal": "Rechtliches",
    "footer.features": "Funktionen",
    "footer.pricing": "Preise",
    "footer.changelog": "Änderungsprotokoll",
    "footer.status": "Status",
    "footer.about": "Über uns",
    "footer.blog": "Blog",
    "footer.careers": "Karriere",
    "footer.contact": "Kontakt",
    "footer.privacy": "Datenschutzerklärung",
    "footer.terms": "Nutzungsbedingungen",
    "footer.dpa": "Auftragsverarbeitungsvertrag",
    "footer.imprint": "Impressum",
    "footer.copyright": "© 2024 ClearConsent GmbH. Alle Rechte vorbehalten.",
    "footer.madeIn": "Hergestellt in Berlin, Deutschland",

    // Cookie Banner
    "cookie.title": "Wir respektieren Ihre Privatsphäre",
    "cookie.description":
      "Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern, personalisierte Inhalte bereitzustellen und unseren Datenverkehr zu analysieren. Durch Klicken auf \u201EAlle akzeptieren\u201C stimmen Sie unserer Verwendung von Cookies zu.",
    "cookie.acceptAll": "Alle akzeptieren",
    "cookie.rejectAll": "Alle ablehnen",
    "cookie.customize": "Anpassen",
    "cookie.necessary": "Unbedingt erforderlich",
    "cookie.analytics": "Analyse",
    "cookie.marketing": "Marketing",
    "cookie.savePreferences": "Einstellungen speichern",
    "cookie.learnMore": "Mehr erfahren",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
