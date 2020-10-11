import './project-tabs.scss';

import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import ProjectTab from './project-tab';
import { CodeColorfulIcon, CssColorfulIcon, JsColorfulIcon } from '../icons/icons';

const test = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nostrum, rem inventore saepe tenetur maiores dolore nulla ex corporis minima esse sequi et non eaque itaque impedit aut nisi est.'

const technologies = [
    {
        name: 'JavaScript',
        icon: <JsColorfulIcon />,
    },
    {
        name: 'React',
        icon: <CodeColorfulIcon />,
    },
    {
        name: 'Scss',
        icon: <CssColorfulIcon />
    }
];

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
              href="https://softuni.org"
              description={test}
              technologies={technologies}
            />
        </TabPanel>
        <TabPanel>
            ffffffff
        </TabPanel>
    </Tabs>
); 

export default ProjectTabs;
