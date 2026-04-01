// src/components/hero.tsx
import Link from "next/link";
import SocialLinks from "./social-links";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT: Copy + CTAs */}
        <div>
          {/* Availability / quick pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 dark:border-indigo-800/60 bg-blue-50/60 dark:bg-indigo-900/20 px-3 py-1 text-xs text-blue-700 dark:text-indigo-300">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            Available for select freelance projects
          </div>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
            Mukul Singh
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
              Software Engineer & Freelance Developer
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-700 dark:text-slate-300">
            I craft <strong>fast</strong>, <strong>modern</strong>, and{" "}
            <strong>scalable</strong> web products using
            <span className="font-semibold"> Next.js</span>,{" "}
            <span className="font-semibold">TypeScript</span>, and a robust
            backend stack. I’ve built <em>e‑commerce platforms</em>,{" "}
            <em>AI‑assisted tools</em>, and <em>automation dashboards</em> that
            boost conversions and streamline workflows.
          </p>

          {/* Service pillars */}
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              Next.js frontends & design systems
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              Node/Express APIs & integrations
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              E‑commerce (Razorpay, Shiprocket, Delhivery)
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              Messaging & automation (MSG91, Gmail)
            </li>
          </ul>

          {/* Social proof metrics */}

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            {/* Metric 1 */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">
              <div className="text-2xl font-bold">25%+</div>
              <div className="text-xs text-slate-500">Avg. conversion lift</div>
            </div>

            {/* Metric 2 */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">
              <div className="text-2xl font-bold">~95</div>
              <div className="text-xs text-slate-500">Lighthouse scores</div>
            </div>

            {/* Metric 3 */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">
              <div className="text-2xl font-bold">3+</div>
              <div className="text-xs text-slate-500">Completed Projects</div>
            </div>
          </div>

          <div className="mt-8">
            <SocialLinks
              variant="hero"
              linkedin="https://www.linkedin.com/in/mukul-singh-876321189/"
              github="https://github.com/mukulsingh94868"
              resumeHref="/Mukul_Resume_MERN_9694195035-1.pdf"
              showLabels
            />
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2 rounded-md border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              Hire Me
            </Link>
          </div>

          {/* Trusted by logos (placeholders / optional) */}
          <div className="mt-10">
            <div className="text-xs uppercase tracking-wider text-slate-500">
              Trusted by builds featuring
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
              <span className="rounded-full border border-slate-200 dark:border-slate-800 px-3 py-1">
                Razorpay
              </span>
              <span className="rounded-full border border-slate-200 dark:border-slate-800 px-3 py-1">
                Shiprocket
              </span>
              <span className="rounded-full border border-slate-200 dark:border-slate-800 px-3 py-1">
                Delhivery
              </span>
              <span className="rounded-full border border-slate-200 dark:border-slate-800 px-3 py-1">
                MSG91
              </span>
              <span className="rounded-full border border-slate-200 dark:border-slate-800 px-3 py-1">
                Vercel
              </span>
              <span className="rounded-full border border-slate-200 dark:border-slate-800 px-3 py-1">
                Azure
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: Visual / Case highlight */}
        <div className="relative">
          {/* Card with gradient border */}
          <div className="group relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-br from-blue-600/40 via-indigo-500/40 to-violet-500/40">
            <div className="rounded-[15px] h-full w-full bg-white dark:bg-slate-950">
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-slate-500">
                  Featured case study
                </div>
                <h3 className="mt-2 text-xl font-semibold">
                  D&amp;B Jewel – custom jewellery commerce
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Built product browsing, customization, secure checkout with
                  Razorpay, and logistics via Shiprocket. Improved UX and
                  performance for higher conversions.
                </p>

                {/* Impact bullets */}
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Seamless payment & order flow
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    Dynamic catalog & responsive UI
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                    Optimized Core Web Vitals
                  </li>
                </ul>

                <div className="mt-5 flex gap-3">
                  <Link
                    href="/projects"
                    className="text-sm text-blue-600 hover:text-blue-700 dark:text-indigo-400 dark:hover:text-indigo-300 underline underline-offset-4"
                  >
                    See all projects →
                  </Link>
                  <a
                    href="http://dbjewel.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white underline underline-offset-4"
                  >
                    Live demo ↗
                  </a>
                </div>
              </div>

              {/* Visual placeholder area */}
              <div className="h-44 md:h-56 w-full bg-gradient-to-tr from-slate-200 to-slate-50 dark:from-slate-800 dark:to-slate-900" />
            </div>
          </div>

          {/* Floating stat card */}
          <div className="absolute -bottom-6 -left-6 hidden md:block">
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 backdrop-blur px-4 py-3 shadow-sm">
              <div className="text-xs text-slate-500">Tech stack snapshot</div>
              <div className="mt-1 text-sm font-medium">
                Next.js • TypeScript • Tailwind • Node • MongoDB
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}