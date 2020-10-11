import './project-tab-content-modal.scss';

import React from 'react';
import Modal from 'react-modal';
import OutsideClickHandler from 'react-outside-click-handler';
import ProjectTabContent from './project-tab-content';

const ProjectTabContentModal = ({ isOpen, name, src, description, onClick, href, technologies }) => (
    <OutsideClickHandler onOutsideClick={onClick}>
        <Modal
          className="project-tab-content-modal"
          isOpen={isOpen}
        >
            <ProjectTabContent
              name={name}
              src={src}
              description={description}
              onClick={onClick}
              href={href}
              technologies={technologies}
            />
        </Modal>
    </OutsideClickHandler>
);

export default ProjectTabContentModal;
