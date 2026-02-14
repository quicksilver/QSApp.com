import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation("home");
  const { t: tc } = useTranslation("common");
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
                {t($ => $.hero.tagline)}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                {t($ => $.hero.description)}
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-4">
                <Button size="lg" className="font-medium" asChild>
                  <a href={versionInfo?.downloadUrl || "https://qs0.qsapp.com/plugins/download.php"}>
                    {tc($ => $.buttons.download)}
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#features">{tc($ => $.buttons.learnMore)}</a>
                </Button>
              </div>
              <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
                {versionInfo && (
                  <p>
                    {t($ => $.hero.version, { version: versionInfo.version, minOS: versionInfo.minOS })} ·{" "}
                    <a
                      href="https://github.com/quicksilver/Quicksilver/releases/"
                      className="underline underline-offset-4 hover:text-foreground transition-colors"
                    >
                      {t($ => $.hero.allVersions)}
                    </a>
                  </p>
                )}
                <HomebrewDialog>
                  <button className="underline underline-offset-4 hover:text-foreground transition-colors">
                    {t($ => $.hero.homebrewInstall)}
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
              {t($ => $.features.title)}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t($ => $.features.description)}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title={t($ => $.features.instantLaunch.title)}
              description={t($ => $.features.instantLaunch.description)}
            />
            <FeatureCard
              title={t($ => $.features.powerfulActions.title)}
              description={t($ => $.features.powerfulActions.description)}
            />
            <FeatureCard
              title={t($ => $.features.extensible.title)}
              description={t($ => $.features.extensible.description)}
            />
            <FeatureCard
              title={t($ => $.features.smartLearning.title)}
              description={t($ => $.features.smartLearning.description)}
            />
            <FeatureCard
              title={t($ => $.features.triggers.title)}
              description={t($ => $.features.triggers.description)}
            />
            <FeatureCard
              title={t($ => $.features.openSource.title)}
              description={t($ => $.features.openSource.description)}
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
              {t($ => $.cta.title)}
            </h2>
            <p className="text-muted-foreground max-w-xl">
              {t($ => $.cta.description)}
            </p>
            <Button size="lg" className="font-medium" asChild>
              <a href={versionInfo?.downloadUrl || "https://qs0.qsapp.com/plugins/download.php"}>
                {tc($ => $.buttons.downloadQuicksilver)}
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
