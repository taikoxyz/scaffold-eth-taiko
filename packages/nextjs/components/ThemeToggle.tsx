// components/ThemeToggle.tsx
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    setMounted(true);
    // Log theme information for debugging
    console.log("Theme:", theme);
    console.log("Resolved theme:", resolvedTheme);
    setCurrentTheme(resolvedTheme || "light");
  }, [theme, resolvedTheme]);

  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setCurrentTheme(newTheme);
    setTheme(newTheme);
    // Force theme change if needed
    document.documentElement.setAttribute("data-theme", newTheme);
    // Log attempt for debugging
    console.log("Attempting to set theme to:", newTheme);
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        className="btn bg-taiko-purple border-taiko-pink rounded-full p-2 w-10 h-10 flex items-center justify-center"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {currentTheme === "dark" ? (
          <SunIcon className="h-5 w-5 text-white" />
        ) : (
          <MoonIcon className="h-5 w-5 text-white" />
        )}
      </button>
    </div>
  );
};