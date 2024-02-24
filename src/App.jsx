import "./App.css";
import NavBar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Project from "./components/Project";
import Side from "./components/Side";
import { motion } from "framer-motion";
import { useRef } from "react";
import Skill from "./components/Skill";
import { RecoilRoot } from "recoil";

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
    "SQL",
    "MongoDb",
    "MySQL",
    "Npm",
    "Git",
    "Restful Apis",
  ];

  return (
    <RecoilRoot>
      <div className="container sm:px-0 overflow-x-hidden ">
        {/* Navbar section  */}
        <div className="lg:mt-4 lg:w-4/5 ">
          <NavBar handleEvent={[aboutScroll, projectScroll, skillScroll]} />
        </div>

        {/* Introduction Part  */}

        <motion.div
          className="lg:mt-28 lg:max-w-11/12 sm:mt-0"
          initial={{ opacity: 0.4 }}
          animate={{ scale: 0.9, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <Intro />
        </motion.div>

        {/* About section  */}

        <motion.div
          className="lg:mt-44 xsm:mt-24 text-center"
          ref={aboutRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
        >
          <About />
        </motion.div>

        {/* Project Section  */}

        <div
          className="lg:mt-36 xsm:mt-24 lg:mb-12 xsm:mb-12 text-center"
          ref={projectRef}
        >
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
          className="bg-gray sm:size-12 sm:fixed sm:top-52 sm:left-80 sm:h-fit xsm:fixed xsm:bottom-0 xsm:left-0 xsm:w-full xsm:size-12"
        >
          <Side />
        </motion.div>
      </div>
    </RecoilRoot>
  );
}

export default App;
