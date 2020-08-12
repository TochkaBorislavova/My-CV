import './app.scss';

import React, { useState, useEffect } from 'react';
import LoadingIndicator from './components/loading-indicators/loading-indicator';

const isLoadingClassName = 'is-loading-page';
const cvContentWrapperClassName = 'cv-content-wrapper';

const App = () => {
  const [ pageContentWrapperClassName, setPageContentWrapperClassName ] = useState(isLoadingClassName);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setPageContentWrapperClassName(cvContentWrapperClassName);
    }
  }, [ isLoading ]);

  return (
    <body className={pageContentWrapperClassName}>
      <LoadingIndicator />
    </body>
  );
};

export default App;
