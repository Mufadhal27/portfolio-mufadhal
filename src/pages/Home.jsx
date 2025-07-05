import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import FunFacts from "../components/FunFacts"; 
import Skills from "../components/Skills";
import Projects from "../components/Projects"; 
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
    return (
    <>
    {/* <Navbar /> */}
    <Hero />
    <About />
    <FunFacts />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </>
    )
}

export default Home;