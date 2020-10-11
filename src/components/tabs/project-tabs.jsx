import './project-tabs.scss';

import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { CodeColorfulIcon, CssColorfulIcon, JsColorfulIcon } from '../icons/icons';
import ProjectTab from './project-tab';

const test = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nostrum, rem inventore saepe tenetur maiores dolore nulla ex corporis minima esse sequi et non eaque itaque impedit aut nisi est.'

const sulsTechnologies = [
    {
        name: 'JavaScript',
        icon: <JsColorfulIcon />,
    },
    {
        name: 'jQuery',
        icon: <CodeColorfulIcon />,
    },
    {
        name: 'Less',
        icon: <CssColorfulIcon />
    }
];

const frontEndProjects = [
    {
        name: 'SoftUni International',
        src: 'https://softuni.org/platform/assets/icons/logo-header.svg',
        href: 'https://softuni.org',
        description: test,
        technologies: [
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
        ],
    },
    {
        name: 'Software University',
        src: 'https://digital.softuni.bg/content/images/svg-logos/software-university-logo.svg',
        href: 'https://softuni.bg',
        description: test,
        technologies: sulsTechnologies,
    },
    {
        name: 'SoftUni Creative',
        src: 'https://digital.softuni.bg/Content/images/svg-logos/creative-logo.svg',
        href: 'https://creative.softuni.bg',
        description: test,
        technologies: sulsTechnologies,
    },
    {
        name: 'SoftUni Digital',
        src: 'https://digital.softuni.bg/Content/images/svg-logos/digital-logo.svg',
        href: 'https://digital.softuni.bg',
        description: test,
        technologies: sulsTechnologies,
    },
    {
        name: 'SoftUni Kids',
        src: 'https://digital.softuni.bg/Content/images/svg-logos/kids-logo.svg',
        href: 'https://kids.softuni.bg',
        description: test,
        technologies: sulsTechnologies,
    },
    {
        name: 'SoftUni Svetlina',
        src: 'https://digital.softuni.bg/Content/images/svg-logos/light-logo.svg',
        href: 'https://svetlina.softuni.bg',
        description: test,
        technologies: sulsTechnologies,
    },
];

const personalProjects = [
    {
        name: 'Personal CV',
        src: 'https://www.flaticon.com/svg/static/icons/svg/1126/1126949.svg',
        href: 'https://bilyanaborislavova.github.io/My-CV',
        description: test,
        technologies: [
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
        ],
    },
    {
        name: 'Contract Automation Tool',
        src: 'https://bilyanaborislavova.github.io/My-CV/images/portfolio/console.jpg',
        description: test,
        technologies: [
            {
                name: 'Express JS',
                icon: <JsColorfulIcon />,
            },
            {
                name: 'Electron JS',
                icon: <CodeColorfulIcon />,
            },
            {
                name: 'Css',
                icon: <CssColorfulIcon />
            }
        ],
    },
];

const ProjectTabs = () => (
    <Tabs className="project-tabs">
        <TabList className="project-tabs-tab-list">
            <Tab>Front End Developer</Tab>
            <Tab>Personal Projects</Tab>
        </TabList>
        <TabPanel>
            {
                frontEndProjects.map(({ name, src, href, description, technologies }) => (
                    <ProjectTab
                      name={name}
                      src={src}
                      href={href}
                      description={description}
                      technologies={technologies}
                    />
                ))
            }
        </TabPanel>
        <TabPanel>
        {
            personalProjects.map(({ name, src, href, description, technologies }) => (
                <ProjectTab
                  name={name}
                  src={src}
                  href={href}
                  description={description}
                  technologies={technologies}
                />
            ))
        }
        </TabPanel>
    </Tabs>
); 

export default ProjectTabs;
