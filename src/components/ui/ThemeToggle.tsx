"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        className="w-9 h-9 rounded-lg border flex items-center justify-center opacity-0"
        aria-label="Toggle theme"
        style={{ borderColor: "var(--border)" }}
      />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-200 hover:scale-105"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--bg-card)",
        color: "var(--text-secondary)",
      }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      id="theme-toggle"
    >
      {theme === "dark" ? (
        <Sun size={16} className="transition-transform duration-200" />
      ) : (
        <Moon size={16} className="transition-transform duration-200" />
      )}
    </button>
  );
}
