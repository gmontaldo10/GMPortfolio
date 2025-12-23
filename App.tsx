
import React, { useState, useEffect } from 'react';
import SectionVoid from './components/SectionVoid';
import SectionGalaxy from './components/SectionGalaxy';
import SectionAkira from './components/SectionAkira';
import SectionKon from './components/SectionKon';
import SectionTesseract from './components/SectionTesseract';
import NavDots from './components/NavDots';
import ScrollIndicator from './components/ScrollIndicator';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('v1');
  const [isLastSection, setIsLastSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['v1', 'v2', 'v3', 'v4', 'v5'];
      let current = 'v1';
      const scrolled = window.scrollY;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const sectionTop = el.offsetTop;
          const sectionHeight = el.clientHeight;
          if (scrolled >= (sectionTop - sectionHeight / 3)) {
            current = id;
          }
        }
      });

      setActiveSection(current);
      
      // Theme handling for Tesseract (Light section)
      if (current === 'v5') {
        document.body.className = 'theme-book';
      } else {
        document.body.className = '';
      }

      // Check if we are at the end
      const footerSection = document.getElementById('v5');
      if (footerSection) {
        setIsLastSection(current === 'v5');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative">
      <NavDots activeId={activeSection} />
      <ScrollIndicator visible={!isLastSection} theme={activeSection === 'v5' ? 'book' : 'dark'} />
      
      <SectionVoid id="v1" />
      <SectionGalaxy id="v2" />
      <SectionAkira id="v3" />
      <SectionKon id="v4" />
      <SectionTesseract id="v5" />
    </main>
  );
};

export default App;
