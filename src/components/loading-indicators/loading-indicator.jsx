import './loading-indicator.scss';

import React from 'react';
import AnimatedPulseCoffeeIntoCodeIcon from '../animated-icons/animated-pulse-coffee-into-code-icon';

const LoadingIndicator = () => {

    return (
        <section className="loading-indicator">
            <AnimatedPulseCoffeeIntoCodeIcon className="loading-indicator-coffee-into-code-icon"/>
        </section>
    )
};

export default LoadingIndicator;
