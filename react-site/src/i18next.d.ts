import "i18next";
import type Resources from "./i18n-resources";

declare module "i18next" {
  interface CustomTypeOptions {
    enableSelector: true;
    defaultNS: "common";
    resources: Resources;
  }
}