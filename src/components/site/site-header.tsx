import { Github, Linkedin, Mail } from "lucide-react";

import { navigationItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { ContactDialog } from "@/components/portfolio/contact-dialog";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/86 backdrop-blur-xl">
      <div className="portfolio-container flex min-h-16 flex-wrap items-center justify-between gap-3 py-3">
        <a
          href="#home"
          className="flex items-center gap-3 no-underline"
          aria-label="Home"
        >
          <span className="grid size-10 place-items-center rounded-md border bg-ink text-sm font-semibold text-white dark:bg-primary dark:text-primary-foreground">
            LO
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-ink">
              {profile.displayName}
            </span>
            <span className="block text-xs text-muted-foreground">
              Software, data and AI systems
            </span>
          </span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="order-3 flex w-full flex-wrap gap-1 text-sm md:order-2 md:w-auto"
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 font-medium text-muted-foreground no-underline hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="order-2 flex items-center gap-2 md:order-3">
          <ThemeToggle />
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hidden size-10 place-items-center rounded-md border bg-card text-foreground no-underline hover:border-primary hover:text-primary sm:grid"
            aria-label="Open my GitHub profile"
          >
            <Github aria-hidden="true" className="size-4" />
          </a>
          <a
            href={profile.linkedinCandidate}
            target="_blank"
            rel="noreferrer"
            className="hidden size-10 place-items-center rounded-md border bg-card text-foreground no-underline hover:border-primary hover:text-primary sm:grid"
            aria-label="Open my LinkedIn profile"
          >
            <Linkedin aria-hidden="true" className="size-4" />
          </a>
          <ContactDialog
            variant="icon"
            ariaLabel="Email me"
          >
            <Mail aria-hidden="true" className="size-4" />
          </ContactDialog>
        </div>
      </div>
    </header>
  );
}
