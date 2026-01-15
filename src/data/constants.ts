// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = "js",
  TERRAFORM = "terraform",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  DJANGO = "django",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  API = "api",
  NPM = "npm",
  FIREBASE = "firebase",
  PYTHON = "python",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  VERCEL = "vercel",
  CPLUS = "cpp",
  C="c",
  ML="ml",
  NLP="nlp",
  TechnicalWriting="technicalwriting",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "yeeting code into the DOM since '95, no cap! 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TERRAFORM]: {
    id: 2,
    name: "terraform",
    label: "Terraform",
    shortDescription:
      "infrastructure as code, but make it fashion! 🌍💻",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "the internet's granddad,  still bussin' fr fr! 💀🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "styling with the ultimate drip, no cap 💁‍♂️🔥",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: `"use using" 
using use = useUsing("use")`,
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Vue",
    shortDescription:
      "the chill pill for your frontend, it hits different! 🟢😌",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "the drama queen of front-end frameworks, and we stan! 👑📜",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.DJANGO]: {
    id: 8,
    name: "django",
    label: "Django",
    shortDescription: "the grandpa of web frameworks, still rocking that cane 🧓👴",
    color: "#092e20",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript said 'sike, I'm backend now', deadass! 🔙🔚",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "middlewares go dummy hard, no cap! 🚂💨",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "SQL but make it fashion, purr 💅🐘",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "flexin' with that NoSQL drip, respectfully! 💪🍃",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "the code's personal bodyguard, no cap! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "sliding into those pull requests, IYKYK! 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.API]: {
    id: 15,
    name: "api",
    label: "API",
    shortDescription: "making apps talk since forever, no cap! 🗣️🔗",
    color: "#f7b93a",
    icon: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription: "package manager said 'I gotchu fam', period! 📦💯",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription:
      "your app's ultimate wingman, but watch out, vendor lock-in vibes! 🔥👌",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.PYTHON]: {
    id: 18,
    name: "python",
    label: "Python",
    shortDescription: "the grandpa of programming languages, still rocking that cane 🧓👴",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "where 'chmod 777' is the ultimate flex 🔓🙌",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "The best containerization! 🐳🔥",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "NginX",
    shortDescription: "reverse proxy go zoom zoom, sheesh! 🚗💨",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription:
      "always extra, making everything more complicated, period! 🌐👨‍💻",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [SkillNames.CPLUS]: {
    id: 23,
    name: "cpp",
    label: "C++",
    shortDescription: "the OG of performance, still running the game! 🏎️💨",
    color: "rgb(1, 147, 49)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "The triangle compony, helps you deploy and go touch grass! 🚀🌿",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  [SkillNames.C]: {
    id: 25,
    name: "c",
    label: "C",
    shortDescription: "the grandpa of programming languages, still rocking that cane 🧓👴",
    color: "#a8b9cc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  [SkillNames.ML]: {
    id: 26,
    name: "ml",
    label: "Machine Learning",
    shortDescription: "the future is now, and it's neural! 🧠🤖",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/machinelearning/machinelearning-original.svg",
  },
  [SkillNames.NLP]: {
    id: 27,
    name: "nlp",
    label: "Natural Language Processing",
    shortDescription: "making computers understand human language, no cap! 🗣️💬",
    color: "#f7b93a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nlp/nlp-original.svg",
  },
  [SkillNames.TechnicalWriting]: {
    id: 28,
    name: "technicalwriting",
    label: "Technical Writing",
    shortDescription:
      "the art of making complex things simple, period! 📝✍️",
    color: "#4b8bbe",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/technicalwriting/technicalwriting-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "July 2025",
    endDate: "August 2025",
    title: "Cloud App Development Intern",
    company: "Systems Limited",
    description: [
      "Developed a full-stack app using Vue.js, Node.js, Express.js, and Firebase, achieving 100% real-time data sync.",
      "Integrated AI summarization (Gemini API), reducing note review time by 60% and enhancing usability",
    ],
    skills: [
      SkillNames.VUE,
      SkillNames.FIREBASE,
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
    ],
  },
    {
    id: 2,
    startDate: "June 2025",
    endDate: "August 2024",
    title: "Summer Research Intern",
    company: "University of Europe for Applied Sciences",
    description: [
      "Researched lightweight ASR systems using Mozilla Common Voice (5,000+ clips) for model training.",
      "Built a BiLSTM model that cut WER from 71% to 38% and CER from 35% to 22% in 10 epochs.",
      "Benchmarked against wav2vec 2.0 & Whisper, achieving 96% fewer parameters with competitive accuracy.",
      "Co-authored a paper on an edge-deployable ASR pipeline, reaching 23.5% WER within 1 GB GPU memory.",
    ],
    skills: [
      SkillNames.ML,
      SkillNames.NLP,
      SkillNames.TechnicalWriting,
    ],
  },
  {
    id: 3,
    startDate: "January 2025",
    endDate: "February 2024",
    title: "Backend Developer",
    company: "Talpur Foundation Pakistan",
    description: [
      "Engineered a Django-based backend architecture that accelerated API response time by 40%.",
      "Reduced database queries by 30% and deployed system on Vercel with 99.5% uptime.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.DJANGO,
      SkillNames.POSTGRES,
      SkillNames.VERCEL,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

