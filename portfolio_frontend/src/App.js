import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

// PUBLIC_INTERFACE
function App() {
  // Support auto theme (light/dark)
  const getSystemTheme = () =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

  const [theme, setTheme] = useState(getSystemTheme());

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Smooth scroll to section refs
  const refs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    blog: useRef(null),
    contact: useRef(null),
  };

  // PUBLIC_INTERFACE
  const handleScrollTo = (key) => {
    refs[key]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <Navbar onNavigate={handleScrollTo} theme={theme} toggleTheme={toggleTheme} />
      <main>
        <section ref={refs.home} id="home"><Home onScrollTo={handleScrollTo} /></section>
        <section ref={refs.about} id="about"><About /></section>
        <section ref={refs.skills} id="skills"><Skills /></section>
        <section ref={refs.projects} id="projects"><Projects /></section>
        <section ref={refs.blog} id="blog"><Blog /></section>
        <section ref={refs.contact} id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
