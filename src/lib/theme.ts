import { useCallback, useEffect, useState } from "react";

type Mode = "light" | "dark";
const KEY = "ec-theme";

function current(): Mode {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

// Theme follows the system until the visitor picks one. Storage is a convenience only.
export function useThemeMode() {
  const [mode, setMode] = useState<Mode>(() => (typeof document === "undefined" ? "light" : current()));

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(KEY);
    } catch {
      saved = null;
    }
    if (saved) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      document.documentElement.classList.toggle("dark", mq.matches);
      setMode(mq.matches ? "dark" : "light");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(() => {
    const next: Mode = current() === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* storage unavailable: the choice lasts for this page only */
    }
    setMode(next);
  }, []);

  return { mode, toggle };
}
