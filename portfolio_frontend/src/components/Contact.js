import React from 'react';
import './Contact.css';

// PUBLIC_INTERFACE
export default function Contact() {
  return (
    <div className="contact-container">
      <h3>Contact</h3>
      <div className="contact-content">
        <div className="contact-socials">
          <p>Let's connect:</p>
          <div className="social-icons">
            <a href="https://linkedin.com" aria-label="LinkedIn" className="social-icon" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" fill="currentColor"><path d="M3.9 4.5C3.9 3.1 5 2 6.4 2c1.4 0 2.5 1.1 2.5 2.5 0 1.3-1.1 2.5-2.5 2.5S3.9 5.8 3.9 4.5zM2 8h4.8v13H2V8zm7.1 0h4.6v1.8h.1c.6-1 2.2-2.2 4.4-2.2 4.7 0 5.5 3.1 5.5 7.1V21h-4.8v-6c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3v6.2H9.1V8z" /></svg>
            </a>
            <a href="https://github.com" aria-label="GitHub" className="social-icon" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.1 7 9.4.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.4-1.1-1-1.5-1-1.5-.8-.6.1-.6.1-.6.9.1 1.4 1 1.4 1 .8 1.4 2.1 1 2.7.8.1-.5.3-.9.5-1.1-2.2-.2-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.8 0-.3-.4-1.3.1-2.6 0 0 .8-.2 2.7 1A9.2 9.2 0 0112 7c.8 0 1.7.1 2.5.3 1.9-1.2 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.8 1 1.7 1 2.8 0 3.7-2.3 4.5-4.5 4.8.3.2.5.7.5 1.5v2.2c0 .3.2.6.7.5A10.1 10.1 0 0022 12c0-5.5-4.5-10-10-10z"/></svg>
            </a>
            <a href="mailto:ava.data@email.com" aria-label="Email" className="social-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.02l-8 5.01-8-5V6h16zm-16 12V8.98l8 5.01 8-5.01V18H4z" /></svg>
            </a>
          </div>
        </div>
        <form className="contact-form" autoComplete="off" aria-label="Contact form (not functional)">
          <input type="text" name="name" placeholder="Name (optional)" aria-label="Name" disabled />
          <input type="email" name="email" placeholder="Email (optional)" aria-label="Email" disabled />
          <textarea name="message" placeholder="Message..." rows="3" aria-label="Message" disabled />
          <button type="submit" className="btn-accent" disabled>Send (Demo)</button>
        </form>
      </div>
    </div>
  );
}
