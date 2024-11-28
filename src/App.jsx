import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Intro from "./Intro";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Intro />}
          />
          <Route
            path="/portfolio"
            element={
              <div>
                <Navbar />
                <div id="home" className="relative">
                  <Home />
                </div>
                <div id="about" className="relative">
                  <About />
                </div>
                <div id="projects" className="relative">
                  <Projects />
                </div>
                <div id="contact" className="relative">
                  <Contact />
                </div>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
