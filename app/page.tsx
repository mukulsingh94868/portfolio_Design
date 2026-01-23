import Hero from "@/components/hero";
import ProjectsList from "@/components/project-list";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <ProjectsList limit={3} showCTA />
    </div>
  );
}
