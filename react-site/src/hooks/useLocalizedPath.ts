import { useCallback } from "react";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import { localizedPath, getLanguageFromPath, getUrlPrefixForLanguage, type LanguageCode } from "@/i18n";

export function useLocalizedPath() {
  const { i18n } = useTranslation();
  const location = useLocation();

  // Get localized path for current language
  const getPath = useCallback((path: string) => {
    return localizedPath(path, i18n.language as LanguageCode);
  }, [i18n.language]);

  // Get current path without language prefix
  const getCurrentPathWithoutLang = useCallback(() => {
    const currentLang = getLanguageFromPath(location.pathname);
    const prefix = getUrlPrefixForLanguage(currentLang);
    if (prefix && location.pathname.startsWith(`/${prefix}`)) {
      return location.pathname.slice(prefix.length + 1) || "/";
    }
    return location.pathname;
  }, [location.pathname]);

  // Get path for switching to a different language
  const getPathForLanguage = useCallback((langCode: LanguageCode) => {
    const pathWithoutLang = getCurrentPathWithoutLang();
    return localizedPath(pathWithoutLang, langCode);
  }, [getCurrentPathWithoutLang]);

  return { getPath, getCurrentPathWithoutLang, getPathForLanguage };
}
