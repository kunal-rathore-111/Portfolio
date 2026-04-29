import { createContext, useContext } from "react";
import { useRef } from "react";



const ScrollContext = createContext();

export function ScrollContextProvider({ children }) {

    const HomeRef = useRef(null);
    const AboutRef = useRef(null);
    const ProjectsRef = useRef(null);
    const MoreRef = useRef(null);

    const refs = { HomeRef, AboutRef, ProjectsRef, MoreRef }
    return <ScrollContext.Provider value={refs} >
        {children}
    </ScrollContext.Provider>
}

export const useScrollContext = () => {
    return useContext(ScrollContext);
}