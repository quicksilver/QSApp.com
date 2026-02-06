import { Outlet } from "react-router-dom";
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
      <footer className="py-6 md:py-8">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Quicksilver is free and open source.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://explore.transifex.com/quicksilver/quicksilver/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Transifex
              </a>
              <a
                href="https://github.com/quicksilver/Quicksilver"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://qsapp.com/manual/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Manual
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
