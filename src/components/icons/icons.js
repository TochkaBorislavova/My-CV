import React from 'react';
import SvgIcon from './svg-icon';

import coffeeIcon from '../../assets/icons/coffee-icon.svg';
import codeIcon from '../../assets/icons/code-icon.svg';
import contactCircleIcon from '../../assets/icons/contact-circle-icon.svg';
import bluePlusCircleIcon from '../../assets/icons/blue-plus-circle-icon.svg';
import closeCircleIcon from '../../assets/icons/close-circle-icon.svg';
import codeColorfulIcon from '../../assets/icons/code-colorful-icon.svg';
import cssColorfulIcon from '../../assets/icons/css-colorful-icon.svg';
import jsColorfulIcon from '../../assets/icons/js-colorful-icon.svg';

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
const CodeColorfulIcon = createIcon(codeColorfulIcon);
const CssColorfulIcon = createIcon(cssColorfulIcon);
const JsColorfulIcon = createIcon(jsColorfulIcon);

export {
    CoffeeIcon,
    CodeIcon,
    ContactCircleIcon,
    BluePlusCircleIcon,
    CloseCircleIcon,
    CodeColorfulIcon,
    CssColorfulIcon,
    JsColorfulIcon,
};