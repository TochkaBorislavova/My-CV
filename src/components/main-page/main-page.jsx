import './main-page.scss';

import React from 'react';
import HeaderDescriptionWithImage from '../header/header-description-with-image';
import MenuTabs from '../menu-tabs/menu-tabs';

const MainPage = () => {

    return (
        <main className="main-page">
            <HeaderDescriptionWithImage />
            <MenuTabs />
        </main>
    );
};

export default MainPage;
