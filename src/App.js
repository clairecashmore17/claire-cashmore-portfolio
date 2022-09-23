import "./App.css";
import Navbar from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <Navbar className="navbar"></Navbar>

      <main className="mainBody">
        <About></About>
        <Contact></Contact>
        <Projects></Projects>
      </main>
    </div>
  );
}

export default App;
