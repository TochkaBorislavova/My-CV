import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { ContactCircleIcon } from '../icons/icons';

const ContactCta = ({ children }) => {
    const [ isContextSectionOpened, setIsContextSectionOpened ] = useState(false);

    const toggleContextSection = () => setIsContextSectionOpened(!isContextSectionOpened);

    const closeContextSection = () => setIsContextSectionOpened(false);

    return (
        <OutsideClickHandler onOutsideClick={closeContextSection}>
            <button
              className="contact-cta"
              onClick={toggleContextSection}
            >
                <ContactCircleIcon className="contact-cta-icon" />
            </button>
            {isContextSectionOpened && children}
        </OutsideClickHandler>
    );
};

export default ContactCta;
