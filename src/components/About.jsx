import React, { useEffect, useRef, useState } from "react";
import {
  BiBriefcase,
  BiBriefcaseAlt,
  BiRocket,
  BiMessageAlt,
  BiBook,
  BiCodeAlt,
  BiMobileAlt,
  BiGlobe,
  BiDownload
} from "react-icons/bi";

import aboutBg from "../assets/images/about-bg.svg";
import userImg from "../assets/images/user.png";
import flower from "../assets/images/Portfolio.png";

const About = () => {
  const leftEye = useRef();
  const rightEye = useRef();
  const [showResumeModal, setShowResumeModal] = useState(false);

  useEffect(() => {
    const moveEyes = (e) => {
      const eyes = [leftEye.current, rightEye.current];
      eyes.forEach((eye) => {
        const rect = eye.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        const radius = 6;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        eye.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.addEventListener("mousemove", moveEyes);
    return () => document.removeEventListener("mousemove", moveEyes);
  }, []);

  return (
    <section
      id="about"
      className="relative px-6 md:px-2 bg-[#eef7ff] dark:bg-gray-800 overflow-hidden"
    >
      {/* Background SVG */}
      <img
        src={aboutBg}
        alt="About Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 -z-10"
      />

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Eye-Tracking Illustration */}
        <div className="relative w-[320px] md:w-[380px] mx-auto">
          <img src={userImg} alt="User" className="w-full" />
          <div
            ref={leftEye}
            className="absolute w-4 h-4 rounded-full top-[223px] left-[120px] transition-transform duration-75"
            style={{ backgroundColor: "rgb(131, 188, 221)" }}
          />
          <div
            ref={rightEye}
            className="absolute w-4 h-4 rounded-full top-[223px] left-[210px] transition-transform duration-75"
            style={{ backgroundColor: "rgb(131, 188, 221)" }}
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            I’m a passionate{" "}
            <span className="text-[rgb(29,136,254)] font-semibold">
              UI/UX & Graphic Designer
            </span>{" "}
            who crafts interfaces that speak. From wireframes to wow—my designs
            blend intuition, creativity, and pixel precision.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
              <BiBook className="text-[rgb(29,136,254)] text-xl" />
              <span>Bachelor’s in Design & Multimedia</span>
            </li>
            <li className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
              <BiBriefcase className="text-[rgb(29,136,254)] text-xl" />
              <span>2+ Years of experience in Creative UI/UX roles</span>
            </li>
            <li className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
              <BiCodeAlt className="text-[rgb(29,136,254)] text-xl" />
              <span>Tools: Figma, Adobe XD, Illustrator, VS Editor</span>
            </li>
            <li className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
              <BiMobileAlt className="text-[rgb(29,136,254)] text-xl" />
              <span>Strong grip on responsive web and mobile design</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Decorative Flowers */}
      <img
        src={flower}
        alt="Decorative Flower"
        className="absolute left-[300px] top-[6%] w-44 md:w-50 opacity-40 pointer-events-none select-none z-0"
      />
      <img
        src={flower}
        alt="Decorative Flower"
        className="absolute left-[100px] top-[56%] w-54 md:w-60 opacity-40 pointer-events-none select-none z-0"
      />

      {/* 🎴 Floating Resume Portal Button */}
{/* 🌐 Floating Navigation Icon */}
<button
  onClick={() => setShowResumeModal(true)}
  className="fixed bottom-6 right-6 bg-[rgb(29,136,254)] text-white text-3xl p-4 rounded-full shadow-xl hover:bg-blue-700 transition-all z-50 animate-float-slow"
  title="Open navigation portal"
>
  <BiGlobe />
</button>


      {/* 🎴 Modal Portal */}
{showResumeModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-4">
    <div className="bg-white dark:bg-gray-900 p-8 rounded-xl max-w-md w-full shadow-lg relative animate-fadeIn">
      <button
        onClick={() => setShowResumeModal(false)}
        className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-2xl"
      >
        &times;
      </button>
      <h3 className="text-2xl font-bold mb-6 text-center text-[rgb(29,136,254)]">Quick View
      </h3>
      <div className="space-y-4">
        <a
          href="/AnushkaDubey_React_2yr_exp.pdf"
          download
          className="flex items-center gap-3 bg-[rgb(29,136,254)] text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          <BiDownload className="text-xl" />
          Download Resume
        </a>
        <a
          href="#experience"
          onClick={() => setShowResumeModal(false)}
          className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          <BiBriefcaseAlt className="text-xl" />
          Go to Experience
        </a>
        <a
          href="#projects"
          onClick={() => setShowResumeModal(false)}
          className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          <BiRocket className="text-xl" />
          Explore Projects
        </a>
        <a
          href="#contact"
          onClick={() => setShowResumeModal(false)}
          className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          <BiMessageAlt className="text-xl" />
          Contact Me
        </a>
      </div>
    </div>
  </div>
)}

    </section>
  );
};

export default About;
