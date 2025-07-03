import React from 'react';
import './About.css';

// PUBLIC_INTERFACE
/**
 * About component with bio, headshot, and resume download.
 */
export default function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <img
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt="Ava Data headshot"
          className="about-headshot"
        />
        <div className="about-info">
          <h3>About Me</h3>
          <p>
            I'm Ava Data, a passionate data analytics professional specializing in transforming raw information into actionable strategies for organizations. My expertise spans predictive modeling, dashboard development, and effective storytelling with data.
          </p>
          <a
            href="/assets/ava-resume.pdf"
            download="Ava_Data_Resume.pdf"
            className="btn-accent"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
