import React from "react";
import Illu from "../assets/illu.png";
import phone from "../assets/phone.png";
const Hero = () => {
  return (
      <section id="home" className="border-8 flex flex-row mt-10 h-full">
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Image Section */}
      {/* <section className="border border-red-500 flex items-center justify-center max-h-96">
        <img className=" max-h-96 border border-red-500" src={Illu} alt="Hero Illustration"/>
      </section> */}
      <div className="flex justify-center md:justify-end w-full md:w-1/2">
  <img className="hidden md:block max-h-96 object-contain" src={Illu} />
</div>


      {/* Text Section */}
      <div className="text-center md:text-left w-full max-w-xl flex flex-col items-center md:items-start justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-teal-400">Gourav Tiwari</span>
        </h1>
        <p className="text-gray-300 text-base sm:text-lg mb-6">
          Full Stack Developer | React | CPP | MERN Stack
        </p>
        <a
          href="#projects"
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md font-medium transition"
        >
          View My Work
        </a>
      </div>

          </div>
    </section>
  );
};

export default Hero;