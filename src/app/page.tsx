import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import ProblemSolving from "@/components/sections/ProblemSolving";
import Highlights from "@/components/sections/Highlights";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Highlights />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <ProblemSolving />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
