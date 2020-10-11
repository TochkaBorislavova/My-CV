import './skill-with-text.scss';

import React from 'react';
import AnimatedProgressBar from '../animated/animated-progress-bar';

const SkillWithText = ({ text, numberToIncrementTo }) => (
    <AnimatedProgressBar
      className="skill-with-text"
      strokeColor='#313131'
      strokeWidth='3'
      numberToIncrementTo={numberToIncrementTo}
      timeoutInMs={15}
      shouldShowPercentage={false}
    >
        {text}
    </AnimatedProgressBar>
);

export default SkillWithText;
