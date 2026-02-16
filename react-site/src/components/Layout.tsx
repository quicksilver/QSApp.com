import { Outlet, Link, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { Navbar } from "./Navbar";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";
import { supportedLanguages, type LanguageCode } from "@/i18n";
import { GlobeIcon } from "@phosphor-icons/react";

export function Layout() {
  useDocumentMeta();
  const { t, i18n } = useTranslation("common");
  const navigate = useNavigate();
  const { getPath, getPathForLanguage } = useLocalizedPath();

  const handleLanguageChange = (langCode: LanguageCode) => {
    const newPath = getPathForLanguage(langCode);
    document.documentElement.style.scrollBehavior = "auto";
    navigate(newPath).then(() => {
      setTimeout(() => {
        window.scrollTo(0, 0);
        requestAnimationFrame(() => {
          document.documentElement.style.scrollBehavior = "";
        });
      }, 100);
    });
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] sm:w-[600px] sm:h-[450px] lg:w-[800px] lg:h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <footer className="py-12 md:py-16 border-t border-border/50">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Documentation */}
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-sm">{t($ => $.footer.sections.documentation)}</h4>
              <FooterLink href="https://qsapp.com/manual/">{t($ => $.footer.links.userManual)}</FooterLink>
              <FooterLink href="https://developer.qsapp.com/">{t($ => $.footer.links.developerDocs)}</FooterLink>
              <FooterLink href="https://github.com/quicksilver/Quicksilver/releases/">{t($ => $.footer.links.changelog)}</FooterLink>
            </div>

            {/* Product */}
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-sm">{t($ => $.footer.sections.product)}</h4>
              <FooterLink to={getPath("/plugins")}>{t($ => $.footer.links.plugins)}</FooterLink>
              <FooterLink to={getPath("/faq")}>{t($ => $.footer.links.faq)}</FooterLink>
              <FooterLink to={getPath("/quicksilver-vs-alfred")}>{t($ => $.footer.links.comparison)}</FooterLink>
            </div>

            {/* Community */}
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-sm">{t($ => $.footer.sections.community)}</h4>
              <FooterLink href="https://github.com/quicksilver/Quicksilver">{t($ => $.footer.links.github)}</FooterLink>
              <FooterLink href="https://github.com/quicksilver/Quicksilver/issues">{t($ => $.footer.links.reportIssue)}</FooterLink>
              <FooterLink href="https://explore.transifex.com/quicksilver/quicksilver/">{t($ => $.footer.links.translate)}</FooterLink>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-sm">{t($ => $.footer.sections.support)}</h4>
              <FooterLink to={getPath("/donate")}>{t($ => $.footer.links.donate)}</FooterLink>
              <FooterLink to={getPath("/support")}>{t($ => $.footer.links.getHelp)}</FooterLink>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              {t($ => $.footer.tagline)} 💜
            </p>

            {/* Language Selector */}
            <div className="flex items-center gap-2">
              <GlobeIcon size={16} className="text-muted-foreground" />
              <select
                value={supportedLanguages.some(l => l.code === i18n.language) ? i18n.language : "en"}
                onChange={(e) => handleLanguageChange(e.target.value as LanguageCode)}
                className="text-sm bg-transparent text-muted-foreground hover:text-foreground border border-border/50 rounded-md px-2 py-1 cursor-pointer transition-colors focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {supportedLanguages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterLink({
  href,
  to,
  children,
}: {
  href?: string;
  to?: string;
  children: React.ReactNode;
}) {
  const className = "text-sm text-muted-foreground hover:text-foreground transition-colors";

  if (to) {
    return <Link to={to} className={className}>{children}</Link>;
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
