'use client';

import * as React from 'react';

type Blob = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  height: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  borderRadius: string;
};

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function LiquidBlobs({ className, count = 15 }: { className?: string; count?: number }) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const blobsRef = React.useRef<Blob[]>([]);
  const rafRef = React.useRef<number | null>(null);
  const blobElementsRef = React.useRef<HTMLDivElement[]>([]);
  const filterIdRef = React.useRef(`goo-${Math.random().toString(36).substr(2, 9)}`);
  const grainIdRef = React.useRef(`grain-${Math.random().toString(36).substr(2, 9)}`);

  React.useEffect(() => {
    if (prefersReducedMotion()) return;

    const container = containerRef.current;
    if (!container) return;

    const colors = ['#2D9766', '#AFE0EE'];

    const initBlobs = () => {
      const { width, height } = container.getBoundingClientRect();

      blobsRef.current = [];
      blobElementsRef.current.forEach(el => el.remove());
      blobElementsRef.current = [];

      for (let i = 0; i < count; i++) {
        const blobWidth = random(200, 400);
        const blobHeight = random(200, 400);
        const borderRadius = `${random(30, 70)}% ${random(30, 70)}% ${random(30, 70)}% ${random(30, 70)}% / ${random(30, 70)}% ${random(30, 70)}% ${random(30, 70)}% ${random(30, 70)}%`;
        const color = colors[Math.floor(Math.random() * colors.length)];

        const blob: Blob = {
          x: random(0, width - blobWidth),
          y: random(0, height - blobHeight),
          vx: random(-0.5, 0.5),
          vy: random(-0.5, 0.5),
          width: blobWidth,
          height: blobHeight,
          rotation: random(0, 360),
          rotationSpeed: random(-0.2, 0.2),
          color,
          borderRadius
        };

        const element = document.createElement('div');
        element.style.position = 'absolute';
        element.style.width = `${blobWidth}px`;
        element.style.height = `${blobHeight}px`;
        element.style.borderRadius = borderRadius;
        element.style.background = `radial-gradient(circle at center, ${color} 0%, ${color} 15%, transparent 60%)`;
        element.style.willChange = 'transform';
        element.style.pointerEvents = 'none';
        element.style.opacity = '0.2';

        container.appendChild(element);
        blobElementsRef.current.push(element);
        blobsRef.current.push(blob);
      }
    };

    const animate = () => {
      const { width, height } = container.getBoundingClientRect();
      const blobs = blobsRef.current;
      const elements = blobElementsRef.current;

      blobs.forEach((blob, i) => {
        blob.x += blob.vx;
        blob.y += blob.vy;
        blob.rotation += blob.rotationSpeed;

        if (blob.x <= -blob.width / 2 || blob.x >= width - blob.width / 2) {
          blob.vx *= -1;
        }
        if (blob.y <= -blob.height / 2 || blob.y >= height - blob.height / 2) {
          blob.vy *= -1;
        }

        const element = elements[i];
        if (element) {
          element.style.transform = `translate(${blob.x}px, ${blob.y}px) rotate(${blob.rotation}deg)`;
        }
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    initBlobs();
    rafRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      const { width, height } = container.getBoundingClientRect();
      blobsRef.current.forEach(blob => {
        blob.x = Math.min(blob.x, width - blob.width);
        blob.y = Math.min(blob.y, height - blob.height);
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      blobElementsRef.current.forEach(el => el.remove());
    };
  }, [count]);

  const filterId = filterIdRef.current;
  const grainId = grainIdRef.current;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style={{
          position: 'absolute',
          width: 0,
          height: 0,
          overflow: 'hidden'
        }}
      >
        <defs>
          <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="35" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
          <filter id={grainId}>
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves={3} stitchTiles="stitch" />
          </filter>
        </defs>
      </svg>
      <div
        ref={containerRef}
        className={className}
        style={{
          filter: `url(#${filterId})`,
          mixBlendMode: 'screen',
          WebkitFilter: `url(#${filterId})`
        }}
        aria-hidden
      />
      <div
        className={className}
        style={{
          opacity: 0.07,
          filter: `url(#${grainId})`,
          WebkitFilter: `url(#${grainId})`,
          pointerEvents: 'none'
        }}
        aria-hidden
      />
    </>
  );
}
