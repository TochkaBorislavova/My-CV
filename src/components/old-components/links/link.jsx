import React from 'react';

const Link = ({ className, href, title, children }) => (
    <a className={className} href={href} title={title}>
        {title}
        {children}
    </a>
);

export default Link;
