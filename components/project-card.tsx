import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
      
      {/* Title */}
      <h3 className="text-lg font-semibold group-hover:text-blue-600 transition">
        {p.title}
      </h3>

      {/* Summary */}
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        {p.summary}
      </p>

      {/* Tech */}
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-5 flex gap-4 text-sm font-medium">
        {p.live && (
          <Link
            className="text-blue-600 hover:text-blue-700 dark:text-indigo-400"
            href={p.live}
            target="_blank"
          >
            Live ↗
          </Link>
        )}
        {p.repo && (
          <Link
            className="text-slate-600 hover:text-black dark:text-slate-300 dark:hover:text-white"
            href={p.repo}
            target="_blank"
          >
            Code ↗
          </Link>
        )}
      </div>
    </article>
  );
}