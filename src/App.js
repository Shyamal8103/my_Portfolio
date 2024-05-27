import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import SocialLinks from "./Components/SocialLinks";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import ContactUs from "./Components/ContactUs";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Skills />
      <Projects />
      <ContactUs />
    </div>
  );
}

export default App;
