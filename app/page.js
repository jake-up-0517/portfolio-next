'use client';

import { useEffect, useRef, useState } from 'react';
import anime from 'animejs/lib/anime.es.js';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';

export default function Home() {
  const bgGradient = (e) => {
    const bg = document.getElementById('hero');
    const rect = bg.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;
    bg.style.setProperty('--mouse-x', `${x}px`);
    bg.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div className="flex flex-col" onMouseMove={bgGradient}>
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
