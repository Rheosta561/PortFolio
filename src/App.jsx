import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Intro from "./Intro";

function App() {
  return (
    <div>
      <div className="">
        <Intro />
      </div>
      <div>
        <div className="">
        <Navbar />
        </div>
        
        <div className="absolute">
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>

        </div>
      </div>
    </div>
  );
}

export default App;
