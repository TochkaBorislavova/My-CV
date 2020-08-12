import React from 'react';

const SocialMediaLink = ({ href, iClassName }) => (
    <li>
        <a
          href={href}
          target="_blank"
        >
            <i className={iClassName} />
        </a>
    </li>
);

export default SocialMediaLink;
