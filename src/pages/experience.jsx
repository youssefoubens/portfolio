import React from 'react';
import '../css/experience.css';

export default function ExperienceTimeline() {
    const experiences = [
        {
            date: "Jul 2024 - Sep 2024 (2 months)",
            company: "VINCI Energies in Morocco",
            role: "Full Stack Developer - Internship",
            description:
                "Developed a Java-based application for project management and cost estimation using JavaFX and Spring Data JPA. Enhanced workflow efficiency and laid the foundation for AI-powered analytics in construction management.",
        },
        // Add more experiences here if needed
    ];

    return (
        <div className="experience-section">
            <h2 className="section-title text-ternary-dark dark:text-ternary-light">My Experience</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-date text-ternary-dark dark:text-ternary-light">{exp.date}</div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3 className="timeline-role text-ternary-dark dark:text-ternary-light">
                                {exp.role.toUpperCase()} • <span className="timeline-company text-ternary-dark dark:text-ternary-light">{exp.company}</span>
                            </h3>
                            <p className="timeline-description text-ternary-dark dark:text-ternary-light">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
