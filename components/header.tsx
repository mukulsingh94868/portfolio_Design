
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
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-black/30 border-b border-slate-200/50 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold">Mukul<span className="text-blue-600 dark:text-indigo-400">.</span></Link>
        <nav className="hidden md:flex gap-6">
          {nav.map(n => (
            <Link key={n.href} href={n.href}
              className={`text-sm hover:text-blue-600 dark:hover:text-indigo-400 ${pathname === n.href ? "text-blue-600 dark:text-indigo-400" : "text-slate-600 dark:text-slate-300"}`}>
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label="Toggle theme"
          className="text-sm px-3 py-1 rounded-md border border-slate-300 dark:border-slate-700"
          onClick={() => setDark(v => !v)}
        >
          {dark ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
}
