import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { credentialsData } from '../data/credentialsData';
import CredentialLightbox from './CredentialLightbox';
import './Certificates.css';
import {
  Award,
  Sparkles,
  Trophy,
  GraduationCap,
  Download,
  ExternalLink,
  Eye,
  Check,
  Building2,
  Calendar,
  Share2,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  ArrowUpRight,
  ShieldCheck,
  FileText,
  Layers
} from 'lucide-react';

export default function Certificates() {
  const { language, isRtl } = useLanguage();
  const isArabic = language === 'ar';

  // Active slide index in the 3D Slider Gallery (0 to credentialsData.length - 1)
  const [activeIndex, setActiveIndex] = useState(0);

  // Selected item for the full details & explanation modal
  const [selectedDetailItem, setSelectedDetailItem] = useState(null);

  // Full-screen Lightbox state
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Active photo index inside Governorate gallery
  const [activeGovPhotoIndex, setActiveGovPhotoIndex] = useState(0);

  // Dragging / swiping state for 3D Slider Gallery
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragDistance = useRef(0);
  const hasMovedRef = useRef(false);

  // Responsive screen width tracking for 3D coverflow card spacing
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Total items in 3D carousel (always all 10 credentials)
  const totalItems = credentialsData.length;

  // Infinite circular offset calculation so cards ALWAYS surround the active card symmetrically on BOTH sides
  const getCircularOffset = (index, active, total) => {
    if (total <= 1) return 0;
    let diff = index - active;
    while (diff > total / 2) diff -= total;
    while (diff < -total / 2) diff += total;
    return diff;
  };

  // Navigation handlers (Infinite circular navigation)
  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  // Keyboard navigation when detail modal is not open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedDetailItem || selectedGallery) return;
      if (e.key === 'ArrowLeft') {
        if (isRtl) handleNext();
        else handlePrev();
      } else if (e.key === 'ArrowRight') {
        if (isRtl) handlePrev();
        else handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, isRtl, selectedDetailItem, selectedGallery]);

  // Mouse / Touch Drag Handlers
  const handleDragStart = (clientX) => {
    setIsDragging(true);
    dragStartX.current = clientX;
    dragDistance.current = 0;
    hasMovedRef.current = false;
  };

  const handleDragMove = (clientX) => {
    if (!isDragging) return;
    const diff = clientX - dragStartX.current;
    dragDistance.current = diff;
    if (Math.abs(diff) > 8) {
      hasMovedRef.current = true;
    }
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 40;
    if (dragDistance.current > threshold) {
      if (isRtl) handleNext();
      else handlePrev();
    } else if (dragDistance.current < -threshold) {
      if (isRtl) handlePrev();
      else handleNext();
    }
  };

  // Lightbox helper
  const openLightbox = (images, startIndex = 0, title = '') => {
    if (!images || images.length === 0) return;
    const formatted = images.map((img) => {
      if (typeof img === 'string') {
        return { url: img, title: title };
      }
      return img;
    });
    setSelectedGallery({
      images: formatted,
      title: title
    });
    setLightboxIndex(startIndex);
  };

  // Helper: Count all associated photos/certificates for an item
  const getItemImagesCount = (item) => {
    if (item.certificates && item.certificates.length > 0) {
      return item.certificates.length;
    }
    if (item.gallery && item.gallery.length > 0) {
      return item.gallery.length;
    }
    return 1;
  };

  // Rank badge color helper
  const getBadgeColorClass = (category) => {
    if (category === 'depi') return 'cert-pill-orange';
    if (category === 'governorate') return 'cert-pill-emerald';
    if (category === 'competitions') return 'cert-pill-gold';
    if (category === 'communities' || category === 'mlsa') return 'cert-pill-azure';
    if (category === 'academic') return 'cert-pill-emerald';
    if (category === 'teaching') return 'cert-pill-purple';
    if (category === 'bootcamps') return 'cert-pill-indigo';
    return 'cert-pill-orange';
  };

  return (
    <section id="certificates" className="cert-section-wrapper">
      {/* Ambient background glow */}
      <div className="cert-section-aura" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="cert-header">
          <div className="cert-header-badge">
            <Sparkles size={14} />
            <span>{isArabic ? 'الاعتمادات والمسيرة المهنية' : 'Verified Credentials & Milestones'}</span>
          </div>
          <h2 className="cert-header-title">
            {isArabic ? 'سجل الإنجازات، المنح، والجوائز' : 'Scholarships, Honors & Professional Credentials'}
          </h2>
          <p className="cert-header-subtitle">
            {isArabic
              ? 'معرض تفاعلي ثلاثي الأبعاد يوثق المنح الحكومية المعتمدة، الجوائز الدولية، وتطوير الأنظمة الرقمية.'
              : 'Interactive 3D animated showcase documenting official scholarships, fieldwork, international awards, and technical milestones.'}
          </p>
        </div>

        {/* ================================================================= */}
        {/* 3D SLIDER GALLERY SHOWCASE (SYMMETRICAL INFINITE COVERFLOW)        */}
        {/* ================================================================= */}
        <div className="cert-3d-slider-container">
          <div
            className={`cert-3d-slider-stage ${isDragging ? 'is-dragging' : ''}`}
            onMouseDown={(e) => handleDragStart(e.clientX)}
            onMouseMove={(e) => handleDragMove(e.clientX)}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
            onTouchEnd={handleDragEnd}
          >
            {credentialsData.map((item, index) => {
              // Circular offset ensures cards are ALWAYS distributed symmetrically on BOTH sides
              const offset = getCircularOffset(index, activeIndex, totalItems);
              const absOffset = Math.abs(offset);
              const isActive = offset === 0;

              // Display up to 3 cards on the left and 3 cards on the right
              if (absOffset > 3) return null;

              // Symmetrical 3D Coverflow positioning with responsive spacing
              const isMobile = windowWidth < 640;
              const isTablet = windowWidth >= 640 && windowWidth < 992;

              let translateX = 0;
              if (offset !== 0) {
                const dir = Math.sign(offset);
                if (isMobile) {
                  translateX = dir * (115 + (absOffset - 1) * 65);
                } else if (isTablet) {
                  translateX = dir * (160 + (absOffset - 1) * 95);
                } else {
                  translateX = dir * (205 + (absOffset - 1) * 125);
                }
              }

              const translateZ = isMobile ? -absOffset * 55 : (isTablet ? -absOffset * 75 : -absOffset * 95);
              const rotateY = isMobile ? offset * -26 : (isTablet ? offset * -29 : offset * -32);
              const scale = 1 - Math.min(absOffset * 0.12, 0.36);
              const opacity = Math.max(1 - absOffset * 0.20, 0.35);
              const zIndex = 30 - absOffset;

              const itemTitle = item.title[language] || item.title.ar;
              const itemRole = item.role ? (item.role[language] || item.role.ar) : '';
              const itemRankBadge = item.rankBadge ? (item.rankBadge[language] || item.rankBadge.ar) : '';
              const badgeClass = getBadgeColorClass(item.category);

              return (
                <div
                  key={item.id}
                  className={`cert-3d-card ${isActive ? 'is-active-card' : ''}`}
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    zIndex: zIndex,
                    opacity: opacity,
                    filter: isActive ? 'none' : 'brightness(0.75) saturate(0.9)'
                  }}
                  onClick={() => {
                    if (hasMovedRef.current) return;
                    if (isActive) {
                      // Open details and explanation modal
                      setSelectedDetailItem(item);
                    } else {
                      // Slide clicked card to center
                      setActiveIndex(index);
                    }
                  }}
                  title={isActive ? (isArabic ? 'انقر لعرض الشرح الكامل ومعرض الصور' : 'Click to view full explanation & gallery') : itemTitle}
                >
                  {/* Card Background Image (Full Bleed) */}
                  <img
                    src={item.primaryImage || (item.certificates && item.certificates[0]?.image) || '/placeholder.jpg'}
                    alt={itemTitle}
                    className="cert-3d-card-img"
                    loading="lazy"
                    draggable="false"
                  />

                  {/* Multi-stop cinematic dark vignette */}
                  <div className="cert-3d-card-overlay" />

                  {/* Floating Badges at top */}
                  <div className="cert-3d-badges-row">
                    <span className={`cert-3d-pill-rank ${badgeClass}`}>
                      <Award size={12} />
                      <span>{itemRankBadge.split('•')[0] || itemRankBadge}</span>
                    </span>
                  </div>

                  {/* Active Card Top Neon Line */}
                  {isActive && <div className="cert-3d-card-neon" />}

                  {/* Card Bottom Content (Overlaid on Image) */}
                  <div className="cert-3d-card-caption">
                    <span className="cert-3d-caption-tag">
                      {item.categoryName ? (item.categoryName[language] || item.categoryName.ar) : ''}
                    </span>

                    <h3 className="cert-3d-caption-title">{itemTitle}</h3>

                    {itemRole && (
                      <p className="cert-3d-caption-role">{itemRole}</p>
                    )}

                    {/* Active CTA Button */}
                    <div className="cert-3d-caption-footer">
                      <button
                        type="button"
                        className="cert-3d-action-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedDetailItem(item);
                        }}
                      >
                        <Eye size={14} />
                        <span>{isArabic ? 'استعراض الشرح والصور' : 'View Story & Gallery'}</span>
                        <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Non-active Card Click Hint Overlay */}
                  {!isActive && (
                    <div className="cert-3d-inactive-click-hint">
                      <span>{isArabic ? 'انقر للتوسيط' : 'Click to focus'}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Floating Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="cert-3d-nav-arrow cert-3d-nav-prev"
            aria-label={isArabic ? 'السابق' : 'Previous'}
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={handleNext}
            className="cert-3d-nav-arrow cert-3d-nav-next"
            aria-label={isArabic ? 'التالي' : 'Next'}
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* =================================================================== */}
      {/* FULL DETAIL & COMPLETE IMAGES MODAL (كاملة الوضوح وبأبعادها الطبيعية) */}
      {/* =================================================================== */}
      {selectedDetailItem && (
        <div
          className="cert-detail-modal-backdrop"
          onClick={() => setSelectedDetailItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="cert-detail-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="cert-modal-header">
              <div className="cert-modal-header-meta">
                <span className={`cert-pill-rank ${getBadgeColorClass(selectedDetailItem.category)}`}>
                  <Award size={14} />
                  <span>{selectedDetailItem.rankBadge[language] || selectedDetailItem.rankBadge.ar}</span>
                </span>

                {selectedDetailItem.status && (
                  <span className="cert-pill-status">
                    <span className="cert-status-dot" />
                    <span>{selectedDetailItem.status[language] || selectedDetailItem.status.ar}</span>
                  </span>
                )}
              </div>

              <button
                onClick={() => setSelectedDetailItem(null)}
                className="cert-modal-close-btn"
                aria-label={isArabic ? 'إغلاق' : 'Close'}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body Scrollable */}
            <div className="cert-modal-body">
              {/* Title & Organization Header */}
              <div className="cert-modal-title-section">
                <span className="cert-item-tag" style={{ color: 'var(--brand-orange)' }}>
                  {selectedDetailItem.tag ? (selectedDetailItem.tag[language] || selectedDetailItem.tag.ar) : ''}
                </span>

                <h2 className="cert-modal-main-title">
                  {selectedDetailItem.title[language] || selectedDetailItem.title.ar}
                </h2>

                {selectedDetailItem.role && (
                  <div className="cert-modal-role-badge">
                    {selectedDetailItem.role[language] || selectedDetailItem.role.ar}
                  </div>
                )}

                <div className="cert-modal-info-bar">
                  {selectedDetailItem.issuer && (
                    <div className="cert-modal-info-item">
                      <GraduationCap size={15} style={{ color: 'var(--brand-orange)' }} />
                      <span>{selectedDetailItem.issuer[language] || selectedDetailItem.issuer.ar}</span>
                    </div>
                  )}

                  {(selectedDetailItem.period || selectedDetailItem.date) && (
                    <div className="cert-modal-info-item">
                      <Calendar size={15} style={{ color: 'var(--brand-orange)' }} />
                      <span>
                        {selectedDetailItem.period
                          ? selectedDetailItem.period[language] || selectedDetailItem.period.ar
                          : selectedDetailItem.date[language] || selectedDetailItem.date.ar}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* SECTION 1: معرض الصور والشهادات الرسمية بالكامل (كاملة الوضوح وبأبعادها الطبيعية بدون قص) */}
              <div className="cert-modal-gallery-box">
                <div className="cert-modal-section-badge">
                  <Layers size={16} />
                  <span>
                    {isArabic
                      ? `معرض الصور والشهادات المعتمدة بالكامل (${getItemImagesCount(selectedDetailItem)} معروضات)`
                      : `Official Certificates & Complete Gallery (${getItemImagesCount(selectedDetailItem)} items)`}
                  </span>
                </div>

                {/* CASE A: DEPI DUAL CERTIFICATES (React & English with PDF) */}
                {selectedDetailItem.certificates && selectedDetailItem.certificates.length > 0 && (
                  <div className="cert-gallery-dual-grid">
                    {selectedDetailItem.certificates.map((cert, certIdx) => {
                      const certTitle = cert.title[language] || cert.title.ar;
                      const certIssuer = cert.issuer[language] || cert.issuer.ar;
                      const allCertImages = selectedDetailItem.certificates.map((c) => ({
                        url: c.image,
                        title: c.title[language] || c.title.ar
                      }));
                      return (
                        <div key={cert.id} className="cert-frame-card">
                          <div>
                            <div
                              className="cert-frame-img-box"
                              onClick={() =>
                                openLightbox(
                                  allCertImages,
                                  certIdx,
                                  certTitle
                                )
                              }
                              title={isArabic ? 'انقر لتكبير الشهادة بملء الشاشة' : 'Click to inspect in full-screen'}
                            >
                              <img src={cert.image} alt={certTitle} loading="lazy" />
                              <div className="cert-frame-img-overlay">
                                <Eye size={18} />
                                <span>{isArabic ? 'معاينة الشهادة كاملة بملء الشاشة' : 'View Full Certificate'}</span>
                              </div>
                            </div>

                            <h4 className="cert-frame-title">{certTitle}</h4>
                            <p className="cert-frame-issuer">{certIssuer}</p>
                          </div>

                          <div className="cert-frame-actions">
                            <button
                              onClick={() =>
                                openLightbox(
                                  allCertImages,
                                  certIdx,
                                  certTitle
                                )
                              }
                              className="cert-frame-btn preview"
                            >
                              <Eye size={14} />
                              <span>{isArabic ? 'معاينة مكبرة' : 'Preview'}</span>
                            </button>

                            {cert.pdfUrl && (
                              <a
                                href={cert.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cert-frame-btn download"
                                download
                              >
                                <Download size={14} />
                                <span>{isArabic ? 'تحميل ملف PDF' : 'Download PDF'}</span>
                              </a>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* CASE B: GOVERNORATE 16-PHOTO GALLERY */}
                {selectedDetailItem.isGovCard && selectedDetailItem.gallery && (
                  <div className="cert-gov-panoramic-layout">
                    {/* Left: Big Cinematic Spotlight Frame */}
                    <div
                      className="cert-gov-spotlight-frame"
                      onClick={() =>
                        openLightbox(
                          selectedDetailItem.gallery,
                          activeGovPhotoIndex,
                          isArabic ? 'صور التدريب الميداني بديوان المحافظة' : 'Fieldwork & Governorate Gallery'
                        )
                      }
                      title={isArabic ? 'انقر للمعاينة بملء الشاشة' : 'Click to inspect in full-screen'}
                    >
                      <img
                        src={selectedDetailItem.gallery[activeGovPhotoIndex]?.url}
                        alt="Kafr El-Sheikh Governorate Fieldwork"
                        loading="lazy"
                      />
                      <div className="cert-gov-badge-counter">
                        <Maximize2 size={12} />
                        <span>
                          {isArabic
                            ? `${selectedDetailItem.gallery.length} صورة توثيقية`
                            : `${selectedDetailItem.gallery.length} Field Photos`}
                        </span>
                      </div>
                      <div className="cert-gov-caption-overlay">
                        <span>
                          {selectedDetailItem.gallery[activeGovPhotoIndex]?.title[language] ||
                            selectedDetailItem.gallery[activeGovPhotoIndex]?.title.ar}
                        </span>
                        <span style={{ fontSize: '0.76rem', opacity: 0.85 }}>
                          {activeGovPhotoIndex + 1} / {selectedDetailItem.gallery.length}
                        </span>
                      </div>
                    </div>

                    {/* Right: Interactive Thumbnails Grid */}
                    <div className="cert-gov-side-thumbs-area">
                      <div className="cert-gov-thumbnails-grid">
                        {selectedDetailItem.gallery.map((gImg, gIdx) => {
                          const isActive = gIdx === activeGovPhotoIndex;
                          return (
                            <div
                              key={gIdx}
                              className={`cert-gov-thumb-cell ${isActive ? 'active' : ''}`}
                              onClick={() => setActiveGovPhotoIndex(gIdx)}
                              title={gImg.title[language] || gImg.title.ar}
                            >
                              <img src={gImg.url} alt={`Thumbnail ${gIdx + 1}`} loading="lazy" />
                            </div>
                          );
                        })}
                      </div>

                      <button
                        onClick={() =>
                          openLightbox(
                            selectedDetailItem.gallery,
                            activeGovPhotoIndex,
                            isArabic ? 'معرض صور ديوان المحافظة والتدريب الميداني' : 'Governorate Fieldwork High-Res Gallery'
                          )
                        }
                        className="btn btn-secondary"
                        style={{
                          width: '100%',
                          padding: '0.72rem',
                          fontSize: '0.85rem',
                          gap: '0.5rem',
                          borderColor: 'rgba(16, 185, 129, 0.3)',
                          color: 'var(--text-main)',
                          marginTop: '0.85rem'
                        }}
                      >
                        <Eye size={15} style={{ color: '#10b981' }} />
                        <span>
                          {isArabic
                            ? `استعراض جميع الصور الـ ${selectedDetailItem.gallery.length} بملء الشاشة`
                            : `Browse all ${selectedDetailItem.gallery.length} photos in full-screen`}
                        </span>
                      </button>
                    </div>
                  </div>
                )}

                {/* CASE C: OTHER MILESTONES GALLERY (IEEE, BNU, MLSA, AI, TEACHING, BOOTCAMP, SUMMIT) */}
                {!selectedDetailItem.isDepiCard && !selectedDetailItem.isGovCard && selectedDetailItem.gallery && (
                  <div className="cert-modal-multi-gallery-grid">
                    {selectedDetailItem.gallery.map((imgItem, imgIdx) => {
                      const imgTitle = imgItem.title ? (imgItem.title[language] || imgItem.title.ar) : (selectedDetailItem.title[language] || selectedDetailItem.title.ar);
                      return (
                        <div
                          key={imgIdx}
                          className="cert-modal-gallery-card"
                          onClick={() =>
                            openLightbox(
                              selectedDetailItem.gallery,
                              imgIdx,
                              selectedDetailItem.title[language] || selectedDetailItem.title.ar
                            )
                          }
                          title={isArabic ? 'انقر للمعاينة عالية الدقة' : 'Click to inspect in high-res'}
                        >
                          <div className="cert-modal-gallery-img-box">
                            <img src={imgItem.url} alt={imgTitle} loading="lazy" />
                            <div className="cert-modal-gallery-img-overlay">
                              <Eye size={16} />
                              <span>{isArabic ? 'معاينة مكبرة' : 'Preview'}</span>
                            </div>
                          </div>
                          <div className="cert-modal-gallery-caption">
                            <span>{imgTitle}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* SECTION 2: التوثيق والشرح الكامل والقصة */}
              <div className="cert-modal-story-box">
                <div className="cert-modal-section-badge">
                  <FileText size={16} />
                  <span>{isArabic ? 'التوثيق والشرح التفصيلي' : 'Comprehensive Documentation & Story'}</span>
                </div>

                <p className="cert-modal-desc-text">
                  {selectedDetailItem.description[language] || selectedDetailItem.description.ar}
                </p>

                {/* Key Highlights */}
                {selectedDetailItem.keyHighlights && selectedDetailItem.keyHighlights.length > 0 && (
                  <div className="cert-modal-highlights-grid">
                    {selectedDetailItem.keyHighlights.map((hl, hIdx) => (
                      <div key={hIdx} className="cert-modal-hl-card">
                        <Check size={16} style={{ color: 'var(--brand-orange)', flexShrink: 0 }} />
                        <span>{hl[language] || hl.ar}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Skills Cloud */}
                {selectedDetailItem.skills && selectedDetailItem.skills.length > 0 && (
                  <div className="cert-modal-skills-box">
                    <span className="cert-modal-skills-label">
                      {isArabic ? 'المهارات والتقنيات المكتسبة:' : 'Key Competencies & Technologies:'}
                    </span>
                    <div className="cert-tag-cloud">
                      {selectedDetailItem.skills.map((sk, sIdx) => (
                        <span key={sIdx} className="cert-tag-pill">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Official Facebook Social Links (e.g. Governorate) */}
                {selectedDetailItem.socialLinks && selectedDetailItem.socialLinks.length > 0 && (
                  <div className="cert-modal-social-links-box">
                    <span style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Share2 size={14} />
                      <span>{isArabic ? 'تغطيات المحافظة الرسمية على فيسبوك:' : 'Official Governorate Social Coverages:'}</span>
                    </span>
                    <div className="cert-social-links-grid">
                      {selectedDetailItem.socialLinks.map((sLink, sIdx) => (
                        <a
                          key={sIdx}
                          href={sLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cert-social-mini-btn"
                        >
                          <ExternalLink size={12} />
                          <span>{sLink.label[language] || sLink.label.ar}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="cert-modal-footer">
              <button
                onClick={() => setSelectedDetailItem(null)}
                className="btn btn-secondary"
              >
                <span>{isArabic ? 'إغلاق النافذة' : 'Close'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* High-Resolution Interactive Lightbox Modal */}
      {selectedGallery && (
        <CredentialLightbox
          isOpen={Boolean(selectedGallery)}
          onClose={() => setSelectedGallery(null)}
          images={selectedGallery.images}
          currentIndex={lightboxIndex}
          setCurrentIndex={setLightboxIndex}
          parentTitle={selectedGallery.title}
        />
      )}
    </section>
  );
}
