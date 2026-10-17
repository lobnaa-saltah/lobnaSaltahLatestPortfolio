import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/projectsData';
import ProjectModal from './ProjectModal';
import './Projects.css';
import {
  Sparkles,
  ArrowUpRight,
  Info,
  Layers,
  LayoutGrid,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Github } from './Icons';

const TOTAL_SLOTS = 12;
const SLOT_ANGLE = 360 / TOTAL_SLOTS; // 30 degrees per slot

export default function Projects() {
  const { t, isRtl, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('3d'); // '3d' | 'grid'
  const [selectedProject, setSelectedProject] = useState(null);
  const isAutoPlay = true;
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 3D Cylinder Rotation State
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragDeltaX, setDragDeltaX] = useState(0);
  const dragStartX = useRef(null);
  const hasMovedRef = useRef(false);
  const stageRef = useRef(null);
  const transitionTimeoutRef = useRef(null);
  const animFrameRef = useRef(null);
  const lastTimeRef = useRef(null);

  // Responsive Radius calculation (airy cylinder spacing to prevent card collision)
  const [isMobile, setIsMobile] = useState(() => (typeof window !== 'undefined' ? window.innerWidth < 640 : false));
  const [radius, setRadius] = useState(() => {
    if (typeof window === 'undefined') return 500;
    const w = window.innerWidth;
    if (w < 640) return 380;
    if (w < 992) return 450;
    return 500;
  });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const mobile = w < 640;
      setIsMobile(mobile);
      if (mobile) {
        setRadius(380);
      } else if (w < 992) {
        setRadius(450);
      } else {
        setRadius(500);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filterTabs = [
    { id: 'all', label: t('projects_tab_all') },
    { id: 'webapps', label: t('projects_tab_webapps') },
    { id: 'landing', label: t('projects_tab_landing') },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  // Reset rotation when filter changes
  useEffect(() => {
    setRotation(0);
    setDragDeltaX(0);
    setIsTransitioning(false);
  }, [activeFilter]);

  const pCount = filteredProjects.length;

  // Drag sensitivity (degrees per pixel)
  const dirFactor = isRtl ? -1 : 1;
  const currentRotation = isDragging
    ? rotation + dragDeltaX * 0.22 * dirFactor
    : rotation;

  // Active slot and active project index calculation
  const normalizedSlot = ((-Math.round(currentRotation / SLOT_ANGLE) % TOTAL_SLOTS) + TOTAL_SLOTS) % TOTAL_SLOTS;
  const activeSlot = normalizedSlot;
  const activeProjectIndex = pCount > 0 ? activeSlot % pCount : 0;

  // Programmatic smooth step transition helper
  const startTransition = useCallback((targetRotation) => {
    setIsTransitioning(true);
    setRotation(targetRotation);

    if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
    transitionTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 950);
  }, []);

  // Step rotation
  const handleNext = useCallback(() => {
    const currentSnapped = Math.round(rotation / SLOT_ANGLE) * SLOT_ANGLE;
    startTransition(currentSnapped - SLOT_ANGLE * dirFactor);
  }, [rotation, dirFactor, startTransition]);

  const handlePrev = useCallback(() => {
    const currentSnapped = Math.round(rotation / SLOT_ANGLE) * SLOT_ANGLE;
    startTransition(currentSnapped + SLOT_ANGLE * dirFactor);
  }, [rotation, dirFactor, startTransition]);

  // Ambient Silky Continuous 3D Rotation Loop
  useEffect(() => {
    if (
      viewMode !== '3d' ||
      !isAutoPlay ||
      isHovered ||
      isDragging ||
      isTransitioning ||
      selectedProject
    ) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      lastTimeRef.current = null;
      return;
    }

    const speedDegPerSec = 7.0; // Smooth, gentle, hypnotic drift (~51s for full 360)

    const tick = (now) => {
      if (!lastTimeRef.current) lastTimeRef.current = now;
      const dt = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      // Guard against huge time deltas when tab is backgrounded
      if (dt > 0 && dt < 0.15) {
        setRotation((prev) => prev - speedDegPerSec * dt * dirFactor);
      }

      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [viewMode, isAutoPlay, isHovered, isDragging, isTransitioning, selectedProject, dirFactor]);

  // Keyboard controls
  useEffect(() => {
    if (viewMode !== '3d') return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        if (isRtl) handlePrev();
        else handleNext();
      } else if (e.key === 'ArrowLeft') {
        if (isRtl) handleNext();
        else handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, isRtl, handleNext, handlePrev]);

  // Drag Handlers
  const handleDragStart = (clientX) => {
    dragStartX.current = clientX;
    hasMovedRef.current = false;
  };

  const handleDragMove = (clientX) => {
    if (dragStartX.current === null) return;
    const delta = clientX - dragStartX.current;
    if (!hasMovedRef.current && Math.abs(delta) > 6) {
      hasMovedRef.current = true;
      setIsDragging(true);
      setIsTransitioning(false);
    }
    if (hasMovedRef.current) {
      setDragDeltaX(delta);
    }
  };

  const handleDragEnd = () => {
    if (dragStartX.current === null) return;
    const wasMoved = hasMovedRef.current;
    dragStartX.current = null;
    setIsDragging(false);

    if (wasMoved) {
      const finalRot = rotation + dragDeltaX * 0.22 * dirFactor;
      const snappedRot = Math.round(finalRot / SLOT_ANGLE) * SLOT_ANGLE;
      startTransition(snappedRot);
      setDragDeltaX(0);
      setTimeout(() => {
        hasMovedRef.current = false;
      }, 80);
    } else {
      setDragDeltaX(0);
      hasMovedRef.current = false;
    }
  };

  // Rotate cylinder to specific slot
  const handleSlotClick = (slotIdx) => {
    if (slotIdx === activeSlot) {
      const proj = filteredProjects[slotIdx % pCount];
      setSelectedProject(proj);
      return;
    }

    let diff = (slotIdx - activeSlot) % TOTAL_SLOTS;
    if (diff > TOTAL_SLOTS / 2) diff -= TOTAL_SLOTS;
    if (diff < -TOTAL_SLOTS / 2) diff += TOTAL_SLOTS;

    const currentSnapped = Math.round(rotation / SLOT_ANGLE) * SLOT_ANGLE;
    startTransition(currentSnapped - diff * SLOT_ANGLE);
  };

  // Cylinder slots array (0 .. 11)
  const cylinderSlots = Array.from({ length: TOTAL_SLOTS }, (_, k) => k);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-ambient-glow" />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <div className="section-badge">
            <Sparkles size={16} />
            <span>{t('projects_badge')}</span>
          </div>
          <h2 className="section-title">
            {t('projects_title')}
          </h2>
          <p className="section-subtitle">
            {t('projects_subtitle')}
          </p>
        </div>

        {/* Top Controls: Filter Tabs + View Mode Toggle */}
        <div className="projects-controls-bar">
          {/* Category Tabs */}
          <div className="projects-filter-group">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              const tabCount = tab.id === 'all'
                ? projectsData.length
                : projectsData.filter((p) => p.category === tab.id).length;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`projects-filter-btn ${isActive ? 'is-active' : ''}`}
                >
                  <span>{tab.label}</span>
                  <span className="projects-filter-count">{tabCount}</span>
                </button>
              );
            })}
          </div>

          {/* Sleek Center Divider */}
          <div className="projects-controls-divider" />

          {/* View Mode Switcher */}
          <div className="projects-view-toggle">
            <button
              onClick={() => setViewMode('3d')}
              className={`projects-toggle-btn ${viewMode === '3d' ? 'is-active' : ''}`}
              title={t('projects_view_mode_3d')}
            >
              <Layers size={15} />
              <span>{t('projects_view_mode_3d')}</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`projects-toggle-btn ${viewMode === 'grid' ? 'is-active' : ''}`}
              title={t('projects_view_mode_grid')}
            >
              <LayoutGrid size={15} />
              <span>{t('projects_view_mode_grid')}</span>
            </button>
          </div>
        </div>

        {/* ===================================================================
            VIEW 1: TRUE 3D CYLINDER / SPHERE CAROUSEL (VIRAL ROTATING RING)
            =================================================================== */}
        {viewMode === '3d' ? (
          <div
            style={{ width: '100%', position: 'relative' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              handleDragEnd();
            }}
          >
            {/* The 3D Perspective Stage */}
            <div
              ref={stageRef}
              className={`projects-cylinder-stage ${isDragging ? 'is-dragging' : ''}`}
              onMouseDown={(e) => handleDragStart(e.clientX)}
              onMouseMove={(e) => handleDragMove(e.clientX)}
              onMouseUp={handleDragEnd}
              onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
              onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
              onTouchEnd={handleDragEnd}
            >
              {/* Spinning 3D Rotor Container */}
              <div
                className={`projects-cylinder-rotor ${!isTransitioning ? 'is-free-dragging' : ''}`}
                style={{
                  transform: `translateZ(-${radius + (isMobile ? 30 : 40)}px) rotateY(${currentRotation}deg)`,
                }}
              >
                {cylinderSlots.map((slotIdx) => {
                  const project = filteredProjects[slotIdx % pCount];
                  if (!project) return null;

                  const slotBaseAngle = slotIdx * SLOT_ANGLE;

                  // Compute relative angle to camera
                  let relAngle = (slotBaseAngle + currentRotation) % 360;
                  if (relAngle > 180) relAngle -= 360;
                  if (relAngle < -180) relAngle += 360;
                  const absRelAngle = Math.abs(relAngle);

                  // Visibility & Depth Culling:
                  // On mobile: show cards up to 74° so the 3D circular revolving ring is clearly visible
                  // On desktop: show cards up to 84°
                  const maxAngle = isMobile ? 74 : 84;
                  const isVisible = absRelAngle <= maxAngle;
                  const isActive = absRelAngle < 15;

                  // Smooth opacity & blur falloff along the cylinder curve
                  const opacity = isVisible
                    ? (isMobile
                        ? (isActive ? 1 : Math.max(0.3, 0.75 - (absRelAngle / 74) * 0.45))
                        : Math.max(0.25, 1 - (absRelAngle / 84) * 0.58))
                    : 0;
                  const blurAmount = isActive ? 0 : (isMobile ? Math.min(1.2, (absRelAngle / 74) * 1.4) : Math.min(1.8, (absRelAngle / 84) * 1.6));
                  const zIndex = Math.round(100 - absRelAngle);

                  const currentDesc = project.description[language] || project.description.en;
                  const currentSubtitle = project.subtitle[language] || project.subtitle.en;

                  return (
                    <article
                      key={slotIdx}
                      className={`cylinder-card ${isActive ? 'is-active-card' : ''}`}
                      style={{
                        transform: `rotateY(${slotBaseAngle}deg) translateZ(${radius}px)`,
                        opacity: opacity,
                        filter: blurAmount > 0 ? `blur(${blurAmount}px)` : 'none',
                        zIndex: zIndex,
                        visibility: isVisible ? 'visible' : 'hidden',
                        pointerEvents: isVisible ? 'auto' : 'none',
                      }}
                    >
                      {/* Media Area */}
                      <div
                        className="cylinder-card-media"
                        onMouseDown={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (isActive && !hasMovedRef.current) {
                            setSelectedProject(project);
                          }
                        }}
                        style={{ cursor: isActive ? 'pointer' : 'default' }}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="cylinder-card-img"
                          loading="lazy"
                          decoding="async"
                          width="480"
                          height="270"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                          draggable="false"
                        />

                        {/* Badges on image */}
                        <div className="cylinder-card-badges">
                          <span className="cylinder-pill-cat">
                            {project.category === 'webapps' ? t('projects_tab_webapps') : t('projects_tab_landing')}
                          </span>
                        </div>
                      </div>

                      {/* Card Content Body */}
                      <div
                        className="cylinder-card-body"
                        onClick={(e) => {
                          if (isActive && !hasMovedRef.current && !e.target.closest('.cylinder-card-footer')) {
                            setSelectedProject(project);
                          }
                        }}
                        style={{ cursor: isActive ? 'pointer' : 'default' }}
                      >
                        <div>
                          <span className="cylinder-card-subheading">
                            {currentSubtitle}
                          </span>

                          <h3 className="cylinder-card-title">
                            {project.title}
                          </h3>

                          <p className="cylinder-card-desc">
                            {currentDesc}
                          </p>

                          {/* Tech Badges */}
                          <div className="cylinder-tech-badges">
                            {project.tech.slice(0, 3).map((tItem, tIdx) => (
                              <span key={tIdx} className="cylinder-tech-pill">
                                {tItem}
                              </span>
                            ))}
                            {project.tech.length > 3 && (
                              <span className="cylinder-tech-pill" style={{ opacity: 0.75 }}>
                                +{project.tech.length - 3}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div
                          className="cylinder-card-footer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="cylinder-actions-group">
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="cylinder-btn-live"
                              title={t('projects_view_live')}
                              aria-label={`${t('projects_view_live')} - ${project.title}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                if (hasMovedRef.current) {
                                   e.preventDefault();
                                }
                              }}
                            >
                              <span>{t('projects_view_live')}</span>
                              <ArrowUpRight size={14} />
                            </a>

                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cylinder-btn-icon"
                                title={t('projects_view_code')}
                                aria-label={`${t('projects_view_code')} - ${project.title}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (hasMovedRef.current) {
                                    e.preventDefault();
                                  }
                                }}
                              >
                                <Github size={15} />
                              </a>
                            )}
                          </div>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProject(project);
                            }}
                            className="cylinder-btn-icon"
                            title={t('projects_details')}
                            aria-label={`${t('projects_details')} - ${project.title}`}
                          >
                            <Info size={16} />
                          </button>
                        </div>
                      </div>

                      {/* Click overlay for inactive cards */}
                      {!isActive && (
                        <div
                          className="cylinder-inactive-overlay"
                          onMouseDown={(e) => e.stopPropagation()}
                          onTouchStart={(e) => e.stopPropagation()}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!hasMovedRef.current) {
                              handleSlotClick(slotIdx);
                            }
                          }}
                        >
                          <span className="cylinder-click-hint">
                            {isRtl ? 'اضغط للعرض' : 'Click to View'}
                          </span>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>

              {/* Floating Prev / Next Navigation Arrows */}
              <button
                onClick={isRtl ? handleNext : handlePrev}
                className="cylinder-nav-arrow cylinder-nav-prev"
                aria-label={t('projects_prev')}
              >
                {isRtl ? <ChevronRight size={22} /> : <ChevronLeft size={22} />}
              </button>

              <button
                onClick={isRtl ? handlePrev : handleNext}
                className="cylinder-nav-arrow cylinder-nav-next"
                aria-label={t('projects_next')}
              >
                {isRtl ? <ChevronLeft size={22} /> : <ChevronRight size={22} />}
              </button>
            </div>
          </div>
        ) : (
          /* ===================================================================
              VIEW 2: GRID VIEW (RESPONSIVE MULTI-CARD BROWSER)
              =================================================================== */
          <div className="projects-grid-container">
            {filteredProjects.map((project) => {
              const currentDesc = project.description[language] || project.description.en;
              const currentSubtitle = project.subtitle[language] || project.subtitle.en;

              return (
                <article key={project.id} className="projects-grid-card">
                  <div
                    className="projects-grid-media"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="projects-grid-img"
                      loading="lazy"
                      decoding="async"
                      width="480"
                      height="270"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                    />
                    <div className="projects-grid-badges">
                      <span className="projects-grid-pill-cat">
                        {project.category === 'webapps' ? t('projects_tab_webapps') : t('projects_tab_landing')}
                      </span>
                    </div>
                  </div>

                  <div className="projects-grid-body">
                    <div>
                      <span className="projects-grid-subheading">
                        {currentSubtitle}
                      </span>
                      <h3
                        className="projects-grid-title"
                        onClick={() => setSelectedProject(project)}
                      >
                        {project.title}
                      </h3>
                      <p className="projects-grid-desc">
                        {currentDesc}
                      </p>
                      <div className="projects-grid-tech-list">
                        {project.tech.map((tItem, tIdx) => (
                          <span key={tIdx} className="projects-grid-tech-pill">
                            {tItem}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="projects-grid-footer">
                      <div className="projects-grid-actions">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="projects-grid-btn-live"
                          title={t('projects_view_live')}
                          aria-label={`${t('projects_view_live')} - ${project.title}`}
                        >
                          <span>{t('projects_view_live')}</span>
                          <ArrowUpRight size={15} />
                        </a>

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projects-grid-btn-icon"
                            title={t('projects_view_code')}
                            aria-label={`${t('projects_view_code')} - ${project.title}`}
                          >
                            <Github size={16} />
                          </a>
                        )}
                      </div>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="projects-grid-btn-icon"
                        title={t('projects_details')}
                        aria-label={`${t('projects_details')} - ${project.title}`}
                      >
                        <Info size={17} />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Project Details Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
