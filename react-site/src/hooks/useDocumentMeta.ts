import { useEffect } from "react";
import { useLocation } from "react-router";

const pageTitles: Record<string, string> = {
  "/": "Quicksilver — Act without doing",
  "/plugins": "Quicksilver — Plugins",
  "/donate": "Quicksilver — Donate",
  "/support": "Quicksilver — Support",
  "/faq": "Quicksilver — FAQ",
  "/quicksilver-vs-alfred": "Quicksilver vs Alfred — Feature Comparison",
};

export function useDocumentMeta() {
  const location = useLocation();

  useEffect(() => {
    const title = pageTitles[location.pathname] || "Quicksilver";
    document.title = title;

    // Update favicon based on page (optional - using same icon for now)
    const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (favicon) {
      favicon.href = "/quicksilver-icon.png";
    }
  }, [location.pathname]);
}
