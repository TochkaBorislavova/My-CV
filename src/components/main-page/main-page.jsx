import './main-page.scss';

import React from 'react';
import HeaderDescriptionWithImage from '../header/header-description-with-image';
import MenuTabs from '../tabs/menu-tabs';

const MainPage = () => {

    return (
        <section className="main-page">
            <HeaderDescriptionWithImage />
            <MenuTabs />
        </section>
    );
};

export default MainPage;
