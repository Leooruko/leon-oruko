import {
  BrainCircuit,
  ChartNoAxesCombined,
  Cpu,
  Database,
  Smartphone,
} from "lucide-react";

import { SectionHeading } from "./section-heading";

const focusAreas = [
  {
    title: "Turning business questions into working AI tools",
    icon: BrainCircuit,
    copy: "AI features built to be used, not demoed — tool calling and agent logic that hold up against real questions.",
  },
  {
    title: "Backend systems that connect data to action",
    icon: Database,
    copy: "FastAPI services that sit behind the data, so a system can act on what it finds, not just report it.",
  },
  {
    title: "Tools staff and customers actually use",
    icon: Smartphone,
    copy: "Flutter and React Native experience from a shipped streaming app and a client-tracking tool built for non-technical staff.",
  },
  {
    title: "Making sense of data that's hard to use",
    icon: ChartNoAxesCombined,
    copy: "Power BI dashboards, behavioral analysis, and prediction models built from raw client data.",
  },
  {
    title: "Engineering systems",
    icon: Cpu,
    copy: "Electrical and electronics engineering studies tied to communication systems and digital infrastructure interests.",
  },
];

export function CurrentFocus() {
  return (
    <section id="focus" className="section-band bg-card">
      <div className="portfolio-container">
        <SectionHeading
          eyebrow="Current Focus"
          title="How that plays out in practice"
          description="The same approach — understand the problem, then pick the right system — applied across AI, backend, data, and mobile work."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {focusAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                key={area.title}
                className="signal-card rounded-xl p-5 transition-transform hover:-translate-y-1"
              >
                <div className="grid size-11 place-items-center rounded-md bg-secondary text-primary">
                  <Icon aria-hidden="true" className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {area.copy}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
