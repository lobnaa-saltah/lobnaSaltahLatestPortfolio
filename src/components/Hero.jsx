import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Sparkles,
  Award
} from 'lucide-react';

export default function Hero() {
  const { t, isRtl, language } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = t('hero_roles') || [];
    if (!Array.isArray(roles) || roles.length === 0) return;

    const currentFullText = roles[roleIndex % roles.length];
    let timeout;

    if (!isDeleting && displayedText !== currentFullText) {

      timeout = setTimeout(() => {
        setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
      }, 50);
    } else if (!isDeleting && displayedText === currentFullText) {

      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayedText !== '') {

      timeout = setTimeout(() => {
        setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
      }, 30);
    } else if (isDeleting && displayedText === '') {

      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex, language, t]);

  return (
    <section id="hero" className="section-wrapper" style={{ paddingTop: '8.5rem', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', alignItems: 'center' }}>

          <div className="hero-text-content" style={{ maxWidth: '580px' }}>
            
            <div className="section-badge animate-float" style={{ animationDuration: '6s' }}>
              <Sparkles size={16} />
              <span>{t('hero_badge')}</span>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <span
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  display: 'block',
                  marginBottom: '0.4rem'
                }}
              >
                {t('hero_greeting')}
              </span>
              <h1
                style={{
                  fontSize: 'clamp(2.1rem, 3.8vw, 3.1rem)',
                  fontWeight: 800,
                  lineHeight: 1.18,
                  letterSpacing: '-0.02em'
                }}
              >
                {t('hero_name')}
              </h1>
            </div>

            <div
              style={{
                fontSize: 'clamp(1.3rem, 2.8vw, 1.9rem)',
                fontWeight: 700,
                minHeight: '2.8rem',
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1.4rem'
              }}
            >
              <span style={{ color: 'var(--text-secondary)' }}>{t('hero_role_prefix')}</span>
              <span
                style={{
                  color: 'var(--brand-orange)'
                }}
              >
                {displayedText}
                <span style={{ animation: 'pulseHalo 0.8s infinite', opacity: 0.8 }}>|</span>
              </span>
            </div>

            <p
              style={{
                fontSize: '1.12rem',
                color: 'var(--text-muted)',
                lineHeight: 1.75,
                marginBottom: 0
              }}
            >
              {t('hero_desc')}
            </p>
          </div>

          <div
            className="hero-image-col"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            
            <div
              className="animate-pulse-halo"
              style={{
                position: 'absolute',
                width: '380px',
                height: '380px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, var(--color-orange-glow) 0%, rgba(255, 106, 0, 0) 70%)',
                filter: 'blur(40px)',
                zIndex: 1
              }}
            />

            <div
              style={{
                position: 'relative',
                zIndex: 2,
                width: '320px',
                height: '380px',
                borderRadius: 'var(--radius-xl)',
                padding: '2px',
                background: 'var(--brand-gradient)',
                boxShadow: '0 15px 35px -10px var(--color-orange-glow)'
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 'calc(var(--radius-xl) - 2px)',
                  overflow: 'hidden',
                  background: 'var(--bg-elevated)',
                  position: 'relative'
                }}
              >
                <img
                  src="/lobnaPhoto.jpeg"
                  alt=""
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: '-20px',
                    width: 'calc(100% + 40px)',
                    height: 'calc(100% + 40px)',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    filter: 'blur(22px) brightness(0.6)',
                    transform: 'scale(1.15)',
                    pointerEvents: 'none'
                  }}
                />

                <img
                  src="/lobnaPhoto.jpeg"
                  alt="Lobna Saad"
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'center top',
                    zIndex: 2
                  }}
                />
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '-18px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 3
                }}
              >
                <div
                  className="glass-card animate-float"
                  style={{
                    padding: '0.55rem 1.35rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.55rem',
                    borderRadius: 'var(--radius-full)',
                    boxShadow: '0 8px 25px var(--color-orange-glow)',
                    background: 'var(--brand-gradient)',
                    color: '#ffffff',
                    border: 'none',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <Award size={16} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>DEPI Trainee 2026</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: minmax(0, 1.15fr) auto !important;
            gap: 2.5rem !important;
            max-width: 1020px;
            margin: 0 auto;
            justify-content: center;
          }
          .hero-image-col {
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
