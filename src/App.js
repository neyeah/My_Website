import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/SkillsAndExperience';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';
import SkillsAndExperience from './components/SkillsAndExperience';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 transition-colors">
        <Header />
        <main>
          <Hero />
          <Projects />
          <SkillsAndExperience />
          <Contact />
        </main>
        <footer className="bg-gray-50 dark:bg-gray-800 py-8">
          <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} NEYE. All rights reserved.
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
