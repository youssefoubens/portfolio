import React from 'react';
import '../css/experience.css';

export default function Experience() {
    const experiences = [
        {
            date: "2024 (2 months)",
            company: "VINCI Energies in Morocco",
            role: "Full Stack Developer - Internship",
            description:
                "Developed a Java-based application for project management and cost estimation using JavaFX and Spring Data JPA. Enhanced workflow efficiency and laid the foundation for AI-powered analytics in construction management.",
        },
        // Add more experiences here if needed
    ];

    return (
        <div className="experience-section">
            <h2 className="section-title">My Experience</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <p className="timeline-date">{exp.date}</p>
                            <h3 className="timeline-role">
                                {exp.role.toUpperCase()} • <span className="timeline-company">{exp.company}</span>
                            </h3>
                            <p className="timeline-description">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}