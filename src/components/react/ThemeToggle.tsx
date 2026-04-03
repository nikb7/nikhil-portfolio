import * as React from "react";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  applyThemeToDocument,
  getResolvedTheme,
  type ThemePreference,
} from "@/lib/theme-preference";

export function ModeToggle() {
  const [theme, setTheme] = useState<ThemePreference>("light");

  useEffect(() => {
    const resolved = getResolvedTheme();
    setTheme(resolved);
    applyThemeToDocument(resolved);
  }, []);

  const toggleTheme = () => {
    const nextTheme: ThemePreference = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    applyThemeToDocument(nextTheme);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className={"mx-2"}
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
