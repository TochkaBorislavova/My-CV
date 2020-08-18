import React, { useState, useContext, createContext } from 'react';

const GlobalStateContext = createContext();

const useGlobalState = () => useContext(GlobalStateContext);

const GlobalStateProvider = ({ children }) => {
    const [ isPageLoading, setIsPageLoading ] = useState(true);
    const [ shouldDisplayLoadingPage, setShouldDisplayLoadingPage ] = useState(true);

    const globalState = {
        isPageLoading,
        shouldDisplayLoadingPage,
    };

    const globalStateActions = {
        setIsPageLoading,
        setShouldDisplayLoadingPage,
    };

    const globalStateProvider = { ...globalState, ...globalStateActions };

    return (
        <GlobalStateContext.Provider value={globalStateProvider}>
            {children}
        </GlobalStateContext.Provider>
    )
};

export {
    GlobalStateContext,
    GlobalStateProvider,
    useGlobalState,
};
