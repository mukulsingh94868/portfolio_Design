type Project = {
  slug: string;
  title: string;
  summary: string;
  tech: string[];
  live?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "d-and-b-jewel",
    title: "D&B Jewel – E-commerce Platform with Payment & Logistics",
    summary:
      "Built a full-stack e-commerce platform with product customization, Razorpay payment integration, and Shiprocket logistics. Implemented complete order lifecycle (cart → checkout → delivery) with scalable backend APIs.",
    tech: [
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
      "Shiprocket",
      "Tailwind",
      "Azure",
    ],
    live: "http://dbjewel.com/",
    repo: "https://github.com/AakashBurman/jewellery_website",
  },
  {
    slug: "akg-mattress",
    title: "AKG Mattress – Scalable E-commerce System",
    summary:
      "Developed an e-commerce platform with product filtering, cart system, and Razorpay payments. Integrated shipping workflow and built backend APIs for order management and user handling.",
    tech: [
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
      "Shiprocket",
      "AWS EC2",
    ],
    live: "http://spinehealthplus.in/",
    repo: "https://github.com/mukulsingh94868/akg_mattress_website",
  },
  {
    slug: "recruit-loop",
    title: "RecruitLoop – Recruitment Automation System",
    summary:
      "Built a recruitment dashboard with automated email workflows and AI-assisted template generation. Designed backend APIs for job tracking, email automation, and user management.",
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "Vercel", "Render"],
    live: "https://gmail-bot-six.vercel.app",
    repo: "https://github.com/mukulsingh94868/gmail_bot",
  },
  {
    slug: "time-tracker",
    title: "Time Tracker – Productivity Monitoring Tool",
    summary:
      "Developed a lightweight time tracking application to monitor work sessions and productivity. Focused on performance and clean UI with real-time tracking capabilities.",
    tech: ["Next.js", "Tailwind", "Netlify"],
    live: "https://zentek-time-tracker.netlify.app/home",
    repo: "https://github.com/mukulsingh94868/time_tracker",
  },
];
