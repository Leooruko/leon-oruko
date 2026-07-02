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
    title: "AI product workflows",
    icon: BrainCircuit,
    copy: "OpenAI and Anthropic API work, structured prompts, tool calling, agent logic, and model/API evaluation.",
  },
  {
    title: "Backend APIs",
    icon: Database,
    copy: "FastAPI services and backend workflows that support AI-enabled product behavior and application services.",
  },
  {
    title: "Mobile applications",
    icon: Smartphone,
    copy: "Flutter and React Native experience from mobile streaming and client behavior tracking applications.",
  },
  {
    title: "Data and prediction",
    icon: ChartNoAxesCombined,
    copy: "Power BI dashboards, customer behavior analysis, predictive modelling, and dataset preparation.",
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
          title="Engineering AI Systems and Intelligent Applications"
          description="My current work focuses on connecting AI product engineering with backend APIs, model workflows, mobile application experience, and an electrical/electronics engineering foundation."
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
