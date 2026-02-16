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
import commonZh from "./locales/zh-CN/common.json";
import homeZh from "./locales/zh-CN/home.json";
import pluginsZh from "./locales/zh-CN/plugins.json";
import donateZh from "./locales/zh-CN/donate.json";
import supportZh from "./locales/zh-CN/support.json";
import faqZh from "./locales/zh-CN/faq.json";
import comparisonZh from "./locales/zh-CN/comparison.json";

// Import Czech translation files
import commonCs from "./locales/cs/common.json";
import homeCs from "./locales/cs/home.json";
import pluginsCs from "./locales/cs/plugins.json";
import donateCs from "./locales/cs/donate.json";
import supportCs from "./locales/cs/support.json";
import faqCs from "./locales/cs/faq.json";
import comparisonCs from "./locales/cs/comparison.json";

export const defaultNS = "common";

export const supportedLanguages = [
  { code: "en", name: "English", urlPrefix: "" },
  { code: "zh-CN", name: "简体中文", urlPrefix: "zh-CN" },
  { code: "cs", name: "Čeština", urlPrefix: "cs" },
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
  "zh-CN": {
    common: commonZh,
    home: homeZh,
    plugins: pluginsZh,
    donate: donateZh,
    support: supportZh,
    faq: faqZh,
    comparison: comparisonZh,
  },
  cs: {
    common: commonCs,
    home: homeCs,
    plugins: pluginsCs,
    donate: donateCs,
    support: supportCs,
    faq: faqCs,
    comparison: comparisonCs,
  },
} as const;

// Only use LanguageDetector in browser environment
if (typeof window !== "undefined") {
  i18n.use(LanguageDetector);
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    defaultNS,
    interpolation: {
      escapeValue: false, // React already escapes
    },
    detection: {
      // Path detection is handled by route layout
      // These are fallbacks for initial load
      order: ["navigator", "htmlTag"],
      caches: [],
    },
    showSupportNotice: false,
  });

export default i18n;
