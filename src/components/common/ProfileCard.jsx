import React from 'react';
import profileImg from '../../assets/profile.png';
import { SOCIAL_LINKS } from '../../constants';

// profile card component
export const ProfileCard = () => {
  // filter socials (github, twitter, linkedin)
  const cardSocials = SOCIAL_LINKS.filter(link => ['github', 'twitter', 'linkedin'].includes(link.id));

  // sort order
  const sortOrder = ['github', 'twitter', 'linkedin'];
  cardSocials.sort((a, b) => sortOrder.indexOf(a.id) - sortOrder.indexOf(b.id));

  return (
    <div className="group relative flex flex-col items-center justify-center w-[220px] sm:w-[250px] h-[280px] sm:h-[310px] pt-5 rounded-[5px] border-2 border-[#323232] shadow-[4px_4px_#323232] bg-white transition-all duration-300 ease-in-out hover:border-[#323232] hover:shadow-[0_10px_15px_-3px_rgba(50,50,50,0.3)] dark:bg-[#171717] dark:border-neutral-800 dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)] dark:hover:border-neutral-700 dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]">

      {/* Profile Image */}
      <div
        className="w-[150px] h-[150px] rounded-full bg-[#ccc] bg-center bg-no-repeat bg-cover border-[3px] border-[#323232] mb-[15px] transition-all duration-300 ease-in-out group-hover:-translate-y-5 dark:bg-[#262626] dark:border-neutral-800 dark:group-hover:border-neutral-700"
        style={{ backgroundImage: `url(${profileImg})` }}
      />

      {/* Title */}
      <div className="text-center text-[#323232] text-[20px] font-semibold font-[system-ui] mb-[5px] transition-transform duration-300 ease-in-out group-hover:-translate-y-2.5 dark:text-[#ededed]">
        KUNAL RATHORE <br />
        <span className="text-[15px] font-normal text-[#666] dark:text-[#a1a1aa]">
          Fullstack Dev & Problem Solver
        </span>
      </div>

      {/* Socials */}
      <div className="flex justify-center gap-5 h-0 opacity-0  translate-y-2.5 transition-all duration-500 ease-in-out group-hover:h-[35px] group-hover:opacity-100 group-hover:translate-y-0">
        {cardSocials.map((social) => (
          <a
            key={social.id}
            href={social.navigateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[20px] h-[20px] border-none bg-transparent cursor-pointer flex items-center justify-center transition-transform duration-300 hover:scale-135 text-[#323232] dark:text-[#ededed]"
            title={social.title}
          >
            <social.icon size={24} strokeWidth={1.5} className="w-full h-full fill-current" />
          </a>
        ))}
      </div>

      {/* Responsive styles are now handled via Tailwind classes in the main div */}
    </div>
  );
}
