"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import DarkModeToggle from "@/components/DarkModeToggle";

const NAV_HEIGHT = 72;

type NavLink = { id: string; label: string; icon: ReactNode };

const iconProps = {
  className: "size-6 mr-4",
  fill: "none",
  viewBox: "0 0 24 24",
  strokeWidth: 1.5,
  stroke: "currentColor",
  "aria-hidden": true,
} as const;

const links: NavLink[] = [
  {
    id: "information",
    label: "What is it?",
    icon: (
      <svg {...iconProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
        />
      </svg>
    ),
  },
  {
    id: "routine",
    label: "Routine",
    icon: (
      <svg {...iconProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
  {
    id: "videos",
    label: "Videos",
    icon: (
      <svg {...iconProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
        />
      </svg>
    ),
  },
  {
    id: "conclusion",
    label: "Bottom line",
    icon: (
      <svg {...iconProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
        />
      </svg>
    ),
  },
];

const sectionIds = links.map((l) => l.id);

/** Smoothly scrolls to a section, offset by the fixed navbar height. No route/hash change. */
function scrollToSection(id: string) {
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const behavior: ScrollBehavior = prefersReduced ? "auto" : "smooth";

  if (id === "top") {
    window.scrollTo({ top: 0, behavior });
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
  window.scrollTo({ top, behavior });
}

export default function Navbar() {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const menuRef = useRef<HTMLDivElement>(null);
  const navButtonsRef = useRef<HTMLDivElement>(null);

  // Track which section is currently active.
  useEffect(() => {
    const onScroll = () => {
      const threshold = NAV_HEIGHT + window.innerHeight * 0.25;
      let current: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) current = id;
      }
      // At the very bottom, the last section is active even if it's short.
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        current = sectionIds[sectionIds.length - 1];
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Close mobile menu on outside click.
  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        navButtonsRef.current &&
        !navButtonsRef.current.contains(target)
      ) {
        setIsMenuToggled(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setIsMenuToggled(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const handleNavClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      setIsMenuToggled(false);
      scrollToSection(id);
    },
    [],
  );

  const isActive = (id: string) => activeId === id;

  const desktopLinkClass = (id: string) =>
    `flex items-center justify-center mt-1 pb-1 px-1 mx-2 border-b-2 font-semibold text-zinc-900 dark:text-zinc-100 transition-colors ${
      isActive(id)
        ? "border-sky-600 dark:border-sky-500"
        : "border-transparent hover:border-zinc-300 dark:hover:border-zinc-700"
    }`;

  const mobileLinkClass =
    "font-semibold pt-4 pb-2 w-full px-4 mx-auto flex items-center text-zinc-900 hover:text-sky-600 dark:text-zinc-100 dark:hover:text-sky-500";

  const mobileLabelClass = (id: string) =>
    `border-b-2 ${isActive(id) ? "border-sky-600 dark:border-sky-500" : "border-transparent"}`;

  const renderDesktopLink = (link: NavLink) => (
    <a
      key={link.id}
      href={`#${link.id}`}
      onClick={(e) => handleNavClick(e, link.id)}
      aria-current={isActive(link.id) ? "true" : undefined}
      className={desktopLinkClass(link.id)}
    >
      {link.label}
    </a>
  );

  const renderMobileLink = (link: NavLink) => (
    <a
      key={link.id}
      href={`#${link.id}`}
      onClick={(e) => handleNavClick(e, link.id)}
      aria-current={isActive(link.id) ? "true" : undefined}
      className={mobileLinkClass}
    >
      {link.icon}
      <p className={mobileLabelClass(link.id)}>{link.label}</p>
    </a>
  );

  return (
    <nav aria-label="Global">
      <div className="fixed top-0 z-50 flex h-[72px] w-full items-center justify-between border-b-taupe-800 bg-taupe-200 px-6 shadow-[0_4px_6px_-2px_rgba(0,0,0,0.08)] dark:border-b-2 dark:bg-taupe-950 dark:shadow-none">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          {/* LEFT SIDE */}
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, "top")}
            className="flex items-center text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
          >
            <SparklesIcon
              aria-hidden="true"
              className="size-6 text-sky-600 dark:text-sky-400"
            />
            Skincare
            <span className="font-medium text-zinc-700 dark:text-zinc-300">
              Stuff
            </span>
          </a>

          {/* RIGHT SIDE — desktop */}
          <div className="hidden items-center gap-4 pl-4 lg:flex">
            {links.map(renderDesktopLink)}
            <DarkModeToggle />
          </div>

          {/* RIGHT SIDE — mobile */}
          <div
            ref={navButtonsRef}
            className="flex items-center justify-center gap-4 lg:hidden"
          >
            <DarkModeToggle />
            <button
              type="button"
              onClick={() => setIsMenuToggled((v) => !v)}
              aria-expanded={isMenuToggled}
              aria-controls="mobile-menu"
              className="rounded-full p-1 hover:cursor-pointer"
            >
              <span className="sr-only">
                {isMenuToggled ? "Close menu" : "Open menu"}
              </span>
              <svg
                className="w-6 text-zinc-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuToggled ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuToggled && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[72px] right-0 z-40 w-full overflow-hidden bg-taupe-200 shadow-[0_4px_6px_-2px_rgba(0,0,0,0.08)] md:w-2/5 md:rounded-bl-lg md:shadow-[-4px_0_6px_-2px_rgba(0,0,0,0.06),0_4px_6px_-2px_rgba(0,0,0,0.08)] lg:hidden dark:border-b-2 dark:border-taupe-800 dark:bg-taupe-950 dark:shadow-none md:dark:border-l-2 md:dark:shadow-none"
          >
            <div className="mx-2 mt-2 flex flex-col items-center text-lg sm:mx-4">
              <div className="mb-4 w-full">{links.map(renderMobileLink)}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
