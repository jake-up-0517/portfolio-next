'use client';

import { useEffect, useRef, useState } from 'react';
import anime from 'animejs/lib/anime.es.js';
import Image from 'next/image';
import profilePic from '../public/IMG_1184.jpeg';

export default function Home() {
  // const [screenSize, setScreenSize] = useState({
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  // });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const bgGradient = (e) => {
    const bg = document.getElementById('hero');
    const rect = bg.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;
    bg.style.setProperty('--mouse-x', `${x}px`);
    bg.style.setProperty('--mouse-y', `${y}px`);
    setMousePos({ x: x, y: y });
  };

  useEffect(() => {
    const name = document.getElementById('name');
    name.innerHTML = name.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    const title = document.getElementById('title');
    title.innerHTML = title.textContent.replace(
      /\S/g,
      "<span class='letter2'>$&</span>"
    );

    anime
      .timeline({ loop: false })
      .add({
        // name
        targets: '.letter',
        // scale: [4, 1],
        // opacity: [0, 1],
        // translateZ: 0,
        // easing: 'easeOutExpo',
        translateY: [-40, 0],
        duration: 950,
        delay: anime.stagger(100),
      })
      .add(
        {
          // title
          targets: '.letter2',
          scale: [4, 1],
          opacity: [0, 1],
          translateZ: 0,
          easing: 'easeOutExpo',
          duration: 950,
          delay: anime.stagger(100),
        },
        '-=700'
      )
      .add(
        {
          targets: '#desc',
          // translateY: [1500, 0],
          opacity: [0, 1],
          // easing: 'spring(1, 80, 10, 0)',
          // easing: 'linear',
        },
        '-=700'
      )
      .add(
        {
          targets: '#pic',
          // translateX: [-1500, 0],
          // opacity: [0, 1],
          // easing: 'spring(1, 80, 10, 0)',
          // easing: 'linear',
        },
        '-=700'
      );
  }, []);

  return (
    <div
      id="hero"
      className="hero min-h-screen bg-base-200 relative"
      onMouseMove={bgGradient}
    >
      <div>
        <div className="hero-content flex-col justify-center items-center md:flex-row">
          <Image
            id="pic"
            src={profilePic}
            className="max-w-xs md:max-w-sm rounded-lg shadow-2xl order-2 md:order-1"
            alt="profile picture"
            priority
          />
          <div className="flex flex-col text-center md:text-left order-1 md:order-2">
            <h1
              id="name"
              className="text-7xl font-bold text-primary mb-5 md:mb-1"
            >
              Jake Crawford
            </h1>
            <h2 id="title" className="text-5xl font-bold text-secondary">
              Software Developer
            </h2>
            <p id="desc" className="py-6 text-xl">
              I am a skilled software developer, an empathetic team member, and
              a life-long learner. I am always working to expand and strengthen
              my skill sets, whether it be in programming, in music, or in the
              kitchen. Check out my work on{' '}
              <a
                className="link link-accent"
                href="https://github.com/jake-up-0517"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
