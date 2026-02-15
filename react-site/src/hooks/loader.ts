import i18n, { type LanguageCode } from "@/i18n";
import type { Route } from "./+types/($lang)";

// Loader runs during prerendering - set language before render
export async function loader({ params }: Route.LoaderArgs) {
  const lang = (params.lang as LanguageCode) || "en";
  await i18n.changeLanguage(lang);
  return { lang };
}