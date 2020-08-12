import React from 'react';
import { ReactSVG } from 'react-svg';

const SvgIcon = ({ className, ...props }) => (
    <ReactSVG
      {...props}
      className={`svg-icon ${className}`}
    />   
);

export default SvgIcon;
