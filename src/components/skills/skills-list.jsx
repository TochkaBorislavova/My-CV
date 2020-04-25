import React from 'react';
import SkillsListItem from './skills-list-item';

const skills = [
    {
        className: 'bar-expand photoshop',
        skill: 'JavaScript',
    },
    {
        className: 'bar-expand illustrator',
        skill: 'React',
    },
    {
        className: 'bar-expand wordpress',
        skill: 'Angular',
    },
    {
        className: 'bar-expand illustrator',
        skill: 'Express',
    },
    {
        className: 'bar-expand html5',
        skill: 'HTML5',
    },
    {
        className: 'bar-expand css',
        skill: 'Css',
    },
    {
        className: 'bar-expand jquery',
        skill: 'jQuery',
    },
    {
        className: 'bar-expand css',
        skill: 'C#',
    },
];

const SkillsList = () => (
    <ul className="skills">
        {
            skills.map(({ className, skill }) => (
                <SkillsListItem
                  className={className}
                  skill={skill}
                />
            ))
        }
    </ul>
);

export default SkillsList;
