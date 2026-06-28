import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CodingProfiles from "./components/CodingProfiles";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import TechMarquee from "./components/TechMarquee";
import ScrollProgress from "./components/ScrollProgress";
import Stats from "./components/Stats";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
    <ScrollProgress />
      <Navbar />
      <Hero />
      <Stats />
      <TechMarquee />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <CodingProfiles />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
      {/* <ScrollToTop /> */}
      
    </>
  );
}

export default App;