import { ArrowUpRight, Github } from "lucide-react";

import { profile } from "@/data/profile";

import { SectionHeading } from "./section-heading";

const contributionMapUrl = "https://ghchart.rshah.org/0f766e/Leooruko";

export function GitHubActivity() {
  return (
    <section id="github" className="section-band bg-card">
      <div className="portfolio-container">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="GitHub"
              title="My public activity map"
              description="A live contribution map for my GitHub profile, included as a quick signal for public engineering activity and repository discovery."
            />
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-11 w-fit items-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground no-underline hover:opacity-90"
            >
              <Github aria-hidden="true" className="size-4" />
              Open my GitHub
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>

          <div className="signal-card overflow-hidden rounded-xl">
            <div className="flex items-center justify-between gap-3 border-b bg-background px-4 py-3">
              <div>
                <h3 className="font-semibold text-ink">Leooruko</h3>
                <p className="text-sm text-muted-foreground">
                  GitHub contribution calendar
                </p>
              </div>
              <span className="rounded-md bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-secondary-foreground">
                Live map
              </span>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="block bg-card p-4 no-underline"
              aria-label="Open my GitHub activity"
            >
              <div
                role="img"
                aria-label="GitHub contribution activity map for Leooruko"
                className="aspect-[5.6/1] w-full rounded-md border bg-background bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${contributionMapUrl})` }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
