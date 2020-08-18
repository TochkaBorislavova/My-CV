import './app.scss';

import React from 'react';
import { GlobalStateProvider } from './global-state-provider';
import PageContentWrapper from './page-content-wrapper';

const App = () => (
  <GlobalStateProvider>      
    <PageContentWrapper />
  </GlobalStateProvider>
);

export default App;
