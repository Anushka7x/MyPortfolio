import React, { useState, useRef } from "react";
import flower from "../assets/images/Portfolio.png";
import bgSvg from "../assets/images/6fb1f1324e39d217bee7419795a8b838.jpg";
import leaf from "../assets/images/leaf.png";

const Hero = () => {
  const [showLeafMenu, setShowLeafMenu] = useState(false);
  const [isFlying, setIsFlying] = useState(false);
  const leafRef = useRef(null);

  const animateLeafTo = (targetId) => {
    const leaf = leafRef.current;
    const target = document.getElementById(targetId);
    if (!leaf || !target) return;

    const targetRect = target.getBoundingClientRect();
    const targetY = window.scrollY + targetRect.top;

    leaf.style.transition = "transform 1.2s ease-in-out";
    leaf.style.transform = `translate(200px, ${targetY - 200}px)`;
    setIsFlying(true);

    setTimeout(() => {
      setIsFlying(false);
      leaf.style.transition = "none";
      leaf.style.transform = "none";
      window.scrollTo({ top: targetY, behavior: "smooth" });
      setShowLeafMenu(false);
    }, 1200);
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center px-4 font-poppins">
 
 {/* Background Flower */}
  <img
    src={flower}
    alt="Decorative Flower"
    className="absolute inset-0 mx-auto my-auto w-[700px] opacity-20 object-contain z-0 pointer-events-none"
    style={{ top: '50%', left: '20%', transform: 'translate(-50%, -50%)' }}
  />     
      <img
        src={bgSvg}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-20"
      />




      {/* Hero Text */}
      <div data-aos="fade-up" data-aos-duration="1200">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm{" "}
          <span className="text-[rgb(29,136,254)]">Anushka</span>
        </h1>
        <p className="text-xl mb-6">
          UI/UX Designer | Creative Developer | Visual Thinker
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-[rgb(29,136,254)] text-white rounded-full hover:bg-[rgb(24,110,210)] transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition dark:bg-white dark:text-gray-900"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Flower decorative */}
      <img
        src={flower}
        alt="Decorative Flower"
        className="absolute right-[2px] top-[80%] w-64 md:w-80 opacity-90 pointer-events-none select-none z-10"
      />
    </section>
  );
};

export default Hero;
