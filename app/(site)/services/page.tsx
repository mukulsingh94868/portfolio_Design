// src/app/(site)/services/page.tsx

export default function ServicesPage() {
  const services = [
    {
      title: "Backend System Development",
      desc: "Designing and building scalable backend systems using Node.js and Express. Includes REST API development, authentication, database schema design, and handling real-world scenarios like failures, retries, and data consistency.",
    },
    {
      title: "Payment & Order Workflow Systems",
      desc: "Implementing complete payment and order lifecycle systems using Razorpay. Covers cart, checkout, payment verification, order creation, and handling edge cases like failed or duplicate transactions.",
    },
    {
      title: "Shipping & Logistics Integration",
      desc: "Integrating logistics providers like Delhivery and Shiprocket for shipment creation, tracking, and delivery workflows. Experience handling real API issues, payload structuring, and production-level integrations.",
    },
    {
      title: "Full Stack Application Development",
      desc: "Building end-to-end applications using Next.js for frontend and Node.js for backend. Focused on clean architecture, reusable components, and seamless API communication.",
    },
    {
      title: "API Integration & Automation",
      desc: "Working with third-party APIs such as Razorpay, Delhivery, Shiprocket, MSG91, and Gmail APIs. Building automation workflows for emails, notifications, and business processes.",
    },
    {
      title: "Performance & Code Optimization",
      desc: "Improving application performance by optimizing API responses, database queries, and frontend rendering. Writing clean, maintainable, and production-ready code.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      {/* Heading */}
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold">What I Work On</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          I focus on building scalable backend systems, integrating real-world
          services, and developing production-ready full stack applications.
        </p>
      </div>

      {/* Services Grid */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/30 backdrop-blur-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              {service.title}
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Key Strengths */}
      <div className="mt-16 grid sm:grid-cols-3 gap-6 text-center">
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-5">
          <div className="text-2xl font-bold">Backend Focused</div>
          <div className="text-sm text-slate-500 mt-1">
            Strong in APIs & system logic
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-5">
          <div className="text-2xl font-bold">Real Integrations</div>
          <div className="text-sm text-slate-500 mt-1">
            Payments, logistics, automation
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-5">
          <div className="text-2xl font-bold">Production Ready</div>
          <div className="text-sm text-slate-500 mt-1">
            Clean, scalable, maintainable code
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold">
          Open to Backend & Full Stack Roles
        </h3>

        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Looking to contribute to teams building scalable systems and
          real-world applications.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/contact"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Contact Me
          </a>

          <a
            href="/projects"
            className="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
