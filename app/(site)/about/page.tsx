export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      {/* Heading */}
      <h1 className="text-4xl font-bold">About Me</h1>

      <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
        I’m <strong>Mukul Singh</strong>, a Full Stack Developer with a strong
        focus on{" "}
        <strong>
          backend systems, API design, and real-world integrations
        </strong>
        . I build production-ready applications involving{" "}
        <strong>
          payments, logistics, and complete order lifecycle systems
        </strong>{" "}
        using Node.js, MongoDB, and Next.js.
      </p>

      {/* Section: Journey */}
      <div className="mt-10 space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
        <h2 className="text-2xl font-semibold">Professional Journey</h2>

        <p>
          I started with frontend development but gradually moved towards
          backend engineering after working on real-world problems like payment
          processing, order management, and third-party integrations.
        </p>

        <p>
          Currently, I work as a <strong>Software Engineer</strong>, where I
          design and develop scalable backend APIs and full-stack systems. I’ve
          built applications that handle{" "}
          <strong>
            secure payments (Razorpay), logistics integrations (Delhivery,
            Shiprocket), and automation workflows
          </strong>{" "}
          used in production environments.
        </p>
      </div>

      {/* Section: What I Do */}
      <div className="mt-12 space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
        <h2 className="text-2xl font-semibold">What I Work On</h2>

        <ul className="mt-2 list-disc list-inside space-y-2">
          <li>
            <strong>Backend Systems:</strong> Designing scalable REST APIs,
            authentication systems, and structured database schemas.
          </li>

          <li>
            <strong>Payment & Order Flows:</strong> Implementing secure
            checkout, payment verification, and complete order lifecycle (cart →
            delivery).
          </li>

          <li>
            <strong>Shipping Integrations:</strong> Working with logistics APIs
            like Delhivery and Shiprocket for shipment creation, tracking, and
            delivery workflows.
          </li>

          <li>
            <strong>Full Stack Applications:</strong> Building responsive
            interfaces with Next.js while ensuring strong backend architecture.
          </li>

          <li>
            <strong>Automation Systems:</strong> Developing tools for email
            workflows, recruitment automation, and process optimization.
          </li>
        </ul>
      </div>

      {/* Section: Engineering Mindset */}
      <div className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">Engineering Approach</h2>

        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          I focus on building systems that are not just functional but{" "}
          <strong>reliable, scalable, and easy to maintain</strong>. My approach
          includes:
        </p>

        <ul className="mt-2 list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
          <li>Writing clean, modular, and reusable code</li>
          <li>Designing APIs with clear structure and consistency</li>
          <li>
            Handling edge cases in real-world scenarios (payments, failures,
            retries)
          </li>
          <li>Optimizing performance and database queries</li>
        </ul>
      </div>

      {/* Section: Highlights */}
      <div className="mt-12 grid sm:grid-cols-3 gap-6">
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-5 text-center">
          <div className="text-3xl font-bold">3+</div>
          <div className="text-slate-600 dark:text-slate-400 text-sm">
            Production Projects
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-5 text-center">
          <div className="text-3xl font-bold">5+</div>
          <div className="text-slate-600 dark:text-slate-400 text-sm">
            API Integrations
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-5 text-center">
          <div className="text-3xl font-bold">4+ yrs</div>
          <div className="text-slate-600 dark:text-slate-400 text-sm">
            Development Experience
          </div>
        </div>
      </div>

      {/* Section: Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold">
          Open to Backend & Full Stack Opportunities
        </h3>

        <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
          I’m actively looking to contribute to teams building scalable systems,
          backend platforms, and real-world applications.
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
