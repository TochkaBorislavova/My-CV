import React from 'react';
import ResumeTemplateHeader from './resume-template-header';

const ResumeTemplate = ({ title, children }) => (
    <div className="row education">
        <ResumeTemplateHeader title={title} />
        <div className="nine columns main-col">
            <div className="row item">
                <div className="twelve columns">
                    {children}
                </div>
            </div>
        </div>
    </div>
);

export default ResumeTemplate;
