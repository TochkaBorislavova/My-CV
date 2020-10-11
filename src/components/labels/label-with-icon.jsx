import './label-with-icon.scss';

import React from 'react';

const LabelWithIcon = ({ icon, text }) => (
    <p className="label-with-icon">
        {icon}
        <span className="label-with-icon-text">
            {text}
        </span>
    </p>
);

export default LabelWithIcon;
