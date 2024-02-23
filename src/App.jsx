import "./App.css";
import NavBar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Project from "./components/Project";
import Side from "./components/Side";
import { motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import Skill from "./components/Skill";

function App() {
  // smaller screen(640) -  yellow
  // medium  screen(641-768) - blue
  // large -(768-1024) - green
  // xl (1024-1280) - red

  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const skillRef = useRef(null);

  function aboutScroll() {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function projectScroll() {
    projectRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function skillScroll() {
    skillRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const skills = [
    "Html",
    "Css",
    "Javascript",
    "React Js",
    "Tailwind Css",
    "Bootstrap",
    "Express Js",
    "Nodejs",
    "MongoDb",
    "MySQL",
    "Npm",
    "Git",
    "Restful Apis",
  ];

  return (
    <div className="container">
      {/* Navbar section  */}

      <div className="mt-4">
        <NavBar handleEvent={[aboutScroll, projectScroll, skillScroll]} />
      </div>

      {/* Introduction Part  */}

      <motion.div
        className="mt-44 ml-10"
        initial={{ opacity: 0.4 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <Intro />
      </motion.div>

      {/* About section  */}

      <motion.div
        className="mt-44 text-center"
        ref={aboutRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
      >
        <About />
      </motion.div>

      {/* Project Section  */}

      <div className="mt-36 mb-12 text-center" ref={projectRef}>
        <Project />
      </div>

      {/* Skills section  */}

      <div ref={skillRef}>
        <Skill skills={skills} />
      </div>

      {/* Fixed connect Button  */}

      <motion.div
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        className="bg-gray size-12 fixed top-52 right-0 h-fit h-1/3"
      >
        <Side />
      </motion.div>
    </div>
  );
}

export default App;
