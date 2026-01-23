
// src/components/projects-list.tsx
import { projects } from "@/lib/projects";
import ProjectCard from "./project-card";
import Link from "next/link";

export default function ProjectsList({ limit, showCTA }: { limit?: number; showCTA?: boolean }) {
  const list = limit ? projects.slice(0, limit) : projects;
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold">Featured Projects</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map(p => <ProjectCard key={p.slug} p={p} />)}
      </div>
      {showCTA && (
        <div className="mt-8">
          <Link href="/projects" className="text-blue-600 dark:text-indigo-400">Show all projects →</Link>
        </div>
      )}
    </section>
  );
}
