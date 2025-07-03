import React from 'react';
import './Skills.css';

// PUBLIC_INTERFACE
export default function Skills() {
  const skillCategories = [
    {
      title: "Analytics & BI",
      skills: ["Tableau", "Power BI", "Google Data Studio", "Looker"],
    },
    {
      title: "Programming",
      skills: ["Python", "R", "SQL", "JavaScript"],
    },
    {
      title: "Data Science",
      skills: [
        "Pandas", "NumPy", "Scikit-learn", "TensorFlow",
        "Machine Learning", "Statistics"
      ],
    },
    {
      title: "Other",
      skills: [
        "Excel", "Git/GitHub", "Public Speaking", "Agile", "Communication"
      ],
    },
  ];
  return (
    <div className="skills-container">
      <h3>Skills</h3>
      <div className="skills-grid">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="skill-card">
            <h4>{cat.title}</h4>
            <ul>
              {cat.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
