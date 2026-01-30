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
  C = "c",
  ML = "ml",
  NLP = "nlp",
  TechnicalWriting = "technicalwriting",
  MARKETING = "marketing",
  SALES = "sales",
  COMMUNICATION = "communication",
  LEADERSHIP = "leadership",
  TEAMWORK = "teamwork",
  TIME_MANAGEMENT = "time_management",
  PROBLEM_SOLVING = "problem_solving",
  CREATIVITY = "creativity",
  ORGANIZATION = "organization",
  DETAIL_ORIENTED = "detail_oriented",
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
  [SkillNames.MARKETING]: {
    id: 29,
    name: "marketing",
    label: "Marketing",
    shortDescription: "the art of making complex things simple, period! 📝✍️",
    color: "#4b8bbe",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/marketing/marketing-original.svg",
  },
  [SkillNames.SALES]: {
    id: 30,
    name: "sales",
    label: "Sales",
    shortDescription: "the art of making complex things simple, period! 📝✍️",
    color: "#4b8bbe",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sales/sales-original.svg",
  },
  [SkillNames.COMMUNICATION]: {
    id: 31,
    name: "communication",
    label: "Communication",
    shortDescription: "the art of making complex things simple, period! 📝✍️",
    color: "#4b8bbe",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/communication/communication-original.svg",
  },
  [SkillNames.LEADERSHIP]: {
    id: 32,
    name: "leadership",
    label: "Leadership",
    shortDescription: "the art of making complex things simple, period! 📝✍️",
    color: "#4b8bbe",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leadership/leadership-original.svg",
  },
  [SkillNames.TEAMWORK]: {
    id: 33,
    name: "teamwork",
    label: "Teamwork",
    shortDescription: "the art of making complex things simple, period! 📝✍️",
    color: "#4b8bbe",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/teamwork/teamwork-original.svg",
  },
  [SkillNames.TIME_MANAGEMENT]: {
    id: 34,
    name: "time_management",
    label: "Time Management",
    shortDescription: "the art of making complex things simple, period! 📝✍️",
    color: "#4b8bbe",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/time_management/time_management-original.svg",
  },
  [SkillNames.PROBLEM_SOLVING]: {
    id: 35,
    name: "problem_solving",
    label: "Problem Solving",
    shortDescription: "the art of making complex things simple, period! 📝✍️",
    color: "#4b8bbe",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/problem_solving/problem_solving-original.svg",
  },
  [SkillNames.CREATIVITY]: {
    id: 36,
    name: "creativity",
    label: "Creativity",
    shortDescription: "the art of making complex things simple, period! 📝✍️",
    color: "#4b8bbe",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/creativity/creativity-original.svg",
  },
  [SkillNames.ORGANIZATION]: {
    id: 37,
    name: "organization",
    label: "Organization",
    shortDescription: "the art of making complex things simple, period! 📝✍️",
    color: "#4b8bbe",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/organization/organization-original.svg",
  },
  [SkillNames.DETAIL_ORIENTED]: {
    id: 38,
    name: "detail_oriented",
    label: "Detail Oriented",
    shortDescription: "the art of making complex things simple, period! 📝✍️",
    color: "#4b8bbe",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/detail_oriented/detail_oriented-original.svg",
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
    startDate: "January 2026",
    endDate: "Present",
    title: "Campus Ambassador",
    company: "Salesflo",
    description: [
      "Executed strategic campus outreach campaigns to bridge the gap between academia and the corporate SaaS industry.",
      "Collaborated with cross-functional teams to drive brand awareness, successfully enrolling 70% of peers in company-led mentorship programs."
    ],
    skills: [
      SkillNames.MARKETING,
      SkillNames.SALES,
      SkillNames.COMMUNICATION,
      SkillNames.LEADERSHIP,
      SkillNames.TEAMWORK,
      SkillNames.TIME_MANAGEMENT,
      SkillNames.PROBLEM_SOLVING,
      SkillNames.CREATIVITY,
      SkillNames.ORGANIZATION,
      SkillNames.DETAIL_ORIENTED,
    ],
  },
  {
    id: 2,
    startDate: "July 2025",
    endDate: "August 2025",
    title: "Cloud App Development and Maintenance Intern",
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
    id: 3,
    startDate: "June 2025",
    endDate: "August 2025",
    title: "Summer Research Intern",
    company: "University of Europe for Applied Sciences",
    description: [
      "In this research, we developed a lightweight pipeline using LoRA and TinyLlama-1.1B to solve this. By fine-tuning on a specific dataset of job-related content, we managed to cut computational requirements by 70% while maintaining a high standard of output quality (85% correctness). This project offers a replicable framework for developers looking to build efficient, domain-specific text generators.",

    ],
    skills: [
      SkillNames.ML,
      SkillNames.NLP,
      SkillNames.TechnicalWriting,
    ],
  },
  {
    id: 4,
    startDate: "January 2025",
    endDate: "February 2025",
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


export type Publication = {
  id: number;
  title: string;
  conference: string;
  date: string;
  description: string;
  link: string;
};

export const PUBLICATIONS: Publication[] = [
  {
    id: 1,
    title: "Parameter-Efficient Fine-Tuning of Compact Language Models for Professional LinkedIn Post Generation",
    conference: "22nd International Conference on Frontiers of Information Technology (FIT 2025)",
    date: "2026",
    description: "While generative AI has transformed content creation, professional platforms like LinkedIn require a specific tone and context that general models often miss or are too expensive to generate at scale. In this research, we developed a lightweight pipeline using LoRA and TinyLlama-1.1B to solve this. By fine-tuning on a specific dataset of job-related content, we managed to cut computational requirements by 70% while maintaining a high standard of output quality (85% correctness). This project offers a replicable framework for developers looking to build efficient, domain-specific text generators.",
    link: "https://ieeexplore.ieee.org/document/11333715"
  },
  {
    id: 2,
    title: "Efficient Reinforcement Learning for Autonomous Planetary Landing Tasks",
    conference: "20th International Conference on Emerging Technologies (ICET-25)",
    date: "2026",
    description: "Autonomous lunar landing is a notoriously difficult control challenge, requiring split-second decisions in uncertain terrain with strictly limited computational resources. Traditional control methods can struggle with these real-time demands, so this research investigates a more adaptive solution using Reinforcement Learning.In this paper, I developed a Deep Q-Network (DQN) agent within the Gymnasium LunarLander-v3 environment to tackle these flight dynamics. Through extensive experimentation with different neural architectures—ranging from Tiny to Deep—I identified that a Wide network structure (128–128 layers) offered the optimal balance of performance and efficiency.The Result: The final agent achieved a 93% landing success rate with an average reward of 262.89, outperforming other configurations. This study proves that lightweight, well-tuned RL agents can handle complex control tasks effectively, providing a scalable blueprint for future applications in autonomous space robotics.",
    link: "https://ieeexplore.ieee.org/document/11321424"
  },
  {
    id: 3,
    title: "Mobile-Friendly Dog Breed Recognition Using ResNet-18 with Structured Pruning",
    conference: "20th International Conference on Emerging Technologies (ICET-25)",
    date: "2026",
    description: "Fine-grained image classification—like distinguishing between a Siberian Husky and an Eskimo Dog—is notoriously difficult due to extreme visual similarities and limited data. In this study, I set out to determine the best approach for balancing high accuracy with the computational efficiency required for real-world apps.I conducted a direct comparison between a custom CNN and ResNet-18 using the Stanford Dogs dataset. The pre-trained ResNet-18 proved significantly better at detecting subtle breed differences, achieving 80.82% accuracy compared to 66.46% for the custom architecture.The Key Innovation: To make this feasible for mobile deployment, I optimized the ResNet model by pruning 30% of its channels. This successfully reduced the inference time to just 64ms on a mobile CPU with less than a 1.5% drop in accuracy. This project demonstrates a practical, scalable path for building robust image classifiers capable of running on edge devices.",
    link: "https://ieeexplore.ieee.org/document/11321358"
  },
  {
    id: 4,
    title: "Algorithmic Insights into the N-Queens Problem: A Comparative Study Across Scales",
    conference: "20th International Conference on Emerging Technologies (ICET-25)",
    date: "2026",
    description: "The N-Queens problem is a classic benchmark for constraint satisfaction, specifically because the difficulty explodes exponentially as the board size increases. In this study, I wanted to move beyond theory and stress-test four distinct algorithms—Depth-First Search, Hill Climbing, Simulated Annealing, and Genetic Algorithms—on board sizes up to 200×200.The Findings: While exhaustive methods like DFS crumbled under resource demands and simple heuristics often got stuck in local optima, Simulated Annealing emerged as the clear winner. It provided the most consistent performance with low memory usage, effectively solving instances up to N=200. This research underscores that for large-scale optimization problems, choosing the right metaheuristic strategy is often more critical than raw computing power.",
    link: "https://ieeexplore.ieee.org/document/11321408"
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

