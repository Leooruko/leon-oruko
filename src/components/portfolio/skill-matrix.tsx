import { skillGroups } from "@/data/skills";

import { SectionHeading } from "./section-heading";

export function SkillMatrix() {
  return (
    <section id="stack" className="section-band bg-background">
      <div className="portfolio-container">
        <SectionHeading
          eyebrow="Technical stack"
          title="Technical range with practical context"
          description="A compact view of the tools I use across AI services, backend APIs, mobile applications, dashboards, modelling, and engineering coursework."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="signal-card rounded-xl p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-ink">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {group.description}
                  </p>
                </div>
                <span className="w-fit shrink-0 rounded-md bg-secondary px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-secondary-foreground">
                  {group.skills.length} skills
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-md border bg-background px-3 py-2 text-sm font-medium leading-none text-foreground"
                    title={skill.context}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
