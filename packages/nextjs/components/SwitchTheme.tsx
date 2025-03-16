"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export const SwitchTheme = ({ className }: { className?: string }) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const isDarkMode = resolvedTheme === "dark";

  const handleToggle = () => {
    if (isDarkMode) {
      setTheme("light");
      return;
    }
    setTheme("dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`flex space-x-2 h-8 items-center justify-center text-sm ${className}`}>
      <button
        onClick={handleToggle}
        className="flex items-center justify-center bg-white border-2 border-white rounded-lg p-1.5 shadow-md"
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <SunIcon className="h-5 w-5 text-taiko-pink" />
        ) : (
          <MoonIcon className="h-5 w-5 text-taiko-pink" />
        )}
      </button>
    </div>
  );
};