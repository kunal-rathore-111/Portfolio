
export const PageHeader = ({ val, subheading, mainHeading }) => {
    return <span className="text-2xl md:text-3xl">
        <span className={`pr-2 
            text-red-500 dark:text-yellow-300`}>
            {val}
        </span>
        {subheading}
        <br />
        <span className="text-4xl md:text-5xl font-medium"> {mainHeading}-</span>
    </span>
}