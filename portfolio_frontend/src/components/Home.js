import React from 'react';
import './Home.css';

// PUBLIC_INTERFACE
/**
 * Hero/Home component with animated intro banner.
 * @param {Function} onScrollTo - callback to scroll to sections
 */
export default function Home({ onScrollTo }) {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title animate-fadein">Hi, I'm <span className="highlight">Ava Data</span></h1>
        <h2 className="hero-tagline animate-slidein">
          Data Analytics Professional
        </h2>
        <p className="hero-description animate-fadein">
          Bridging insights & strategy through data science and analytics for impactful decision making.
        </p>
        <div className="hero-buttons">
          <button className="btn-accent" onClick={() => onScrollTo('projects')}>See Projects</button>
          <button className="btn-outline" onClick={() => onScrollTo('contact')}>Contact Me</button>
        </div>
      </div>
      <div className="hero-bg-glow"></div>
    </div>
  );
}
