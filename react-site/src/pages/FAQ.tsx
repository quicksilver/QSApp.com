import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckIcon } from "@phosphor-icons/react";

export function FAQ() {
  const { t } = useTranslation("faq");

  return (
    <div className="mx-auto max-w-[1200px] px-4 md:px-8 py-12">
      <div className="flex flex-col gap-12 max-w-3xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t($ => $.title)}
          </h1>
          <p className="text-muted-foreground">
            {t($ => $.description)}
          </p>
        </div>

        {/* Why Quicksilver Section */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>{t($ => $.whyChoose.title)}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              {t($ => $.whyChoose.intro)}
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckIcon size={20} weight="bold" className="text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="font-medium">{t($ => $.whyChoose.free.title)}</span>
                  <p className="text-sm text-muted-foreground">
                    {t($ => $.whyChoose.free.description)}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon size={20} weight="bold" className="text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="font-medium">{t($ => $.whyChoose.privacy.title)}</span>
                  <p className="text-sm text-muted-foreground">
                    {t($ => $.whyChoose.privacy.description)}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon size={20} weight="bold" className="text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="font-medium">{t($ => $.whyChoose.original.title)}</span>
                  <p className="text-sm text-muted-foreground">
                    {t($ => $.whyChoose.original.description)}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon size={20} weight="bold" className="text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="font-medium">{t($ => $.whyChoose.openSource.title)}</span>
                  <p className="text-sm text-muted-foreground">
                    {t($ => $.whyChoose.openSource.description)}
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* FAQ Items */}
        <div className="space-y-4">
          <FAQItem
            question={t($ => $.questions.cost.question)}
            answer={t($ => $.questions.cost.answer)}
          />
          <FAQItem
            question={t($ => $.questions.spotlight.question)}
            answer={
              <>
                {t($ => $.questions.spotlight.answer)}{" "}
                <a href="https://qsapp.com/manual/" className="text-primary hover:underline">
                  {t($ => $.questions.spotlight.learnMore)}
                </a>.
              </>
            }
          />
          <FAQItem
            question={t($ => $.questions.developers.question)}
            answer={
              <>
                {t($ => $.questions.developers.answer)}{" "}
                <a
                  href="https://github.com/quicksilver/Quicksilver/graphs/contributors"
                  className="text-primary hover:underline"
                >
                  {t($ => $.questions.developers.viewContributors)}
                </a>.
              </>
            }
          />
          <FAQItem
            question={t($ => $.questions.plugins.question)}
            answer={t($ => $.questions.plugins.answer)}
          />
        </div>

        {/* See More */}
        <div className="text-center pt-8 border-t border-border/50">
          <p className="text-muted-foreground mb-4">
            {t($ => $.seeMore.prompt)}
          </p>
          <a
            href="https://qsapp.com/manual/appendix/FAQ/"
            className="text-primary hover:underline font-medium"
          >
            {t($ => $.seeMore.link)}
          </a>
        </div>
      </div>
    </div>
  );
}

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold">{question}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground">{answer}</div>
      </CardContent>
    </Card>
  );
}
