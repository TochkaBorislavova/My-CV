import './menu-tabs.scss';

import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import Skills from '../skills/skills';
import Certification from '../certification/certification';
import ProjectTabs from './project-tabs';

const MenuTabs = () => (
    <Tabs className="menu-tabs">
        <TabList className="menu-tabs-tab-list">
            <Tab>Projects</Tab>
            <Tab>Skills</Tab>
            <Tab>Certification</Tab>
        </TabList>
        <TabPanel>
            <ProjectTabs />
        </TabPanel>
        <TabPanel>
            <Skills />
        </TabPanel>
        <TabPanel>
            <Certification />
        </TabPanel>
    </Tabs>
);

export default MenuTabs;
