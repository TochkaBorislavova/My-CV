import './certification-diploma.scss';

import React from 'react';

const CertificationDiploma = ({ name, href, src, alt }) => (
    <section className="certification-diploma">
        <h5 className="certification-diploma-title">
            <a
              href={href}
              rel="noopener noreferrer"
              target="_blank"
            >
                {name}
            </a>
        </h5>
        <img
          className="certification-diploma-image"
          src={src}
          alt={alt}
        />
    </section>
);

export default CertificationDiploma;
