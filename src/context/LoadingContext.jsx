import { createContext, useContext, useState, useCallback } from 'react';

const LoadingContext = createContext({
    isDataLoaded: false,
    setDataLoaded: () => { },
    registerLoader: () => { },
    markLoaderComplete: () => { },
});

export const LoadingProvider = ({ children }) => {
    const [loaders, setLoaders] = useState(new Set());
    const [completedLoaders, setCompletedLoaders] = useState(new Set());

    const registerLoader = useCallback((id) => {
        setLoaders(prev => new Set([...prev, id]));
    }, []);

    const markLoaderComplete = useCallback((id) => {
        setCompletedLoaders(prev => new Set([...prev, id]));
    }, []);

    // Data is loaded when all registered loaders are complete
    const isDataLoaded = loaders.size > 0 && loaders.size === completedLoaders.size;

    return (
        <LoadingContext.Provider value={{
            isDataLoaded,
            registerLoader,
            markLoaderComplete,
            loadersCount: loaders.size,
            completedCount: completedLoaders.size
        }}>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoadingContext = () => useContext(LoadingContext);
