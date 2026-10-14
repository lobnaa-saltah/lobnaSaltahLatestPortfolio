import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import {
  Sun,
  Moon,
  Menu,
  X
} from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t, isRtl } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'projects', 'skills', 'certificates', 'services', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const desktopNavItems = [
    { id: 'about', label: t('nav_about') },
    { id: 'projects', label: t('nav_projects') },
    { id: 'certificates', label: t('nav_certificates') },
    { id: 'contact', label: t('nav_contact') },
  ];

  const mobileNavItems = [
    { id: 'about', label: t('nav_about') },
    { id: 'projects', label: t('nav_projects') },
    { id: 'skills', label: t('nav_skills') },
    { id: 'certificates', label: t('nav_certificates') },
    { id: 'services', label: t('nav_services') },
    { id: 'contact', label: t('nav_contact') },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.3s ease',
          background: isScrolled ? 'var(--bg-card)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
          padding: isScrolled ? '0.9rem 0' : '1.6rem 0'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, 'hero')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              fontWeight: 800,
              fontSize: '1.3rem',
              letterSpacing: '-0.02em',
              color: 'var(--text-main)',
              textDecoration: 'none'
            }}
          >
            <img
              src="/logo-orange.png"
              alt="Lobna Saad Logo"
              style={{
                height: '32px',
                width: 'auto',
                objectFit: 'contain',
                transition: 'transform 0.3s ease',
                filter: 'drop-shadow(0 2px 8px var(--color-orange-glow))'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.12)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <span>
              {language === 'ar'
                ? <><span style={{ color: 'var(--brand-orange)' }}>لبنى</span> سعد</>
                : <>Lobna <span style={{ color: 'var(--brand-orange)' }}>Saad</span></>}
            </span>
          </a>

          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2.5rem'
            }}
            className="desktop-nav"
          >
            {desktopNavItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  style={{
                    position: 'relative',
                    fontSize: '0.98rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--brand-orange)' : 'var(--text-secondary)',
                    transition: 'color 0.2s ease',
                    padding: '0.4rem 0'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-main)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-4px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '18px',
                        height: '2px',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--brand-orange)',
                        boxShadow: '0 0 10px var(--brand-orange)'
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            
            <button
              onClick={toggleLanguage}
              title={language === 'ar' ? 'Switch to English' : 'التحويل للعربية'}
              aria-label={language === 'ar' ? 'Switch to English' : 'التحويل للعربية'}
              style={{
                background: 'transparent',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                height: '36px',
                minWidth: '58px',
                padding: '0 0.85rem',
                borderRadius: 'var(--radius-full)',
                cursor: 'pointer',
                fontSize: language === 'ar' ? '0.82rem' : '0.88rem',
                fontWeight: 700,
                letterSpacing: 'normal',
                fontFamily: language === 'ar' ? 'var(--font-en)' : 'var(--font-ar)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                lineHeight: 1,
                boxSizing: 'border-box',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--brand-orange)';
                e.currentTarget.style.color = 'var(--brand-orange)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  lineHeight: 1,
                  position: 'relative',
                  top: language === 'ar' ? '0px' : '-2px'
                }}
              >
                {language === 'ar' ? 'EN' : 'عربي'}
              </span>
            </button>

            <button
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'التحويل للوضع الليلي'}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'transparent',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              aria-label="Toggle Navigation"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'transparent',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-main)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </header>

      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(8, 10, 15, 0.92)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          zIndex: 49,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          padding: '2rem',
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        {mobileNavItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleNavClick(e, item.id)}
            style={{
              fontSize: '1.35rem',
              fontWeight: 700,
              color: activeSection === item.id ? 'var(--brand-orange)' : 'var(--text-main)',
              transition: 'color 0.2s ease'
            }}
          >
            {item.label}
          </a>
        ))}
      </div>

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
