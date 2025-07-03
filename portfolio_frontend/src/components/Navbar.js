import React from 'react';
import './Navbar.css';

// PUBLIC_INTERFACE
/**
 * Navbar component for SPA navigation and theme switching.
 * @param {Object} props
 * @param {Function} props.onNavigate - Called with section key to scroll
 * @param {string} props.theme - current theme
 * @param {Function} props.toggleTheme - Toggles light/dark theme
 */
export default function Navbar({ onNavigate, theme, toggleTheme }) {
  // NAVIGATION_LABELS contain label and scroll key in order.
  const NAVIGATION_LABELS = [
    { label: "Home", key: "home" },
    { label: "About", key: "about" },
    { label: "Skills", key: "skills" },
    { label: "Projects", key: "projects" },
    { label: "Blog", key: "blog" },
    { label: "Contact", key: "contact" },
  ];

  return (
    <nav className="navbar" aria-label="Portfolio primary navigation">
      <div className="navbar-content">
        <span className="navbar-brand" tabIndex={0} aria-label="Back to Home" onClick={() => onNavigate("home")}>
          DataVista
        </span>
        <ul className="navbar-links" role="menubar">
          {NAVIGATION_LABELS.map(({ label, key }) => (
            <li key={key} role="none">
              <button
                onClick={() => onNavigate(key)}
                className="navbar-link"
                aria-label={`Navigate to ${label}`}
                role="menuitem"
              >{label}</button>
            </li>
          ))}
        </ul>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
}
