import "./App.css";
import NavBar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Project from "./components/Project";
import Side from "./components/Side";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

function App() {
  // smaller screen(640) -  yellow
  // medium  screen(641-768) - blue
  // large -(768-1024) - green
  // xl (1024-1280) - red

  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  function aboutScroll() {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function projectScroll() {
    projectRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <div className="container">
      <div className="mt-4">
        <NavBar handleEvent={[aboutScroll, projectScroll]} />
      </div>

      <motion.div
        className="mt-44 ml-10"
        initial={{ opacity: 0.4 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <Intro />
      </motion.div>

      <motion.div
        className="mt-44 text-center"
        ref={aboutRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
      >
        <About />
      </motion.div>

      <div className="mt-36 mb-12 text-center" ref={projectRef}>
        <Project />
      </div>

      <div className="">
        <Side />
      </div>
    </div>
  );
}

export default App;
