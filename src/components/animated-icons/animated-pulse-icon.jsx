import './animated-pulse-icon.scss';

import React from 'react';

const animatedPulseIconClassName = 'animated-pulse-icon';

const AnimatedPulseIcon = ({ className, children }) => (
    <article className={`${animatedPulseIconClassName} ${className}`}>
        {children}
    </article>
);

export default AnimatedPulseIcon;
