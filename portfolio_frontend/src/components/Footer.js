import React from 'react';
import './Footer.css';

// PUBLIC_INTERFACE
export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div>
        &copy; {new Date().getFullYear()} Ava Data. Portfolio powered by React. |
        <a href="https://github.com/avadatavis/portfolio" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
      </div>
    </footer>
  );
}
