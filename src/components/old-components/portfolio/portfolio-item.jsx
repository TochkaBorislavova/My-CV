import './portfolio-item.scss';

import React, { useState } from 'react';
import PortfolioItemHovered from './portfolio-item-hovered';

const PortfolioItem = ({ modalNumber, image, alt }) => {
    const [ hover, setHover ] = useState(false);

    const onMouseOver = () => setHover(true);
    const onMouseOut = () => setHover(false);

    const imageClassName = hover ? 'image-hovered' : '';

    return (
        <div
          className="portfolio-item-wrapper"
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          onClick
        >
            <div className="portfolio-item">
                <a href={modalNumber} title>
                    <img alt={alt} src={image} className={imageClassName} />
                    <PortfolioItemHovered
                      title="SoftUni Projects"
                      description="Web Development"
                      isHovered={hover}
                    />
                </a>
            </div>
        </div>
    );
};

export default PortfolioItem;
