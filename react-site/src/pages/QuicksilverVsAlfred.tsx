import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, CurrencyCircleDollar } from "@phosphor-icons/react";

export function QuicksilverVsAlfred() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Comparison
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Quicksilver vs. Alfred
            </h1>
            <p className="text-lg text-muted-foreground">
              Searching for the best Mac launcher? Here's why Quicksilver is the choice for power users who want total control—for free.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-[900px] px-4 md:px-8">
          <div className="text-muted-foreground space-y-4 mb-10 max-w-2xl mx-auto">
            <p>
              Both Quicksilver and Alfred are keyboard-driven productivity apps for macOS that help you launch applications, find files, and automate tasks. Alfred launched in 2010 and has become popular for its polished interface and workflow system.
            </p>
            <p>
              Quicksilver pioneered this category back in 2003 and takes a fundamentally different approach: while Alfred focuses on <em>finding</em> things, Quicksilver focuses on <em>doing</em> things. Its noun-verb-object model lets you chain actions together fluidly—and every feature ships free and open source.
            </p>
          </div>

          <div className="rounded-2xl border border-border overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-muted/50">
              <div className="p-4 md:p-6 font-medium text-muted-foreground">
                Feature
              </div>
              <div className="p-4 md:p-6 text-center border-l border-border bg-primary/5">
                <span className="font-semibold">Quicksilver</span>
              </div>
              <div className="p-4 md:p-6 text-center border-l border-border">
                <span className="font-semibold">Alfred</span>
              </div>
            </div>

            {/* Price Row */}
            <ComparisonRow
              feature="Price"
              quicksilver={<span className="font-semibold text-green-600 dark:text-green-400">Free (Open Source)</span>}
              alfred={<span className="text-muted-foreground">Free / ~£34 Powerpack</span>}
            />

            {/* Feature Rows */}
            <ComparisonRow
              feature="Clipboard History"
              quicksilver={<IncludedBadge />}
              alfred={<PaidBadge />}
            />
            <ComparisonRow
              feature="Global Hotkeys & Triggers"
              quicksilver={<IncludedBadge />}
              alfred={<PaidBadge />}
            />
            <ComparisonRow
              feature="Advanced File Actions"
              quicksilver={<IncludedBadge />}
              alfred={<PaidBadge />}
            />
            <ComparisonRow
              feature="Music Control"
              quicksilver={<IncludedBadge />}
              alfred={<PaidBadge />}
            />
            <ComparisonRow
              feature="Custom Themes"
              quicksilver={<IncludedBadge />}
              alfred={<PaidBadge />}
            />
            <ComparisonRow
              feature="Contact Actions"
              quicksilver={<IncludedBadge />}
              alfred={<PaidBadge />}
            />
            <ComparisonRow
              feature="Search Index"
              quicksilver={<span className="text-sm">Bare Metal (Fast)</span>}
              alfred={<span className="text-sm text-muted-foreground">Spotlight Dependent</span>}
            />
            <ComparisonRow
              feature="Proxy Objects"
              quicksilver={<span className="text-sm">Core Feature</span>}
              alfred={<span className="text-sm text-muted-foreground">Requires Workflows</span>}
            />
            <ComparisonRow
              feature="Philosophy"
              quicksilver={<span className="text-sm font-medium">Action-based</span>}
              alfred={<span className="text-sm text-muted-foreground">Search-based</span>}
              isLast
            />
          </div>
        </div>
      </section>

      {/* Why Quicksilver Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-12">
            Why Quicksilver?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <BenefitCard
              number="1"
              title="Act, Don't Just Search"
              description="Alfred searches. Quicksilver acts. Select a file → Email it → To a colleague. All without touching the mouse."
            />
            <BenefitCard
              number="2"
              title="Truly Free & Open"
              description="No 'Powerpacks,' no paid upgrades. Clipboard history, theming, deep system control—all free forever."
            />
            <BenefitCard
              number="3"
              title="Spotlight Independent"
              description="Quicksilver builds its own catalog. Lightning fast and works instantly, even if Spotlight is broken or indexing."
            />
            <BenefitCard
              number="4"
              title="Context Aware"
              description="Use Proxy Objects to instantly act on your current Finder selection. Select a file, hit a hotkey, move it instantly."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <div className="flex flex-col items-center text-center gap-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Ready to try Quicksilver?
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Download for free and experience the power of a true action-based launcher.
            </p>
            <Button size="lg" className="font-medium" asChild>
              <a href="https://qs0.qsapp.com/plugins/download.php">
                Download Quicksilver
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ComparisonRow({
  feature,
  quicksilver,
  alfred,
  isLast = false,
}: {
  feature: string;
  quicksilver: React.ReactNode;
  alfred: React.ReactNode;
  isLast?: boolean;
}) {
  return (
    <div className={`grid grid-cols-3 ${!isLast ? "border-b border-border" : ""}`}>
      <div className="p-4 md:p-5 text-sm font-medium">{feature}</div>
      <div className="p-4 md:p-5 text-center border-l border-border bg-primary/5 flex items-center justify-center">
        {quicksilver}
      </div>
      <div className="p-4 md:p-5 text-center border-l border-border flex items-center justify-center">
        {alfred}
      </div>
    </div>
  );
}

function IncludedBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-green-600 dark:text-green-400">
      <CheckCircle size={18} weight="fill" />
      <span>Included</span>
    </span>
  );
}

function PaidBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-amber-600 dark:text-amber-400">
      <CurrencyCircleDollar size={18} weight="fill" />
      <span>Paid</span>
    </span>
  );
}

function BenefitCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative rounded-xl border border-border bg-card p-6">
      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
        {number}
      </div>
      <h3 className="text-lg font-semibold mb-2 mt-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
