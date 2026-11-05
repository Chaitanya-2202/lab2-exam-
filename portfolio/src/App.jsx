import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <nav>
        <h2>My Portfolio</h2>

        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer>
        <p>© 2026 Chaitanya | My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;