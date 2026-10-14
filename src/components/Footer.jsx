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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem'
          }}
        >
          
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                fontWeight: 800,
                fontSize: '1.35rem',
                marginBottom: '1rem'
              }}
            >
              <img
                src="/logo-orange.png"
                alt="Lobna Saad Logo"
                style={{
                  height: '32px',
                  width: 'auto',
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

            <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.7, maxWidth: '320px' }}>
              {t('footer_desc')}
            </p>
          </div>

          <div>
            <h4
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                marginBottom: '1.25rem'
              }}
            >
              {isArabic ? 'معلومات سريعة' : 'Quick info'}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {metaItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.55rem',
                      fontSize: '0.88rem',
                      color: 'var(--text-muted)'
                    }}
                  >
                    <Icon size={15} color="var(--brand-orange)" style={{ flexShrink: 0 }} />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h4
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                marginBottom: '1.25rem',
                color: 'var(--text-main)'
              }}
            >
              {t('footer_socials')}
            </h4>
            <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
              <a
                href="https://www.linkedin.com/in/lobnaa-saltah-283b25350"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '42px', height: '42px', padding: 0, borderRadius: '50%' }}
                title="LinkedIn"
              >
                <Linkedin size={17} />
              </a>

              <a
                href="https://github.com/lobnaa-saltah"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '42px', height: '42px', padding: 0, borderRadius: '50%' }}
                title="GitHub Main"
              >
                <Github size={17} />
              </a>

              <a
                href="https://wa.me/201080282071"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '42px', height: '42px', padding: 0, borderRadius: '50%' }}
                title="WhatsApp"
              >
                <Whatsapp size={17} />
              </a>

              <a
                href="https://www.facebook.com/share/1AUaBFJ7WB/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '42px', height: '42px', padding: 0, borderRadius: '50%' }}
                title="Facebook"
              >
                <span style={{ fontWeight: 800, fontSize: '1.05rem' }}>f</span>
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
    </footer>
  );
}
