import React from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaAngular, FaGithub, FaGitlab, FaGoogle, FaJava, FaJenkins, FaMicrosoft, FaPython, FaVuejs, FaAndroid } from 'react-icons/fa';
import { SiRubyonrails, SiPostgresql, SiMongodb, SiMaterialdesign, SiHtml5, SiCss3, SiJquery, SiAwsamplify, SiFirebase, SiTerraform, SiArgo, SiTypescript, SiJavascript, SiSelenium, SiGo, SiApachekafka, SiSocketdotio, SiFlask } from 'react-icons/si';
import { GrDeploy, GrKubernetes } from "react-icons/gr";

const techIcons: { [key: string]: JSX.Element } = {
  "ReactJS": <FaReact />,
  "NodeJS": <FaNodeJs />,
  "AWS": <FaAws />,
  "PostgreSQL": <SiPostgresql />,
  "MongoDB": <SiMongodb />,
  "Ruby On Rails": <SiRubyonrails />,
  "Material UI": <SiMaterialdesign />,
  "HTML5": <SiHtml5 />,
  "CSS3": <SiCss3 />,
  "jQuery": <SiJquery />,
  "AWS-ECS": <SiAwsamplify />,
  'Cognito': <FaAws />,
  'Lambda': <FaAws />,
  'ECS': <FaAws />,
  'Jenkins': <FaJenkins />,
  'Docker': <FaDocker />,
  'GraphQL': <FaDatabase />,
  'CI/CD': <FaGitlab />,
  'GitLab': <FaGitlab />,
  'GitHub': <FaGithub />,
  'Heroku': <GrDeploy />,
  'Netlify': <GrDeploy />,
  'Firebase': <SiFirebase />,
  'GCP': <FaGoogle />,
  'Azure': <FaMicrosoft />,
  'Kubernetes': <GrKubernetes />,
  'Terraform': <SiTerraform />,
  'ArgoCD': <SiArgo />,
  'Java': <FaJava />,
  'Spring Boot': <FaJava />,
  'Python': <FaPython />,
  'Node.js': <FaNodeJs />,
  'Express.js': <FaNodeJs />,
  'Hibernate': <FaJava />,
  'Maven': <FaJava />,
  'Gradle': <FaJava />,
  'JUnit': <FaJava />,
  'Mockito': <FaJava />,
  'Jest': <FaReact />,
  'React': <FaReact />,
  'Angular': <FaAngular />,
  'Vue.js': <FaVuejs />,
  'Next.js': <FaReact />,
  'Gatsby': <FaReact />,
  'Nuxt.js': <FaVuejs />,
  'Redux': <FaReact />,
  'Vuex': <FaVuejs />,
  'Tailwind CSS': <SiCss3 />,
  'Bootstrap': <SiCss3 />,
  'JQuery': <SiJquery />,
  'TypeScript': <SiTypescript />,
  'JavaScript': <SiJavascript />,
  'Android Studio': <FaAndroid />,
  'Android': <FaAndroid />,
  'EAR': <FaPython />,
  'Selenium': <SiSelenium />,
  'Go': <SiGo />,
  'mTLS': <FaAws />,
  'Kafka': <SiApachekafka />,
  'React.js': <FaReact />,
  'Socket.io': <SiSocketdotio />,
  'MediaPipe': <FaPython />,
  'Flask': <SiFlask />,
  'Google Cloud Platform': <FaGoogle />,
};

// Hardcoded projects data
const hardcodedProjects = [
  {
    title: "Invoice Extraction & Quality Control Service",
    description: "This project is a comprehensive Invoice Extraction and Quality Control Service designed for B2B invoice processing. It extracts structured data from invoice PDFs, validates them against a defined schema and business rules, and provides multiple interfaces for integration and usage.",
    coverImage: "/images/projects/invoice.png",
    githubLink: "https://github.com/shaik1234567/Invoice-qc-service",
    techStack: ["Python", "HTML5", "Node.js"]
  },
  {
    title: "AI-Powered Driver Drowsiness Detection System",
    description: "This cutting-edge Android application uses AI-powered facial analysis to detect signs of driver drowsiness in real-time. The app monitors the driver's front-facing camera (mounted on the windshield) and analyzes facial features including eye aspect ratio (EAR) to prevent accidents.",
    coverImage: "/images/projects/drowsiness.jpeg",
    githubLink: "https://github.com/shaik1234567/AI-Powered-Driver-Drowsiness-Detection-System",
    techStack: ["Android Studio", "Python", "EAR"]
  },
  {
    title: "Multi-Platform Job Application Automation Bot",
    description: "Reducing human application time by 80 percent using this AI automation bot. Automates job applications across multiple platforms with intelligent form filling and submission tracking.",
    coverImage: "/images/projects/automation.jpeg",
    githubLink: "https://github.com/shaik1234567/Multi-Platform-Job-Application-Automation-Bot",
    techStack: ["Selenium", "Python"]
  },
  {
    title: "Securitas Platform: Secure Event Ingestion Pipeline",
    description: "The Securitas Platform is a proof-of-concept (PoC) microservice that demonstrates core security and integrity principles within a distributed event streaming architecture. It securely ingests critical security and audit logs, validates their integrity using a cryptographic Merkle Tree, and stages them for downstream processing through a simulated Kafka message broker.",
    coverImage: "/images/projects/securitas.jpeg",
    githubLink: "https://github.com/shaik1234567/securitas-platform",
    techStack: ["Go", "mTLS", "Kafka"]
  },
  {
    title: "Unitrade",
    description: "Unitrade is a student-focused online platform built to simplify the process of buying and selling second-hand items within a college or university community. With features like real-time chat, categorized product listings, and search/filter functionalities, Unitrade makes campus trading seamless and secure.",
    coverImage: "/images/projects/unitrade.jpg",
    githubLink: "https://github.com/shaik1234567/uni-trade",
    techStack: ["React.js", "Node.js", "Socket.io"]
  },
  {
    title: "Dance Movement Analysis Server",
    description: "A cloud-based AI/ML server that processes short-form dance videos to detect and summarize dance poses using advanced computer vision. Built with Python, MediaPipe, and Flask, containerized with Docker, and deployed on Google Cloud Platform.",
    coverImage: "/images/projects/dance movement.png",
    githubLink: "https://github.com/shaik1234567/Dance-Movement-Analysis-Server",
    techStack: ["Python", "MediaPipe", "Flask", "Docker", "Google Cloud Platform"]
  },
  // Add more projects here as needed
];

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        {hardcodedProjects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
            onClick={() => window.open(project.githubLink, '_blank')}
          >
            <img src={project.coverImage} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub /> View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
