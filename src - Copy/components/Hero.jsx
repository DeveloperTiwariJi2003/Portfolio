import React from "react";
import Illu from '../assets/illu.png';
const Hero = () => {
  return (
<section id="home" className=" border-2 min-h-screen flex justify-center items-center px-4 pt-24">
    <section className="text-right">
        <img className="h-96 mt-8 w-1vw" src={Illu} alt="Hero Illustration" srcSet="" />
    </section>
    <section>
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
    Hi, I'm <span className="text-teal-400">Gourav Tiwari</span>
  </h1>
  <p className="text-gray-300 text-lg mb-6">
    Full Stack Developer | React | CPP | MERN Stack
  </p>
  <a
    href="#projects"
    className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md font-medium transition"
  >
    View My Work
  </a>
    </section>
</section>
  );
};

export default Hero;
