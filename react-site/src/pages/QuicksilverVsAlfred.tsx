import { useTranslation, Trans } from "react-i18next";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon, CurrencyCircleDollarIcon } from "@phosphor-icons/react";

export function QuicksilverVsAlfred() {
  const { t } = useTranslation("comparison");
  const { t: tc } = useTranslation("common");

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              {t($ => $.badge)}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              {t($ => $.title)}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t($ => $.description)}
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-[900px] px-4 md:px-8">
          <div className="text-muted-foreground space-y-4 mb-10 max-w-2xl mx-auto">
            <p>
              {t($ => $.intro.paragraph1)}
            </p>
            <p>
              <Trans
                i18nKey={($) => $.intro.paragraph2}
                ns="comparison"
                components={{ em: <em /> }}
              />
            </p>
          </div>

          <div className="rounded-2xl border border-border overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-muted/50">
              <div className="p-4 md:p-6 font-medium text-muted-foreground">
                {t($ => $.table.feature)}
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
              feature={t($ => $.table.price)}
              quicksilver={<span className="font-semibold text-green-600 dark:text-green-400">{t($ => $.table.priceFree)}</span>}
              alfred={<span className="text-muted-foreground">{t($ => $.table.pricePaid)}</span>}
            />

            {/* Feature Rows */}
            <ComparisonRow
              feature={t($ => $.table.clipboardHistory)}
              quicksilver={<IncludedBadge label={t($ => $.table.included)} />}
              alfred={<PaidBadge label={t($ => $.table.paid)} />}
            />
            <ComparisonRow
              feature={t($ => $.table.globalHotkeys)}
              quicksilver={<IncludedBadge label={t($ => $.table.included)} />}
              alfred={<PaidBadge label={t($ => $.table.paid)} />}
            />
            <ComparisonRow
              feature={t($ => $.table.fileActions)}
              quicksilver={<IncludedBadge label={t($ => $.table.included)} />}
              alfred={<PaidBadge label={t($ => $.table.paid)} />}
            />
            <ComparisonRow
              feature={t($ => $.table.musicControl)}
              quicksilver={<IncludedBadge label={t($ => $.table.included)} />}
              alfred={<PaidBadge label={t($ => $.table.paid)} />}
            />
            <ComparisonRow
              feature={t($ => $.table.customThemes)}
              quicksilver={<IncludedBadge label={t($ => $.table.included)} />}
              alfred={<PaidBadge label={t($ => $.table.paid)} />}
            />
            <ComparisonRow
              feature={t($ => $.table.contactActions)}
              quicksilver={<IncludedBadge label={t($ => $.table.included)} />}
              alfred={<PaidBadge label={t($ => $.table.paid)} />}
            />
            <ComparisonRow
              feature={t($ => $.table.searchIndex)}
              quicksilver={<span className="text-sm">{t($ => $.table.searchIndexQs)}</span>}
              alfred={<span className="text-sm text-muted-foreground">{t($ => $.table.searchIndexAlfred)}</span>}
            />
            <ComparisonRow
              feature={t($ => $.table.proxyObjects)}
              quicksilver={<span className="text-sm">{t($ => $.table.proxyObjectsQs)}</span>}
              alfred={<span className="text-sm text-muted-foreground">{t($ => $.table.proxyObjectsAlfred)}</span>}
            />
            <ComparisonRow
              feature={t($ => $.table.philosophy)}
              quicksilver={<span className="text-sm font-medium">{t($ => $.table.philosophyQs)}</span>}
              alfred={<span className="text-sm text-muted-foreground">{t($ => $.table.philosophyAlfred)}</span>}
              isLast
            />
          </div>
        </div>
      </section>

      {/* Why Quicksilver Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-12">
            {t($ => $.whySection.title)}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <BenefitCard
              number={t($ => $.whySection.act.number)}
              title={t($ => $.whySection.act.title)}
              description={t($ => $.whySection.act.description)}
            />
            <BenefitCard
              number={t($ => $.whySection.free.number)}
              title={t($ => $.whySection.free.title)}
              description={t($ => $.whySection.free.description)}
            />
            <BenefitCard
              number={t($ => $.whySection.spotlight.number)}
              title={t($ => $.whySection.spotlight.title)}
              description={t($ => $.whySection.spotlight.description)}
            />
            <BenefitCard
              number={t($ => $.whySection.context.number)}
              title={t($ => $.whySection.context.title)}
              description={t($ => $.whySection.context.description)}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <div className="flex flex-col items-center text-center gap-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              {t($ => $.cta.title)}
            </h2>
            <p className="text-muted-foreground max-w-xl">
              {t($ => $.cta.description)}
            </p>
            <Button size="lg" className="font-medium" asChild>
              <a href="https://qs0.qsapp.com/plugins/download.php">
                {tc($ => $.buttons.downloadQuicksilver)}
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

function IncludedBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-green-600 dark:text-green-400">
      <CheckCircleIcon size={18} weight="fill" />
      <span>{label}</span>
    </span>
  );
}

function PaidBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-amber-600 dark:text-amber-400">
      <CurrencyCircleDollarIcon size={18} weight="fill" />
      <span>{label}</span>
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
