import React from 'react';
import SocialMediaLink from './social-media-link';

const socialMediaLinks = [
    {
        id: 1,
        href: 'https://www.facebook.com/bilqna.borislavova.9',
        iClassName: 'fa fa-facebook',
    },
    {
        id: 2,
        href: 'https://github.com/TochkaBorislavova',
        iClassName: 'fa fa-github',
    },
    {
        id: 3,
        href: 'https://www.linkedin.com/in/bilyana-borislavova-1ab688168/',
        iClassName: 'fa fa-linkedin',
    },
    {
        id: 4,
        href: 'https://www.instagram.com/toch.borislavova/',
        iClassName: 'fa fa-instagram',
    },
]

const SocialMediaLinks = ({ className }) => (
    <ul className={className}>
        {
            socialMediaLinks.map(({ id, href, iClassName }) => (
                <SocialMediaLink
                  key={id}
                  href={href}
                  iClassName={iClassName}
                />
            ))
        }
    </ul>
);

export default SocialMediaLinks;
