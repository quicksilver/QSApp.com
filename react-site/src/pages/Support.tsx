import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Support() {
  const { t } = useTranslation("support");
  const { t: tc } = useTranslation("common");

  return (
    <div className="mx-auto max-w-[1200px] px-4 md:px-8 py-12">
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t($ => $.title)}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t($ => $.description)}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>{t($ => $.documentation.title)}</CardTitle>
              <CardDescription>
                {t($ => $.documentation.description)}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {t($ => $.documentation.body)}
              </p>
              <Button asChild>
                <a href="https://qsapp.com/manual/">{tc($ => $.buttons.readManual)}</a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t($ => $.faq.title)}</CardTitle>
              <CardDescription>
                {t($ => $.faq.description)}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {t($ => $.faq.body)}
              </p>
              <Button variant="outline" asChild>
                <Link to="/faq">{tc($ => $.buttons.viewFaq)}</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t($ => $.discussions.title)}</CardTitle>
              <CardDescription>
                {t($ => $.discussions.description)}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {t($ => $.discussions.body)}
              </p>
              <Button variant="outline" asChild>
                <a href="https://github.com/quicksilver/Quicksilver/discussions">
                  {tc($ => $.buttons.joinDiscussions)}
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t($ => $.issues.title)}</CardTitle>
              <CardDescription>
                {t($ => $.issues.description)}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {t($ => $.issues.body)}
              </p>
              <Button variant="outline" asChild>
                <a href="https://github.com/quicksilver/Quicksilver/issues">
                  {tc($ => $.buttons.reportIssue)}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
