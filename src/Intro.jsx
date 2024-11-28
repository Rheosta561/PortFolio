import React from "react";
import { Typewriter } from "react-simple-typewriter";
function scrollToNav(e) {
    e.preventDefault(); // Prevent the default anchor behavior
  
    const target = document.getElementById('nav');
    if (target) {
      // Scroll smoothly to the target section
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

function Intro() {
  return (
    <div className="h-screen dark:bg-zinc-950 w-screen bg-blue-700 flex flex-col items-center justify-center p-4 ">
      <div className="text-9xl font-semibold bg-gradient-to-r from-indigo-900 to-teal-500 dark:from-zinc-100 dark:to-zinc-700 bg-clip-text text-transparent home">
        Hello
      </div>

      <div className="text-lg text-gray-400">Hi there, Welcome to my portfolio</div>
      <div className="dark:text-gray-500 text-sm">I’m delighted to have you here!</div>
      <br />
      <hr className="border w-1/3 border-zinc-700" />
      <br />

      <div className="dark:text-zinc-50 text-3xl sm:text-5xl md:text-7xl">
        <Typewriter
          words={[
            "A Full Stack Developer",
            "A UI Designer",
            "A Music Producer",
          ]}
          loop={Infinity} 
          cursor
          cursorStyle="|"
          typeSpeed={70} 
          deleteSpeed={50} // Deleting speed
          delaySpeed={1000} 
        />
      </div>
      <br />
      <br />
      {/* <div className=" h-44 min-w-96 w-fit p-4 dark:text-zinc-300 text-center text-sm">
      Thank you for taking the time to visit my portfolio. Here, you’ll find a showcase of my expertise in full-stack development, leveraging the power of MongoDB, Express.js, React.js, and Node.js (MERN). This space highlights my journey, projects, and innovations in building scalable, efficient, and user-friendly web applications.

Feel free to explore the projects I’ve crafted, each reflecting my commitment to clean code, modern design, and seamless functionality. I’m thrilled to share my work with you, and I look forward to any opportunities for collaboration or feedback.
      </div> */}
      <a href="#nav" onClick={scrollToNav}>
      <div className=" h-12 w-32 rounded-full md:w-36 dark:bg-gray-200 flex justify-center items-center text-lg text-zinc-800 ">
        Get Started
      </div>
      </a>
      <br />
      <br />
      <br />
      <br />

      <div className=" h-14 w-48 p-2 flex justify-center gap-2  ">
  <div className="h-full w-1/4  rounded-full flex justify-center  items-center">
    <a href="https://www.linkedin.com/in/anubhav-mishra-2b8175285/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin text-xl text-zinc-600 scale-125"></i>
    </a>
  </div>
  <div className="h-full w-1/4  rounded-full flex justify-center items-center">
    <a href="https://github.com/Rheosta561" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github text-xl text-zinc-600 scale-125"></i>
    </a>
  </div>
  <div className="h-full w-1/4 rounded-full flex justify-center items-center">
    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-youtube text-xl scale-125 text-zinc-600"></i>
    </a>
  </div>
  <div className="h-full w-1/4  rounded-full flex justify-center items-center">
  <a href="mailto:manubhav731@gmail.com" target="_blank" rel="noopener noreferrer">
    <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-zinc-50 bg-zinc-600 rounded-lg">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
    </svg>
  </a>
</div>


</div>

     
    </div>
  );
}

export default Intro;
