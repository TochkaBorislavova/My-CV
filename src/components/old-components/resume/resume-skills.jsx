import React from 'react';
import ResumeTemplate from './resume-template';
import SkillsList from '../skills/skills-list';

const ResumeSkills = () => (
    <ResumeTemplate
      title="Skills"
    >
        <div className="bars">
            <SkillsList />
        </div>
    </ResumeTemplate>
);

export default ResumeSkills;
