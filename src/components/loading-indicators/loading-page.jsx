import './loading-page.scss';

import React from 'react';
import { useGlobalState } from '../../global-state-provider';
import AnimatedPulseCoffeeIntoCodeIcon from '../animated/animated-pulse-coffee-into-code-icon';
import ContinueToCV from '../ctas/continue-to-cv';
import AnimatedProgressBarWithText from '../animated/animated-progress-bar-with-text';

const LoadingPage = () => {
    const { isPageLoading } = useGlobalState();

    const loadingText = (
        <p className="loading-page-text">
            Turning coffee into code
        </p>
    )

    return (
        <section className="loading-page">
            <AnimatedPulseCoffeeIntoCodeIcon className="loading-page-coffee-into-code-icon"/>
            <AnimatedProgressBarWithText text={loadingText} />
            {!isPageLoading && <ContinueToCV />}
        </section>
    )
};

export default LoadingPage;
