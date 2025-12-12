"use client";

import * as React from "react";
import Button from "./components/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <Button
      variant="shadow"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center gap-2 relative"
    >
      {/* Animated Sun */}
      <Sun
        className={`
          h-[1.2rem] w-[1.2rem]
          transition-all duration-300
          ${isDark ? "scale-0 rotate-90" : "scale-100 rotate-0"}
        `}
      />

      {/* Animated Moon */}
      <Moon
        className={`
          h-[1.2rem] w-[1.2rem]
          absolute
          transition-all duration-300
          ${isDark ? "scale-100 rotate-0" : "scale-0 -rotate-90"}
        `}
      />
    </Button>
  );
}
