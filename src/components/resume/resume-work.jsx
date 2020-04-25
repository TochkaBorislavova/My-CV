import React from 'react';
import ResumeTemplate from './resume-template';
import ResumeTemplateSubHeader from './resume-template-sub-header';

const ResumeWork = () => (
    <ResumeTemplate
      title="Work"
    >
        <ResumeTemplateSubHeader
          title="Software University Trainee"
          info="Resource Designer"
          date="Feb 2019 - July 2019"
        />
        <ResumeTemplateSubHeader
          title="Front End Web Developer"
          info="Junior Front End Developer"
          date="Sep 2019 - Present"
        />
    </ResumeTemplate>
);

export default ResumeWork;
