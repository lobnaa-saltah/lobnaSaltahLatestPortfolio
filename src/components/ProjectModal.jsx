import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../context/LanguageContext';
import {
  X,
  ExternalLink,
  CheckCircle2,
  Layers,
  Sparkles
} from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  const { t, isRtl, language } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const currentDesc = project.description[language] || project.description.en;
  const currentSubtitle = project.subtitle[language] || project.subtitle.en;
  const currentHighlights = project.highlights[language] || project.highlights.en || [];

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: 'rgba(5, 7, 12, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4.5rem 1.5rem 2rem 1.5rem',
        animation: 'fadeIn 0.25s ease',
        overflowY: 'auto'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: 'var(--radius-xl)',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-medium)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8)',
          position: 'relative'
        }}
      >
        
        <button
          onClick={onClose}
          aria-label={t('projects_modal_close')}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: isRtl ? 'auto' : '1.25rem',
            left: isRtl ? '1.25rem' : 'auto',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-main)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <X size={20} />
        </button>

        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '340px',
            background: 'var(--bg-elevated)',
            overflow: 'hidden'
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            width="850"
            height="340"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top'
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, var(--bg-surface) 0%, transparent 60%)'
            }}
          />
        </div>

        <div style={{ padding: '2rem 2.5rem' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--brand-orange)',
                letterSpacing: '0.5px',
                textTransform: 'uppercase'
              }}
            >
              {currentSubtitle}
            </span>
            <h3
              style={{
                fontSize: '2rem',
                fontWeight: 800,
                color: 'var(--text-main)',
                marginTop: '0.25rem'
              }}
            >
              {project.title}
            </h3>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                marginBottom: '0.65rem',
                color: 'var(--text-main)'
              }}
            >
              {t('projects_modal_overview')}
            </h4>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
              {currentDesc}
            </p>
          </div>

          {currentHighlights.length > 0 && (
            <div style={{ marginBottom: '2rem' }}>
              <h4
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  marginBottom: '0.85rem',
                  color: 'var(--text-main)'
                }}
              >
                {t('projects_modal_highlights')}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {currentHighlights.map((hl, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <CheckCircle2 size={18} color="var(--brand-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginBottom: '2.5rem' }}>
            <h4
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                marginBottom: '0.75rem',
                color: 'var(--text-main)'
              }}
            >
              {t('projects_modal_tech')}
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tech.map((techItem, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '0.35rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)'
                  }}
                >
                  {techItem}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '0.75rem 1.65rem', minHeight: '48px', display: 'inline-flex', alignItems: 'center' }}
            >
              <span>{t('projects_view_live')}</span>
              <ExternalLink size={17} />
            </a>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.75rem 1.65rem', minHeight: '48px', display: 'inline-flex', alignItems: 'center' }}
              >
                <Github size={17} />
                <span>{t('projects_view_code')}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
