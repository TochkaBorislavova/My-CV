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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum deserunt laborum fugiat ipsa asperiores nostrum molestiae corrupti natus quam laudantium, voluptatibus nulla deleniti cum omnis animi? Officiis dolores doloribus officia?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga odit architecto voluptate, dignissimos, consectetur dolore voluptatibus ex repellat ad velit atque aliquid iure corrupti dicta perferendis quos? Sint, repellat ad.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error adipisci in aperiam ad natus atque beatae tenetur perferendis illo maiores officiis repellat veritatis, assumenda, nam doloribus maxime impedit nulla explicabo.
            </p>
            <ContactCta>
                <ContactInfo />
            </ContactCta>
        </section>
    </header>
);

export default HeaderDescriptionWithImage;
