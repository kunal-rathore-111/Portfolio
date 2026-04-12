import React from "react";

import { SOCIAL_LINKS } from "@/constants";
import { IconLink } from "@/components/common/IconLink";
import { motion } from "framer-motion";
import { RetroGrid } from "@/components/ui/retro-grid";





export const HomePage = () => {

    // useEffect for highlighing code

    return (
        <section className="min-h-screen w-full flex flex-col items-start xl:items-center justify-center gap-10 p-4 md:p-0 relative overflow-hidden " >


            {/* left part for greeting and name - Left below xl, Centered on xl+ */}
            <div className="flex flex-col justify-center items-start xl:items-center h-full gap-4 w-full md:w-auto text-left xl:text-center z-10 relative px-4 md:px-8 xl:px-0 ">
                <GreetComp />


            </div>

            {/* right part, code themed my info - REMOVED */}
        </section >

    )
}


const GreetComp = () => {
    return <>
        {/* Greeting text */}

        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.2,
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
            }}
            className={`text-2xl  md:text-4xl font-[300] text-red-500 dark:text-yellow-300`}
        >
            👋Hey there!, I'm-
        </motion.h1>

        {/* Left aligned below xl, centered on xl+ */}
        <div className="flex flex-col gap-4 md:gap-6 w-full md:w-auto items-start xl:items-center">
            {/* Name */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.4,
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1]
                }}
                className="text-[21vw] sm:text-7xl md:text-[148px] font-[600] text-black dark:text-gray-200 leading-tight text-left xl:text-center xl:whitespace-nowrap"
            >
                Kunal Rathore
            </motion.h1>

            {/* Description */}
            <DiscComp />

            {/* Buttons - Centered */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.8,
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1]
                }}
                className="flex gap-4 justify-start xl:justify-center"
            >
                <ResumeComp />
                <ContactComps />
            </motion.div>

            {/* RetroGrid */}
            <div className="absolute h-[500px] w-screen overflow-hidden -z-10">
                <RetroGrid />
            </div>
        </div>
    </>
}

const DiscComp = () => {
    const descriptions = [
        "Software Engineer Student. A self-taught full-stack developer with an interest in Computer Science.",
        "Building scalable web applications. \nTurning ideas into real, functional products.",
        "Passionate about AI and modern web technologies. Always learning, always building."
    ];

    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % descriptions.length);
        }, 4000); // 4 seconds per description

        return () => clearInterval(interval);
    }, []);

    return <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.6,
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1]
        }}
        className="relative h-28 overflow-hidden w-full flex justify-start xl:justify-center"
    >
        {descriptions.map((text, index) => {
            const isActive = currentIndex === index;
            const isPrev = currentIndex === (index + descriptions.length - 1) % descriptions.length;

            return (
                <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : isPrev ? -40 : 40
                    }}
                    transition={{
                        duration: 0.7,
                        ease: [0.25, 0.1, 0.25, 1]
                    }}
                    className="absolute top-0 left-0 text-lg md:text-3xl font-[400] w-full text-left xl:text-center"
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
        className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl text-xl transition-colors duration-700 cursor-pointer bg-black text-white dark:bg-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white "
    >
        <span className="transition-all duration-500 hover:scale-110">
            Resume
        </span>
    </a >
}

const ContactComps = () => {
    return <>
        {SOCIAL_LINKS.filter(link => link.id !== 'twitter').map((link) => (
            <IconLink
                key={link.id}
                href={link.navigateLink}
                icon={link.icon}
            />
        ))}

    </>
}
