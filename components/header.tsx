"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-black/30 border-b border-slate-200/50 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold">
          Mukul<span className="text-blue-600 dark:text-indigo-400">.</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`text-sm hover:text-blue-600 dark:hover:text-indigo-400 ${pathname === n.href ? "text-blue-600 dark:text-indigo-400" : "text-slate-600 dark:text-slate-300"}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            className="text-sm px-3 py-1 rounded-md border border-slate-300 dark:border-slate-700"
            onClick={() => setDark((v) => !v)}
          >
            {dark ? "Light" : "Dark"}
          </button>
          <button
            aria-label="Toggle menu"
            className="md:hidden text-slate-600 dark:text-slate-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-slate-200 dark:border-slate-800">
          <nav className="flex flex-col gap-4 px-4 py-4">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`text-sm hover:text-blue-600 dark:hover:text-indigo-400 ${pathname === n.href ? "text-blue-600 dark:text-indigo-400" : "text-slate-600 dark:text-slate-300"}`}
                onClick={() => setIsOpen(false)}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
