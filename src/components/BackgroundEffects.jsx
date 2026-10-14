import React from 'react';

export default function BackgroundEffects() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}
      aria-hidden="true"
    >
      
      <div
        className="animate-ambient-drift"
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-10%',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--color-orange-glow) 0%, rgba(255, 106, 0, 0) 70%)',
          filter: 'blur(70px)',
          opacity: 0.85,
          animationDuration: '16s'
        }}
      />

      <div
        className="animate-ambient-drift"
        style={{
          position: 'absolute',
          top: '35%',
          left: '-15%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--color-amber-glow) 0%, rgba(245, 158, 11, 0) 70%)',
          filter: 'blur(80px)',
          opacity: 0.6,
          animationDuration: '20s',
          animationDelay: '-5s'
        }}
      />

      <div
        className="animate-ambient-drift"
        style={{
          position: 'absolute',
          bottom: '5%',
          right: '5%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--color-orange-glow) 0%, rgba(255, 106, 0, 0) 70%)',
          filter: 'blur(90px)',
          opacity: 0.7,
          animationDuration: '18s',
          animationDelay: '-9s'
        }}
      />

    </div>
  );
}
