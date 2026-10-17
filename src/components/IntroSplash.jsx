import React, { useMemo } from 'react';
import { useIntroTimeline } from '../hooks/useIntroTimeline';
import { INTRO_CIRCLE_GEOMETRY } from '../constants/introConfig';

export default function IntroSplash({ onFinish }) {
  const { phase } = useIntroTimeline(onFinish);

  const stars = useMemo(() => {
    return Array.from({ length: 48 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3.5 + 1.8,
      delay: Math.random() * 2,
      duration: Math.random() * 1.8 + 1.2,
      color:
        i % 4 === 0
          ? '#ffaa33'
          : i % 3 === 0
          ? '#ff6a00'
          : i % 2 === 0
          ? '#f59e0b'
          : '#ffedd5',
      opacity: Math.random() * 0.6 + 0.3
    }));
  }, []);

  return (
    <div
      onClick={onFinish}
      className={`intro-splash-container ${phase === 'exit' ? 'intro-exit' : ''}`}
      aria-hidden="true"
    >
      <div className="intro-bg-ambient" />

      <div className="intro-stars-layer">
        {stars.map((star) => (
          <div
            key={star.id}
            className="intro-star-dot"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              boxShadow: `0 0 ${star.size * 2.5}px ${star.color}`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
              opacity: star.opacity
            }}
          />
        ))}
      </div>

      <div className="intro-center-stage">
        <div className="intro-logo-box">
          <div className="intro-circle-wrapper">
            <svg
              viewBox="0 0 360 360"
              className={`intro-circle-svg ${
                phase === 'drawingCircle' ? 'circle-drawing' : ''
              } ${phase === 'flashDot' || phase === 'exit' ? 'circle-drawn' : ''}`}
            >
              <defs>
                <linearGradient id="thin-circle-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff5500" stopOpacity="0.75" />
                  <stop offset="50%" stopColor="#ff7a00" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#ffaa33" stopOpacity="0.75" />
                </linearGradient>
              </defs>

              <circle
                cx={INTRO_CIRCLE_GEOMETRY.CX}
                cy={INTRO_CIRCLE_GEOMETRY.CY}
                r={INTRO_CIRCLE_GEOMETRY.RADIUS}
                fill="none"
                stroke="url(#thin-circle-gradient)"
                strokeWidth={INTRO_CIRCLE_GEOMETRY.STROKE_WIDTH}
                className="intro-circle-path"
              />
            </svg>

            <div
              className={`intro-dot-rotator ${
                phase === 'drawingCircle' ? 'dot-drawing' : ''
              } ${phase === 'flashDot' || phase === 'exit' ? 'dot-completed' : ''}`}
            >
              <div
                className={`intro-drawing-dot ${
                  phase === 'flashDot' ? 'dot-super-flash' : ''
                }`}
              />
            </div>
          </div>

          <svg
            viewBox="0 0 382 451"
            className="intro-svg-canvas"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="clip-letter-l">
                <rect x="115" y="25" width="48" height="400" rx="3" />
                <rect x="115" y="380" width="210" height="42" rx="3" />
              </clipPath>
            </defs>

            <g
              className={`intro-layer-l ${phase !== 'start' ? 'active-l' : ''}`}
              clipPath="url(#clip-letter-l)"
            >
              <image
                href="/logo-orange.webp"
                x="0"
                y="0"
                width="382"
                height="451"
                preserveAspectRatio="xMidYMid meet"
              />
            </g>

            <g
              className={`intro-layer-s ${
                phase !== 'start' && phase !== 'letterL' ? 'active-s' : ''
              }`}
            >
              <image
                href="/logo-orange.webp"
                x="0"
                y="0"
                width="382"
                height="451"
                preserveAspectRatio="xMidYMid meet"
              />
            </g>
          </svg>

          <div
            className={`intro-logo-aura ${
              phase !== 'start' && phase !== 'letterL' ? 'active-aura' : ''
            }`}
          />
        </div>

        <div
          className={`intro-nameplate ${
            phase !== 'start' && phase !== 'letterL' ? 'active-nameplate' : ''
          }`}
        >
          <span className="intro-name-text">LOBNA SAAD</span>
          <div className="intro-name-line" />
        </div>
      </div>

      <style>{`
        .intro-splash-container {
          position: fixed;
          inset: 0;
          z-index: 999999;
          background-color: #07090e;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          cursor: pointer;
          user-select: none;
          transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .intro-splash-container.intro-exit {
          opacity: 0;
          transform: scale(1.05);
          pointer-events: none;
        }

        .intro-bg-ambient {
          position: absolute;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 106, 0, 0.22) 0%, rgba(245, 158, 11, 0.07) 45%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
          animation: pulseAmbient 3.5s ease-in-out infinite;
        }

        @keyframes pulseAmbient {
          0%, 100% { transform: scale(0.95); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
        }

        .intro-stars-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .intro-star-dot {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: starPulse infinite ease-in-out;
        }

        @keyframes starPulse {
          0%, 100% {
            opacity: 0.25;
            transform: scale(0.85);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        .intro-center-stage {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .intro-circle-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 360px;
          height: 360px;
          transform: translate(-50%, -50%) scale(0.74);
          transform-origin: center center;
          pointer-events: none;
          z-index: 5;
        }

        @media (min-width: 640px) {
          .intro-circle-wrapper {
            transform: translate(-50%, -50%) scale(0.85);
          }
        }

        @media (min-width: 768px) {
          .intro-circle-wrapper {
            transform: translate(-50%, -50%) scale(1);
          }
        }

        .intro-circle-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
          transform: rotate(-90deg);
          transform-origin: 180px 180px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .intro-circle-path {
          stroke-dasharray: 968 968;
          stroke-dashoffset: 968;
          filter: drop-shadow(0 0 3px rgba(255, 122, 0, 0.45));
          opacity: 0.7;
        }

        .intro-circle-svg.circle-drawing {
          opacity: 1;
        }

        .intro-circle-svg.circle-drawing .intro-circle-path {
          animation: drawFullCircle 1.8s cubic-bezier(0.25, 1, 0.35, 1) forwards;
        }

        @keyframes drawFullCircle {
          0% {
            stroke-dashoffset: 968;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        .intro-circle-svg.circle-drawn {
          opacity: 1;
        }

        .intro-circle-svg.circle-drawn .intro-circle-path {
          stroke-dashoffset: 0;
        }

        .intro-dot-rotator {
          position: absolute;
          inset: 0;
          opacity: 0;
          pointer-events: none;
        }

        .intro-dot-rotator.dot-drawing {
          opacity: 1;
          animation: rotateFullLoop 1.8s cubic-bezier(0.25, 1, 0.35, 1) forwards;
        }

        @keyframes rotateFullLoop {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .intro-dot-rotator.dot-completed {
          opacity: 1;
          transform: rotate(360deg);
        }

        .intro-drawing-dot {
          position: absolute;
          top: calc(180px - 154px);
          left: 180px;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: radial-gradient(circle, #ffffff 18%, #ffb703 55%, #ff6a00 100%);
          box-shadow:
            0 0 8px 2px #ffc107,
            0 0 16px 5px #ff7a00,
            0 0 24px 6px rgba(255, 106, 0, 0.5);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .intro-drawing-dot.dot-super-flash {
          animation: dotSuperBurst 0.9s cubic-bezier(0.2, 0.8, 0.25, 1) forwards;
        }

        @keyframes dotSuperBurst {
          0% {
            transform: translate(-50%, -50%) scale(1);
            box-shadow:
              0 0 8px 2px #ffc107,
              0 0 16px 5px #ff7a00;
          }
          32% {
            transform: translate(-50%, -50%) scale(2.2);
            box-shadow:
              0 0 16px 5px #ffffff,
              0 0 32px 10px #ffc107,
              0 0 58px 18px #ff7a00,
              0 0 90px 30px rgba(255, 106, 0, 0.55);
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            box-shadow:
              0 0 8px 2px #ffc107,
              0 0 16px 5px #ff7a00,
              0 0 24px 6px rgba(255, 106, 0, 0.5);
          }
        }

        .intro-logo-box {
          position: relative;
          width: 145px;
          height: 171px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 6;
        }

        @media (min-width: 640px) {
          .intro-logo-box {
            width: 165px;
            height: 195px;
          }
        }

        @media (min-width: 768px) {
          .intro-logo-box {
            width: 195px;
            height: 230px;
          }
        }

        .intro-svg-canvas {
          width: 100%;
          height: 100%;
          overflow: visible;
          filter: drop-shadow(0 8px 25px rgba(255, 106, 0, 0.35));
        }

        .intro-layer-l {
          opacity: 0;
          transform: translateY(18px) scale(0.92);
          transform-origin: center;
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .intro-layer-l.active-l {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .intro-layer-s {
          opacity: 0;
          transform: scale(1.12);
          transform-origin: center;
          transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .intro-layer-s.active-s {
          opacity: 1;
          transform: scale(1);
        }

        .intro-logo-aura {
          position: absolute;
          inset: -20px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 106, 0, 0.3) 0%, transparent 68%);
          filter: blur(28px);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.8s ease;
          z-index: -1;
        }

        .intro-logo-aura.active-aura {
          opacity: 1;
        }

        .intro-nameplate {
          margin-top: 3.8rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.7s ease, transform 0.7s ease;
          z-index: 6;
        }

        @media (min-width: 640px) {
          .intro-nameplate {
            margin-top: 4.2rem;
          }
        }

        @media (min-width: 768px) {
          .intro-nameplate {
            margin-top: 4.6rem;
          }
        }

        .intro-nameplate.active-nameplate {
          opacity: 1;
          transform: translateY(0);
        }

        .intro-name-text {
          font-family: 'Cairo', sans-serif;
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.32em;
          white-space: nowrap;
          color: #f8fafc;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8), 0 0 16px rgba(255, 106, 0, 0.45);
        }

        @media (min-width: 768px) {
          .intro-name-text {
            font-size: 0.92rem;
            letter-spacing: 0.38em;
          }
        }

        .intro-name-line {
          width: 38px;
          height: 2px;
          margin-top: 0.55rem;
          background: linear-gradient(90deg, transparent, #ff6a00, transparent);
          border-radius: 2px;
        }

        /* Mobile specific refinements for Intro animation */
        @media (max-width: 640px) {
          .intro-logo-box {
            width: 140px;
            height: 165px;
          }
          .intro-circle-wrapper {
            transform: translate(-50%, -50%) scale(0.72) !important;
          }
          .intro-circle-path {
            stroke-width: 2.2px !important;
            filter: drop-shadow(0 0 6px rgba(255, 122, 0, 0.75)) !important;
            opacity: 0.9 !important;
          }
          .intro-circle-svg.circle-drawing .intro-circle-path {
            animation: drawFullCircle 1.35s cubic-bezier(0.25, 1, 0.35, 1) forwards !important;
          }
          .intro-dot-rotator.dot-drawing {
            animation: rotateFullLoop 1.35s cubic-bezier(0.25, 1, 0.35, 1) forwards !important;
          }
          .intro-drawing-dot {
            width: 10px !important;
            height: 10px !important;
            box-shadow:
              0 0 10px 3px #ffc107,
              0 0 20px 6px #ff7a00,
              0 0 32px 8px rgba(255, 106, 0, 0.6) !important;
          }
          .intro-nameplate {
            margin-top: 3.4rem !important;
          }
          .intro-name-text {
            font-size: 0.86rem !important;
            letter-spacing: 0.3em !important;
          }
        }
      `}</style>
    </div>
  );
}
