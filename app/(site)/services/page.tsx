// src/app/(site)/services/page.tsx

export default function ServicesPage() {
  const services = [
    {
      title: "Full‑Stack Web Development",
      desc: "I build complete web applications using Next.js, Node.js, Express, and MongoDB — from frontend UI to backend APIs.",
    },
    {
      title: "E‑commerce Development",
      desc: "Custom e‑commerce setups with payments (Razorpay), logistics (Shiprocket/Delhivery), product management, and order workflows.",
    },
    {
      title: "API Integration",
      desc: "Integrations with Razorpay, Shiprocket, Delhivery, MSG91, Gmail APIs, and other third‑party services.",
    },
    {
      title: "Automation Tools",
      desc: "AI‑powered workflows, automated email systems, and productivity tools to reduce manual tasks.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold">Services</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl">
        I help startups, founders, and businesses build fast, scalable, and
        reliable digital products. Whether you need an MVP, a full‑stack
        application, or performance improvements — I deliver with clean
        engineering and a results‑driven approach.
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/30 backdrop-blur-sm"
          >
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold">Have a project in mind?</h3>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Let’s build something powerful, fast, and scalable together.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a href="/contact">Get in Touch</a>

          <a href="/projects">View My Work</a>
        </div>
      </div>
    </section>
  );
}
