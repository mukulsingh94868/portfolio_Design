import SocialLinks from "@/components/social-links";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Mukul Singh • mukulsingh94868@gmail.com
        </div>
        <SocialLinks
          variant="footer"
          linkedin="https://www.linkedin.com/in/mukul-singh-876321189/"
          github="https://github.com/mukulsingh94868"
          resumeHref="/Mukul_Resume_MERN_9694195035-1.pdf"
          showLabels={false}
        />
      </div>
    </footer>
  );
}
