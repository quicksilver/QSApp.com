import { useLayoutEffect } from "react";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { Layout } from "@/components/Layout";
import { type LanguageCode } from "@/i18n";

export default function LanguageLayout() {
  const { i18n } = useTranslation();
  const params = useParams();

  // Default to "en" if no lang param (English routes have no prefix)
  const lang = (params.lang as LanguageCode) || "en";

  // Also set on client-side navigation
  useLayoutEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return <Layout />;
}
