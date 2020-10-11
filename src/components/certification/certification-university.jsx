import './certification-university.scss';

import React from 'react';

const CertificationUniversity = ({ name, degree, timespan }) => (
    <article className="certification-university">
        <h3 className="certification-university-name">
            {name}
        </h3>
        <p className="certification-university-degree">
            {degree}
            <em className="certification-university-degree-timespan">
                {timespan}
            </em>
        </p>
    </article>
);

export default CertificationUniversity;
