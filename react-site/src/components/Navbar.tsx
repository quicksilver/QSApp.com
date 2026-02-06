import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Button } from "@/components/ui/button";
import { GithubLogoIcon, List, X } from "@phosphor-icons/react";
import { ModeToggle } from "@/components/mode-toggle";
import quicksilverIcon from "@/assets/quicksilver-icon.png";

const navLinks = [
  { to: "/plugins", label: "Plugins" },
  { to: "/donate", label: "Donate" },
  { to: "/support", label: "Support" },
];

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? "bg-background/95 border-b border-border/40" 
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className="px-4 md:px-8">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center gap-3">
          {/* Logo and brand */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src={quicksilverIcon}
              alt="Quicksilver"
              className="h-8 w-8"
            />
            <span className="text-lg font-semibold tracking-tight hidden sm:inline">
              Quicksilver
            </span>
          </Link>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Navigation links - Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 text-md rounded-md transition-colors hover:text-foreground ${
                  location.pathname === link.to
                    ? "text-foreground"
                    : "text-muted-foreground hover:bg-background/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger button - Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-background/50 transition-colors active:scale-95"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <List size={20} />}
          </button>

          {/* Download button */}
          <Button size="sm" className="text-md ml-2" asChild>
            <a href="https://qs0.qsapp.com/plugins/download.php">
              Download
            </a>
          </Button>

          {/* Mode toggle - Desktop */}
          <div className="hidden sm:block">
            <ModeToggle />
          </div>

          {/* GitHub link - Desktop */}
          <a
            href="https://github.com/quicksilver/Quicksilver"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block ml-2 rounded-lg bg-card hover:text-foreground hover:border-foreground/20 transition-colors hover-wobble"
          >
            <GithubLogoIcon size={18} weight="fill" />
          </a>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border/40 animate-in fade-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col gap-1 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 text-md rounded-md transition-colors hover:text-foreground ${
                    location.pathname === link.to
                      ? "text-foreground"
                      : "text-muted-foreground hover:bg-background/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile menu footer with toggle and GitHub */}
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/40">
              <ModeToggle />
              <a
                href="https://github.com/quicksilver/Quicksilver"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:text-foreground hover:border-foreground/20 transition-colors hover-wobble"
              >
                <GithubLogoIcon size={18} weight="fill" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
