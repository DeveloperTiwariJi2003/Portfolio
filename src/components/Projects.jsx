import React from "react";
import Netflix from '../assets/Netflix.png'
import ecom from '../assets/E-Commerce.png'
import Calc from '../assets/Calc.png'
import illu from '../assets/illu.png'
import coderoom from '../assets/image.png'
import portfolio from '../assets/portfolio.png'
import drive from '../assets/drive.png'
const projects = [
  {title: "Code-Room",
    description: "Built a real-time collaborative code editor supporting multiple users with low-latency synchronization using WebSockets",
    image:coderoom,
    ref: "https://code-review-app-k8ys.onrender.com"},
  {title: "Portfolio",
    description: "Personal portfolio using React.js",
    image:portfolio,
    ref: "https://portfolio-sigma-tan-g0rgp0z2uf.vercel.app"},
    {
    title: "Personal Drive",
    description: "Developed a secure cloud storage application with user authentication using JWT and bcrypt,multiple file uploads, downloads, previews, bulk deletion with user-specific access control,a self-hosted local storage system while maintaining file metadata in MongoDB Atlas, Integrated Cloudflare Tunnel with a custom domain to securely expose the local server over the internet without traditional port forwarding.",
    image: Screenshot 2026-07-30 231948.png,
    ref: "https://personal-drive-n1o6.onrender.com/login.html"
  },
  {
    title: "E-commerce Site",
    description: "An online store built with MERN stack (under development).",
    image: ecom,
    ref: "https://github.com/DeveloperTiwariJi2003/Netflix-Clone"
  },
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
  
  
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900 w-full">
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
