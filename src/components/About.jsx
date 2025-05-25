import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const [activeTab, setActiveTab] = useState("bio");
  const [hoveredTech, setHoveredTech] = useState(null);

  const techStack = [
    { name: "React", color: "#61DAFB", icon: "⚛️" },
    { name: "javascript", color: "#3178C6", icon: "📘" },
    { name: "CSS/Tailwind", color: "#68A063", icon: "🟢" },
    { name: "HTML", color: "#E535AB", icon: "📊" },
    { name: "Framer Motion", color: "#0055FF", icon: "🎬" },
    { name: "Poster Design", color: "#049EF4", icon: "🧊" },
  ];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 overflow-hidden bg-gradient-to-b from-black to-purple-900/20"
    >
      {/* Floating gradient orbs */}
      <div
        className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-pink-500/10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, rgba(0,0,0,0) 70%)",
        }}
      ></div>
      <div
        className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, rgba(0,0,0,0) 70%)",
        }}
      ></div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5 pattern-grid-lg text-cyan-400/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400"
              style={{
                backgroundImage: "linear-gradient(45deg, #22d3ee, #ec4899)",
              }}
            >
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The creative mind behind these digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative perspective-1000"
          >
            <motion.div
              className="relative bg-gray-800/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-cyan-400/20 shadow-lg shadow-cyan-400/10"
              style={{
                backdropFilter: "blur(16px)",
                backgroundColor: "rgba(31, 41, 55, 0.5)",
              }}
              whileHover={{ y: -5 }} // Simpler hover effect
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Profile image placeholder - reduced animation */}
              <div
                className="aspect-square flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(34, 211, 238, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)",
                }}
              >
                <motion.div
                  className="text-9xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  👨‍💻
                </motion.div>
              </div>

              {/* Optimized tech badges - fewer animations */}
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl cursor-pointer shadow-lg"
                    style={{
                      backgroundColor: `${tech.color}20`,
                      border: `2px solid ${tech.color}`,
                    }}
                    whileHover={{
                      y: -10, // Reduced movement
                      scale: 1.1,
                      backgroundColor: `${tech.color}30`,
                    }}
                    onHoverStart={() => setHoveredTech(index)}
                    onHoverEnd={() => setHoveredTech(null)}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {tech.icon}
                    {hoveredTech === index && (
                      <motion.span
                        className="absolute -top-8 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {tech.name}
                      </motion.span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Optimized particles - fewer and simpler */}
            {[...Array(8)].map(
              (
                _,
                i // Reduced from 15 to 8
              ) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-cyan-400"
                  style={{
                    width: `${Math.random() * 4 + 2}px`,
                    height: `${Math.random() * 4 + 2}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: 0.6,
                  }}
                  animate={{
                    y: [0, Math.random() * 20 - 10], // Reduced movement range
                    opacity: [0.3, 0.6, 0.3], // Simpler opacity change
                  }}
                  transition={{
                    duration: Math.random() * 8 + 4, // Slower movement
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              )
            )}
          </motion.div>

          {/* Interactive Bio Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-900/50 backdrop-blur-lg rounded-3xl p-8 border border-pink-400/20 shadow-lg shadow-pink-400/10"
            style={{
              backdropFilter: "blur(16px)",
              backgroundColor: "rgba(17, 24, 39, 0.5)",
            }}
          >
            <div className="flex space-x-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
              {["bio", "experience", "education"].map((tab) => (
                <motion.button
                  key={tab}
                  className={`px-4 py-2 rounded-full text-sm font-medium capitalize relative ${
                    activeTab === tab
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => setActiveTab(tab)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeTab === tab && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-full z-0"
                      style={{
                        background: "linear-gradient(45deg, #22d3ee, #ec4899)",
                      }}
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </motion.button>
              ))}
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="min-h-[300px]"
            >
              {activeTab === "bio" && (
                <div className="space-y-4">
                  <p className="text-gray-300">
                    I'm a passionate frontend developer with a designer's eye,
                    creating immersive digital experiences that blend form and
                    function.
                  </p>
                  <p className="text-gray-300">
                    My journey began 5 years ago when I built my first website.
                    Since then, I've worked with startups and agencies to bring
                    their visions to life.
                  </p>
                  <p className="text-gray-300">
                    When I'm not coding, you'll find me experimenting with 3D
                    animation, playing synthwave, or exploring VR development.
                  </p>
                </div>
              )}

              {activeTab === "experience" && (
                <div className="space-y-6">
                  {[
                    {
                      role: "Senior Frontend Developer",
                      company: "Neon Digital",
                      period: "2021 - Present",
                      description:
                        "Leading UI development for enterprise clients",
                    },
                    {
                      role: "UI Engineer",
                      company: "Pixel Forge",
                      period: "2019 - 2021",
                      description:
                        "Built interactive dashboards and design systems",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="relative pl-8 border-l-2 border-cyan-400/30"
                      whileHover={{ x: 5 }}
                    >
                      <div
                        className="absolute -left-1.5 w-3 h-3 rounded-full"
                        style={{
                          background:
                            "linear-gradient(45deg, #22d3ee, #ec4899)",
                        }}
                      ></div>
                      <h3 className="text-xl font-medium text-cyan-400">
                        {item.role}
                      </h3>
                      <p className="text-gray-400">
                        {item.company} • {item.period}
                      </p>
                      <p className="text-gray-300 mt-2">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === "education" && (
                <div className="space-y-6">
                  {[
                    {
                      degree: "B.Sc Computer Science",
                      institution: "Tech University",
                      period: "2015 - 2019",
                    },
                    {
                      degree: "Advanced UI/UX Design",
                      institution: "Design Institute",
                      period: "2020",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="relative pl-8 border-l-2 border-pink-400/30"
                      whileHover={{ x: 5 }}
                    >
                      <div
                        className="absolute -left-1.5 w-3 h-3 rounded-full"
                        style={{
                          background:
                            "linear-gradient(45deg, #ec4899, #22d3ee)",
                        }}
                      ></div>
                      <h3 className="text-xl font-medium text-pink-400">
                        {item.degree}
                      </h3>
                      <p className="text-gray-400">
                        {item.institution} • {item.period}
                      </p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
