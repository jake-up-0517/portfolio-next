import Image from 'next/image';
import profilePic from '../public/IMG_1185.jpeg';

export default function Hero() {
  return (
    <div id="hero" className="hero w-screen h-screen bg-base-200">
      <div className="hero-content flex-col justify-center items-center md:flex-row">
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
            I&apos;m a developer. Also a musician. Also a chef. Oh yea I almost
            forget I was also an accountant at one point. I love my dog and
            watching Premier League soccer (or football for the folks outside
            the US).
          </p>
        </div>
        <Image
          id="pic"
          src={profilePic}
          className="max-w-xs md:max-w-sm rounded-full shadow-2xl order-2"
          alt="profile picture"
          priority
        />
      </div>
    </div>
  );
}
