import { useState, useEffect } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";
import {
  EnvelopeSimpleIcon,
  CalculatorIcon,
  ClipboardIcon,
  GlobeIcon,
  CalendarDotsIcon,
  SmileyIcon,
  ImageSquareIcon,
  CaretRightIcon,
} from "@phosphor-icons/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import pluginDefault from "@/assets/features/plugin.png";

const INTERFACE_NAMES = ["Yosemite", "Bezel", "Flashlight", "Primer"];

interface PluginConfig {
  icon: React.ReactNode;
  href: string;
  featureName: string;
  translationKey: "mail" | "calculator" | "clipboard" | "browsers" | "calendar" | "emojis" | "images";
}

const PLUGIN_CONFIGS: PluginConfig[] = [
  {
    icon: <EnvelopeSimpleIcon size={28} weight="duotone" />,
    href: "https://qsapp.com/manual/plugins/emailsupport/",
    featureName: "email",
    translationKey: "mail",
  },
  {
    icon: <CalculatorIcon size={28} weight="duotone" />,
    href: "https://qsapp.com/manual/plugins/tscalculator/",
    featureName: "calculator",
    translationKey: "calculator",
  },
  {
    icon: <ClipboardIcon size={28} weight="duotone" />,
    href: "https://qsapp.com/manual/plugins/clipboard/",
    featureName: "clipboard",
    translationKey: "clipboard",
  },
  {
    icon: <GlobeIcon size={28} weight="duotone" />,
    href: "https://qsapp.com/manual/features/Web/#web-browsers",
    featureName: "browsers",
    translationKey: "browsers",
  },
  {
    icon: <CalendarDotsIcon size={28} weight="duotone" />,
    href: "https://qsapp.com/manual/plugins/icalmodule/",
    featureName: "calendar",
    translationKey: "calendar",
  },
  {
    icon: <SmileyIcon size={28} weight="duotone" />,
    href: "https://qsapp.com/manual/plugins/emojisplugin/",
    featureName: "emojis",
    translationKey: "emojis",
  },
  {
    icon: <ImageSquareIcon size={28} weight="duotone" />,
    href: "https://qsapp.com/manual/plugins/imagemanipulation/",
    featureName: "images",
    translationKey: "images",
  },
];

export function PluginsSection() {
  const { t } = useTranslation("home");
  const { getPath } = useLocalizedPath();
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const [interfaceName, setInterfaceName] = useState("yosemite");
  const [imageSrc, setImageSrc] = useState(pluginDefault);
  const [imageOpacity, setImageOpacity] = useState(1);

  useEffect(() => {
    // Skip if no feature is hovered
    if (!hoveredFeature) return;

    // Fade out current image
    setImageOpacity(0);
    const timer = setTimeout(() => {
      // Load new feature image
      (async () => {
        try {
          const image = await import(`@/assets/features/${hoveredFeature}/${interfaceName}.png`);
          setImageSrc(image.default);
          // Trigger fade in on next frame
          requestAnimationFrame(() => {
            setImageOpacity(1);
          });
        } catch {
          setImageSrc(pluginDefault);
          setImageOpacity(1);
        }
      })();
    }, 300);

    return () => clearTimeout(timer);
  }, [hoveredFeature, interfaceName]);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t($ => $.plugins.title)}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t($ => $.plugins.description)}
          </p>
        </div>

        {/* Feature Image Preview */}
        <div className="flex justify-center items-center mb-4 h-[180px]">
          <div
            className="relative overflow-hidden flex items-center justify-center transition-all duration-500"
            style={{ height: interfaceName === 'flashlight' ? '80px' : '180px' }}
          >
            <img
              src={imageSrc}
              alt={t($ => $.plugins.featurePreviewAlt)}
              className="h-full object-contain transition-opacity duration-500"
              style={{ opacity: imageOpacity }}
            />
          </div>
        </div>

        {/* Interface Selector Dots */}
        <div className="flex justify-center gap-3 mb-8">
          <TooltipProvider>
            {INTERFACE_NAMES.map((name) => (
              <Tooltip key={name}>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => setInterfaceName(name.toLowerCase())}
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                      interfaceName === name.toLowerCase()
                        ? "bg-purple-500"
                        : "bg-purple-300 hover:bg-purple-400"
                    }`}
                    aria-label={t($ => $.plugins.selectInterface, { name })}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>

        {/* Plugin Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLUGIN_CONFIGS.map((plugin) => (
            <PluginCard
              key={plugin.featureName}
              icon={plugin.icon}
              title={t($ => $.plugins.items[plugin.translationKey].title)}
              description={t($ => $.plugins.items[plugin.translationKey].description)}
              href={plugin.href}
              featureName={plugin.featureName}
              onHover={setHoveredFeature}
            />
          ))}
          <Link
            to={getPath("/plugins")}
            className="group relative rounded-xl border border-dashed border-border/50 bg-transparent p-6 transition-all hover:border-primary hover:bg-primary/5 flex flex-col items-center justify-center text-center"
          >
            <p className="text-lg font-semibold text-muted-foreground group-hover:text-primary transition-colors">
              {t($ => $.plugins.exploreAll)} →
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

interface PluginCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  featureName: string;
  onHover: (feature: string | null) => void;
}

function PluginCard({
  icon,
  title,
  description,
  href,
  featureName,
  onHover,
}: PluginCardProps) {
  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).tagName !== "A") {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      onClick={handleCardClick}
      onMouseEnter={() => onHover(featureName)}
      className="group relative rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-border hover:shadow-lg cursor-pointer"
    >
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 flex items-center justify-between">
        {title}
        <CaretRightIcon
          size={18}
          className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
        />
      </h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

