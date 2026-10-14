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
  const [isWaitingNext, setIsWaitingNext] = useState(false);

  useEffect(() => {
    const roles = t('hero_roles') || [];
    if (!Array.isArray(roles) || roles.length === 0) return;

    const currentFullText = roles[roleIndex % roles.length];
    let timeout;

    if (isWaitingNext) {
      timeout = setTimeout(() => {
        setIsWaitingNext(false);
      }, 450);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && displayedText !== currentFullText) {
      timeout = setTimeout(() => {
        setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
      }, 85);
    } else if (!isDeleting && displayedText === currentFullText) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2400);
    } else if (isDeleting && displayedText !== '') {
      timeout = setTimeout(() => {
        setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
      }, 42);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setIsWaitingNext(true);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, isWaitingNext, roleIndex, language, t]);

  return (
    <section id="hero" className="section-wrapper" style={{ paddingTop: '8.5rem', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', alignItems: 'center' }}>

          <div className="hero-text-content reveal-on-scroll reveal-slide-left delay-100">
            
            <div className="hero-badge-wrap">
              <div className="section-badge animate-float" style={{ animationDuration: '6s' }}>
                <Sparkles size={16} />
                <span>{t('hero_badge')}</span>
              </div>
            </div>

            <div className="hero-heading-block">
              <span className="hero-greeting">
                {t('hero_greeting')}
              </span>
              <h1 className="hero-title">
                {t('hero_name')}
              </h1>
            </div>

            <div className="hero-role-block">
              <span className="hero-role-prefix">{t('hero_role_prefix')}</span>
              <span className="hero-role-typed">
                {displayedText}
                <span className="hero-typing-cursor">|</span>
              </span>
            </div>

            <p className="hero-desc">
              {t('hero_desc')}
            </p>
          </div>

          <div
            className="hero-image-col reveal-on-scroll reveal-slide-right delay-200"
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
                width: 'min(380px, 90vw)',
                height: 'min(380px, 90vw)',
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
                width: 'min(320px, calc(100vw - 48px))',
                height: 'min(380px, calc((100vw - 48px) * 1.18))',
                maxWidth: '320px',
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
        /* Base styles for Mobile & Tablet (< 992px): Centered Layout */
        .hero-text-content {
          max-width: 580px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .hero-badge-wrap {
          display: flex;
          justify-content: center;
          width: 100%;
          margin-bottom: 1.25rem;
        }

        .hero-heading-block {
          text-align: center;
          margin-bottom: 1.25rem;
          width: 100%;
        }

        .hero-greeting {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text-muted);
          display: block;
          margin-bottom: 0.4rem;
          text-align: center;
        }

        .hero-title {
          font-size: clamp(2.1rem, 3.8vw, 3.1rem);
          font-weight: 800;
          line-height: 1.18;
          letter-spacing: -0.02em;
          text-align: center;
          margin: 0;
        }

        .hero-role-block {
          font-size: clamp(1.2rem, 2.7vw, 1.9rem);
          font-weight: 700;
          min-height: 5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100%;
          margin-bottom: 1.4rem;
        }

        .hero-role-prefix {
          display: block;
          width: 100%;
          text-align: center;
          color: var(--text-secondary);
          margin-bottom: 0.35rem;
        }

        .hero-role-typed {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: var(--brand-orange);
          min-height: 2.4rem;
          line-height: 1.25;
        }

        .hero-typing-cursor {
          display: inline-block;
          color: var(--brand-orange);
          font-weight: 300;
          margin-inline-start: 3px;
          animation: smoothCaretBlink 0.9s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes smoothCaretBlink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.15;
          }
        }

        .hero-desc {
          font-size: 1.12rem;
          color: var(--text-muted);
          line-height: 1.75;
          margin: 0 auto;
          text-align: center;
          max-width: 520px;
        }

        /* Laptop & Desktop (>= 992px): Preserves original design completely */
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

          .hero-text-content {
            text-align: left;
            align-items: flex-start;
            margin: 0;
          }

          [dir="rtl"] .hero-text-content {
            text-align: right;
            align-items: flex-start;
          }

          .hero-badge-wrap {
            justify-content: flex-start;
          }

          [dir="rtl"] .hero-badge-wrap {
            justify-content: flex-start;
          }

          .hero-heading-block {
            text-align: left;
          }

          [dir="rtl"] .hero-heading-block {
            text-align: right;
          }

          .hero-greeting {
            text-align: left;
          }

          [dir="rtl"] .hero-greeting {
            text-align: right;
          }

          .hero-title {
            text-align: left;
          }

          [dir="rtl"] .hero-title {
            text-align: right;
          }

          .hero-role-block {
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            text-align: left;
            gap: 0.5rem;
            min-height: 2.8rem;
          }

          [dir="rtl"] .hero-role-block {
            justify-content: flex-start;
            text-align: right;
          }

          .hero-role-prefix {
            display: inline;
            width: auto;
            margin-bottom: 0;
            text-align: left;
          }

          [dir="rtl"] .hero-role-prefix {
            text-align: right;
          }

          .hero-role-typed {
            display: inline-flex;
            justify-content: flex-start;
            text-align: left;
          }

          [dir="rtl"] .hero-role-typed {
            justify-content: flex-start;
            text-align: right;
          }

          .hero-desc {
            text-align: left;
            margin: 0;
            max-width: none;
          }

          [dir="rtl"] .hero-desc {
            text-align: right;
          }
        }
      `}</style>
    </section>
  );
}
