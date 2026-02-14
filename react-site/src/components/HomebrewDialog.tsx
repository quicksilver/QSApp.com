import { useState } from "react";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckIcon, CopyIcon } from "@phosphor-icons/react";

interface HomebrewDialogProps {
  children: ReactNode;
}

export function HomebrewDialog({ children }: HomebrewDialogProps) {
  const { t } = useTranslation("common");
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const command = "brew install --cask quicksilver";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg">{t($ => $.homebrew.title)}</DialogTitle>
        </DialogHeader>
        {t($ => $.homebrew.description)}
        <div className="flex flex-col gap-4 py-4">
          <div className="flex items-center gap-2">
            <code className="flex-1 rounded-md bg-muted px-4 py-3 font-mono text-sm">
              {command}
            </code>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" onClick={() => setOpen(false)}>
              {t($ => $.buttons.close)}
            </Button>
          </DialogClose>
          <Button onClick={handleCopy}>
            {copied ? (
              <>
                <CheckIcon size={16} />
                {t($ => $.buttons.copied)}
              </>
            ) : (
              <>
                <CopyIcon size={16} />
                {t($ => $.buttons.copy)}
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
