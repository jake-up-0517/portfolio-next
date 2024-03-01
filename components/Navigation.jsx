'use client';

import { Link, animateScroll as scroll } from 'react-scroll';

export default function Navigation() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <ul className="menu menu-horizontal rounded-box">
        <li>
          <a
            onClick={scrollToTop}
            className="text-accent-content text-3xl font-semibold"
          >
            Home
          </a>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={1000}
            className="text-accent-content text-3xl font-semibold"
            offset={-50}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            className="text-accent-content text-3xl font-semibold"
            offset={-50}
          >
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
}
