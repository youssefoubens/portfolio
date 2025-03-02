import React, { useState } from "react";
import { FaCode, FaServer, FaDatabase, FaCloud } from "react-icons/fa";
 // Import CSS for styling

const skills = [
  {
    title: "Frontend Development",
    description:
      "I focus on creating modern, responsive, and dynamic user interfaces using React, Next.js, Tailwind CSS, and more.",
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
      </div>
    </div>
  );
}
