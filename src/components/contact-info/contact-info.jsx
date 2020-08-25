import './contact-info.scss';

import React from 'react';
import SocialMedia from '../social-media/social-media';

const ContactInfo = () => (
    <section className="contact-info-wrapper">
        <article className="contact-info">
            <p>Contact Info:</p>
            <p>Phone Number: 0882514092</p>
            <p>Email: happy.bozanko@gmail.com</p>
        </article>
        <SocialMedia />
    </section>
);

export default ContactInfo;
