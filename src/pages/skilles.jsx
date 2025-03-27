// SkillsTooling.jsx
import React, { useState } from "react";
import { FaCode, FaServer, FaDatabase, FaCloud } from "react-icons/fa";
import '../css/skillsStyles.css';

const skills = [
  {
    title: "Frontend Development",
    description:
      "In frontend development, I focus on creating user interfaces for websites and web applications. I use languages like HTML, CSS, and JavaScript, along with frameworks like Tailwind, Angular and Vue.js. My work involves designing and implementing the visual elements of a website to ensure a great user experience.",
    icon: <FaCode className="skill-icon" />,
  },
  {
    title: "Backend Development",
    description:
      "Experienced in building scalable APIs and microservices with Node.js, Express, and authentication systems.",
    icon: <FaServer className="skill-icon" />,
  },
  {
    title: "Database Technologies",
    description:
      "Skilled in working with SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Firebase) databases, ensuring efficient data management.",
    icon: <FaDatabase className="skill-icon" />,
  },
  {
    title: "Cloud Services",
    description:
      "Hands-on experience with AWS, Firebase, and Docker for deployment, containerization, and cloud computing.",
    icon: <FaCloud className="skill-icon" />,
  },
];

export default function SkillsTooling() {
  const [selectedSkill, setSelectedSkill] = useState(0); // Default to the first skill

  return (
    <div className="skills-container">
      <h2 className="skills-title text-ternary-dark dark:text-ternary-light">Skills</h2>
      <div className="skills-content">
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`skill-item ${selectedSkill === index ? "active" : ""}`}
              onClick={() => setSelectedSkill(index)}
            >
              {skill.icon}
              <h3 className="text-ternary-dark dark:text-ternary-light">{skill.title}</h3>
            </div>
          ))}
        </div>
        <div className="skill-description">
          {selectedSkill !== null && (
            <>
              <h3 className="text-ternary-dark dark:text-ternary-light">{skills[selectedSkill].title}</h3>
              <p className="text-ternary-dark dark:text-ternary-light">{skills[selectedSkill].description}</p>
            </>
          )}
        </div>
      </div>
      <div className="tech-icons">
        <span className="text-ternary-dark dark:text-ternary-light">🔵 React</span>
        <span className="text-ternary-dark dark:text-ternary-light">🟢 Node.js</span>
        <span className="text-ternary-dark dark:text-ternary-light">🟠 JavaScript</span>
        <span className="text-ternary-dark dark:text-ternary-light">🟣 MongoDB</span>
        <span className="text-ternary-dark dark:text-ternary-light">⚫ Docker</span>
        <span className="text-ternary-dark dark:text-ternary-light">🔶 Firebase</span>
        <span className="text-ternary-dark dark:text-ternary-light">🟤 AWS</span>
      </div>
    </div>
  );
}