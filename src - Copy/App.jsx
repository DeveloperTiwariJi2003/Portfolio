import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (

    <div className="">
      <Navbar />
      <div className="ml-8"><Hero />
      <About />
      <Projects />
      <Contact /></div>
    </div>
  );
};

export default App;
