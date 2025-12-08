
// using prism for styling code block of profile
import Prism from "prismjs";
import "../../assets/styles/prism-holi-theme.css"

import "prismjs/components/prism-javascript"; // importing language
import { useEffect } from "react";
import React from "react";

import { SOCIAL_LINKS } from "@/constants";
import { IconLink } from "@/components/common/IconLink";
import { headerSharedColor } from "@/lib/default_Tailwind";
import { motion } from "framer-motion";
import { animations } from "@/lib/animations";

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
        <section className="h-full w-full flex flex-col xl:flex-row items-center justify-between gap-10 md:gap-0 p-4 md:p-0" >

            {/* left part for greeting and name */}
            <div className="flex flex-col justify-center h-full gap-4 w-full md:w-auto">
                <GreetComp />
            </div>

            {/* right part, code themed my info */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2.0, duration: 0.5, ease: "easeOut" }}
                className="bg-gradient-to-r from-purple-400 via-violet-400 to-pink-400 p-1 rounded-sm w-full md:w-auto max-w-[90vw] md:max-w-none overflow-x-auto"
            >
                <pre className="!m-0">
                    <code className="language-javascript text-xs md:text-base">
                        {codeString}
                    </code>
                </pre>
            </motion.div>
        </section >

    )
}


const GreetComp = () => {
    return <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={{ clipPath: "inset(0 0 0% 0)" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
    >
        {/* Left to right reveal for greeting - very long */}
        <motion.h1
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 3.0, ease: "easeOut", delay: 0.3 }}
            className={`text-3xl md:text-4xl font-[300] ${headerSharedColor}`}
        >
            Hey there!, I'm-
        </motion.h1>

        <div className="pl-0 md:pl-3 flex flex-col gap-4 md:gap-6 w-full md:w-[600px]">
            {/* Kunal Rathore - very long, dramatic entrance */}
            <motion.h1
                initial={{ opacity: 0, x: -150, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{
                    duration: 2.5,
                    delay: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                }}
                className="text-8xl md:text-[150px] font-[600] text-black dark:text-gray-200 leading-tight"
            >
                Kunal Rathore
            </motion.h1>
            <DiscComp />
            {/* Resume and GitHub buttons - appear after description */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.4 }}
                className="flex gap-4 pl-2"
            >

                <ResumeComp />

                <ContactComps />
            </motion.div>
        </div>
    </motion.div >
}

const DiscComp = () => {
    const descriptions = [
        "Software Engineer Student. A self-taught full-stack developer with an interest in Computer Science.",
        "Building scalable web applications. Turning ideas into real, functional products.",
        "Passionate about AI and modern web technologies. Always learning, always building."
    ];

    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % descriptions.length);
        }, 4500); // Change every 4.5 seconds - faster switching

        return () => clearInterval(interval);
    }, []);

    return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.4 }}
        className="relative h-28 overflow-hidden"
    >
        {descriptions.map((text, index) => {
            const isActive = currentIndex === index;
            const isPrev = currentIndex === (index + descriptions.length - 1) % descriptions.length;

            return (
                <motion.p
                    key={index}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{
                        opacity: isActive ? 1 : 0,
                        x: isActive ? 0 : isPrev ? -100 : 100
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute top-0 left-0 text-xl md:text-3xl font-[400] w-full"
                >
                    {text.split('.')[0]}.
                    <span className="text-gray-600 dark:text-slate-400 font-[300]">
                        {text.split('.').slice(1).join('.')}
                    </span>
                </motion.p>
            );
        })}
    </motion.div>
}

const ResumeComp = () => {
    return <a
        href="/resume.pdf"
        download
        className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl text-lg font-light transition-colors duration-700 cursor-pointer bg-black text-white dark:bg-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white"
    >
        Resume
    </a >
}

const ContactComps = () => {
    return <>
        {SOCIAL_LINKS.map((link) => (
            <IconLink
                key={link.id}
                href={link.navigateLink}
                icon={link.icon}
            />
        ))}

    </>
}

