import './animated-progress-bar.scss';

import React, { useEffect, useState } from 'react';
import { Line } from 'rc-progress';

const AnimatedProgressBar = () => {
    const [ percent, setPercent ] = useState(0);

    const increasePercent = () => {
        const updatedPercent = percent + 1;

        const timeout = setTimeout(
            () => setPercent(updatedPercent),
            100,
        );
    
        if (updatedPercent > 100) {
            return clearTimeout(timeout);
        }
    };

    useEffect(() => {
        increasePercent();
    }, [ percent ]);

    return (
        <section className="animated-progress-bar">
            <article className="animated-progress-bar-content">
                <p className="animated-progress-bar-turn-code-into-coffee">
                    {`Turning coffee into code.`}
                </p>
                <p className="animated-progress-bar-turn-code-into-coffee-percentage">
                    {`${percent}%`}
                </p>
            </article>
            <Line strokeWidth="1" percent={percent} />
        </section>
    );
};

export default AnimatedProgressBar;
