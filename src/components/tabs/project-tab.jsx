import './project-tab.scss';

import React, { useState } from 'react';
import { BluePlusCircleIcon } from '../icons/icons';
import ProjectTabContentModal from './project-tab-content-modal';

const ProjectTab = ({ src, name, description, href, technologies }) => {
    const [ isProjectTabOpened, setIsProjectTabOpened ] = useState(false);

    const onClickHandler = () => setIsProjectTabOpened(!isProjectTabOpened);

    const projectTabContentModal = (
        <ProjectTabContentModal
          isOpen={isProjectTabOpened}
          onClick={onClickHandler}
          name={name}
          src={src}
          href={href}
          description={description}
          technologies={technologies}
        />
    );

    return (
        <>
            <section className="project-tab">
                <img
                  className="project-tab-logo"
                  src={src}
                  alt={name}
                />
                <article className="project-tab-info">
                    <h3 className="project-tab-info-name">
                        {name}
                    </h3>
                    <button
                      className="project-tab-info-trigger"
                      onClick={onClickHandler}
                    >
                        <BluePlusCircleIcon />
                    </button>
                </article>
            </section>
            {isProjectTabOpened && projectTabContentModal}
        </>
    );
};

export default ProjectTab;

