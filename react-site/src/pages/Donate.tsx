import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const PRESET_AMOUNTS = [20, 40];

export function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number | "other">(40);
  const [customAmount, setCustomAmount] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (selectedAmount === "other" && !customAmount) {
      e.preventDefault();
      return;
    }
  };

  const getAmountValue = () => {
    if (selectedAmount === "other") {
      return customAmount || "";
    }
    return selectedAmount.toFixed(2);
  };

  return (
    <div className="mx-auto max-w-[1200px] px-4 md:px-8 py-12">
      <div className="flex flex-col gap-8 max-w-2xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Support Quicksilver
          </h1>
          <p className="text-muted-foreground">
            Quicksilver is free and open source, developed by volunteers in
            their spare time. Your support helps keep the project alive.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Make a Donation</CardTitle>
            <CardDescription>
              Support the Quicksiler Project by Donating today.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Quicksilver is free and open source and will always remain that way. No 'powerpack' or 'pro' version – just good healthy open source.</p>
              <p>That said, we rely on donations to help cover hosting costs, domain renewals, and development resources.</p>
            </div>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_blank"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <input type="hidden" name="cmd" value="_donations" />
              <input type="hidden" name="business" value="donate@qsapp.com" />
              <input type="hidden" name="item_name" value="Quicksilver Software" />
              <input type="hidden" name="currency_code" value="USD" />
              <input type="hidden" name="no_shipping" value="1" />
              <input type="hidden" name="return" value="https://qsapp.com/donate-confirm.php" />
              <input type="hidden" name="cancel_return" value="https://qsapp.com/donate-cancel.php" />
              <input type="hidden" name="cpp_header_image" value="https://qsapp.com/images/quicksilver-icon.png" />
              <input type="hidden" name="cn" value="Specify where your donation should go" />
              <input type="hidden" name="tax" value="0" />
              <input type="hidden" name="amount" value={getAmountValue()} />

              <div className="grid grid-cols-3 gap-2">
                {PRESET_AMOUNTS.map((amount) => (
                  <Button
                    key={amount}
                    type="button"
                    variant={selectedAmount === amount ? "default" : "outline"}
                    onClick={() => setSelectedAmount(amount)}
                  >
                    ${amount}
                  </Button>
                ))}
                <Button
                  type="button"
                  variant={selectedAmount === "other" ? "default" : "outline"}
                  onClick={() => setSelectedAmount("other")}
                >
                  Other
                </Button>
              </div>

              {selectedAmount === "other" && (
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">$</span>
                  <Input
                    type="number"
                    min="1"
                    step="0.01"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="max-w-32"
                  />
                </div>
              )}

              <Button type="submit" className="w-full">
                Donate via PayPal
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Other Ways to Help</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <a
              href="https://github.com/quicksilver/Quicksilver"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-border transition-colors"
            >
              <div>
                <p className="font-medium">Contribute Code</p>
                <p className="text-sm text-muted-foreground">
                  Help fix bugs or add new features on GitHub.
                </p>
              </div>
            </a>
            <a
              href="https://docs.qsapp.com/documentation/developer-instructions/localization"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-border transition-colors"
            >
              <div>
                <p className="font-medium">Translate Quicksilver</p>
                <p className="text-sm text-muted-foreground">
                  Help translate Quicksilver into your language.
                </p>
              </div>
            </a>
            <a
              href="https://github.com/quicksilver/Quicksilver/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-border transition-colors"
            >
              <div>
                <p className="font-medium">Report Issues</p>
                <p className="text-sm text-muted-foreground">
                  Found a bug? Let us know on the issue tracker.
                </p>
              </div>
            </a>
            <a
              href="https://qsapp.com/manual/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-border transition-colors"
            >
              <div>
                <p className="font-medium">Improve Documentation</p>
                <p className="text-sm text-muted-foreground">
                  Help others learn Quicksilver by improving the manual.
                </p>
              </div>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
