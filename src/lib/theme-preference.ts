export type ThemePreference = "light" | "dark";

/** Stored value if set; otherwise follows `prefers-color-scheme`. Keep in sync with inline script in HeadSEO.astro. */
export function getResolvedTheme(): ThemePreference {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function applyThemeToDocument(theme: ThemePreference): void {
  document.documentElement.classList.toggle("dark", theme === "dark");
}
