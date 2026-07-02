import { CheckCircle2 } from "lucide-react";

import { experiences } from "@/data/experience";

import { SectionHeading } from "./section-heading";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="section-band bg-background">
      <div className="portfolio-container">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Experience"
            title="What I have built across AI, mobile, and data work"
            description="My experience spans AI product engineering, mobile application delivery, dashboards, prediction workflows, data preparation, and machine learning models."
          />

          <div className="grid gap-4">
            {experiences.map((item) => (
              <article key={item.company} className="signal-card rounded-xl p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      {item.current ? (
                        <span className="rounded-md bg-primary px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground">
                          Current
                        </span>
                      ) : null}
                      <span className="rounded-md border bg-secondary px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-secondary-foreground">
                        {item.domains.join(" / ")}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-ink">
                      {item.role}
                    </h3>
                    <p className="mt-1 font-medium text-muted-foreground">
                      {item.company}
                      {item.location ? ` - ${item.location}` : ""}
                    </p>
                  </div>
                  <p className="rounded-md border bg-card px-3 py-2 text-sm font-semibold text-ink">
                    {item.period}
                  </p>
                </div>

                <p className="mt-4 text-pretty leading-7 text-muted-foreground">
                  {item.summary}
                </p>

                <ul className="mt-5 grid gap-3">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-6">
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-primary"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {Array.from(new Set([...item.domains, ...item.stack])).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
