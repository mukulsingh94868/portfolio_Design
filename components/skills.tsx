
// src/components/skills.tsx
type SkillGroup = {
  title: string;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TailwindCSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Cloud & Deployment",
    items: ["Azure", "Vercel", "AWS EC2"],
  },
  {
    title: "Tools",
    items: ["Postman", "Git", "GitHub"],
  },
  {
    title: "Languages & Markup",
    items: ["TypeScript", "JavaScript", "HTML", "CSS"],
  },
  
{
    title: "Integrations (Logistics • Payments • Communication)",
    items: [ "Razorpay", "Shiprocket", "Delhivery", "MSG91"],
  },

];

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold">Skills</h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-xl border border-slate-200 dark:border-slate-800 p-5"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full border text-sm border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/40"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
