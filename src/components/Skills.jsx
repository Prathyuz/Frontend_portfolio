import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  { name: "React", color: "#61DAFB", level: 90 },
  { name: "JavaScript", color: "#F7DF1E", level: 85 },
  { name: "CSS/Tailwind", color: "#2965F1", level: 95 },
  { name: "HTML", color: "#68A063", level: 80 },
  { name: "Poster Design", color: "#A259FF", level: 85 },
//   { name: "", color: "#049EF4", level: 70 },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Floating gradient circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-pink-500 opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-cyan-500 opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
            My Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies I've mastered to create stunning digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="flex flex-col items-center"
            >
              <motion.div
                className="w-24 h-24 rounded-2xl flex items-center justify-center mb-4 relative overflow-hidden"
                style={{ backgroundColor: `${skill.color}20` }}
                animate={{
                  rotateY: hoveredSkill === index ? 180 : 0,
                  scale: hoveredSkill === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ opacity: hoveredSkill === index ? 0 : 1 }}
                >
                  {skill.name}
                </motion.div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black rounded-2xl"
                  style={{ color: skill.color }}
                  initial={{ opacity: 0, rotateY: 180 }}
                  animate={{ opacity: hoveredSkill === index ? 1 : 0 }}
                >
                  {skill.level}%
                </motion.div>
              </motion.div>

              <div className="w-full bg-gray-800 rounded-full h-2">
                <motion.div
                  className="h-2 rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
