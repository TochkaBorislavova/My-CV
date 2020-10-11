import './project-tab-content.scss';

import React from 'react';
import { CloseCircleIcon } from '../icons/icons';

const ProjectTabContent = ({ src, name, description, onClick }) => (
    <article className="project-tab-content">
        <button
          className="project-tab-content-close-btn"
          onClick={onClick}
        >
            <CloseCircleIcon />
        </button>
        <img
            className="project-tab-content-image"
            src={src}
            alt={name}
        />
        <h4 className="project-tab-content-name">
            {name}
        </h4>
        <p className="project-tab-content-description">
            {description}
        </p>
        <section className="project-tab-content-used-technologies">
            <ul className="project-tab-content-used-technologies-list">
                <li className="project-tab-content-used-technologies-list-item">
                    React
                </li>
                <li className="project-tab-content-used-technologies-list-item">
                    Javascript
                </li>
                <li className="project-tab-content-used-technologies-list-item">
                    Scss
                </li>
            </ul>
        </section>
    </article>
);

export default ProjectTabContent;
