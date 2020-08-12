import './loading-indicator.scss';

import React from 'react';
import { Line } from 'rc-progress';
import AnimatedPulseCoffeeIntoCodeIcon from '../animated/animated-pulse-coffee-into-code-icon';
import AnimatedProgressBar from '../animated/animated-progress-bar';

const LoadingIndicator = () => {

    return (
        <section className="loading-indicator">
            <AnimatedPulseCoffeeIntoCodeIcon className="loading-indicator-coffee-into-code-icon"/>
            <AnimatedProgressBar />
        </section>
    )
};

export default LoadingIndicator;
