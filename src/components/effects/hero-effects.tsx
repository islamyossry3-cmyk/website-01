'use client';

import { ParticleField } from './particle-field';
import { MouseGlow } from './mouse-glow';

export function HeroEffects() {
  return (
    <>
      <MouseGlow />
      <ParticleField className="absolute inset-0 opacity-40" />
    </>
  );
}
