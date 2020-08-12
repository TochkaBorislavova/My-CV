import React from 'react';
import AnimatedPulseIcon from './animated-pulse-icon';
import { CoffeeIcon, CodeIcon } from '../icons/icons';

const AnimatedPulseCoffeeIntoCodeIcon = ({ className }) => (
    <AnimatedPulseIcon className={className}>
        <div className="coffee-icon">
            <CoffeeIcon />
        </div>
        <div className="code-icon">
            <CodeIcon />
        </div>
    </AnimatedPulseIcon>
);

export default AnimatedPulseCoffeeIntoCodeIcon;
