export type Skill = {
  name: string;
  image?: string;
};

export type SkillGroup = {
  title: string;
  summary: string;
  skills: Skill[];
};

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  github?: string;
  webapp?: string;
  details: string[];
};

export type Education = {
  id: number;
  school: string;
  date: string;
  grade?: string;
  desc: string;
  degree: string;
};

export const Bio = {
  name: "Uday Singh",
  roles: ["Full-stack developer", "Computer science student"],
  description:
    "I build thoughtful web experiences and practical software products with a focus on clear interfaces, reliable foundations, and continuous learning.",
  about:
    "I am a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning. I enjoy turning product ideas into usable interfaces, learning how systems work end to end, and improving projects through iteration.",
  focus:
    "Currently building my foundation across React, Next.js, Node.js, databases, and software design while looking for internship and junior software engineering opportunities.",
  github: "https://github.com/udaysinghparihar007",
  resume: "",
  linkedin: "https://www.linkedin.com/in/uday-singh-parihar-34a711386",
  email: "uday.singh.parihar007@gmail.com",
};

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    summary: "Interfaces that are responsive, readable, and easy to use.",
    skills: [
      { name: "React", image: "/skills/react.svg" },
      { name: "Next.js", image: "/skills/nextjs.svg" },
      { name: "JavaScript", image: "/skills/javascript.svg" },
      { name: "HTML", image: "/skills/html.svg" },
      { name: "CSS", image: "/skills/css.svg" },
      { name: "Tailwind CSS", image: "/skills/tailwind.svg" },
    ],
  },
  {
    title: "Backend & data",
    summary: "A growing full-stack toolkit for building complete applications.",
    skills: [
      { name: "Node.js", image: "/skills/nodejs.svg" },
      { name: "Express", image: "/skills/express.svg" },
      { name: "Python", image: "/skills/python.svg" },
      { name: "PostgreSQL", image: "/skills/postgresql.svg" },
      { name: "MySQL", image: "/skills/mysql.svg" },
      { name: "MongoDB", image: "/skills/mongodb.svg" },
    ],
  },
  {
    title: "Workflow",
    summary: "Tools and habits that support consistent, collaborative delivery.",
    skills: [
      { name: "Git", image: "/skills/git.svg" },
      { name: "GitHub", image: "/skills/github.svg" },
      { name: "VS Code", image: "/skills/vscode.svg" },
      { name: "Postman", image: "/skills/postman.svg" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 11,
    title: "NOVA/MARKET",
    description:
      "A database-driven e-commerce concept for consumer technology products, designed to demonstrate a complete storefront and product workflow.",
    image: "/projects/novamarket.png",
    tags: ["React", "PostgreSQL", "Node.js", "Express"],
    category: "Full-stack product",
    github: "https://github.com/udaysinghparihar007/NOVA-MARKET",
    webapp: "https://nova-market-omega.vercel.app/",
    details: [
      "Customer-facing storefront and product discovery",
      "Authentication, authorization, inventory, cart, and order workflows",
      "Reviews, product image management, caching, testing, and deployment considerations",
    ],
  },
  {
  id: 12,
  title: "Keeper",
  description:
    "A full-stack note management platform designed for fast idea capture, effortless organization, and a calm, distraction-free writing experience.",
  image: "/projects/keeper.png",
  tags: ["React", "PostgreSQL", "Node.js", "Express"],
  category: "Full-stack product",
  github: "https://github.com/udaysinghparihar007/Keeper",
  webapp: "https://keeper-neon-seven.vercel.app/",
  details: [
    "Fast note creation with an intuitive writing workspace",
    "Search and organization tools for quickly accessing saved notes",
    "Automatic saving and persistent storage for reliable note management",
    "Minimal, responsive interface focused on a smooth writing experience",
  ],
},
{
  id: 13,
  title: "ELK AUDIOS",
  description:
    "A premium audio and AV brand website built to showcase residential and commercial solutions through an immersive, responsive, and highly interactive web experience.",
  image: "/projects/ELK-AUDIOS.png",
  tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  category: "Full-stack web",
  github: "https://github.com/Prakhar-Sahu26/ELK-audios",
  webapp: "https://elk-audios-nine.vercel.app/",
  details: [
    "Responsive product and solution pages for home audio, lifestyle audio, boutique architectural, and commercial AV systems",
    "Interactive animations, smooth scrolling, transitions, and immersive visual presentation",
    "Contact enquiry workflow with form validation and server-side API integration",
    "Collaborative three-person project focused on building a polished, production-ready brand experience",
  ],
},
];

export const education: Education[] = [
  {
    id: 0,
    school: "School of Information Technology, RGPV",
    date: "2024 – 2028",
    desc:
      "Pursuing a Bachelor of Technology in Computer Science and Engineering with Artificial Intelligence and Machine Learning.",
    degree: "B.Tech — Computer Science and Engineering (AI & ML)",
  },
  {
    id: 1,
    school: "IBS Global Academy, Ujjain",
    date: "Apr 2022 – Apr 2024",
    grade: "71.2%",
    desc: "Completed senior secondary education with Physics, Chemistry, Mathematics, and Informatics Practices.",
    degree: "Class XII — PCM with IP",
  },
  {
    id: 2,
    school: "St. Thomas School, Ujjain",
    date: "Apr 2020 – Mar 2022",
    grade: "85.43%",
    desc: "Completed secondary education with Computer Applications.",
    degree: "Class X — Computer Applications",
  },
];
