import React from 'react';
import { useGlobalState } from './global-state-provider';
import LoadingPage from './components/loading-indicators/loading-page';
import MainPage from './components/main-page/main-page';

const PageContentWrapper = () => {
    const { shouldDisplayLoadingPage } = useGlobalState();

    const content = shouldDisplayLoadingPage
      ? <LoadingPage />
      : <MainPage />
    
    return (
        <main className="page-content-wrapper">
            {content}
        </main>
    )
};

export default PageContentWrapper;
