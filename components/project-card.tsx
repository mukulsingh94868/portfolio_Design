// src/components/project-card.tsx
import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="rounded-xl border border-slate-200 dark:border-slate-800 p-4 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">{p.title}</h3>
      <p className="mt-2 text-slate-600 dark:text-slate-300">{p.summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-4 text-sm">
        {p.live && (
          <Link
            className="text-blue-600 dark:text-indigo-400"
            href={p.live}
            target="_blank"
          >
            Live URL ↗
          </Link>
        )}
        {/* {p.repo && (
          <Link
            className="text-slate-600 dark:text-slate-300"
            href={p.repo}
            target="_blank"
          >
            Code ↗
          </Link>
        )} */}
      </div>
    </article>
  );
}
