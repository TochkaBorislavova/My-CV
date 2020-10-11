import './certification-diplomas.scss';

import React from 'react';
import CertificationDiploma from './certification-diploma';

const CertificationDiplomas = () => (
    <article className="certification-diplomas">
        <h4 className="certification-diplomas-title">
            Diplomas:
        </h4>
        <CertificationDiploma
          name="JavaScript Web Developer"
          href="https://softuni.bg/certificates/details/66733/b14e4f2f"
          src="https://i.ibb.co/WfrFV2k/diploma.png"
        />
    </article>
);

export default CertificationDiplomas;
