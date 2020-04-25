import React from 'react';
import Link from '../links/link';

const smoothScrollClassName = 'smoothscroll';

const navigationLinks = [
  {
    liClassName: 'current',
    className: smoothScrollClassName,
    href: '#home',
    title: 'Home',
  },
  {
    liClassName: '',
    className: smoothScrollClassName,
    href: '#about',
    title: 'About',
  },
  {
    liClassName: '',
    className: smoothScrollClassName,
    href: '#resume',
    title: 'Resume',
  },
  {
    liClassName: '',
    className: smoothScrollClassName,
    href: '#portfolio',
    title: 'Portfolio',
  },
]

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
        {
          navigationLinks.map(({ liClassName, className, href, title }) => (
            <li className={liClassName} key={title}>
              <Link
                className={className}
                href={href}
                title={title}
              />
            </li>
          ))
        }
    </ul>
  </nav>
);

export default Navigation;