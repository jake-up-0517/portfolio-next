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
      <h1 className="text-5xl font-bold mb-6 mt-10">Projects</h1>
      <div className="flex flex-row justify-between mb-6">
        <div className="card card-compact w-[33%] bg-secondary text-secondary-content shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Argometrics</h2>
            <p>Real time Kubernetes cluster health visualizer</p>
          </div>
          <figure>
            <Image src={argometrics} alt="argometrics logo" />
          </figure>
        </div>
        <div className="card card-compact w-[33%] bg-secondary text-secondary-content shadow-xl">
          <div className="card-body">
            <h2 className="card-title">SpindrPro</h2>
            <p>Tinder-like app that gives users song recommendations</p>
          </div>
          <figure>
            <Image src={placeholder} alt="argometrics logo" />
          </figure>
        </div>
        <div className="card card-compact w-[33%] bg-secondary text-secondary-content shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Jamd</h2>
            <p>
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
