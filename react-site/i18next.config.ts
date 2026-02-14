import { defineConfig } from 'i18next-cli';

export default defineConfig({
  locales: ["en", "zh"],
  extract: {
    defaultNS: "common",
    removeUnusedKeys: false,
    input: "src/**/*.{js,jsx,ts,tsx}",
    output: "src/locales/{{language}}/{{namespace}}.json",
    primaryLanguage: "en",
    secondaryLanguages: ["zh"],
  },
  types: {
    input: "src/locales/en/*.json",
    output: "src/i18n.d.ts",
    resourcesFile: "src/i18n-resources.d.ts",
    enableSelector: true,
  },
});
