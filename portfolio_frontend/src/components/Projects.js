import React from 'react';
import './Projects.css';

// Sample project data
const projects = [
  {
    title: "Sales Forecast Dashboard",
    desc: "Tableau dashboard for real-time sales forecasting integrating SQL backend and REST API.",
    tags: ["Tableau", "Forecasting", "SQL"],
    link: "https://public.tableau.com/profile/ava.data#!/vizhome/SalesForecastDashboard/Overview",
    repo: "https://github.com/avadatavis/sales-forecast-dashboard"
  },
  {
    title: "Customer Segmentation ML",
    desc: "Machine learning model for customer segmentation and pipeline automation.",
    tags: ["Python", "ML", "Scikit-learn"],
    link: "#",
    repo: "https://github.com/avadatavis/customer-segmentation-ml"
  },
  {
    title: "Marketing Insights Blog",
    desc: "Data-driven blog with deep dives into digital marketing analytics and performance experiments.",
    tags: ["Blog", "Analytics", "Marketing"],
    link: "/#blog",
    repo: ""
  },
];

// PUBLIC_INTERFACE
export default function Projects() {
  return (
    <div className="projects-container">
      <h3>Featured Projects</h3>
      <div className="projects-grid">
        {projects.map((p, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-header">
              <h4>{p.title}</h4>
              <div className="project-tags">
                {p.tags.map(tag => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-links">
              {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-accent">Live Demo</a>}
              {p.repo && <a href={p.repo} target="_blank" rel="noopener noreferrer" className="btn-outline">Source</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
