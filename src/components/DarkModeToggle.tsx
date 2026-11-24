"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const STORAGE_KEY = "theme";

/** Re-render whenever the `dark` class on <html> changes. */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

const getSnapshot = () => document.documentElement.classList.contains("dark");
const getServerSnapshot = () => false;

type Props = {
  className?: string;
};

export default function DarkModeToggle({ className = "" }: Props) {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`rounded-full p-1 text-zinc-400 transition-colors hover:cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-200 ${className}`}
    >
      {isDark ? <SunIcon className="size-6" /> : <MoonIcon className="size-6" />}
    </button>
  );
}
