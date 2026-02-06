import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckIcon } from "@phosphor-icons/react";

export function FAQ() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 md:px-8 py-12">
      <div className="flex flex-col gap-12 max-w-3xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground">
            Everything you need to know about Quicksilver.
          </p>
        </div>

        {/* Why Quicksilver Section */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Why Choose Quicksilver?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              There are many launcher apps for macOS, but Quicksilver stands apart:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckIcon size={20} weight="bold" className="text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="font-medium">100% Free Forever</span>
                  <p className="text-sm text-muted-foreground">
                    No "powerpack", no "pro" version, no subscription. Every feature is free.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon size={20} weight="bold" className="text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="font-medium">No Tracking, Complete Privacy</span>
                  <p className="text-sm text-muted-foreground">
                    Quicksilver doesn't phone home, collect analytics, or track your usage. Your data stays on your Mac.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon size={20} weight="bold" className="text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="font-medium">The Original Mac Launcher</span>
                  <p className="text-sm text-muted-foreground">
                    Quicksilver pioneered the launcher concept in 2003, inspiring every app that followed.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon size={20} weight="bold" className="text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="font-medium">Open Source</span>
                  <p className="text-sm text-muted-foreground">
                    Fully open source and community-maintained. Audit the code, contribute features, or fork it.
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* FAQ Items */}
        <div className="space-y-4">
          <FAQItem
            question="How much does Quicksilver cost?"
            answer="Quicksilver is completely free. There's no paid version, no subscription, and no features locked behind a paywall. It's free and open source software, developed by volunteers who believe great tools should be accessible to everyone."
          />
          <FAQItem
            question="Doesn't Spotlight make Quicksilver unnecessary?"
            answer={
              <>
                No. Spotlight finds things, but all it lets you do is open them. Quicksilver finds things and then lets you do all sorts of stuff with them — move files, send emails, control apps — with just a keystroke or two.{" "}
                <a href="https://qsapp.com/manual/" className="text-primary hover:underline">
                  Learn more in the manual
                </a>.
              </>
            }
          />
          <FAQItem
            question="Who are the developers behind Quicksilver?"
            answer={
              <>
                Quicksilver is open source software, developed by a group of volunteer contributors.{" "}
                <a
                  href="https://github.com/quicksilver/Quicksilver/graphs/contributors"
                  className="text-primary hover:underline"
                >
                  View who's contributed to the software on GitHub
                </a>.
              </>
            }
          />
          <FAQItem
            question="Why don't I see a feature or plugin I expected?"
            answer="Make sure you have the appropriate plugin installed. Many features come from plugins which you can browse and install from within Quicksilver's preferences. If it's something in the catalog you don't see, make sure it's enabled and scanned."
          />
        </div>

        {/* See More */}
        <div className="text-center pt-8 border-t border-border/50">
          <p className="text-muted-foreground mb-4">
           Have more questions?
          </p>
          <a
            href="https://docs.qsapp.com/documentation/main-guides/faq"
            className="text-primary hover:underline font-medium"
          >
            See all FAQs →
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
