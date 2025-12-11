import React from 'react';
import './Skills.css';
import {
  FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaJava, FaPython, FaDatabase, FaCloud
} from 'react-icons/fa';
import {
  SiRubyonrails, SiTypescript, SiPostgresql, SiMysql, SiKubernetes, SiGooglecloud,
  SiSpringboot, SiMongodb, SiRedis, SiJavascript, SiHtml5, SiCss3, SiAngular, SiVuedotjs,
  SiTensorflow, SiPytorch, SiScikitlearn, SiKeras, SiPandas, SiNumpy, SiJupyter,
  SiApachespark, SiApachekafka, SiTableau, SiPowerbi, SiSnowflake, SiDatabricks,
  SiGit, SiJenkins, SiTerraform, SiAnsible, SiPrometheus, SiGrafana, SiElasticsearch,
  SiFlask, SiDjango, SiFastapi, SiExpress, SiNestjs, SiGraphql, SiPostman,
  SiGo                     // <-- Added here
} from 'react-icons/si';

// Icon mapping
const iconMap: { [key: string]: JSX.Element } = {
  // Frontend
  FaReact: <FaReact />,
  SiJavascript: <SiJavascript />,
  SiTypescript: <SiTypescript />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <SiCss3 />,
  SiAngular: <SiAngular />,
  SiVuedotjs: <SiVuedotjs />,

  // Backend
  FaNodeJs: <FaNodeJs />,
  FaJava: <FaJava />,
  FaPython: <FaPython />,
  SiRubyonrails: <SiRubyonrails />,
  SiSpringboot: <SiSpringboot />,
  SiFlask: <SiFlask />,
  SiDjango: <SiDjango />,
  SiFastapi: <SiFastapi />,
  SiExpress: <SiExpress />,
  SiNestjs: <SiNestjs />,
  SiGo: <SiGo />,        // <-- Added here

  // Database
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,
  SiMongodb: <SiMongodb />,
  SiRedis: <SiRedis />,
  FaDatabase: <FaDatabase />,
  SiSnowflake: <SiSnowflake />,

  // AI/ML
  SiTensorflow: <SiTensorflow />,
  SiPytorch: <SiPytorch />,
  SiScikitlearn: <SiScikitlearn />,
  SiKeras: <SiKeras />,
  SiPandas: <SiPandas />,
  SiNumpy: <SiNumpy />,

  // Cloud & DevOps
  FaAws: <FaAws />,
  SiGooglecloud: <SiGooglecloud />,
  FaDocker: <FaDocker />,
  SiKubernetes: <SiKubernetes />,
  SiJenkins: <SiJenkins />,
  SiTerraform: <SiTerraform />,
  SiAnsible: <SiAnsible />,
  FaCloud: <FaCloud />,

  // Data Science & Engineering
  SiJupyter: <SiJupyter />,
  SiApachespark: <SiApachespark />,
  SiApachekafka: <SiApachekafka />,
  SiTableau: <SiTableau />,
  SiPowerbi: <SiPowerbi />,
  SiDatabricks: <SiDatabricks />,

  // Others
  FaGitAlt: <FaGitAlt />,
  SiGit: <SiGit />,
  SiGraphql: <SiGraphql />,
  SiPostman: <SiPostman />,
  SiPrometheus: <SiPrometheus />,
  SiGrafana: <SiGrafana />,
  SiElasticsearch: <SiElasticsearch />,
};

// Skills Data
const skillsData = {
  "Frontend": [
    { name: "React", icon: "FaReact", description: "UI Library" },
    { name: "JavaScript", icon: "SiJavascript", description: "Programming Language" },
    { name: "TypeScript", icon: "SiTypescript", description: "Typed JavaScript" },
    { name: "HTML5", icon: "SiHtml5", description: "Markup Language" },
  ],
  "Backend": [
    { name: "Node.js", icon: "FaNodeJs", description: "JavaScript Runtime" },
    { name: "Python", icon: "FaPython", description: "Programming Language" },
    { name: "Java", icon: "FaJava", description: "Programming Language" },
    // { name: "Spring Boot", icon: "SiSpringboot", description: "Java Framework" },
    { name: "Go", icon: "SiGo", description: "Programming Language" },  // <-- Added here
  ],
  "Database": [
    { name: "PostgreSQL", icon: "SiPostgresql", description: "Relational Database" },
    { name: "MySQL", icon: "SiMysql", description: "Relational Database" },
    { name: "MongoDB", icon: "SiMongodb", description: "NoSQL Database" },
    { name: "Redis", icon: "SiRedis", description: "In-Memory Cache" },
  ],
  "AI/ML": [
    { name: "TensorFlow", icon: "SiTensorflow", description: "ML Framework" },
    { name: "PyTorch", icon: "SiPytorch", description: "Deep Learning" },
    { name: "Scikit-learn", icon: "SiScikitlearn", description: "ML Library" },
    { name: "Pandas", icon: "SiPandas", description: "Data Analysis" },
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: "FaAws", description: "Cloud Platform" },
    { name: "Docker", icon: "FaDocker", description: "Containerization" },
    { name: "Kubernetes", icon: "SiKubernetes", description: "Orchestration" },
    { name: "Jenkins", icon: "SiJenkins", description: "CI/CD" },
  ],
  "Data Science": [
    { name: "Jupyter", icon: "SiJupyter", description: "Notebook Environment" },
    { name: "Apache Spark", icon: "SiApachespark", description: "Big Data Processing" },
    { name: "Tableau", icon: "SiTableau", description: "Data Visualization" },
    { name: "NumPy", icon: "SiNumpy", description: "Numerical Computing" },
  ],
  "Data Engineer": [
    { name: "Apache Kafka", icon: "SiApachekafka", description: "Stream Processing" },
    { name: "Databricks", icon: "SiDatabricks", description: "Data Platform" },
    { name: "Snowflake", icon: "SiSnowflake", description: "Data Warehouse" },
    { name: "Apache Spark", icon: "SiApachespark", description: "Data Processing" },
  ],
  "Others": [
    { name: "Git", icon: "SiGit", description: "Version Control" },
    { name: "GraphQL", icon: "SiGraphql", description: "Query Language" },
    { name: "Postman", icon: "SiPostman", description: "API Testing" },
    { name: "Elasticsearch", icon: "SiElasticsearch", description: "Search Engine" },
  ],
};

const Skills: React.FC = () => {
  return (
    <div className="skills-container">
      {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
        <div key={categoryIndex} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter, i) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
