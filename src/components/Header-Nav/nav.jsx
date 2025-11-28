

import { NavComps } from "./navComps";
import { useNavToggleContextProvider } from "@/context/NavToggleContext";

export const Nav = () => {

    const { toggle, setToggle } = useNavToggleContextProvider();

    return <nav className={`fixed z-100 bg-gray-50 text-black md:bg-white md:text-black dark:bg-black dark:text-white transition-all duration-1000
        bottom-0 w-full h-16 flex flex-row items-center justify-around border-t border-gray-300 md:border-t-0 md:border-r md:border-gray-200 dark:border-gray-800
        md:h-full md:flex-col md:justify-between md:pl-2 md:pt-30 md:top-0 md:left-0
        ${toggle ? "md:w-[8vw]" : "md:w-[12vw]"}`}
        onMouseEnter={() => window.innerWidth >= 768 && setToggle(false)}
        onMouseLeave={() => window.innerWidth >= 768 && setToggle(true)}>

        <div className="flex flex-row w-full justify-around items-center md:h-90 md:w-full md:flex-col md:gap-14 md:justify-start">
            <NavComps toggle={toggle} />
        </div>

        <span className="hidden md:block border-2 border-black dark:border-white rounded px-2 mb-18 mx-1">
            <b>{toggle ? "." : "_"}</b>
        </span>
    </nav>

}