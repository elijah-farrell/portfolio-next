export const portfolio = {
  name: "Elijah Farrell",
  title: "<Coder/>",
  availability: "Available for opportunities",
  location: "Northern New York",
  education: "B.S. Computer Science",
  age: "22 years old",
  email: "farrellelijah@outlook.com",
  heroLines: ["Welcome", "to", "my", "over-engineered", "portfolio", "site."],
  intro:
    "I am Elijah. I enjoy solving problems, debugging code, optimizing algorithms, and building systems from the ground up.",
  about: [
    "My journey began at Jefferson Community College, where I earned my A.S. in Computer Science, and continued at SUNY Polytechnic Institute, where I graduated Magna Cum Laude with a B.S. in Computer Science and a 3.88 GPA.",
    "I enjoy solving problems, debugging code, optimizing algorithms, and building systems from the ground up. My academic background gave me a strong foundation in both theory and practical development, which I have applied through research and collaborative projects.",
    "I am open to opportunities in software development, data analysis, IT, and other roles that encourage growth and continuous learning.",
    "Outside of work, I enjoy hiking in the Adirondacks, playing video games, and watching sports with friends. These activities help me stay curious, creative, and balanced.",
  ],
} as const;

export const quickStats = [
  { label: "Degrees Earned", value: "2" },
  { label: "Projects Built", value: "4+" },
  { label: "Coding Languages", value: "5+" },
  { label: "Technical Skills", value: "25+" },
] as const;

export const experiences = [
  {
    role: "Research Assistant",
    organization: "SUNY Polytechnic Institute (CESSAIR)",
    range: "Feb 2025 - May 2025",
    bullets: [
      "Led a small research team of 5 students to develop BORGChat, an AI chat application in C++ on schedule.",
      "Collaborated effectively with team members to solve problems and support project goals.",
      "Coordinated tasks and adapted quickly to new challenges to ensure smooth progress.",
    ],
  },
  {
    role: "Work Study Assistant",
    organization: "The Workplace",
    range: "Aug 2021 - Dec 2021",
    bullets: [
      "Performed general duties including facility support and janitorial tasks.",
      "Assisted with basic device troubleshooting and user setup when assigned.",
    ],
  },
] as const;

export const projects = [
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing my projects, experience, and skills with an interactive design.",
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Three.js Effects",
      "Framer Motion",
      "Aceternity UI",
    ],
  },
  {
    title: "More-Armor Mod",
    description:
      "A Minecraft Forge mod that adds 36 unique armor sets with configurable armor stats and visual effects.",
    stack: ["Java", "Minecraft 1.20.1", "Minecraft Forge", "Gradle"],
  },
  {
    title: "Portfolio Template",
    description:
      "Minimal portfolio template focused on showcasing work without distractions.",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Aceternity UI",
      "Shadcn UI",
      "Radix UI",
      "Framer Motion",
    ],
  },
  {
    title: "3D Portfolio Template",
    description:
      "A fully animated 3D developer portfolio template with scroll-based interactions for immersive showcases.",
    stack: [
      "React 19",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "Three.js",
      "GSAP",
      "Framer Motion",
    ],
  },
] as const;

export const skillGroups = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "C++"],
  },
  {
    category: "IT Support",
    skills: [
      "Windows",
      "Linux",
      "macOS",
      "Hardware",
      "Troubleshooting",
      "Networking",
      "Software",
      "Mobile",
      "Security",
    ],
  },
  {
    category: "Web Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Three.js",
      "Vite",
      "Vercel",
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Flask", "Pandas", "NumPy", "PyTorch", "OpenCV", "HuggingFace"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "SQLite", "Firebase", "PostgreSQL"],
  },
] as const;
