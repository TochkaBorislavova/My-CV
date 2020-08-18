import './loading-page.scss';

import React from 'react';
import { useGlobalState } from '../../global-state-provider';
import AnimatedPulseCoffeeIntoCodeIcon from '../animated/animated-pulse-coffee-into-code-icon';
import AnimatedProgressBar from '../animated/animated-progress-bar';
import ContinueToCV from '../ctas/continue-to-cv';

const LoadingPage = () => {
    const { isPageLoading } = useGlobalState();

    return (
        <section className="loading-page">
            <AnimatedPulseCoffeeIntoCodeIcon className="loading-page-coffee-into-code-icon"/>
            <AnimatedProgressBar />
            {!isPageLoading && <ContinueToCV />}
        </section>
    )
};

export default LoadingPage;
