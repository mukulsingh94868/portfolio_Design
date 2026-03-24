"use client";

import Link from "next/link";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { AiOutlineFile } from "react-icons/ai";

type Variant = "hero" | "footer" | "inline";
type Tone = "solid" | "soft"; // visual feel

type SocialLinksProps = {
  variant?: Variant;
  tone?: Tone;
  linkedin?: string;
  github?: string;
  resumeHref?: string; // e.g., "/Mukul_Resume_MERN_9694195035-1.pdf"
  showLabels?: boolean;
  className?: string;
};

export default function SocialLinks({
  variant = "hero",
  tone = "soft",
  linkedin = "https://www.linkedin.com/in/mukul-singh-876321189/",
  github = "https://github.com/mukulsingh94868",
  resumeHref = "/Mukul_Resume_MERN_9694195035-1.pdf",
  showLabels = true,
  className = "",
}: SocialLinksProps) {
  // Base utility classes
  const baseBtn =
    "group inline-flex items-center gap-2 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500";
  const icon = "h-4 w-4 transition-transform duration-200";

  // Tone styles
  const toneStyles = {
    solid: {
      primary:
        baseBtn +
        " px-5 py-2 bg-blue-600 text-white hover:bg-blue-700 border border-blue-600 shadow-sm hover:shadow group",
      secondary:
        baseBtn +
        " px-5 py-2 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900/60",
    },
    soft: {
      primary:
        baseBtn +
        " px-5 py-2 text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-sm hover:shadow",
      secondary:
        baseBtn +
        " px-5 py-2 border border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40 backdrop-blur hover:bg-white/80 dark:hover:bg-slate-900/60 text-slate-800 dark:text-slate-200",
    },
  } as const;

  // Variant containers & sizing
  const variants = {
    hero: {
      container: "flex flex-wrap items-center gap-4 " + className,
      primary: toneStyles[tone].primary,
      secondary: toneStyles[tone].secondary,
      icon,
      label: "text-sm",
    },
    footer: {
      container: "flex items-center gap-3 " + className,
      primary:
        baseBtn +
        " px-3 py-1.5 bg-blue-600 text-white hover:bg-blue-700 border border-blue-600",
      secondary:
        baseBtn +
        " px-3 py-1.5 border border-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200",
      icon: "h-4 w-4",
      label: "text-sm",
    },
    inline: {
      container: "flex items-center gap-3 " + className,
      primary:
        baseBtn +
        " px-2.5 py-1.5 bg-blue-600 text-white hover:bg-blue-700 border border-blue-600",
      secondary:
        baseBtn +
        " px-2.5 py-1.5 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-200",
      icon: "h-4 w-4",
      label: "text-xs",
    },
  } as const;

  const s = variants[variant];

  return (
    <div className={s.container}>
      {/* LinkedIn (primary CTA) */}
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={s.primary}
        aria-label="Open LinkedIn in new tab"
      >
        <SiLinkedin
          className={
            s.icon + " group-hover:-translate-y-0.5 group-hover:scale-110"
          }
        />
        {showLabels && <span className={s.label}>LinkedIn</span>}
      </a>

      {/* GitHub */}
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className={s.secondary}
        aria-label="Open GitHub in new tab"
      >
        <SiGithub
          className={
            s.icon + " group-hover:-translate-y-0.5 group-hover:scale-110"
          }
        />
        {showLabels && <span className={s.label}>GitHub</span>}
      </a>

      {/* Resume (internal file, new tab) */}
      <Link
        href={resumeHref}
        target="_blank"
        rel="noopener noreferrer"
        className={s.secondary}
      >
        <AiOutlineFile
          className={
            s.icon + " group-hover:-translate-y-0.5 group-hover:scale-110"
          }
        />
        {showLabels && <span className={s.label}>Resume</span>}
      </Link>
    </div>
  );
}
