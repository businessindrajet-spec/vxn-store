"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("vxn-theme");
    const isDark = stored === "dark";
    setDark(isDark);
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("vxn-theme", next ? "dark" : "light");
  }

  return (
    <button
      onClick={toggle}
      className="text-xs font-mono border border-line rounded-full px-3 py-1 text-text-secondary hover:border-brass"
    >
      {dark ? "Light mode" : "Dark mode"}
    </button>
  );
}
