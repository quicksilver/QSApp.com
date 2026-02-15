import type { Config } from "@react-router/dev/config";
import { readdirSync } from "fs";
import { supportedLanguages } from "./src/i18n";

export default {
  ssr: false,
  async prerender() {
    // Read route files from app/routes that match ($lang).*.tsx pattern
    const routeFiles = readdirSync("./app/routes");

    const pages = routeFiles
      .filter(f => f.startsWith("($lang).") && f.endsWith(".tsx") && f !== "($lang).tsx")
      .map(f => {
        // ($lang)._index.tsx -> /
        // ($lang).plugins.tsx -> /plugins
        const name = f.replace("($lang).", "").replace(".tsx", "");
        return name === "_index" ? "/" : `/${name}`;
      });

    // Generate paths for all languages
    const paths: string[] = [];
    for (const lang of supportedLanguages) {
      for (const page of pages) {
        const path = lang.urlPrefix ? `/${lang.urlPrefix}${page}` : page;
        paths.push(path);
      }
    }

    return paths;
  },
} satisfies Config;
