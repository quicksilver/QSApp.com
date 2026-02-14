import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import English translation files
import commonEn from "./locales/en/common.json";
import homeEn from "./locales/en/home.json";
import pluginsEn from "./locales/en/plugins.json";
import donateEn from "./locales/en/donate.json";
import supportEn from "./locales/en/support.json";
import faqEn from "./locales/en/faq.json";
import comparisonEn from "./locales/en/comparison.json";

// Import Chinese translation files
import commonZh from "./locales/zh/common.json";
import homeZh from "./locales/zh/home.json";
import pluginsZh from "./locales/zh/plugins.json";
import donateZh from "./locales/zh/donate.json";
import supportZh from "./locales/zh/support.json";
import faqZh from "./locales/zh/faq.json";
import comparisonZh from "./locales/zh/comparison.json";

export const defaultNS = "common";

export const supportedLanguages = [
  { code: "en", name: "English", urlPrefix: "" },
  { code: "zh", name: "简体中文", urlPrefix: "zh-cn" },
] as const;

export type LanguageCode = typeof supportedLanguages[number]["code"];

// Get language code from URL prefix
export function getLanguageFromPath(pathname: string): LanguageCode {
  const firstSegment = pathname.split("/")[1];
  const lang = supportedLanguages.find(l => l.urlPrefix === firstSegment);
  return lang?.code ?? "en";
}

// Get URL prefix for a language code
export function getUrlPrefixForLanguage(code: LanguageCode): string {
  const lang = supportedLanguages.find(l => l.code === code);
  return lang?.urlPrefix ?? "";
}

// Build a localized path
export function localizedPath(path: string, languageCode: LanguageCode): string {
  const prefix = getUrlPrefixForLanguage(languageCode);
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return prefix ? `/${prefix}${cleanPath}` : cleanPath;
}

export const resources = {
  en: {
    common: commonEn,
    home: homeEn,
    plugins: pluginsEn,
    donate: donateEn,
    support: supportEn,
    faq: faqEn,
    comparison: comparisonEn,
  },
  zh: {
    common: commonZh,
    home: homeZh,
    plugins: pluginsZh,
    donate: donateZh,
    support: supportZh,
    faq: faqZh,
    comparison: comparisonZh,
  },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    defaultNS,
    interpolation: {
      escapeValue: false, // React already escapes
    },
    detection: {
      // Path detection is handled by LanguageRoute component
      // These are fallbacks for initial load
      order: ["navigator", "htmlTag"],
      caches: [],
    },
  });

export default i18n;
