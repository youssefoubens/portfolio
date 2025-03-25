import React, { useState } from "react";
import { FaCode, FaServer, FaDatabase, FaCloud, FaJava, FaPython, FaRobot } from "react-icons/fa";
import '../css/skillsStyles.css';

const skills = [
  {
    title: "Frontend Development",
    description:
      "I focus on creating modern, responsive, and dynamic user interfaces using React, Next.js, Tailwind CSS.",
    icon: <FaCode className="skill-icon" />, // Frontend icon
  },
  {
    title: "Backend Development",
    description:
      "Experienced in building scalable APIs and microservices with Node.js, Express, and authentication systems.",
    icon: <FaServer className="skill-icon" />, // Backend icon
  },
  {
    title: "Database Technologies",
    description:
      "Skilled in working with SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Firebase) databases, ensuring efficient data management.",
    icon: <FaDatabase className="skill-icon" />, // Database icon
  },
  {
    title: "Cloud Services",
    description:
      "Hands-on experience with AWS, Firebase, and Docker for deployment, containerization, and cloud computing.",
    icon: <FaCloud className="skill-icon" />, // Cloud icon
  },
  {
    title: "Java Development",
    description:
      "Proficient in Java programming, with experience in JavaFX, Spring Boot, and Spring Data JPA for building robust applications.",
    icon: <FaJava className="skill-icon" />, // Java icon
  },
  {
    title: "Python & Machine Learning",
    description:
      "Experienced in Python programming and machine learning, with projects like image classification for tomato quality evaluation using TensorFlow and Google Colab.",
    icon: <FaPython className="skill-icon" />, // Python icon
  },
  {
    title: "C/C++ Development",
    description:
      "Skilled in C/C++ programming, with projects like developing a Tetris game using SFML and analyzing algorithm complexity.",
    icon: <FaCode className="skill-icon" />, // C/C++ icon (reusing FaCode)
  },
  {
    title: "AI & Machine Learning",
    description:
      "Hands-on experience with AI and machine learning, including image classification and predictive modeling.",
    icon: <FaRobot className="skill-icon" />, // AI/ML icon
  },
];

export default function SkillsDashboard() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills & Tooling</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`skill-card ${selectedSkill === index ? "active" : ""}`}
            onClick={() =>
              setSelectedSkill(selectedSkill === index ? null : index)
            }
          >
            {skill.icon}
            <h3>{skill.title}</h3>
            {selectedSkill === index && (
              <p className="skill-description">{skill.description}</p>
            )}
          </div>
        ))}
      </div>
      <div className="tech-icons">
        <span>🔵 React</span>
        <span>🟢 Node.js</span>
        <span>🟠 JavaScript</span>
        <span>🟣 MongoDB</span>
        <span>⚫ Docker</span>
        <span>🔶 Firebase</span>
        <span>🟤 Java</span>
        <span>🐍 Python</span>
        <span>🔴 C/C++</span>
        <span>🤖 AI/ML</span>
      </div>
    </div>
  );
}