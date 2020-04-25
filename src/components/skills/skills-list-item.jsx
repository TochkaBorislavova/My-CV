import React from 'react';

const SkillsListItem = ({ className, skill }) => (
    <li>
        <span className={className} />
        <em>
            {skill}
        </em>
    </li>
);

export default SkillsListItem;
