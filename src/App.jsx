import React from 'react';
import Hero from './components/Hero';
import About from './components/About'; // ✅ This line is needed
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/index.css';
import ExperienceAchievementsHobbies from './components/Experience';
import SkillsMarquee from './components/Skill';
function App() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <SkillsMarquee/>
      <Projects />
      <ExperienceAchievementsHobbies />
      <Contact />
    </main>
  );
}

export default App;
