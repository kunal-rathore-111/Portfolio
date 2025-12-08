import profileImg from "../../assets/profile.png"
import { SKILLIcons } from "@/constants";
import { PageHeader } from "../common/PageHeader";
import { HighLightText } from "../common/HighLightText";
import { TechStack } from "../common/TechStack";
import { motion } from "framer-motion";
import { animations } from "@/lib/animations";

export const AboutPage = () => {
    {/* second section  */ }
    return <motion.section {...animations.fadeInUp} className="h-full w-full flex flex-col items-center justify-evenly gap-10 md:gap-25 p-4 md:p-0" >
        {/* image div */}
        <div className="h-full w-full flex flex-col md:flex-row items-center justify-evenly gap-8 md:gap-0">
            <img src={profileImg} alt="profileImg" className="rounded-xl h-60 md:h-100 shadow-xl object-cover" />
            {/* rigth part for about me */}
            <div className="flex flex-col justify-center gap-8 w-full md:w-[50%] ">
                <AboutComp />
            </div>
        </div>
    </motion.section >
}


const AboutComp = () => {
    return <div className="flex flex-col gap-8 w-full md:w-150 font-light dark:font-extralight ">
        <PageHeader val={'01.'} subheading={"About"} mainHeading={"Me"} />
        <span className="text-base md:text-xl flex flex-col gap-4">
            <p>
                I'm a Full-Stack Developer who enjoys building web applications that
                <HighLightText text={' solve real problems. '} />
                I focus on
                <HighLightText text={' writing clean, scalable code '} />
                and creating intuitive, user-friendly interfaces.
            </p>

            <p>
                I like turning ideas into real, functional products and often
                <HighLightText text={' leverage AI to build smarter solutions. '} />
                I work best in collaborative environments where ideas move fast and everyone is building something meaningful.
            </p>

            <SkillsComponent />
        </span>
    </div>
}


const SkillsComponent = () => {
    return <p className="px-3 py-2 font-extrabold flex flex-col gap-2 text-2xl ">
        Skills <TechStack technologies={SKILLIcons} className={''} />
    </p>
}