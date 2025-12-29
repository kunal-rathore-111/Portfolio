import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useContext } from "react";
import { motion } from "motion/react";
import { ScrollContext } from "../contextProvider/scrollContext";


export const ContactSection = ({ isDark }: { isDark: boolean }) => {
    const context = useContext(ScrollContext);


    const contactLinks = [
        { label: "GitHub", Icon: Github, href: "https://github.com/kunal-rathore-111" },
        {
            label: "LinkedIn",
            Icon: Linkedin,
            href: "https://www.linkedin.com/in/kunal-rathore-11-in",
        },
        {
            label: "Email",
            Icon: Mail,
            href: "https://mail.google.com/mail/u/0/?fs=1&to=kunalworkspace111@gmail.com&tf=cm",
        },
        { label: "Twitter", Icon: Twitter, href: "https://x.com/kunalx1codes" },
    ];


    return <motion.div
        ref={context?.contactRef}
        className="mt-16 md:mt-24 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
    >
        <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
        >
            <h2 className={`text-5xl md:text-7xl italic ${isDark ? 'text-white' : 'text-black'}`}>Talk to me</h2>
        </motion.div>

        <motion.div
            className="flex justify-center items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
        >

            {contactLinks.map(({ Icon, href, label }, i) =>
                <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener"
                    aria-label={label}
                    className="w-28 h-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                >

                    <Icon className="w-6 h-6 text-black" />

                </motion.a>
            )}
        </motion.div>
    </motion.div >
}
