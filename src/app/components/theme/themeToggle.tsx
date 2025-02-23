"use client";
import { useEffect, useState, useCallback } from "react";
import { themeEffect } from "./themeEffect";
import { trackEvent } from "@/app/utils/analytics";

export function ThemeToggle() {
  const [preference, setPreference] = useState<undefined | null | string>(
    undefined
  );
  const [currentTheme, setCurrentTheme] = useState<null | string>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringOverride, setIsHoveringOverride] = useState(false);

  const onMediaChange = useCallback(() => {
    const current = themeEffect();
    setCurrentTheme(current);
  }, []);

  useEffect(() => {
    setPreference(localStorage.getItem("theme"));
    const current = themeEffect();
    setCurrentTheme(current);

    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    matchMedia.addEventListener("change", onMediaChange);
    return () => matchMedia.removeEventListener("change", onMediaChange);
  }, [onMediaChange]);

  const onStorageChange = useCallback(
    (event: StorageEvent) => {
      if (event.key === "theme") setPreference(event.newValue);
    },
    [setPreference]
  );

  useEffect(() => {
    setCurrentTheme(themeEffect());
  }, [preference]);

  useEffect(() => {
    window.addEventListener("storage", onStorageChange);
    return () => window.removeEventListener("storage", onStorageChange);
  });

  const handleThemeChange = (ev: React.MouseEvent) => {
    ev.preventDefault();
    setIsHoveringOverride(true);

    let newPreference: string | null =
      currentTheme === "dark" ? "light" : "dark";
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    if (preference !== null && systemTheme === currentTheme) {
      newPreference = null;
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", newPreference);
    }

    // Track theme change
    trackEvent({
      event: "theme_change",
      category: "user_preference",
      action: "change_theme",
      label: newPreference || "system",
    });

    setPreference(newPreference);
  };

  return (
    <div className="flex items-center">
      {isHovering && (
        <span
          className={`text-xs
          `}
        >
          {preference === null
            ? "System"
            : preference === "dark"
            ? "Dark"
            : "Light"}
        </span>
      )}
      <button
        aria-label="Toggle theme"
        className={`inline-flex rounded-sm p-2 
          theme-system:!bg-inherit
          [&_.sun-icon]:hidden
          dark:[&_.moon-icon]:hidden
          dark:[&_.sun-icon]:inline
        }`}
        onClick={handleThemeChange}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          setIsHoveringOverride(false);
        }}
      >
        <span className="sun-icon">
          <svg
            className="w-5 h-5 stroke-slate-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
        </span>
        <span className="moon-icon">
          <svg
            className="w-5 h-5 stroke-slate-300"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            ></path>
          </svg>
        </span>
      </button>
    </div>
  );
}
