import { Outlet, Link } from "react-router";
import { Navbar } from "./Navbar";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export function Layout() {
  useDocumentMeta();

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
              <h4 className="font-semibold text-sm">Documentation</h4>
              <FooterLink href="https://qsapp.com/manual/">User Manual</FooterLink>
              <FooterLink href="https://developer.qsapp.com/">Developer Docs</FooterLink>
              <FooterLink href="https://github.com/quicksilver/Quicksilver/releases/">Changelog</FooterLink>
            </div>

            {/* Product */}
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-sm">Product</h4>
              <FooterLink to="/plugins">Plugins</FooterLink>
              <FooterLink to="/faq">FAQ</FooterLink>
              <FooterLink to="/quicksilver-vs-alfred">Quicksilver vs Alfred</FooterLink>
            </div>

            {/* Community */}
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-sm">Community</h4>
              <FooterLink href="https://github.com/quicksilver/Quicksilver">GitHub</FooterLink>
              <FooterLink href="https://github.com/quicksilver/Quicksilver/issues">Report an Issue</FooterLink>
              <FooterLink href="https://explore.transifex.com/quicksilver/quicksilver/">Translate</FooterLink>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-sm">Support</h4>
              <FooterLink to="/donate">Donate</FooterLink>
              <FooterLink to="/support">Get Help</FooterLink>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground">
              Quicksilver is free and open source software. 💜
            </p>
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
