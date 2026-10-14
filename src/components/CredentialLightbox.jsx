import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../context/LanguageContext';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Download,
  Eye,
  Sparkles
} from 'lucide-react';

export default function CredentialLightbox({
  isOpen,
  onClose,
  images = [],
  currentIndex = 0,
  setCurrentIndex,
  parentTitle = ''
}) {
  const { language, isRtl } = useLanguage();
  const isArabic = language === 'ar';

  const total = images.length;
  const currentImage = images[currentIndex] || {};

  const handlePrev = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total, setCurrentIndex]);

  const handleNext = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total, setCurrentIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        if (isRtl) handlePrev();
        else handleNext();
      }
      if (e.key === 'ArrowLeft') {
        if (isRtl) handleNext();
        else handlePrev();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext, isRtl]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentTitle = typeof currentImage.title === 'object'
    ? (currentImage.title[language] || currentImage.title.ar || currentImage.title.en)
    : (currentImage.title || parentTitle);

  return createPortal(
    <div
      className="cert-lightbox-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Top Bar */}
      <div className="cert-lightbox-top-bar" onClick={(e) => e.stopPropagation()}>
        <div className="cert-lightbox-meta">
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              color: 'var(--brand-orange)',
              fontWeight: 700,
              fontSize: '0.9rem'
            }}
          >
            <Sparkles size={16} />
            <span>{parentTitle || (isArabic ? 'معاينة الوثيقة' : 'Credential Preview')}</span>
          </span>
          {total > 1 && (
            <span
              style={{
                fontSize: '0.82rem',
                color: 'rgba(255, 255, 255, 0.7)',
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '0.2rem 0.65rem',
                borderRadius: 'var(--radius-full)'
              }}
            >
              {isArabic ? `${currentIndex + 1} من ${total}` : `${currentIndex + 1} of ${total}`}
            </span>
          )}
        </div>

        <div className="cert-lightbox-actions">
          {currentImage.url && (
            <a
              href={currentImage.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-lightbox-icon-btn"
              title={isArabic ? 'فتح الصورة الأصلية' : 'Open Full Image'}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={18} />
            </a>
          )}
          <button
            onClick={onClose}
            className="cert-lightbox-icon-btn"
            title={isArabic ? 'إغلاق المعاينة (Esc)' : 'Close (Esc)'}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Main Image View with Navigation */}
      <div className="cert-lightbox-content" onClick={onClose}>
        {total > 1 && (
          <button
            className="cert-lightbox-nav-btn prev"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            title={isArabic ? 'السابق' : 'Previous'}
            aria-label="Previous image"
          >
            {isRtl ? <ChevronRight size={26} /> : <ChevronLeft size={26} />}
          </button>
        )}

        <div
          className="cert-lightbox-img-wrap"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={currentImage.url}
            alt={currentTitle || 'Credential Image'}
            className="cert-lightbox-img"
          />
        </div>

        {total > 1 && (
          <button
            className="cert-lightbox-nav-btn next"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            title={isArabic ? 'التالي' : 'Next'}
            aria-label="Next image"
          >
            {isRtl ? <ChevronLeft size={26} /> : <ChevronRight size={26} />}
          </button>
        )}
      </div>

      {/* Bottom Info Bar */}
      <div className="cert-lightbox-bottom-bar" onClick={(e) => e.stopPropagation()}>
        <h4 className="cert-lightbox-title">{currentTitle}</h4>
        {total > 1 && (
          <span className="cert-lightbox-counter">
            {isArabic ? `الصورة رقم ${currentIndex + 1} من إجمالي ${total} صور توثيقية` : `Image ${currentIndex + 1} of ${total} documented photos`}
          </span>
        )}
      </div>
    </div>,
    document.body
  );
}
