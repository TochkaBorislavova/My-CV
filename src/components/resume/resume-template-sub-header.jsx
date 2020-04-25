import React from 'react';

const ResumeTemplateSubHeader = ({ title, info, date }) => (
    <>
        <h3>
            {title}
        </h3>
        <p className="info">
            {info}
            <span>•</span>
            <em className="date">
                {date}
            </em>
        </p>
    </>
);

export default ResumeTemplateSubHeader;
