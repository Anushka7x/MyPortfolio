import React, { useState } from 'react';
import {
  BiBriefcase,
  BiMedal,
  BiBook,
  BiCamera,
  BiPaint,
  BiLeaf
} from 'react-icons/bi';
import bhalekarLogo from '../assets/images/Bhalekar.png';
import expleoLogo from '../assets/images/expleo.png';
import webnsoftLogo from '../assets/images/webnsoft.png';
import flower from "../assets/images/Portfolio.png";

const ExperienceAchievementsHobbies = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target.elements;
    window.location.href = `mailto:your_email@example.com?subject=Freelance Inquiry from ${name.value}&body=From: ${name.value} (${email.value})%0D%0A%0D%0A${message.value}`;
    setIsModalOpen(false);
  };

  return (
    <>
      {/* EXPERIENCE */}
      <section id='experience' className="py-24 bg-periwinkle dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
         {/* Background Flower */}
  <img
    src={flower}
    alt="Decorative Flower"
    className="absolute inset-0 mx-auto my-auto w-[700px] opacity-20 object-contain z-0 pointer-events-none"
    style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
  />
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-4">
            My Design Journey
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-16">
            Design is not my work—it's my language.
          </p>

          {/* Bhalekar */}
          <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
            <img src={bhalekarLogo} alt="Bhalekar" className="w-48 md:w-56 " />
            <div>
              <h3 className="text-2xl font-semibold text-[rgb(29,136,254)] dark:text-[rgb(29,136,254)] mb-1">
                Software Engineer @ Bhalekar Consulting
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">May 2025 – Present</p>
              <ul className="list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Designed end-to-end job portal for tech hires</li>
                <li>Bootstrap + Vanilla JS magic with real clients</li>
                <li>Creative ownership of all UI decisions</li>
              </ul>
            </div>
          </div>

          {/* Expleo */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-16">
            <img src={expleoLogo} alt="Expleo" className="w-48 md:w-56 " />
            <div>
              <h3 className="text-2xl font-semibold text-[rgb(29,136,254)] dark:text-[rgb(29,136,254)] mb-1">
                Software Engineer @ Expleo Group
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Aug 2023 – May 2025</p>
              <ul className="list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Automation dashboards + enterprise apps</li>
                <li>Agile teams with proper git flow</li>
                <li>Learned structure, speed, scale</li>
              </ul>
            </div>
          </div>

          {/* WebNSoft */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img src={webnsoftLogo} alt="WebNSoft" className="w-48 md:w-56 " />
            <div>
              <h3 className="text-2xl font-semibold text-[rgb(29,136,254)] dark:text-[rgb(29,136,254)] mb-1">
                Intern @ WebNSoft
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Jan 2023 – May 2023</p>
              <ul className="list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Built landing pages and admin panels</li>
                <li>Explored CSS transitions and branding design</li>
                <li>First real creative sprint </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-24 px-6 md:px-20 bg-periwinkle dark:bg-gray-900 transition-all">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white">Achievements</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Small wins, big impact </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
          <div className="bg-indigo-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <BiMedal className="text-4xl text-[rgb(29,136,254)] mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Designathon Finalist</h3>
            <p className="text-gray-600 dark:text-gray-300">Top 5 in a national UI/UX sprint</p>
          </div>
          <div className="bg-indigo-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <BiBriefcase className="text-4xl text-[rgb(29,136,254)] mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Client Work Delivered</h3>
            <p className="text-gray-600 dark:text-gray-300">Successfully delivered 10+ real projects</p>
          </div>
          <div className="bg-indigo-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <BiBook className="text-4xl text-[rgb(29,136,254)] mx-auto mb-3" />
            <h3 className="text-xl font-semibold">First Class Graduate</h3>
            <p className="text-gray-600 dark:text-gray-300">Bachelors in Design & Multimedia</p>
          </div>
        </div>

      </section>

      {/* HOBBIES */}
      <section className="py-24 px-6 md:px-20 bg-periwinkle dark:from-gray-900 dark:to-gray-800 transition-all">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white">Creative Space</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">What fuels my creativity </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow">
            <BiPaint className="text-4xl text-[rgb(29,136,254)] mx-auto mb-3" />
            <p className="font-medium">Sketching & Digital Drawing</p>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow">
            <BiLeaf className="text-4xl text-[rgb(29,136,254)] mx-auto mb-3" />
            <p className="font-medium">Gardening & Nature Photography</p>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow">
            <BiCamera className="text-4xl text-[rgb(29,136,254)] mx-auto mb-3" />
            <p className="font-medium">Creative Exploration & Moodboards</p>
          </div>
        </div>

        <img
          src={flower}
          alt="Decorative Flower"
          className="absolute left-[2px] top-[66%] w-64 md:w-80 opacity-90 pointer-events-none select-none z-10"
        />
      </section>


    </>
  );
};

export default ExperienceAchievementsHobbies;
