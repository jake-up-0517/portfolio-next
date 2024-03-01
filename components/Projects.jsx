import { Element } from 'react-scroll';
import Image from 'next/image';
import argometrics from '../public/argo-logo-full.png';
import placeholder from '../public/placeholder.png';

export default function Projects() {
  return (
    <Element
      name="projects"
      className="w-screen h-full bg-primary text-primary-content px-6"
    >
      <h1 className="text-7xl font-bold mb-12 mt-10">Projects</h1>
      <div className="flex flex-row justify-between mb-6">
        <div className="card card-compact w-[33%] bg-secondary text-secondary-content shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-3xl">Argometrics</h2>
            <p className="text-xl">
              Real time Kubernetes cluster health visualizer
            </p>
          </div>
          <figure>
            <Image src={argometrics} alt="argometrics logo" />
          </figure>
        </div>
        <div className="card card-compact w-[33%] bg-secondary text-secondary-content shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-3xl">SpindrPro</h2>
            <p className="text-xl">
              Tinder-like app that gives users song recommendations based on
              genre input
            </p>
          </div>
          <figure>
            <Image src={placeholder} alt="argometrics logo" />
          </figure>
        </div>
        <div className="card card-compact w-[33%] bg-secondary text-secondary-content shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-3xl">Jamd</h2>
            <p className="text-xl">
              A mobile app that allows users to locate and ping nearby friends
            </p>
          </div>
          <figure>
            <Image src={placeholder} alt="argometrics logo" />
          </figure>
        </div>
      </div>
    </Element>
  );
}
