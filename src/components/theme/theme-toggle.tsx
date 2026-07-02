"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark" | "system";

const themeSequence: ThemeMode[] = ["system", "light", "dark"];

const themeMeta: Record<
  ThemeMode,
  {
    label: string;
    nextLabel: string;
    icon: typeof Sun;
  }
> = {
  system: {
    label: "System",
    nextLabel: "Switch to light theme",
    icon: Monitor,
  },
  light: {
    label: "Light",
    nextLabel: "Switch to dark theme",
    icon: Sun,
  },
  dark: {
    label: "Dark",
    nextLabel: "Switch to system theme",
    icon: Moon,
  },
};

function applyTheme(mode: ThemeMode) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const shouldUseDark = mode === "dark" || (mode === "system" && prefersDark);

  document.documentElement.classList.toggle("dark", shouldUseDark);
  document.documentElement.dataset.theme = mode;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") {
      return "system";
    }

    const storedTheme = localStorage.getItem("theme");

    if (
      storedTheme === "light" ||
      storedTheme === "dark" ||
      storedTheme === "system"
    ) {
      return storedTheme;
    }

    return "system";
  });

  useEffect(() => {
    applyTheme(theme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  function cycleTheme() {
    const nextTheme =
      themeSequence[(themeSequence.indexOf(theme) + 1) % themeSequence.length] ??
      "system";

    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
    applyTheme(nextTheme);
  }

  const Icon = themeMeta[theme].icon;

  function selectTheme(mode: ThemeMode) {
    localStorage.setItem("theme", mode);
    setTheme(mode);
    applyTheme(mode);
  }

  return (
    <button
      type="button"
      onClick={cycleTheme}
      onDoubleClick={() => selectTheme("system")}
      className="grid size-10 place-items-center rounded-md border bg-card text-foreground no-underline hover:border-primary hover:text-primary"
      aria-label={themeMeta[theme].nextLabel}
      title={`${themeMeta[theme].label} theme. ${themeMeta[theme].nextLabel}.`}
    >
      <Icon aria-hidden="true" className="size-4" />
    </button>
  );
}
