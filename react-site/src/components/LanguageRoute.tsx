import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import type { LanguageCode } from "@/i18n";

interface LanguageRouteProps {
  lang: LanguageCode;
  children: React.ReactNode;
}

export function LanguageRoute({ lang, children }: LanguageRouteProps) {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return <>{children}</>;
}
