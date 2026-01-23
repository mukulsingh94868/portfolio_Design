
// src/app/(site)/about/page.tsx
export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      {/* Heading */}
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
        I’m <strong>Mukul Singh</strong>, a Software Engineer and freelance full‑stack
        developer based in Jaipur. I specialize in building **fast**, **modern**, and
        **scalable** digital products — from e‑commerce platforms to AI‑powered
        automation tools.
      </p>

      {/* Section: Journey */}
      <div className="mt-10 space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
        <h2 className="text-2xl font-semibold">My Journey</h2>
        <p>
          I began my career with a passion for problem‑solving and clean user
          experiences. Over the years, I’ve worked on end‑to‑end applications that not only
          look great but also **perform exceptionally well** under real‑world usage.
        </p>
        <p>
          Today, I work as a <strong>Software Engineer and Freelancer</strong> where I design and
          build production‑grade systems. Alongside my full‑time role, I collaborate with
          startups & brands to bring ideas to life through clean engineering and thoughtful UI/UX.
        </p>
      </div>

      {/* Section: What I Do */}
      <div className="mt-12 space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
        <h2 className="text-2xl font-semibold">What I Do</h2>
        <p>I help companies build impactful digital products through:</p>

        <ul className="mt-2 list-disc list-inside space-y-2">
          <li>
            <strong>Next.js Frontends:</strong> High‑performance interfaces with clean
            architecture, design systems, and reusable components.
          </li>
          <li>
            <strong>Backend APIs:</strong> Scalable REST APIs with Node.js, Express,
            authentication systems, and integrations.
          </li>
          <li>
            <strong>E‑commerce Development:</strong> Secure payments, checkout flows,
            real‑time order tracking, and logistics automation.
          </li>
          <li>
            <strong>AI‑Powered Tools:</strong> Process automation, email workflows, and
            Gemini‑based content generation engines.
          </li>
          <li>
            <strong>Cloud & Deployment:</strong> CI/CD pipelines, containerized backend
            services, and deployment on Vercel, Azure, and AWS EC2.
          </li>
        </ul>
      </div>

      {/* Section: Core Values */}
      <div className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">My Approach & Values</h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          Every project I take on is guided by a simple philosophy —{" "}
          <strong>solve real problems with elegant engineering</strong>. I care about:
        </p>

        <ul className="mt-2 list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
          <li>Building systems that are reliable, maintainable, and scalable.</li>
          <li>Clean code, thoughtful architecture, and performance-first mindset.</li>
          <li>Open communication, transparency, and delivering real business value.</li>
          <li>Designing user journeys that feel intuitive and frictionless.</li>
        </ul>
      </div>

      {/* Section: Highlights */}
      <div className="mt-12 grid sm:grid-cols-3 gap-6">
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-5 text-center">
          <div className="text-3xl font-bold">10+</div>
          <div className="text-slate-600 dark:text-slate-400 text-sm">
            Full Projects Delivered
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-5 text-center">
          <div className="text-3xl font-bold">95+</div>
          <div className="text-slate-600 dark:text-slate-400 text-sm">
            Average Lighthouse Scores
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-5 text-center">
          <div className="text-3xl font-bold">4+ years</div>
          <div className="text-slate-600 dark:text-slate-400 text-sm">
            Engineering Experience
          </div>
        </div>
      </div>

      {/* Section: Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold">Let’s Build Something Great Together</h3>
        <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
          Whether it’s a complex platform or a simple idea you want to launch — I’d love
          to help you bring it to life with clean engineering and beautiful UI.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/contact"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Let’s Connect
          </a>

          <a
            href="/projects"
            className="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
