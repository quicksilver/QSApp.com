import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HomebrewDialog } from "@/components/HomebrewDialog";
import { InterfaceShowcase } from "@/components/InterfaceShowcase";
import { PluginsSection } from "@/components/PluginsSection";
import quicksilverIcon from "@/assets/quicksilver-icon.png";

interface VersionInfo {
  version: string;
  build: number;
  minOS: string;
  downloadUrl: string;
}

export function Home() {
  const [versionInfo, setVersionInfo] = useState<VersionInfo | null>(null);

  useEffect(() => {
    fetch("https://qs0.qsapp.com/api/version.php")
      .then((res) => res.json())
      .then((data) => setVersionInfo(data))
      .catch(() => {
        // Fallback for development
        setVersionInfo({
          version: "2.5.0",
          build: 4026,
          minOS: "12.0",
          downloadUrl: "https://qs0.qsapp.com/plugins/download.php",
        });
      });
  }, []);


  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <div className="flex flex-col items-center text-center gap-8">
            <img
              src={quicksilverIcon}
              alt="Quicksilver"
              className="w-24 h-24 md:w-32 md:h-32"
            />
            <div className="flex flex-col gap-4 max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Act without doing
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Quicksilver is a fast macOS productivity application that gives
                you the power to control your Mac quickly and elegantly.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-4">
                <Button size="lg" className="font-medium" asChild>
                  <a href={versionInfo?.downloadUrl || "https://qs0.qsapp.com/plugins/download.php"}>
                    Download
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#features">Learn More</a>
                </Button>
              </div>
              <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
                {versionInfo && (
                  <p>
                    Version {versionInfo.version} · macOS {versionInfo.minOS}+
                  </p>
                )}
                <HomebrewDialog>
                  <button className="underline underline-offset-4 hover:text-foreground transition-colors">
                    Install via Homebrew
                  </button>
                </HomebrewDialog>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24" id="features">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Lightning Fast Productivity
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quicksilver lets you start applications, manipulate files, and
              much more — all from your keyboard.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Instant Launch"
              description="Launch applications, open files, and access bookmarks with just a few keystrokes."
            />
            <FeatureCard
              title="Powerful Actions"
              description="Move, copy, email, or compress files. Send messages. Control iTunes. The possibilities are endless."
            />
            <FeatureCard
              title="Extensible"
              description="Hundreds of plugins extend Quicksilver's capabilities to work with your favorite apps."
            />
            <FeatureCard
              title="Smart Learning"
              description="Quicksilver learns your habits and adapts to show you what you need, when you need it."
            />
            <FeatureCard
              title="Triggers"
              description="Assign keyboard shortcuts or mouse gestures to instantly run any action."
            />
            <FeatureCard
              title="Open Source"
              description="Free forever. Actively maintained by a passionate community of developers."
            />
          </div>
        </div>
      </section>

      {/* Interface Showcase Section */}
      <InterfaceShowcase />

      {/* Plugins Section */}
      <PluginsSection />

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <div className="flex flex-col items-center text-center gap-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ready to supercharge your Mac?
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Download Quicksilver today and discover a faster way to work.
            </p>
            <Button size="lg" className="font-medium" asChild>
              <a href={versionInfo?.downloadUrl || "https://qs0.qsapp.com/plugins/download.php"}>
                Download Quicksilver
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="group relative rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-border hover:shadow-lg">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
