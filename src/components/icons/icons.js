import React from 'react';
import SvgIcon from './svg-icon';

import coffeeIcon from '../../assets/icons/coffee-icon.svg';
import codeIcon from '../../assets/icons/code-icon.svg';
import contactCircleIcon from '../../assets/icons/contact-circle-icon.svg';
import bluePlusCircleIcon from '../../assets/icons/blue-plus-circle-icon.svg';
import closeCircleIcon from '../../assets/icons/close-circle-icon.svg';

const createIcon = src => props => (
    <SvgIcon
      {...props}
      src={src}
    />
);

const CoffeeIcon = createIcon(coffeeIcon);
const CodeIcon = createIcon(codeIcon);
const ContactCircleIcon = createIcon(contactCircleIcon);
const BluePlusCircleIcon = createIcon(bluePlusCircleIcon);
const CloseCircleIcon = createIcon(closeCircleIcon);

export {
    CoffeeIcon,
    CodeIcon,
    ContactCircleIcon,
    BluePlusCircleIcon,
    CloseCircleIcon,
};