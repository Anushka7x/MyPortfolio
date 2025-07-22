import React from 'react';
import resumePDF from '../assets/AnushkaDubey_React_2yr_exp.pdf'; // Your actual resume file
import petal from '../assets/images/Petal.png'; // A transparent PNG of a petal

const ResumePetal = () => {
  return (
    <div className="fixed top-6 right-6 z-50 group">
      {/* Floating petal */}
      <div className="relative w-16 h-16">
        <img
          src={petal}
          alt="Resume Petal"
          className="w-full h-full object-contain animate-float-slow group-hover:rotate-[360deg] transition-all duration-700 ease-in-out cursor-pointer"
        />

        {/* Hidden on-hover download */}
        <a
          href={resumePDF}
          download="Anushka_Resume.pdf"
          className="absolute top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[rgb(29,136,254)] text-white text-sm px-4 py-2 rounded-full shadow-md hover:bg-blue-700"
        >
          📄 Download Resume
        </a>
      </div>
    </div>
  );
};

export default ResumePetal;
