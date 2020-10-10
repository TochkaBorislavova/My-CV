import './project-tab.scss';

import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { BluePlusCircleIcon } from '../icons/icons';
import ProjectTabContent from './project-tab-content';

const ProjectTab = ({ src, name }) => {
    const [ isProjectTabOpened, setIsProjectTabOpened ] = useState(false);

    const closeProjectTab = () => setIsProjectTabOpened(false);
    
    return (
        <OutsideClickHandler onOutsideClick={closeProjectTab}>
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
                    <BluePlusCircleIcon />
                </article>
            </section>
            {isProjectTabOpened && <ProjectTabContent />}
        </OutsideClickHandler>
    );
};

export default ProjectTab;

