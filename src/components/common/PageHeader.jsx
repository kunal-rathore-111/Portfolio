import { headerSharedColor } from "@/lib/default_Tailwind"



export const PageHeader = ({ val, subheading, mainHeading }) => {
    return <span className="text-2xl md:text-3xl">
        <span className={`pr-2 ${headerSharedColor}`}>
            {val}
        </span>
        {subheading}
        <br />
        <span className="text-4xl md:text-5xl font-medium"> {mainHeading}-</span>
    </span>
}