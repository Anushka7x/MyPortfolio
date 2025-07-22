import React from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiFigma
} from 'react-icons/si';

const skills = [
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Figma", icon: <SiFigma /> },
];

const SkillsMarquee = () => {
  return (
    <section className="w-full bg-periwinkle dark:bg-gray-900 py-12 overflow-hidden">


      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-16 px-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center text-[rgb(29,136,254)] dark:text-[rgb(131,188,221)] text-4xl min-w-[100px]"
            >
              {skill.icon}
              <p className="text-base mt-2">{skill.name}</p>
            </div>
          ))}
          {/* Duplicate for seamless looping */}
          {skills.map((skill, index) => (
            <div
              key={`clone-${index}`}
              className="flex flex-col items-center text-center text-[rgb(29,136,254)] dark:text-[rgb(131,188,221)] text-4xl min-w-[100px]"
            >
              {skill.icon}
              <p className="text-base mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
