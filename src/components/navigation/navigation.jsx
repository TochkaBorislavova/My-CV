import React from 'react';
import Link from '../links/link';

const smoothScrollClassName = 'smoothscroll';

const Navigation = () => (
  <nav id="nav-wrap">
    <Link
      className="mobile-btn"
      href="#nav-wrap"
      title="Show navigation"
    />
    <Link
      className="mobile-btn"
      href="#"
      title="Hide navigation"
    />
    <ul id="nav" className="nav">
      <li className="current">
        <Link
          className={smoothScrollClassName}
          href="#home"
          title="Home"
        />
      </li>
      <li>
        <Link
          className={smoothScrollClassName}
          href="#about"
          title="About"
        />
      </li>
      <li>
        <Link
          className={smoothScrollClassName}
          href="#resume"
          title="Resume"
        />
      </li>
      <li>
        <Link
          className={smoothScrollClassName}
          href="#portfolio"
          title="Portfolio"
        />
      </li>
    </ul>
  </nav>
);

export default Navigation;