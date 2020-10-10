import React from 'react';
import AnimatedProgressBar from './animated-progress-bar';

const AnimatedProgressBarWithText = ({ text, numberToIncrementTo }) => (
    <AnimatedProgressBar numberToIncrementTo={numberToIncrementTo}>
        {text}
    </AnimatedProgressBar>
);

export default AnimatedProgressBarWithText;
