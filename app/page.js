'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap/gsap-core';
import { CSSPlugin } from 'gsap';
import Image from 'next/image';
import profilePic from '../public/293584329_10229461790197223_1452290588783527531_n.jpeg';

export default function Home() {
  const container = useRef();
  const tl = useRef();
  gsap.registerPlugin(CSSPlugin);

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .from('#name', { duration: 2.0, ease: 'power2.out', y: -500 })
        .from('#title', { duration: 2.0, ease: 'power2.out', x: -1000 }, '-=1')
        .from('#desc', { duration: 2.0, ease: 'power2.out', y: 500 }, '-=1')
        .from('#pic', { duration: 2.0, ease: 'power2.out', x: -500 }, '-=1');
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div ref={container}>
        <div className="hero-content flex-col justify-center items-center md:flex-row">
          <Image
            id="pic"
            src={profilePic}
            className="max-w-xs lg:max-w-sm rounded-lg shadow-2xl"
            alt="profile picture"
            priority
          />
          <div className="flex flex-col justify-center text-center md:text-left">
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
              I am a developer with a passion for creating fun, accesible,
              intuitive, and beautiful user experiences. Check out my work on{' '}
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
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
