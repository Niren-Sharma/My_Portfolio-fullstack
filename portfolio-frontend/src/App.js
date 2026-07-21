import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Portfolio from './components/Portfolio.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;