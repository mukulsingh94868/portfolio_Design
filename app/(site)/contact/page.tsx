import ContactForm from "@/components/contact-form";
import SocialLinks from "@/components/social-links";

export default function ContactPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24">
      {/* Header */}
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight">
          Let’s Connect
        </h1>

        <p className="mt-3 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          I’m currently open to <strong>Fronted, Backend and Full Stack opportunities</strong>.
          If you’re hiring or working on scalable systems, feel free to reach out —
          I’d be happy to discuss how I can contribute.
        </p>

        {/* Availability badge */}
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs text-green-700">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Available for full-time roles
        </div>
      </header>

      <div className="mt-16 grid gap-10 md:grid-cols-2">
        {/* LEFT — INFO */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 backdrop-blur p-8">
          <h2 className="text-xl font-semibold">Contact Information</h2>

          <div className="mt-6 space-y-6 text-sm">
            <div>
              <p className="text-slate-500 font-medium">Name</p>
              <p className="mt-1 text-slate-800 dark:text-slate-200">
                Mukul Singh
              </p>
            </div>

            <div>
              <p className="text-slate-500 font-medium">Location</p>
              <p className="mt-1 text-slate-800 dark:text-slate-200">
                Jaipur, Rajasthan (IST)
              </p>
            </div>

            {/* Phone */}
            <div>
              <p className="text-slate-500 font-medium">Phone</p>
              <a
                href="tel:+919694195035"
                className="mt-1 block text-slate-800 dark:text-slate-200 hover:text-blue-600 font-medium"
              >
                +91 9694195035
              </a>
            </div>

            {/* Email */}
            <div>
              <p className="text-slate-500 font-medium">Email</p>
              <a
                href="mailto:mukulsingh94868@gmail.com"
                className="mt-1 block text-slate-800 dark:text-slate-200 hover:text-blue-600 font-medium"
              >
                mukulsingh94868@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/Mukul_Resume_MERN_9694195035-1.pdf"
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 text-sm"
            >
              Download Resume
            </a>

            <a
              href="tel:+919694195035"
              className="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm"
            >
              Call Now
            </a>
          </div>

          {/* Social */}
          <div className="mt-8">
            <SocialLinks
              variant="hero"
              linkedin="https://www.linkedin.com/in/mukul-singh-876321189/"
              github="https://github.com/mukulsingh94868"
              resumeHref="/Mukul_Resume_MERN_9694195035-1.pdf"
              showLabels
            />
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 backdrop-blur p-8">
          <h2 className="text-xl font-semibold">Send a message</h2>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Share details about the role or opportunity — I’ll respond quickly.
          </p>

          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}