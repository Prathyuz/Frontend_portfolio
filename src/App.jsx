// src/App.jsx
import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import CustomCursor from "./components/CustomCursor";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-quart",
      once: false,
    });
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Animated Particles Background */}
      <ParticleBackground />
      <CustomCursor />

      {/* Gradient Scroll Indicator */}
      <motion.div
        // className="fixed top-0 left-0 right-0 h-2 z-50 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"
        style={{ scaleX }}
      />

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />

      {/* Floating Cursor Trailer */}
      <div className="cursor-trailer fixed w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference bg-white"></div>
    </div>
  );
}

export default App;
