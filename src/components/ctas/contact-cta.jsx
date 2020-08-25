import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { ContactCircleIcon } from '../icons/icons';

const ContactInfo = ({ children }) => {
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
            {isContextSectionOpened && children}
        </button>
      </OutsideClickHandler>
    );
};

export default ContactInfo;
