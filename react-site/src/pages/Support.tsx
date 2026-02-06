import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Support() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 md:px-8 py-12">
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Get Help
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Need help with Quicksilver? Here are the best ways to get support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Documentation</CardTitle>
              <CardDescription>
                Start with the official Quicksilver Manual
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                The manual covers everything from installation to advanced
                triggers and plugins. It's the best place to start learning.
              </p>
              <Button asChild>
                <a href="https://qsapp.com/manual/">Read the Manual</a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>FAQ</CardTitle>
              <CardDescription>
                Frequently asked questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Find answers to common questions about Quicksilver, troubleshooting
                tips, and learn why Quicksilver might be the right choice for you.
              </p>
              <Button variant="outline" asChild>
                <Link to="/faq">View FAQ</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>GitHub Discussions</CardTitle>
              <CardDescription>
                Ask questions and get help from the community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                The GitHub Discussions forum is the best place to ask questions,
                share tips, and connect with other Quicksilver users.
              </p>
              <Button variant="outline" asChild>
                <a href="https://github.com/quicksilver/Quicksilver/discussions">
                  Join Discussions
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Report a Bug</CardTitle>
              <CardDescription>
                Found something wrong? Let us know
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                If you've found a bug, please report it on GitHub Issues. Include
                your macOS version, Quicksilver version, and steps to reproduce.
              </p>
              <Button variant="outline" asChild>
                <a href="https://github.com/quicksilver/Quicksilver/issues">
                  Report Issue
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
