import './project-tab.scss';

import React, { useState } from 'react';
import { BluePlusCircleIcon } from '../icons/icons';
import ProjectTabContentModal from './project-tab-content-modal';

const ProjectTab = ({ src, name }) => {
    const [ isProjectTabOpened, setIsProjectTabOpened ] = useState(false);

    const onClickHandler = () => setIsProjectTabOpened(!isProjectTabOpened);

    const projectTabContentModal = (
        <ProjectTabContentModal
          isOpen={isProjectTabOpened}
          onClick={onClickHandler}
        />
    );

    return (
        <>
            <section className="project-tab" onClick={onClickHandler}>
                <img
                  className="project-tab-logo"
                  src={src}
                  alt={name}
                />
                <article className="project-tab-info">
                    <h3 className="project-tab-info-name">
                        {name}
                    </h3>
                    <BluePlusCircleIcon />
                </article>
            </section>
            {isProjectTabOpened && projectTabContentModal}
        </>
    );
};

export default ProjectTab;

