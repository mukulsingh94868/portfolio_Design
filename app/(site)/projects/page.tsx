
// src/app/(site)/projects/page.tsx

import ProjectsList from "@/components/project-list";

export default function ProjectsPage() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold">Projects</h1>
      </section>
      <ProjectsList />
    </>
  );
}
