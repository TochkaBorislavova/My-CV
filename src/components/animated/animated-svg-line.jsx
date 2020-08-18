import './animated-svg-line.scss';

import React from 'react';

const AnimatedSvgLine = ({ children }) => (
    <section className="animated-svg-line">
        <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
          <rect class="shape" height="60" width="320" />
        </svg>
        <article className="animated-svg-line-text">
            {children}
        </article>
    </section>
);

export default AnimatedSvgLine;
