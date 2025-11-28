import profileImg from "../../assets/profile.png"
import { SKILLS } from "@/constants";

export const AboutPage = () => {
    {/* second section  */ }
    return <section className="h-full w-full flex flex-col items-center justify-evenly gap-10 md:gap-25 p-4 md:p-0" >
        {/* image div */}
        <div className="h-full w-full flex flex-col md:flex-row items-center justify-evenly gap-8 md:gap-0">
            <img src={profileImg} alt="profileImg" className="rounded-xl h-60 md:h-100 shadow-xl object-cover" />
            {/* rigth part for about me */}
            <div className="flex flex-col justify-center gap-8 w-full md:w-[50%] ">
                <AboutComp />
                {/* skills cards */}
            </div>
        </div>
        <SkillsGrid />
    </section >
}


const AboutComp = () => {
    return <div className="flex flex-col w-full md:w-150 font-light dark:font-extralight ">
        <span className="text-3xl md:text-4xl ">About Me- </span>
        <span className="text-base md:text-xl">
            <p>
                <br />
                I'm a pre-final year B.Tech student specializing in Information Technology, passionate about solving real-world problems through technology. With a strong foundation in programming, data structures, and web development, I'm continuously exploring new technologies and working on projects that challenge me to grow.
            </p>
            <br />
            <p> Currently honing my skills in <span className=" text-fuchsia-600  dark:text-lime-500 dark:font-light"> Web Development </span>, I'm actively looking for internship opportunities to apply my knowledge in real-world scenarios and contribute to impactful projects. I thrive in collaborative environments, enjoy learning from others, and am eager to take on challenges that push my boundaries.</p>
        </span>
    </div>
}

const cardBase = "rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-black/40 shadow-sm p-6 flex flex-col gap-2 hover:shadow-md transition";
const headingBase = "text-lg font-semibold";
const subBase = "text-sm text-gray-600 dark:text-gray-300";

function SkillsGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS.map((skill) => {
                const Icon = skill.icon;
                return (
                    <div key={skill.id} className={cardBase}>
                        <Icon className={`${skill.iconColor} size-8`} strokeWidth={1.5} />
                        <h3 className={headingBase}>{skill.title}</h3>
                        <p className={subBase}>{skill.detail}</p>
                    </div>
                );
            })}
        </div>
    )
}