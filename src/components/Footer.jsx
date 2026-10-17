import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  MapPin,
  GraduationCap,
  Building2,
  Copyright
} from 'lucide-react';
import { Linkedin, Github, BriefcaseCheck, Whatsapp } from './Icons';

export default function Footer() {
  const { t, isRtl, language } = useLanguage();
  const isArabic = language === 'ar';

  const metaItems = [
    { icon: MapPin,          text: t('about_location') },
    { icon: GraduationCap,   text: t('about_education') },
    { icon: Building2,       text: isArabic ? '3 مشاريع حية – محافظة كفر الشيخ' : '3 Live Projects — Kafr El-Sheikh Gov.' },
    { icon: BriefcaseCheck,  text: t('about_availability') }
  ];

  return (
    <footer
      style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-subtle)',
        padding: '4rem 0 0 0',
        position: 'relative',
        zIndex: 2
      }}
    >
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand-col">
            <div className="footer-brand-title">
              <img
                src="/logo-orange.webp"
                alt="Lobna Saad Logo"
                width="27"
                height="32"
                sizes="32px"
                loading="lazy"
                decoding="async"
                style={{
                  height: '32px',
                  width: '27px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 2px 8px var(--color-orange-glow))'
                }}
              />
              <span>
                {language === 'ar'
                  ? <><span style={{ color: 'var(--brand-orange)' }}>لبنى</span> سعد</>
                  : <>Lobna <span style={{ color: 'var(--brand-orange)' }}>Saad</span></>}
              </span>
            </div>

            <p className="footer-brand-desc">
              {t('footer_desc')}
            </p>
          </div>

          <div className="footer-info-col">
            <h3
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                marginBottom: '1.25rem'
              }}
            >
              {isArabic ? 'معلومات سريعة' : 'Quick info'}
            </h3>
            <div className="footer-info-list">
              {metaItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="footer-info-item">
                    <span className="footer-info-icon">
                      <Icon size={16} color="var(--brand-orange)" />
                    </span>
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="footer-social-col">
            <h3
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                marginBottom: '1.25rem',
                color: 'var(--text-main)'
              }}
            >
              {t('footer_socials')}
            </h3>
            <div className="footer-social-links" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <a
                href="https://www.linkedin.com/in/lobnaa-saltah-283b25350"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '48px', height: '48px', minWidth: '48px', minHeight: '48px', padding: 0, borderRadius: '50%' }}
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://github.com/lobnaa-saltah"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '48px', height: '48px', minWidth: '48px', minHeight: '48px', padding: 0, borderRadius: '50%' }}
                title="GitHub Main"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>

              <a
                href="https://wa.me/201080282071"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '48px', height: '48px', minWidth: '48px', minHeight: '48px', padding: 0, borderRadius: '50%' }}
                title="WhatsApp"
                aria-label="Chat on WhatsApp"
              >
                <Whatsapp size={18} />
              </a>

              <a
                href="https://www.facebook.com/share/1AUaBFJ7WB/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '48px', height: '48px', minWidth: '48px', minHeight: '48px', padding: 0, borderRadius: '50%' }}
                title="Facebook"
                aria-label="Facebook Profile"
              >
                <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>f</span>
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            padding: '0.85rem 0',
            borderTop: '1px solid var(--border-subtle)',
            fontSize: '0.85rem',
            color: 'var(--text-faint)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.45rem',
            lineHeight: 1.5
          }}
        >
          <Copyright size={14} style={{ flexShrink: 0, opacity: 0.9 }} />
          <span>{t('footer_copy')}</span>
        </div>
      </div>

      <style>{`
        /* Mobile & Tablet (< 768px): Centered Layout */
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
          justify-items: center;
        }

        .footer-brand-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .footer-brand-title {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          font-weight: 800;
          font-size: 1.35rem;
          margin-bottom: 1rem;
        }

        .footer-brand-desc {
          color: var(--text-muted);
          font-size: 0.94rem;
          line-height: 1.7;
          max-width: 340px;
          margin: 0 auto;
          text-align: center;
        }

        .footer-info-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .footer-info-list {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.65rem;
          width: fit-content;
          max-width: 100%;
        }

        .footer-info-item {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.88rem;
          color: var(--text-muted);
          text-align: start;
        }

        .footer-info-icon {
          width: 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .footer-social-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .footer-social-links {
          display: flex;
          gap: 0.65rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        /* Desktop & Laptop (>= 768px): Original Layout Preserved */
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 3rem;
            margin-bottom: 3.5rem;
            text-align: left;
            justify-items: start;
          }

          [dir="rtl"] .footer-grid {
            text-align: right;
            justify-items: start;
          }

          .footer-brand-col {
            align-items: flex-start;
            text-align: left;
          }

          [dir="rtl"] .footer-brand-col {
            align-items: flex-start;
            text-align: right;
          }

          .footer-brand-title {
            justify-content: flex-start;
          }

          [dir="rtl"] .footer-brand-title {
            justify-content: flex-start;
          }

          .footer-brand-desc {
            margin: 0;
            text-align: left;
          }

          [dir="rtl"] .footer-brand-desc {
            text-align: right;
          }

          .footer-info-col {
            align-items: flex-start;
            text-align: left;
          }

          [dir="rtl"] .footer-info-col {
            align-items: flex-start;
            text-align: right;
          }

          .footer-info-list {
            align-items: flex-start;
          }

          [dir="rtl"] .footer-info-list {
            align-items: flex-start;
          }

          .footer-social-col {
            align-items: flex-start;
            text-align: left;
          }

          [dir="rtl"] .footer-social-col {
            align-items: flex-start;
            text-align: right;
          }

          .footer-social-links {
            justify-content: flex-start;
          }

          [dir="rtl"] .footer-social-links {
            justify-content: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}
