import { useState } from "react";
import type { ReactNode } from "react";
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
import { Check, Copy } from "@phosphor-icons/react";

interface HomebrewDialogProps {
  children: ReactNode;
}

export function HomebrewDialog({ children }: HomebrewDialogProps) {
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
          <DialogTitle className="text-lg">Install via Homebrew</DialogTitle>
        </DialogHeader>
        Copy the command below to install Quicksilver from your terminal using homebrew.
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
              Close
            </Button>
          </DialogClose>
          <Button onClick={handleCopy}>
            {copied ? (
              <>
                <Check size={16} />
                Copied
              </>
            ) : (
              <>
                <Copy size={16} />
                Copy
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
