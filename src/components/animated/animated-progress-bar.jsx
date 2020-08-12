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
        <Line strokeWidth="4" percent={percent} />
    );
};

export default AnimatedProgressBar;
