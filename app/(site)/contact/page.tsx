import ContactForm from "@/components/contact-form";
import SocialLinks from "@/components/social-links";

export default function ContactPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24">
      {/* Page Header */}
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight">
          Let’s build something amazing
        </h1>
        <p className="mt-3 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Tell me about your project—timelines, requirements, and goals. You
          will usually get a response within 24 hours.
        </p>
      </header>

      <div className="mt-16 grid gap-10 md:grid-cols-2">
        {/* LEFT — INFO PANEL */}
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
                href="tel:+91YOUR_PHONE"
                className="mt-1 block text-slate-800 dark:text-slate-200 hover:text-blue-600"
              >
                +91 9694195035
              </a>
            </div>

            {/* Email */}
            <div>
              <p className="text-slate-500 font-medium">Email</p>
              <a
                href="mailto:mukulsingh94868@gmail.com"
                className="mt-1 block text-slate-800 dark:text-slate-200 hover:text-blue-600"
              >
                mukulsingh94868@gmail.com
              </a>
            </div>
          </div>

          {/* Social buttons */}
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

        {/* RIGHT — CONTACT FORM */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 backdrop-blur p-8">
          <h2 className="text-xl font-semibold">Send a message</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Share a few details and I’ll get back with next steps.
          </p>

          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
