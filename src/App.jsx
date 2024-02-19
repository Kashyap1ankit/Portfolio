import "./App.css";
import NavBar from "./components/Navbar";
import Intro from "./components/Intro";
function App() {
  // smaller screen(640) -  yellow
  // medium  screen(641-768) - blue
  // large -(768-1024) - green
  // xl (1024-1280) - red
  return (
    <div className="container">
      <div>
        <NavBar />
      </div>
      <div className="mt-44 ml-10">
        <Intro />
      </div>
    </div>
  );
}

export default App;
