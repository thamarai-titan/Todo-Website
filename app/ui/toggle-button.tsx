"use client";

import { useEffect, useState } from "react";
import Button from "./components/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // THIS FIXES HYDRATION

  const isDark = theme === "dark";

  return (
    <Button
      variant="shadow"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center gap-2 relative"
    >
      <Sun className={`
          h-4 w-4 transition-all duration-300
          ${isDark ? "scale-0 rotate-90" : "scale-100 rotate-0"}
        `}
      />

      <Moon className={`
          h-4 w-4
          absolute
          transition-all duration-300
          ${isDark ? "scale-100 rotate-0" : "scale-0 -rotate-90"}
        `}
      />
    </Button>
  );
}
