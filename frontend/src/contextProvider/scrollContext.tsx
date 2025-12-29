import { createContext, useRef, type ReactNode } from "react"

interface scrollContextDTO {
    contactRef: React.RefObject<HTMLDivElement | null>,
    scrollToFunc: () => void
}


export const ScrollContext = createContext<scrollContextDTO | null>(null);

export function ScrollContextProvider({ children }: { children: ReactNode }) {

    const contactRef = useRef<HTMLDivElement | null>(null);

    function scrollToFunc() {

        contactRef.current?.scrollIntoView({ behavior: "smooth" });
    };


    return <ScrollContext.Provider value={{ contactRef, scrollToFunc }}>
        {children}
    </ScrollContext.Provider>
}