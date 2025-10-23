// import React from "react";
// import Illu from '../assets/illu.png';
// const Hero = () => {
//   return (
// <section id="home" className=" border-2 min-h-screen flex justify-center items-center px-4 pt-24">
//     <section className="text-right">
//         <img className="h-96 mt-8 w-1vw" src={Illu} alt="Hero Illustration" srcSet="" />
//     </section>
//     <section>
//         <h1 className="text-4xl md:text-5xl font-bold mb-3">
//     Hi, I'm <span className="text-teal-400">Gourav Tiwari</span>
//   </h1>
//   <p className="text-gray-300 text-lg mb-6">
//     Full Stack Developer | React | CPP | MERN Stack
//   </p>
//   <a
//     href="#projects"
//     className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md font-medium transition"
//   >
//     View My Work
//   </a>
//     </section>
// </section>
//   );
// };

// export default Hero;

//new code
import React from "react";
import Illu from "../assets/illu.png";
import phone from "../assets/phone.png";
const Hero = () => {
  return (
    <section
  id="home"
  className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 pt-24 gap-8"
>

      {/* Image Section */}
      <section className="flex justify-center md:justify-end w-full md:w-1/2">
        {/* Desktop Illustration (visible only on md and up) */}
        <img
          className="hidden md:block w-64 sm:w-80 md:w-96 object-contain"
          src={Illu}
          alt="Hero Illustration"
        />
        {/* Mobile Illustration (visible only on small screens) */}
        <img
  src={phone}
  alt="Mobile Hero Illustration"
  className="block md:hidden w-64 object-contain mt-2"
/>


      </section>

      {/* Text Section */}
      <section className="text-center md:text-left max-w-xl">
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
      </section>


    </section>
  );
};

export default Hero;