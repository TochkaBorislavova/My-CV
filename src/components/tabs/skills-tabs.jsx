import './skills-tabs.scss';

import React from 'react';
import SkillWithText from '../skills/skill-with-text';

const SkillsTabs = () => (
    <section className="skills-tabs">
        <SkillWithText text="JavaScript" numberToIncrementTo={50} />
        <SkillWithText text="React" numberToIncrementTo={70} />
        <SkillWithText text="Css/Less/Scss" numberToIncrementTo={80} />
        <SkillWithText text="Express" numberToIncrementTo={45} />
        <SkillWithText text="Jquery" numberToIncrementTo={75} />
        <SkillWithText text="C#" numberToIncrementTo={25} />
    </section>
);

export default SkillsTabs;
