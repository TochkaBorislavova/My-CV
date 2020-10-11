import './project-tab-content.scss';

import React from 'react';
import { CloseCircleIcon } from '../icons/icons';
import LabelWithIcon from '../labels/label-with-icon';

const ProjectTabContent = ({ src, name, description, onClick, href, technologies }) => (
    <article className="project-tab-content">
        <button
          className="project-tab-content-close-btn"
          onClick={onClick}
        >
            <CloseCircleIcon />
        </button>
        <a className="project-tab-conten-image-link" href={href}>
            <img
                className="project-tab-content-image"
                src={src}
                alt={name}
            />
        </a>
        <section className="project-tab-content-info">
            <h4 className="project-tab-content-name">
                {name}
            </h4>
            <p className="project-tab-content-description">
                {description}
            </p>
        </section>
        <section className="project-tab-content-used-technologies">
            <p className="project-tab-content-used-technologies-text">
                Technologies used:
            </p>
            <ul className="project-tab-content-used-technologies-list">
                {
                    technologies.map(({ name, icon }) => (
                        <li className="project-tab-content-used-technologies-list-item">
                            <LabelWithIcon
                              text={name}
                              icon={icon}
                            />
                        </li>
                    ))
                }
            </ul>
        </section>
    </article>
);

export default ProjectTabContent;
