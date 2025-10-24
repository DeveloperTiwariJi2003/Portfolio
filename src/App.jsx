import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    
    <div className="border-red-400 flex flex-col justify-center">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen" >
        <Hero />
      <About />
      <Projects />
      <Contact />
      </div>
    </div>
  );
};

export default App;
