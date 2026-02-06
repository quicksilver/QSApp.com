import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface VersionInfo {
  version: string;
  build: number;
  minOS: string;
  downloadUrl: string;
}

interface DownloadDialogProps {
  children: ReactNode;
}

export function DownloadDialog({ children }: DownloadDialogProps) {
  const [versionInfo, setVersionInfo] = useState<VersionInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://qs0.qsapp.com/api/version.php")
      .then((res) => res.json())
      .then((data) => {
        setVersionInfo(data);
        setLoading(false);
      })
      .catch(() => {
        // Fallback for development
        setVersionInfo({
          version: "2.5.0",
          build: 4026,
          minOS: "12.0",
          downloadUrl: "https://qs0.qsapp.com/plugins/download.php",
        });
        setLoading(false);
      });
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Download Quicksilver</DialogTitle>
          <DialogDescription>
            Get the latest version of Quicksilver for macOS.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          {loading ? (
            <div className="text-center text-muted-foreground">Loading...</div>
          ) : versionInfo ? (
            <>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <p className="font-medium">
                    Quicksilver {versionInfo.version}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Requires macOS {versionInfo.minOS} or later
                  </p>
                </div>
                <Button asChild>
                  <a href={versionInfo.downloadUrl}>Download</a>
                </Button>
              </div>
              <div className="text-center">
                <a
                  href="https://github.com/quicksilver/Quicksilver/releases"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  View all releases on GitHub
                </a>
              </div>
            </>
          ) : (
            <div className="text-center text-muted-foreground">
              Failed to load version info
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
