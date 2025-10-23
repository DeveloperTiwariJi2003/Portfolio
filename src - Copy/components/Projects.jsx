import React from "react";
import Netflix from '../assets/Netflix.png'
import ecom from '../assets/E-Commerce.png'
import Calc from '../assets/Calc.png'
import illu from '../assets/illu.png'
const projects = [
  {
    title: "Calculator App",
    description: "A simple calculator built using React.",
    image:Calc,
    ref: "https://github.com/DeveloperTiwariJi2003/Basic-calculator"
  },
  {
    title: "Netflix Clone",
    description: "A Netflix clone using React and TMDB API.",
    image: Netflix,
    ref: "https://github.com/DeveloperTiwariJi2003/Netflix-Clone"
  },
  {
    title: "E-commerce Site",
    description: "An online store built with MERN stack (under development).",
    image: ecom,
    ref: "https://github.com/DeveloperTiwariJi2003/Netflix-Clone"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-teal-400">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-teal-400/50 transition-shadow"
            > <img className="w-100 h-100" src={proj.image} alt="IMage" srcSet="" />
              <h3 className="text-xl font-semibold mb-3">{proj.title}</h3>
              <p className="text-gray-300 mb-4">{proj.description}</p>
              <a href={proj.ref}>
                <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md">
                View Details
              </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
