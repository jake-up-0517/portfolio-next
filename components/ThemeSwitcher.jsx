'use client';

import { useState, useEffect } from 'react';

export default function ThemeSwitcher({ theme }) {
  const [currentTheme, setTheme] = useState(theme);

  useEffect(() => {
    // Set the cookie "theme" with an expiry date of 400 days (Maximum expiry date for Chromium browsers).
    document.cookie =
      `theme=${currentTheme};expires=` +
      new Date(new Date().getTime() + 400 * 24 * 60 * 60 * 1000).toUTCString();
    // Set the data-theme attribute for <html>
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  function toggleTheme() {
    if (currentTheme === 'night') {
      setTheme('winter');
    } else {
      setTheme('night');
    }
  }

  function isDark() {
    if (currentTheme === 'night') {
      return true;
    } else {
      return false;
    }
  }

  return (
    // <div className="flex justify-end bg-accent">
    <div className="flex cursor-pointer gap-2 max-w-fit">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-accent-content"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
      <input
        type="checkbox"
        className="toggle toggle-secondary theme-controller"
        checked={isDark()}
        onChange={toggleTheme}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-accent-content"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </div>
    // </div>
  );
}
