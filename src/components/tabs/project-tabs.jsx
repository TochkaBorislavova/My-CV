import './project-tabs.scss';

import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import ProjectTab from './project-tab';

const ProjectTabs = () => (
    <Tabs className="project-tabs">
        <TabList className="project-tabs-tab-list">
            <Tab>Front End Developer</Tab>
            <Tab>Resourse Designer</Tab>
            <Tab>Personal Projects</Tab>
        </TabList>
        <TabPanel>
            <ProjectTab
              name="SoftUni International"
              src="https://softuni.org/platform/assets/icons/logo-header.svg"
            />
        </TabPanel>
        <TabPanel>
            ffffffff
        </TabPanel>
    </Tabs>
); 

export default ProjectTabs;
