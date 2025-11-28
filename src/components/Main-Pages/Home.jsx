
// using prism for styling code block of profile
import Prism from "prismjs";
import "../../assets/styles/prism-holi-theme.css"

import "prismjs/components/prism-javascript"; // importing language
import { useEffect } from "react";

import { SOCIAL_LINKS } from "@/constants";
import { IconLink } from "@/components/common/IconLink";

const codeString = `const Profile = {
  name: 'Kunal Rathore',
  title: 'Full-Stack Developer | Problem Solver',

  technologies: [
    'C', 'C++', 'HTML', 'CSS', 'JS', 'NODE.js',
    'Express', 'MySQL', 'MongoDB', 'REACT',
    'Typescript', 'Figma', 'Git', 'Linux-OS',
    Understanding more...
  ],

  problemSolver: true,
  hireable: function () {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5 &&
      this.enjoy's_whatever_he_do
    );
  }};`;



export const HomePage = () => {

    // useEffect for highlighing code
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <section className="h-full w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 p-4 md:p-0" >

            {/* left part for greeting and name */}
            <div className="flex flex-col justify-center h-full gap-4 w-full md:w-auto">
                <GreetComp />
            </div>

            {/* right part, code themed my info */}
            <div className="bg-gradient-to-r from-purple-400 via-violet-400 to-pink-400 p-1 rounded-xl w-full md:w-auto max-w-[90vw] md:max-w-none overflow-x-auto">
                <pre className="!m-0">
                    <code className="language-javascript text-xs md:text-base">
                        {codeString}
                    </code>
                </pre>
            </div>
        </section >

    )
}


const GreetComp = () => {
    return <div>
        <h1 className="text-3xl md:text-4xl font-[300] 
                text-[#4B0096] dark:text-yellow-300" >Hey there!, I'm-
        </h1>

        <div className="pl-0 md:pl-3 flex flex-col gap-4 md:gap-6 w-full md:w-[600px]">
            <h1 className="text-8xl md:text-[150px] font-[600] text-black dark:text-gray-200 leading-tight" >Kunal Rathore
            </h1>
            <DiscComp />
            <div className="flex gap-3">
                <ContactComps />
            </div>
        </div>
    </div>
}

const DiscComp = () => {
    return <p className="text-xl md:text-3xl font-[400]">
        Software Engineer Student.
        <span className="text-gray-600 dark:text-slate-400 font-[300]"> A self-taught full-stack developer with an
            interest in Computer Science.</span>
    </p>

}

const ContactComps = () => {
    return <>
        {SOCIAL_LINKS.map((link) => (
            <IconLink
                key={link.id}
                href={link.navigateLink}
                icon={link.icon}
                label={link.title}
            />
        ))}
    </>
}

