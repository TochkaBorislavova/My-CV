import React from 'react';
import ResumeTemplate from './resume-template';
import ResumeTemplateSubHeader from './resume-template-sub-header';
import EducationDiploma from '../education/education-diploma';
import EducationCourses from '../education/education-courses';

const ResumeEducation = () => (
    <ResumeTemplate
      title="Education"
    >
      <ResumeTemplateSubHeader
          title="Software University"
          info="Software Engineering"
          date="2017 - Present"
        />
        <EducationDiploma />
        <EducationCourses />
    </ResumeTemplate>
);

export default ResumeEducation;
