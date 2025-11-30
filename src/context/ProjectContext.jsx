import React, { createContext, useContext } from "react";



export const ProjectContext = createContext();

export const ProjectContextProvider = React.memo(({ children, value }) => {
    return <ProjectContext.Provider value={value}>
        {children}
    </ProjectContext.Provider>
});

//opening box (where box is ProjectContext provider storing the value)

export const useProject = () => {
    const context = useContext(ProjectContext); // get the props of the provider
    if (!context) throw new Error("In-accessible outside the project context provider");
    return context;
}

