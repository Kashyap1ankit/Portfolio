import "./App.css";
import NavBar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Project from "./components/Project";
function App() {
  // smaller screen(640) -  yellow
  // medium  screen(641-768) - blue
  // large -(768-1024) - green
  // xl (1024-1280) - red
  return (
    <div className="container scroll-smooth">
      <div className="mt-4">
        <NavBar />
      </div>
      <div className="mt-44 ml-10">
        <Intro />
      </div>

      <div className="mt-44 text-center">
        <About />
      </div>

      <div className="mt-36 mb-12 text-center">
        <Project />
      </div>
    </div>
  );
}

export default App;
