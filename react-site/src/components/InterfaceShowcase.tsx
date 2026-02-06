import { useEffect, useRef, useState } from "react";
import bezel from "@/assets/interfaces/bezel.png";
import flash from "@/assets/interfaces/flash.png";
import primer from "@/assets/interfaces/primer.png";
import yosemite from "@/assets/interfaces/yosemite.png";

const INTERFACES = [
  { name: "Bezel", image: bezel },
  { name: "Flash", image: flash },
  { name: "Yosemite", image: yosemite },
  { name: "Primer", image: primer },
];

interface InterfaceShowcaseProps {}

export function InterfaceShowcase({}: InterfaceShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Trigger starts when element is 2x window height below viewport
      // Completes earlier on the page
      let progress = 1.1 - (rect.top / (windowHeight * 1));
      progress = Math.max(0, Math.min(1, progress));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate stagger based on scroll progress
  const getTransform = (index: number) => {
    // Start positions at edges of window (completely off-screen)
    const startPositions = [
      { x: -window.innerWidth, y: -window.innerHeight }, // top-left
      { x: window.innerWidth, y: -window.innerHeight }, // top-right
      { x: -window.innerWidth, y: window.innerHeight }, // bottom-left
      { x: window.innerWidth, y: window.innerHeight }, // bottom-right
    ];

    // End positions in center with generous scatter (no overlap)
    const scatterOffsets = [
      { x: -140, y: -100 },
      { x: 140, y: -100 },
      { x: -140, y: 100 },
      { x: 140, y: 100 },
    ];

    const start = startPositions[index];
    const scatter = scatterOffsets[index];

    // Linear interpolation for smooth movement
    const x = start.x + (scatter.x - start.x) * scrollProgress;
    const y = start.y + (scatter.y - start.y) * scrollProgress;

    return {
      transform: `translate3d(${x}px, ${y}px, 0) scale(1)`,
      opacity: scrollProgress,
      zIndex: (index === 0 || index === 3) ? 1 : 2, // Ensure some layering
    };
  };

  return (
    <section
      ref={containerRef}
      className="relative py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Multiple Interfaces tailored to you
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from multiple interface, styles and colors to fit your rythmn.
          </p>
        </div>

        {/* Animation Container */}
        <div className="relative mx-auto w-full max-w-2xl h-96">

          {/* Interface cards */}
          {INTERFACES.map((iface, index) => {
            const style = getTransform(index);
            return (
              <div
                key={iface.name}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: style.transform,
                  opacity: style.opacity,
                  zIndex: style.zIndex,
                  transition: "none",
                  willChange: "transform, opacity",
                }}
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={iface.image}
                    alt={iface.name}
                    className="w-full h-auto max-w-sm"
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </div>

              <div className="text-center mt-8 text-muted-foreground max-w-xl mx-auto">
                    10+ interfaces to choose from, with color theming built in!
                    </div>

        <div className="flex justify-center mt-8 gap-2">
            <div
              className="h-2 rounded-full transition-all w-8 bg-primary"
            />
        </div>
  

      </div>
    </section>
  );
}
