import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Sparkles,
  Cpu,
  Palette,
  Code2
} from 'lucide-react';

export default function About() {
  const { t, isRtl, language } = useLanguage();
  const isArabic = language === 'ar';

  const pillars = [
    {
      icon: Cpu,
      title: t('about_card1_title'),
      desc: t('about_card1_desc')
    },
    {
      icon: Palette,
      title: t('about_card2_title'),
      desc: t('about_card2_desc')
    },
    {
      icon: Code2,
      title: t('about_card3_title'),
      desc: t('about_card3_desc')
    }
  ];

  return (
    <section id="about" className="section-wrapper" style={{ background: 'var(--bg-surface)' }}>
      <div className="container" style={{ maxWidth: '980px' }}>

        <div className="section-header reveal-on-scroll reveal-slide-up" style={{ marginBottom: '3rem' }}>
          <div className="section-badge">
            <Sparkles size={15} />
            <span>{t('about_badge')}</span>
          </div>
          <h2 className="section-title">{t('about_title')}</h2>
        </div>

        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem'
          }}
        >

          <div className="reveal-on-scroll reveal-slide-left delay-100">
            
            <div
              className="card-hover-fx"
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-xl)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                height: '100%',
                boxSizing: 'border-box'
              }}
            >
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '0.97rem' }}>
                {t('about_p1')}
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '0.97rem' }}>
                {t('about_p2')}
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '0.97rem' }}>
                {t('about_p3')}
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem'
            }}
          >
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const delayClass = idx === 0 ? 'delay-150' : idx === 1 ? 'delay-250' : 'delay-350';
              return (
                <div
                  key={idx}
                  className={`reveal-on-scroll reveal-slide-right ${delayClass} card-hover-fx`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    padding: '1.35rem 1.5rem',
                    borderRadius: 'var(--radius-lg)',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'var(--brand-gradient-subtle)',
                      border: '1px solid var(--border-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--brand-orange)',
                      flexShrink: 0
                    }}
                  >
                    <Icon size={20} />
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <h3
                      style={{
                        fontSize: '0.97rem',
                        fontWeight: 650,
                        color: 'var(--text-main)',
                        marginBottom: '0.2rem'
                      }}
                    >
                      {pillar.title}
                    </h3>
                    <div
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.6
                      }}
                    >
                      {pillar.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .about-grid {
            grid-template-columns: 1.15fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
