import './animated-progress-bar.scss';

import React, { useEffect, useState } from 'react';
import { Line } from 'rc-progress';
import { useGlobalState } from '../../global-state-provider';
import { increaseNumber } from '../../utils/func-utils';

const NUMBER_TO_INCREMENT_WITH = 1;
const TIMEOUT_IN_MS = 75;
const MAX_NUMBER_TO_INCREMENT_TO = 100;

const AnimatedProgressBar = () => {
    const { setIsPageLoading } = useGlobalState();
    const [ percent, setPercent ] = useState(0);

    useEffect(() => {
        increaseNumber(percent, NUMBER_TO_INCREMENT_WITH, setPercent, TIMEOUT_IN_MS, MAX_NUMBER_TO_INCREMENT_TO);

        if (percent === MAX_NUMBER_TO_INCREMENT_TO) {
            setIsPageLoading(false);
        }
    }, [ percent ]);

    return (
        <section className="animated-progress-bar">
            <article className="animated-progress-bar-content">
                <p className={`animated-progress-bar-turn-code-into-coffee`}>
                    {`Turning coffee into code.`}
                </p>
                <p className="animated-progress-bar-turn-code-into-coffee-percentage">
                    {`${percent}%`}
                </p>
            </article>
            <Line strokeColor="#19f6e8" strokeWidth="1" percent={percent} />
        </section>
    );
};

export default AnimatedProgressBar;
