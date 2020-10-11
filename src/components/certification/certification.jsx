import './certification.scss';

import React from 'react';
import CertificationDiplomas from './certification-diplomas';
import CertificationUniversity from './certification-university';

const Certification = () => (
    <section className="certification">
        <CertificationUniversity
          name="Software University"
          degree="Software Engineering"
          timespan="2017 - 2019"
        />
        <CertificationDiplomas />
    </section>
);

export default Certification;
