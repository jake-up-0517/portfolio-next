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

  // useEffect(() => {
  //   const name = document.getElementById('name');
  //   name.innerHTML = name.textContent.replace(
  //     /\S/g,
  //     "<span class='letter'>$&</span>"
  //   );

  //   const title = document.getElementById('title');
  //   title.innerHTML = title.textContent.replace(
  //     /\S/g,
  //     "<span class='letter2'>$&</span>"
  //   );

  //   anime
  //     .timeline({ loop: false })
  //     .add({
  //       // name
  //       targets: '.letter',
  //       translateY: [-40, 0],
  //       duration: 950,
  //       delay: anime.stagger(100),
  //     })
  //     .add(
  //       {
  //         // title
  //         targets: '.letter2',
  //         scale: [4, 1],
  //         opacity: [0, 1],
  //         translateZ: 0,
  //         easing: 'easeOutExpo',
  //         duration: 950,
  //         delay: anime.stagger(100),
  //       },
  //       '-=700'
  //     )
  //     .add(
  //       {
  //         targets: '#desc',
  //         opacity: [0, 1],
  //       },
  //       '-=700'
  //     );
  // .add(
  //   {
  //     targets: '#pic',
  //     translateX: [-1500, 0],
  //     opacity: [0, 1],
  //     easing: 'spring(1, 80, 10, 0)',
  //     easing: 'linear',
  //   },
  //   '-=700'
  // );
  // }, []);

  return (
    <div onMouseMove={bgGradient}>
      <Hero />
      <About />
      {/* <Projects /> */}
    </div>
  );
}
