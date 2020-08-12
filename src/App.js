import React, { useState, useEffect } from 'react';
import LoadingIndicator from './components/loading-indicators/loading-indicator';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <body className="cv-wrapper">
      <LoadingIndicator />
    </body>
  );
};

export default App;
