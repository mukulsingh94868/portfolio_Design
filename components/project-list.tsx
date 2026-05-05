import { projects } from "@/lib/projects";
import ProjectCard from "./project-card";
import Link from "next/link";

export default function ProjectsList({
  limit,
  showCTA,
}: {
  limit?: number;
  showCTA?: boolean;
}) {
  const list = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Real-world applications focused on backend systems, integrations, and
          scalable architecture.
        </p>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>

      {showCTA && (
        <div className="mt-10">
          <Link
            href="/projects"
            className="text-blue-600 dark:text-indigo-400 font-medium"
          >
            View all projects →
          </Link>
        </div>
      )}
    </section>
  );
}
