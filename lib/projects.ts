export type Project = {
  slug: string;
  title: string;
  summary: string;
  tech: string[];
  image?: string;
  live?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "d-and-b-jewel",
    title: "D&B Jewel – Custom Jewellery E‑commerce Platform",
    summary:
      "A full‑fledged jewellery e‑commerce platform where users can explore, customize, and purchase jewellery online. The platform integrates Razorpay for secure payments and Shiprocket for logistics. The system includes dynamic product management, user accounts, orders, and a fully responsive and elegant UI.",
    tech: [
      "Next.js",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "ShadCN UI",
      "Razorpay",
      "Shiprocket",
      "Azure",
    ],
    live: "http://dbjewel.com/",
    repo: "https://github.com/AakashBurman/jewellery_website",
  },
  {
    slug: "akg-mattress",
    title: "AKG Mattress – Mattress & Bedding E‑commerce Website",
    summary:
      "An online e‑commerce platform built to help users easily browse and purchase mattresses, pillows, and sofa‑cum‑beds. Includes product filtering, cart management, secure payment integration using Razorpay, logistics powered by Shiprocket, and a modern UI designed for a smooth shopping experience.",
    tech: [
      "Next.js",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "ShadCN UI",
      "Razorpay",
      "Shiprocket",
      "EC2",
    ],
    live: "http://spinehealthplus.in/",
    repo: "https://github.com/mukulsingh94868/akg_mattress_website",
  },
  {
    slug: "recruit-loop",
    title: "RecruitLoop – AI‑Powered Recruitment Automation Panel",
    summary:
      "A smart recruitment management panel built for recruiters and job seekers. Includes AI‑powered email template generation using Gemini AI, automated email sending, HR email extraction, job‑tracking workflows, and a clean dashboard UI. Designed to streamline and automate recruitment tasks with modern cloud deployment.",
    tech: [
      "Next.js",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "Vercel",
      "Render",
    ],
    live: "https://gmail-bot-six.vercel.app",
    repo: "https://github.com/mukulsingh94868/gmail_bot",
  },
];
