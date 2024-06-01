import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import SocialLinks from "./Components/SocialLinks";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import ContactUs from "./Components/ContactUs";
// import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialLinks />
      {/* <Routes> */}
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact me">
        <ContactUs />
      </section>
      {/* <Route path={"/" || "home"} element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact me" element={<ContactUs />} /> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
