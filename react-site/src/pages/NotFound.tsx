import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import quicksilverIcon from "@/assets/quicksilver-icon.png";

export function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative overflow-hidden flex-1 flex items-center justify-center py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8 w-full">
          <div className="flex flex-col items-center text-center gap-8">
            <img
              src={quicksilverIcon}
              alt="Quicksilver"
              className="w-24 h-24 md:w-32 md:h-32"
            />
            <div className="flex flex-col gap-4 max-w-3xl">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-primary">
                404
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Page Not Found
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-4">
                <Button size="lg" className="font-medium" asChild>
                  <Link to="/">Back to Home</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://qsapp.com">Visit QSApp.com</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
