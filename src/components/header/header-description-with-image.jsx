import './header-description-with-image.scss';

import React from 'react';
import ContactCta from '../ctas/contact-cta';
import ContactInfo from '../contact-info/contact-info';

// const imageSrc = 'https://instagram.fsof9-1.fna.fbcdn.net/v/t51.2885-15/e35/109568396_162785035386492_3555223871628390635_n.jpg?_nc_ht=instagram.fsof9-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=PxNYZdwBP-EAX_uVLRD&oh=a0f6fa51a098033853d333a01337c62a&oe=5F64770D';
const imageSrc = 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png';

const HeaderDescriptionWithImage = () => (
    <header className="header-desription-with-image">
        <img
            alt="Yo me"
            className="header-image"
            src={imageSrc}
        />
        <section className="header-description-wrapper">
            <h2 className="header-full-name">
                Bilyana Borislavova
            </h2>
            <p className="header-description">
                I am a highly-motivated and ambitious person who is always keen on obtaining new skills and enhancing already existing ones. I am also constantly eager to accept various challenges for both self-growth and career development in order to keep improving myself every day. Considering that I am passionate about travelling, my goal is to become a full-stack software developer with flexible working hours so that I can travel the world and produce quality software at the same time.
            </p>
            <ContactCta>
                <ContactInfo />
            </ContactCta>
        </section>
    </header>
);

export default HeaderDescriptionWithImage;
