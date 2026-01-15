import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiVuedotjs,
  SiStreamlit,
  SiHtml5,
  SiDjango,
  SiCss3,
  SiCplusplus,
  SiVisualstudiocode,
  SiOpenai,
  SiLinux,
  SiTerraform,
  SiAmazonaws,
  SiGithubactions,
  SiGnubash,
  SiFlutter,
  SiFastapi,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  Cplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />
  },
  MicrosoftVisualStudio: {
    title: "Microsoft Visual Studio",
    bg: "black",
    fg: "white",
    icon: <SiVisualstudiocode />
  },
  html: {
    title: "HTML",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  CSS: {
    title: "CSS",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  django: {
    title: "Django",
    bg: "black",
    fg: "white",
    icon: <SiDjango />,
  },
  streamlit: {
    title: "Streamlit",
    bg: "black",
    fg: "white",
    icon: <SiStreamlit />,
  },
  OpenAI: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <SiOpenai />,
  },
  Linux: {
    title: "Linux",
    bg: "black",
    fg: "white",
    icon: <SiLinux />,
  },
  Terraform: {
    title: "Terraform",
    bg: "black",
    fg: "white",
    icon: <SiTerraform />,
  },
  AWS: {
    title: "AWS",
    bg: "black",
    fg: "white",
    icon: <SiAmazonaws />,
  },
  GitHubActions: {
    title: "GitHub Actions",
    bg: "black",
    fg: "white",
    icon: <SiGithubactions />,
  },
  Bash: {
    title: "Bash",
    bg: "black",
    fg: "white",
    icon: <SiGnubash />,
  },
  flutter: {
    title: "Flutter",
    bg: "black",
    fg: "white",
    icon: <SiFlutter />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  }, 
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "meDDI",
    category: "Mobile Application",
    title: "meDDI",
    src: "/assets/projects-screenshots/meDDI/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.flutter,
      ],
      backend: [
        PROJECT_SKILLS.fastapi,
      ],
    },
    live: "https://zaidmohsin457.github.io/meDDI_web/",
    github: "https://github.com/ZaidMohsin457/meDDI",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            meDDI:Medication Safety System
          </TypographyP>
          <TypographyP className="font-mono ">
            meDDI: Medication Safety System
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Project Overview </TypographyH3>
          <p className="font-mono mb-2">
            Advanced AI-powered system using Vision-Language Models to recognize handwritten prescriptions and detect drug-drug interactions, ensuring patient safety in Pakistan's healthcare system.         
          </p>
          <TypographyH3 className="my-4 mt-8">Technical Highlights </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              <strong>Vision-Language Model Integration:</strong> Leveraged advanced VLMs to accurately interpret handwritten prescriptions, overcoming challenges posed by diverse handwriting styles.
            </li>
            <li className="font-mono">
              <strong>Drug-Drug Interaction Detection:</strong> Implemented a robust backend system that cross-references prescribed medications against a comprehensive database to identify potential harmful interactions.
            </li>
            <li className="font-mono">
              <strong>User-Friendly Mobile Interface:</strong> Developed an intuitive Flutter-based mobile application for seamless prescription scanning and instant feedback on medication safety.
            </li>
            <li className="font-mono">
              <strong>Healthcare Impact:</strong> Aimed at reducing medication errors in Pakistan by providing pharmacists and healthcare providers with a reliable tool for prescription verification.
            </li>
          </ul>
          <div className="mt-8">
            <TypographyH3 className="my-4">Conclusion</TypographyH3>
            <p className="font-mono">
              meDDI represents a significant advancement in healthcare technology, utilizing AI to enhance medication safety. By addressing the critical issue of drug-drug interactions through innovative prescription analysis, this project has the potential to save lives and improve patient outcomes in Pakistan.
            </p>
          </div>
        </div>
      );
    },
  },
  {
    id: "Snake Game",
    category: "Coding Platform",
    title: "Snake Game",
    src: "/assets/projects-screenshots/SnakeGame/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.MicrosoftVisualStudio,
      ],
      backend: [
        PROJECT_SKILLS.Cplus,
      ],
    },
    // live: "https://www.codingducks.xyz/",
    github: "https://github.com/ZaidMohsin457/Snake-Game",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Console-Based Snake Game in C++ Using OOP Principles
          </TypographyP>
          <TypographyP className="font-mono ">
            Console-Based Snake Game in C++ Using OOP Principles
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Project Overview </TypographyH3>
          <p className="font-mono mb-2">
            This project is a console-based recreation of the classic arcade game "Snake," developed entirely in C++. The primary goal of this project was to bridge theoretical knowledge with practical application by heavily utilizing Object-Oriented Programming (OOP) paradigms.
          </p>
          <TypographyH3 className="my-4 mt-8">Technical Highlights </TypographyH3> 
          <ul className="list-disc ml-6">
            <li className="font-mono">
              <strong>Object-Oriented Design:</strong> The game is structured using classes to represent key components such as the Snake, Food, and Game Board. This modular approach enhances code readability and maintainability.
            </li>
            <li className="font-mono">
              <strong>Game Mechanics:</strong> Implemented core game mechanics including snake movement, food consumption, growth logic, and collision detection with walls and self.
            </li>
            <li className="font-mono">
              <strong>User Input Handling:</strong> Utilized non-blocking input methods to capture real-time keyboard inputs for controlling the snake's direction.
            </li>
            <li className="font-mono">
              <strong>Game Loop:</strong> Developed a continuous game loop that updates the game state, renders the board, and checks for win/loss conditions at regular intervals.
            </li>
            <li className="font-mono">
              <strong>Data Structures:</strong> Utilizes appropriate data structures (such as vectors or arrays) to manage the growing body of the snake efficiently.
            </li>
          </ul>
          <div className="mt-8">
            <TypographyH3 className="my-4">Conclusion</TypographyH3>
            <p className="font-mono">
              Building this game provided significant hands-on experience in structuring a complex C++ application, debugging real-time interactions, and managing program states effectively.
            </p>
          </div>
        </div>
      );
    },
    live: ""
  },
  {
    id: "Client Management System",
    category: "Web Application",
    title: "Client Management System",
    src: "/assets/projects-screenshots/CRM/landing.png",
    screenshots: ["landing.png"], // Add your specific screenshots here
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.CSS,
        PROJECT_SKILLS.js,
        // PROJECT_SKILLS.Figma,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.django,
        PROJECT_SKILLS.postgres,
      ],
    },
    // live: "https://your-live-link.com",
    github: "https://github.com/ZaidMohsin457/CRM", // Replace with actual repo link
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Full-Stack CRM Solution with Django & PostgreSQL
          </TypographyP>
          <TypographyP className="font-mono ">
            Full-Stack CRM Solution with Django & PostgreSQL
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Project Overview </TypographyH3>
          <p className="font-mono mb-2">
            The Client Management System (CMS) is a comprehensive web-based application designed to streamline business operations. Built on the Django framework and integrated with a PostgreSQL database, this system offers a centralized platform for managing projects, employees, and client relationships, effectively bridging the gap between disjointed workflows and enterprise-level software.
          </p>
          <TypographyH3 className="my-4 mt-8">Technical Highlights </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              <strong>Full-Stack Architecture:</strong> Developed a robust backend using Django and Python, coupled with a PostgreSQL database (managed via pgAdmin) for scalable data integrity.
            </li>
            <li className="font-mono">
              <strong>Leads Pipeline Tracking:</strong> Implemented a dedicated module to categorize and track client interactions through conversion stages (e.g., Prospect, Sales Call Done, Qualified Lead).
            </li>
            <li className="font-mono">
              <strong>Resource Management:</strong> Features a comprehensive dashboard for assigning employees to projects, tracking availability status, and monitoring project due dates.
            </li>
            <li className="font-mono">
              <strong>Intelligent Automation:</strong> Integrated an AI Chatbot equipped with natural language processing to provide real-time updates on project status and client details.
            </li>
            <li className="font-mono">
              <strong>Meeting Scheduler:</strong> Developed a scheduling system that manages meeting links, times, and automated reminders to ensure timely communication.
            </li>
          </ul>
          <div className="mt-8">
            <TypographyH3 className="my-4">Conclusion</TypographyH3>
            <p className="font-mono">
              This project laid a solid foundation for optimizing operational workflows. By integrating project management, leads tracking, and automation into a single cohesive platform, it empowers business owners to focus on strategic growth rather than administrative tasks.
            </p>
          </div>
        </div>
      );
    },
    live: ""
  },
  {
    id: "Course Recommendation System",
    category: "Machine Learning",
    title: "Personalized Course Recommendation System",
    src: "/assets/projects-screenshots/Recommender/dashboard.png",
    screenshots: ["dashboard.png", "feature_importance.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.streamlit,
      ],
      backend: [
        PROJECT_SKILLS.python,
      ],
    },
    // live: "https://your-live-link.com",
    github: "https://github.com/ZaidMohsin457/CourseRecommendationSystem",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI-Powered Recommendation Engine for Online Learning
          </TypographyP>
          <TypographyP className="font-mono ">
             AI-Powered Recommendation Engine for Online Learning
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Project Overview </TypographyH3>
          <p className="font-mono mb-2">
            This project addresses the challenge of navigating overwhelming online course options. By developing a machine learning system based on content-based filtering, the application evaluates user preferences and course attributes to deliver highly personalized suggestions[cite: 382, 383].
          </p>
          <TypographyH3 className="my-4 mt-8">Technical Highlights </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              <strong>Random Forest Regressor:</strong> Utilized this ensemble learning method to predict specific course ratings for users based on historical data and preferences[cite: 404].
            </li>
            <li className="font-mono">
              <strong>Data Simulation Strategy:</strong> To bridge the gap in real-world user data, I simulated a dataset of 1,000 users with varying attributes (e.g., education level, preferred topics) to train a robust model.
            </li>
            <li className="font-mono">
              <strong>Feature Engineering:</strong> Standardized course difficulties (Easy, Medium, Hard) and processed user attributes to create meaningful input features for the model[cite: 395].
            </li>
            <li className="font-mono">
              <strong>High Accuracy:</strong> The trained model achieved a Root Mean Squared Error (RMSE) of 0.258 and a Mean Squared Error (MSE) of 0.066.
            </li>
            <li className="font-mono">
              <strong>Scalable Framework:</strong> Designed the recommendation logic to be versatile enough to extend to other resource types, such as articles, videos, and books[cite: 385].
            </li>
          </ul>
          <div className="mt-8">
            <TypographyH3 className="my-4">Conclusion</TypographyH3>
            <p className="font-mono">
              This project successfully demonstrates the feasibility of using simulated user data to train effective recommendation systems. The model's ability to capture relationships between user attributes and course ratings highlights its potential for real-world EdTech applications[cite: 465, 466].
            </p>
          </div>
        </div>
      );
    },
    live: ""
  },
  {
    id: "AI Job Recommender",
    category: "AI & Web Development",
    title: "AI-Powered Job Recommender",
    src: "/assets/projects-screenshots/JobRecommender/dashboard.png",
    screenshots: ["dashboard.png", "analysis_report.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.CSS,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.django,
        PROJECT_SKILLS.OpenAI,
      ],
    },
    // live: "https://your-live-link.com",
    github: "https://github.com/ZaidMohsin457/Resume_Builder",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Intelligent Job Matching & Resume Analysis System
          </TypographyP>
          <TypographyP className="font-mono ">
             Intelligent Job Matching & Resume Analysis System
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Project Overview </TypographyH3>
          <p className="font-mono mb-2">
            The AI Powered Job Recommender is a sophisticated software system designed to bridge the gap between job seekers and employment opportunities. It leverages artificial intelligence and machine learning techniques to analyze user resumes, extract relevant skills, and match them with appropriate job listings[cite: 521, 522].
          </p>
          <TypographyH3 className="my-4 mt-8">Technical Highlights </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              <strong>NLP-Driven Parsing:</strong> Utilizes the spaCy NLP model to extract unstructured text, skills, and qualifications from uploaded PDF and DOCX resumes[cite: 542, 575].
            </li>
            <li className="font-mono">
              <strong>Vector Space Matching:</strong> Implements TF-IDF and cosine similarity algorithms to mathematically calculate the "Match Score" between a resume and job descriptions[cite: 543, 586].
            </li>
            <li className="font-mono">
              <strong>AI Analysis:</strong> Integrates the OpenAI API to provide detailed, actionable suggestions for resume improvements based on specific job requirements[cite: 545, 576].
            </li>
            <li className="font-mono">
              <strong>Live Job Feeds:</strong> Connects to the JSearch API to fetch real-time job listings that align with the user's extracted skill set.
            </li>
             <li className="font-mono">
              <strong>Secure Architecture:</strong> Built on a robust Django backend with secure file handling and user authentication[cite: 532, 546].
            </li>
          </ul>
          <div className="mt-8">
            <TypographyH3 className="my-4">Conclusion</TypographyH3>
            <p className="font-mono">
              This system goes beyond simple keyword searching by offering a complete workflow: from parsing a resume to finding a job and optimizing the application. It streamlines the job search process and helps users increase their chances of landing desired positions[cite: 523, 527].
            </p>
          </div>
        </div>
      );
    },
    live: ""
  },
  {
    id: "End-to-End DevOps Automation",
    category: "DevOps & Cloud Engineering",
    title: "End-to-End DevOps Automation: Linux, Docker, Terraform & CI/CD",
    src: "/assets/projects-screenshots/DevOps/architecture.png",
    screenshots: ["architecture.png", "terraform_apply.png", "cicd_pipeline.png"],
    skills: {
      frontend: [], 
      backend: [
        PROJECT_SKILLS.Bash,
        PROJECT_SKILLS.Linux,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.Terraform,
        PROJECT_SKILLS.AWS,
        PROJECT_SKILLS.GitHubActions,
      ],
    },
    // live: "https://your-live-link.com", 
    github: "https://github.com/ZaidMohsin457/WebApp_Deployment_Using_Complete_CICD_Pipeline", 
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Complete DevOps Lifecycle: From Bare Metal to Cloud Automation
          </TypographyP>
          <TypographyP className="font-mono ">
             Complete DevOps Lifecycle: From Bare Metal to Cloud Automation
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Project Overview </TypographyH3>
          <p className="font-mono mb-2">
            This project represents a comprehensive implementation of the DevOps lifecycle, moving from foundational Linux administration to advanced cloud automation. Over a series of progressive modules, I architected secure infrastructure on AWS using Terraform, containerized full-stack applications with Docker, and built automated CI/CD pipelines using GitHub Actions to streamline software delivery.
          </p>
          <TypographyH3 className="my-4 mt-8">Technical Highlights </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              <strong>Infrastructure as Code (IaC):</strong> Designed and provisioned a highly available AWS Virtual Private Cloud (VPC) with public/private subnets and secure EC2 instances using Terraform.
            </li>
             <li className="font-mono">
              <strong>Containerization & Orchestration:</strong> Dockerized React/Node.js applications and the DOMjudge system, utilizing Docker Compose to manage multi-container environments, networks, and persistent volumes.
            </li>
            <li className="font-mono">
              <strong>CI/CD Pipeline Automation:</strong> Engineered robust GitHub Actions workflows to automate building, testing (unit tests/linting), and deploying applications to AWS Staging and Production environments.
            </li>
            <li className="font-mono">
              <strong>Linux System Administration:</strong> Demonstrated deep proficiency in user management, permission control (ACLs), bash scripting for automation, and manual LAMP stack deployment.
            </li>
            <li className="font-mono">
              <strong>Cloud Operations:</strong> Managed AWS resources including IAM roles, Security Groups, and Elastic Container Registry (ECR) for secure image storage.
            </li>
          </ul>
          <div className="mt-8">
            <TypographyH3 className="my-4">Conclusion</TypographyH3>
            <p className="font-mono">
              This project bridges the gap between development and operations by establishing a reliable, secure, and automated software delivery pipeline. It demonstrates the ability to manage the entire application lifecycle, from server configuration to automated cloud deployment.
            </p>
          </div>
        </div>
      );
    },
    live: ""
  },
];
export default projects;
