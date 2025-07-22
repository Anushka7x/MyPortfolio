import React from 'react';
import nursery from '../assets/images/Nursery.gif';
import travel from '../assets/images/travel.gif';
import petcare from '../assets/images/petcare.gif';
import bgSvg from "../assets/images/6fb1f1324e39d217bee7419795a8b838.jpg";
import ausExportGif from '../assets/images/Crispe - Chris Phillips.gif';
import Bhalekargif from '../assets/images/Bhalekar.gif';
import nimbusgif from '../assets/images/Nimbus.gif';
import flower from "../assets/images/Portfolio.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Nursery E-commerce UI",
      description: "A plant nursery landing page with clean product cards, filters, and category navigation.",
      image: nursery,
      demoLink: "#",
    },
    {
      id: 2,
      title: "Street Animal Care",
      description: "Website for donating or helping stray animals. Includes clean layout, donation CTA and user stories.",
      image: petcare,
      demoLink: "#",
    },
    {
      id: 3,
      title: "Travel Explorer Site",
      description: "A responsive travel agency site with beautiful destination cards, filters and calls-to-action.",
      image: travel,
      demoLink: "#",
    },
    {
      id: 4,
      title: "Bhalekar Consulting (Official Website)",
      description: "Corporate site using Bootstrap, JS & CSS for a modern consulting firm in India.",
      image: Bhalekargif,
      demoLink: "#",
    },
    {
      id: 5,
      title: "Nimbus Marine (Singapore)",
      description: "Elegant site for a marine services firm using Bootstrap, JS and custom CSS3.",
      image: nimbusgif,
      demoLink: "#",
    },
    {
      id: 6,
      title: "AusExport Portal (Ongoing)",
      description: "Currently developing a business export system in React, Next.js & Tailwind for an Australian company.",
      image: ausExportGif,
      demoLink: "#",
    },
  ];

  return (
    <section id="projects" className="relative w-full py-2 px-6 md:px-20 bg-periwinkle dark:bg-gray-900 font-poppins">
      {/* Background */}
      <img
        src={bgSvg}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-10"
      />

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Projects
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Tbh, this portfolio is just to say hi — these designs? That’s the real flex 😎
        </p>
      </div>

      {/* Project Grid */}
      <div
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              {project.title.includes("Ongoing") && (
                <span className="inline-block mb-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                  🛠️ Currently Working
                </span>
              )}
              <h3 className="text-2xl font-semibold mb-2 text-[rgb(29,136,254)] dark:text-[rgb(29,136,254)]">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <a
                href={project.demoLink}
                className="inline-block bg-[rgb(29,136,254)] text-white px-4 py-2 rounded hover:bg-[rgb(22,110,230)] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>

      <img
        src={flower}
        alt="Decorative Flower"
        className="absolute right-[2px] top-[95%] w-64 md:w-80 opacity-90 pointer-events-none select-none z-10"
      />
    </section>
  );
};

export default Projects;
