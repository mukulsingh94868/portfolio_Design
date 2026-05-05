// src/components/skills.tsx

type SkillGroup = {
  title: string;
  items: string[];
  highlight?: boolean;
};

const skillGroups: SkillGroup[] = [
  {
    title: "Core Expertise",
    items: [
      "Backend API Development",
      "System Design (Basics)",
      "Order & Payment Workflows",
      "Third-party Integrations",
    ],
    highlight: true,
  },
  {
    title: "Backend Systems",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "TailwindCSS"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Integrations (Payments • Logistics • Communication)",
    items: ["Razorpay", "Shiprocket", "Delhivery", "MSG91"],
    highlight: true,
  },
  {
    title: "Cloud & Deployment",
    items: ["AWS EC2", "Azure", "Vercel"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git", "GitHub", "Postman"],
  },
];

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold">Technical Skills</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Focused on building scalable backend systems, real-world integrations,
          and production-ready applications.
        </p>
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className={`rounded-xl p-5 border transition-all duration-200 hover:shadow-md 
            ${
              group.highlight
                ? "border-blue-500/40 bg-blue-50/40 dark:bg-blue-900/10"
                : "border-slate-200 dark:border-slate-800"
            }`}
          >
            {/* Title */}
            <h3
              className={`text-sm font-semibold uppercase tracking-wide ${
                group.highlight
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-slate-500"
              }`}
            >
              {group.title}
            </h3>

            {/* Items */}
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className={`px-3 py-1 rounded-full text-sm border transition 
                  ${
                    group.highlight
                      ? "border-blue-300 text-blue-700 dark:text-blue-300 bg-white/70 dark:bg-blue-900/20"
                      : "border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/40"
                  }`}
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
