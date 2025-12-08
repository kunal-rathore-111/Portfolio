import { Link } from "react-router-dom";
import { HomeIcon, ProjectIcon, AboutIcon, ReadsIcon } from "../../assets/icons/sideBarIcon";
import { useScrollContext } from "@/context/ScrollContext";
import { useScrollTo } from "@/hooks/useScrollTo";
import { useActiveSection } from "@/hooks/useActiveSection";

export const NavComps = ({ toggle }) => {
    const { HomeRef, AboutRef, ProjectsRef, ReadsRef } = useScrollContext();
    const scrollTo = useScrollTo();
    const activeSection = useActiveSection({ HomeRef, AboutRef, ProjectsRef, ReadsRef });

    const navItems = [
        { ref: HomeRef, label: "Home", Icon: HomeIcon },
        { ref: AboutRef, label: "About", Icon: AboutIcon },
        { ref: ProjectsRef, label: "Projects", Icon: ProjectIcon },
        { ref: ReadsRef, label: "Reads", Icon: ReadsIcon },
    ]

    return (<>
        {
            navItems.map(({ ref, label, Icon }) => {
                const isActive = activeSection === label;
                return <div key={label}
                    className={`flex w-auto md:w-22 h-12 items-center justify-center gap-2 cursor-pointer
                               transition-all duration-300 ease-in-out
                               hover:scale-105 hover:text-red-600 dark:hover:text-yellow-300
                               active:scale-95 active:text-red-700 dark:active:text-yellow-400
                               md:hover:bg-gray-100 dark:md:hover:bg-gray-800 md:rounded-lg md:px-2
                               ${isActive ? 'text-red-600 dark:text-yellow-300' : ''}`}
                    onClick={() => scrollTo(ref)}>
                    {toggle ? <Icon strokeWidth={1.5} className="transition-transform duration-300" /> : <span className="font-medium">{label}</span>}
                </div>
            })
        }
    </>)
}