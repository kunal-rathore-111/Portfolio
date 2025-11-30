
import { Link } from "react-router-dom";
import { HomeIcon, ProjectIcon, AboutIcon, ReadsIcon } from "../../assets/icons/sideBarIcon";
import { useScrollContext } from "@/context/ScrollContext";
import { useScrollTo } from "@/hooks/useScrollTo";

export const NavComps = ({ toggle }) => {
    const { HomeRef, AboutRef, ProjectsRef, ReadsRef } = useScrollContext();
    const scrollTo = useScrollTo();

    const navItems = [
        { ref: HomeRef, label: "Home", Icon: HomeIcon },
        { ref: AboutRef, label: "About", Icon: AboutIcon },
        { ref: ProjectsRef, label: "Projects", Icon: ProjectIcon },
        { ref: ReadsRef, label: "Reads", Icon: ReadsIcon },
    ]

    return (<>
        {
            navItems.map(({ ref, label, Icon }) => {
                return <div key={label} className="flex w-auto md:w-22 h-12 items-center justify-center gap-2 cursor-pointer"
                    onClick={() => scrollTo(ref)}>
                    {toggle ? <Icon strokeWidth={1.5} /> : <span>{label}</span>}
                </div>
            })
        }
    </>)
}