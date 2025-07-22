import React, { useEffect, useRef } from "react";
import userImg from "../assets/images/user.png"; // Make sure this is the correct blue sketch image

const EyeFollow = () => {
  const leftEye = useRef();
  const rightEye = useRef();
  const container = useRef();

  useEffect(() => {
    const moveEyes = (e) => {
      const eyes = [leftEye.current, rightEye.current];
      eyes.forEach((eye) => {
        const rect = eye.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        const radius = 6; // How far the pupil moves
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        eye.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.addEventListener("mousemove", moveEyes);
    return () => document.removeEventListener("mousemove", moveEyes);
  }, []);

  return (
    <div className="relative w-[320px] md:w-[380px] mx-auto mt-16">
      {/* Main user image */}
      <img src={userImg} alt="User" className="w-full" />

      {/* Pupil overlays - adjust these positions based on image */}
      <div
        ref={leftEye}
        className="absolute w-3 h-3 bg-indigo-600 rounded-full top-[82px] left-[114px] transition-transform duration-75"
      />
      <div
        ref={rightEye}
        className="absolute w-3 h-3 bg-indigo-600 rounded-full top-[82px] left-[186px] transition-transform duration-75"
      />
    </div>
  );
};

export default EyeFollow;
