import React from "react";
import github from '../assets/github.png'
import gmail from '../assets/gmail.png'
import whatsapp from '../assets/whatsapp.png'
import Illu from '../assets/illu.png'

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-teal-400">Contact Me</h2></div>
      <section className="flex flex-col items-center">
        <div className="flex"><img className="w-10" src={gmail} alt="G-Mail" srcSet="" /> <p>Gouravtiwari998@gmail.com</p></div>
        <div className="flex"><img className="w-10" src={github} alt="Github" srcSet="" /> <p>https://github.com/DeveloperTiwariJi2003</p></div>
        <div className="flex"><img className="w-10" src={whatsapp} alt="whatsapp" srcSet="" /> <p>+91-9310548642</p></div>
      </section>
    </section>
  );
};

export default Contact;
