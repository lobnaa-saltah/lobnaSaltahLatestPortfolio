import React, { useState, useEffect } from 'react';
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

  // Global Scroll-Reveal Animation Engine
  useEffect(() => {
    if (showSplash) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.02,
        rootMargin: '0px 0px 60px 0px'
      }
    );

    const observeAll = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already visible in viewport, reveal immediately
        if (rect.top < window.innerHeight + 40 && rect.bottom > -40) {
          el.classList.add('is-revealed');
        } else {
          observer.observe(el);
        }
      });
    };

    const timer = setTimeout(observeAll, 60);

    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [showSplash]);

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
