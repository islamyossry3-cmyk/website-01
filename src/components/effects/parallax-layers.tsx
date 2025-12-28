"use client";

import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

const LAYERS_DATA = [
  {
    id: 1,
    name: "Back Layer",
    imgSrc: "https://iili.io/fEh0TAb.gif",
    shadowSrc: "https://iili.io/fEjgDgt.gif",
    speed: -0.5,
    scale: 0.9,
    zIndex: 10,
  },
  {
    id: 2,
    name: "Middle Layer",
    imgSrc: "https://iili.io/fEh0xSe.gif",
    shadowSrc: "https://iili.io/fEh05oQ.gif",
    speed: 0.5,
    scale: 1.0,
    zIndex: 20,
  },
  {
    id: 3,
    name: "Front Layer",
    imgSrc: "https://iili.io/fEh0uNj.gif",
    shadowSrc: "https://iili.io/fEh0ol9.gif",
    speed: 1.5,
    scale: 1.1,
    zIndex: 30,
  },
];

interface LayerData {
  id: number;
  name: string;
  imgSrc: string;
  shadowSrc: string;
  speed: number;
  scale: number;
  zIndex: number;
}

const MouseContext = createContext({ x: 0, y: 0 });

export function ParallaxProvider({ children }: { children: ReactNode }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <MouseContext.Provider value={mousePosition}>
      {children}
    </MouseContext.Provider>
  );
}

function ShadowLayerItem({ layer }: { layer: LayerData }) {
  const mousePos = useContext(MouseContext);
  const moveX = mousePos.x * layer.speed * 40;
  const moveY = mousePos.y * layer.speed * 40;

  return (
    <img
      src={layer.shadowSrc}
      alt=""
      className="absolute inset-0 w-full h-full object-contain pointer-events-none transition-transform duration-100 ease-out will-change-transform"
      style={{
        zIndex: layer.zIndex,
        transform: `translate(${moveX}px, ${moveY}px) scale(${layer.scale})`,
        mixBlendMode: 'multiply',
      }}
    />
  );
}

function ImageLayerItem({ layer }: { layer: LayerData }) {
  const mousePos = useContext(MouseContext);
  const moveX = mousePos.x * layer.speed * 40;
  const moveY = mousePos.y * layer.speed * 40;

  return (
    <img
      src={layer.imgSrc}
      alt=""
      className="absolute inset-0 w-full h-full object-contain pointer-events-none transition-transform duration-100 ease-out will-change-transform"
      style={{
        zIndex: layer.zIndex,
        transform: `translate(${moveX}px, ${moveY}px) scale(${layer.scale})`,
        mixBlendMode: 'normal',
      }}
    />
  );
}

export function ParallaxShadows() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-end pr-6">
      <div className="relative w-full max-w-3xl aspect-square flex items-center justify-center">
        {LAYERS_DATA.map((layer) => (
          <ShadowLayerItem key={`shadow-${layer.id}`} layer={layer} />
        ))}
      </div>
    </div>
  );
}

export function ParallaxImages() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-end pr-6">
      <div className="relative w-full max-w-3xl aspect-square flex items-center justify-center">
        {LAYERS_DATA.map((layer) => (
          <ImageLayerItem key={`img-${layer.id}`} layer={layer} />
        ))}
      </div>
    </div>
  );
}

export function ParallaxLayers() {
  return (
    <>
      <ParallaxShadows />
      <ParallaxImages />
    </>
  );
}
