import React from 'react';
// Importing a component from a component folder, so we can return it
import Header from './components/Header/Header.js';
import About from './components/About/About.js';
import Projects from './components/Projects/Projects.js';
import Contact from './components/Contact/Contact.js';
import Resume from './components/Resume/Resume.js';
import Footer from './components/Footer/Footer.js';

// All we want to render to the screen
export default function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
}
