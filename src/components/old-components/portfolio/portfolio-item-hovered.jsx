import './portfolio-item-hovered.scss';

import React, { useState, useEffect } from 'react';

const PortfolioItemHovered = ({ title, description, isHovered }) => {
    const [ hoverClassName, setHoverClassName ] = useState('');

    const combinedWrapperClassName = `portfolio-item-description-wrapper ${hoverClassName}`;

    useEffect(() => {
        if (isHovered) {
            setHoverClassName('hovered')
        } else {
            setHoverClassName('')
        }
    }, [ isHovered ]);
    
    return (
        <div className={combinedWrapperClassName}>
            <div className="portfolio-item-description">
                <h5 className="portfolio-item-title">
                    {title}
                </h5>
                <p className="portfolio-item-paragraph">
                    {description}
                </p>
            </div>
            <div className="link-icon">
                <i className="icon-plus" />
            </div>
        </div>
    );
};

export default PortfolioItemHovered;
