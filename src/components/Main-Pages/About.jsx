import { ProfileCard } from "../common/ProfileCard";
import { SKILLIcons } from "@/constants";
import { PageHeader } from "../common/PageHeader";
import { HighLightText } from "../common/HighLightText";
import { TechStack } from "../common/TechStack";
import { motion } from "framer-motion";
import { animations } from "@/lib/animations";

export const AboutPage = () => {
    {/* second section  */ }
    return <section className="h-full w-full flex flex-col items-center justify-evenly gap-10 md:gap-25 p-4 md:p-0" >
        {/* image div */}
        <div className="h-full w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">

            {/* rigth part for about me */}
            <div className="flex flex-col justify-center gap-8 w-full md:w-[50%] ">
                <AboutComp />
            </div>
            {/* Image - animates with first paragraph */}
            <motion.div
                {...animations.fadeInUp}
            >
                <ProfileCard />
            </motion.div>
        </div>
    </section >
}


const AboutComp = () => {
    return <div className="flex flex-col gap-8 w-full md:w-150 font-light dark:font-extralight ">
        {/* Header - animates first */}
        <motion.div {...animations.fadeInUp}>
            <PageHeader val={'01.'} subheading={"About"} mainHeading={"Me"} />
        </motion.div>

        <span className="text-base md:text-xl flex flex-col gap-4">
            {/* First paragraph - animates with image */}
            <motion.p {...animations.fadeInUp}>
                Hey! I'm Kunal. I don't just write code; I build solutions that
                <HighLightText text={' connect smart logic with great design. '} />
                I believe that the best apps aren't just fast—they are
                <HighLightText text={' reliable and easy to use. '} />
            </motion.p>

            {/* Second paragraph - animates after first */}
            <motion.p {...animations.fadeInUp}>
                My goal is simple: making software that feels
                <HighLightText text={' effortless for the user. '} />
                I love the challenge of building things right. I’m always learning and keeping a
                <HighLightText text={' human-first mindset '} />
                in everything I create.
            </motion.p>

            {/* Skills - animates last */}
            <motion.div {...animations.fadeInUp}>
                <SkillsComponent />
            </motion.div>
        </span>
    </div>
}


const SkillsComponent = () => {
    return (
        <div className="mt-4">
            <h3 className="text-xl md:text-2xl mb-4 text-primary relative inline-block">
                Expertise Areas
                <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
            </h3>
            <p className="px-1 py-2 font-medium flex flex-col gap-2 text-2xl">
                <TechStack technologies={SKILLIcons} className={''} />
            </p>
        </div>
    );
}