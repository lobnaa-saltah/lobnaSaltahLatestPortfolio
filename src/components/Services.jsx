import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Sparkles,
  Laptop,
  Layout,
  Palette,
  Zap,
  Check
} from 'lucide-react';

export default function Services() {
  const { t, isRtl, language } = useLanguage();
  const isArabic = language === 'ar';

  const services = [
    {
      num: '01',
      icon: Laptop,
      title: t('srv1_title'),
      desc: t('srv1_desc'),
      tags: isArabic
        ? ['تطبيقات React', 'معمارية متطورة', 'تجاوب فائق']
        : ['React 19', 'Components', 'Responsive SPA']
    },
    {
      num: '02',
      icon: Layout,
      title: t('srv2_title'),
      desc: t('srv2_desc'),
      tags: isArabic
        ? ['واجهات تفاعلية', 'تجربة مستخدم', 'زيادة التحويل']
        : ['Conversion UI', 'Micro-Interactions', 'Landing Pages']
    },
    {
      num: '03',
      icon: Palette,
      title: t('srv3_title'),
      desc: t('srv3_desc'),
      tags: isArabic
        ? ['Figma to React', 'دقة بكسل 100%', 'كود نظيف']
        : ['Figma to React', 'Pixel-Perfect', 'Modern CSS']
    },
    {
      num: '04',
      icon: Zap,
      title: t('srv4_title'),
      desc: t('srv4_desc'),
      tags: isArabic
        ? ['تسريع المواقع', 'توافق SEO', 'أداء قياسي']
        : ['Core Web Vitals', 'SEO Ready', 'Fast Loading']
    }
  ];

  const colStartServices = [services[0], services[1]];
  const colEndServices = [services[2], services[3]];

  const renderServiceCard = (srv) => {
    const Icon = srv.icon;
    return (
      <div key={srv.num} className="service-node-card">
        
        <div className="connector-bridge" />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <span
            style={{
              fontSize: '0.74rem',
              fontWeight: 800,
              color: 'var(--brand-orange)',
              background: 'var(--brand-gradient-subtle)',
              border: '1px solid var(--border-accent)',
              padding: '0.15rem 0.55rem',
              borderRadius: 'var(--radius-full)',
              letterSpacing: '0.5px'
            }}
          >
            {srv.num}
          </span>

          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 106, 0, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--brand-orange)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)'
            }}
          >
            <Icon size={18} />
          </div>
        </div>

        <div>
          <h3
            style={{
              fontSize: '1.02rem',
              fontWeight: 700,
              color: 'var(--text-main)',
              marginBottom: '0.22rem',
              lineHeight: 1.34
            }}
          >
            {srv.title}
          </h3>
          <p
            style={{
              color: '#94a3b8',
              fontSize: '0.83rem',
              lineHeight: 1.52
            }}
          >
            {srv.desc}
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.35rem',
            paddingTop: '0.55rem',
            borderTop: '1px solid rgba(255, 106, 0, 0.15)'
          }}
        >
          {srv.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '0.18rem 0.55rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(255, 106, 0, 0.18)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
            >
              <Check size={11} color="var(--brand-orange)" style={{ flexShrink: 0 }} />
              <span>{tag}</span>
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="section-wrapper">
      <div className="container">
        
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={16} />
            <span>{t('services_badge')}</span>
          </div>
          <h2 className="section-title">
            {t('services_title')}
          </h2>
          <p className="section-subtitle">
            {t('services_subtitle')}
          </p>
        </div>

        <div className="services-ecosystem">
          <div className="services-layout-grid">

            <div className="services-col services-col-start">
              {colStartServices.map(renderServiceCard)}
            </div>

            <div className="services-hub-center">
              <div className="services-hub-glow" />
              <div className="services-hub-orbit" />
              <div className="services-hub-disc">
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--brand-gradient-subtle)',
                    border: '1px solid var(--border-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--brand-orange)',
                    marginBottom: '0.25rem'
                  }}
                >
                  <Sparkles size={15} />
                </div>
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    color: 'var(--brand-orange)',
                    letterSpacing: isArabic ? '0' : '0.5px',
                    marginBottom: '0.15rem'
                  }}
                >
                  {t('srv_hub_badge')}
                </span>
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 800,
                    color: 'var(--text-main)',
                    lineHeight: 1.25,
                    marginBottom: '0.35rem'
                  }}
                >
                  {t('srv_hub_title')}
                </h3>
                <span
                  style={{
                    fontSize: '0.66rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    background: 'rgba(255, 255, 255, 0.06)',
                    padding: '0.18rem 0.55rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(255, 106, 0, 0.2)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {t('srv_hub_tag')}
                </span>
              </div>
            </div>

            <div className="services-col services-col-end">
              {colEndServices.map(renderServiceCard)}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
