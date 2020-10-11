import './animated-progress-bar.scss';

import React, { useEffect, useState } from 'react';
import { Line } from 'rc-progress';
import { useGlobalState } from '../../global-state-provider';
import { increaseNumber } from '../../utils/func-utils';

const NUMBER_TO_INCREMENT_WITH = 1;
const TIMEOUT_IN_MS = 75;
const MAX_NUMBER_TO_INCREMENT_TO = 100;
const DEFAULT_STROKE_COLOR = '#19f6e8';
const DEFAULT_STROKE_WIDTH = '1';

const AnimatedProgressBar = ({
    children,
    numberToIncrementTo,
    timeoutInMs = TIMEOUT_IN_MS,
    strokeColor = DEFAULT_STROKE_COLOR,
    strokeWidth = DEFAULT_STROKE_WIDTH,
    shouldShowPercentage,
    className = '',
}) => {
    const { setIsPageLoading } = useGlobalState();
    const [ percent, setPercent ] = useState(0);

    const maxNumberToIncrementTo = numberToIncrementTo
        ? numberToIncrementTo
        : MAX_NUMBER_TO_INCREMENT_TO;

    useEffect(() => {
        increaseNumber(percent, NUMBER_TO_INCREMENT_WITH, setPercent, timeoutInMs, maxNumberToIncrementTo);

        if (percent === maxNumberToIncrementTo) {
            setIsPageLoading(false);
        }
    }, [ percent ]);

    const percentageText = (
        shouldShowPercentage && <p className="animated-progress-bar-content">
            {`${percent}%`}
        </p>
    );

    return (
        <section className={`animated-progress-bar ${className}`}>
            <article className="animated-progress-bar-content-wrapper">
                {children}
                {percentageText}
            </article>
            <Line
              percent={percent}
              strokeColor={strokeColor}
              strokeWidth={strokeWidth}
              trailWidth={strokeWidth}
            />
        </section>
    );
};

export default AnimatedProgressBar;
