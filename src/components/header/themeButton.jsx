"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Pastikan toggle theme berfungsi dengan baik
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Gunakan useEffect untuk memastikan komponen hanya dirender setelah mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Hindari rendering sebelum mounted untuk mencegah hydration issues
  }

  return (
    <button
      onClick={toggleTheme}
      className="bg-white dark:bg-neutral-800 outline-neutral-200 dark:outline-neutral-700 outline-1 hover:outline-2 outline rounded-full p-2 lg:absolute lg:right-0 text-neutral-700 dark:text-white"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <FiMoon /> : <FiSun />}
    </button>
  );
};
