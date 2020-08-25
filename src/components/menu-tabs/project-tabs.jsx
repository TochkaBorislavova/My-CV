import './project-tabs.scss';

import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

const ProjectTabs = () => (
    <Tabs className="projects-tabs">
        <TabList>
            <Tab>Front End Developer</Tab>
            <Tab>Resourse Designer</Tab>
        </TabList>
        <TabPanel>
            ssfdsf
        </TabPanel>
        <TabPanel>
            ffffffff
        </TabPanel>
    </Tabs>
);

export default ProjectTabs;
