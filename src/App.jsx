import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import IntroSplash from './components/IntroSplash';
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopFab from './components/ScrollToTopFab';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <ThemeProvider>
      <LanguageProvider>
        {showSplash && <IntroSplash onFinish={() => setShowSplash(false)} />}
        <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <BackgroundEffects />
          <Navbar />
          <main style={{ flexGrow: 1 }}>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Certificates />
            <Services />
            <Contact />
          </main>
          <Footer />
          <ScrollToTopFab />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
