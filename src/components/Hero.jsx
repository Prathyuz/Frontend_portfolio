import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const Hero = () => {
  const textRef = useRef(null);
  const colors = ["#1E3A8A", "#10B981", "#F59E0B", "#EF4444", "#6B7280"];
  // In your useEffect
  // const projects = document.querySelectorAll(".project-card");
  // projects.forEach((el) => {
  //   el.addEventListener("mouseenter", () => setIsHoveringProject(true));
  //   el.addEventListener("mouseleave", () => setIsHoveringProject(false));
  // });
  // const trailCount = 5;
  // const trails = Array(trailCount).fill(0);

  // // In your return
  // {
  //   trails.map((_, i) => (
  //     <motion.div
  //       key={i}
  //       className="fixed w-4 h-4 rounded-full bg-white pointer-events-none z-40 mix-blend-difference opacity-20"
  //       style={{
  //         left: useTransform(smoothMouse.x, (x) => x - i * 3),
  //         top: useTransform(smoothMouse.y, (y) => y - i * 3),
  //         scale: 1 - i / trailCount,
  //       }}
  //     />
  //   ));
  // }
  useEffect(() => {
    const letters = textRef.current.querySelectorAll("span");

    letters.forEach((letter, i) => {
      letter.style.color = colors[i % colors.length];
      letter.style.animation = `glow 2s ease-in-out infinite ${i * 0.1}s`;
    });
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden font-sans"
    >
      {/* Gradient Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-pink-900/20 opacity-90"></div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Glitch Text Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <h1 className="text-6xl md:text-9xl font-bold mb-6">
              <span ref={textRef} className="glitch-text">
                {"Welcome".split("").map((char, i) => (
                  <span key={i} className="inline-block">
                    {char}
                  </span>
                ))}
              </span>
            </h1>

            {/* Glitch layers */}
            <div className="glitch-layers absolute top-0 left-0 w-full h-full">
              <div className="glitch-layer"></div>
              <div className="glitch-layer"></div>
            </div>
          </motion.div>

          {/* Animated Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-8 max-w-3xl mx-auto"
          >
            Creating digital experiences that pop with color and motion
          </motion.p>

          {/* Floating Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 rounded-full font-bold text-black bg-gradient-to-r from-cyan-400 to-pink-400 hover:from-pink-400 hover:to-yellow-400 transition-all duration-500 relative overflow-hidden group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </motion.a>

            <motion.a
              href="#contact"
              className="px-8 py-4 rounded-full font-bold border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:bg-opacity-10 transition-all duration-500 relative overflow-hidden group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="relative z-10">Contact Me</span>
              <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-pink-400 group-hover:animate-ping opacity-0 group-hover:opacity-100 transition-all duration-1000"></span>
            </motion.a>
          </motion.div>
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, 1, 0],
            y: [20, 0, -20],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-14 border-4 border-cyan-400 rounded-full flex justify-center">
            <motion.div
              animate={{
                y: [0, 10, 0],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-2 h-4 bg-cyan-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
