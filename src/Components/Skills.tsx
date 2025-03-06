"use client";
import { motion } from "framer-motion";

const Skills = () => {
  // Skills data
  const skills = [
    { name: "HTML", level: 95, color: "#E34F26" },
    { name: "CSS", level: 90, color: "#1572B6" },
    { name: "JavaScript", level: 75, color: "#F7DF1E" },
    { name: "TypeScript", level: 85, color: "#3178C6" },
    { name: "Next.js", level: 90, color: "#000000" },
    { name: "React.js", level: 85, color: "#61DAFB" },
    { name: "Tailwind CSS", level: 90, color: "#06B6D4" },
    { name: "Python", level: 70, color: "#3776AB" },
    { name: "Agentic AI", level: 35, color: "#FF6384", inProgress: true }, // In progress
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gray-100 dark:bg-gray-900" id="Skills">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10 dark:opacity-20"></div>

      {/* Section Title */}
      <div className="relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          My Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300"
        >
          Here are some of the technologies I work with.
        </motion.p>
      </div>

      {/* Skills Grid */}
      <div className="relative z-10 mt-12 px-4 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {skill.name}
              </h3>
              {skill.inProgress && (
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  In Progress
                </span>
              )}
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: skill.color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              {skill.level}% proficiency
            </p>
          </motion.div>
        ))}
      </div>

      {/* Floating Icons Animation */}
      {skills.map((skill, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: -100, x: Math.random() * 1000 - 500 }}
          animate={{
            opacity: [0, 1, 0],
            y: window.innerHeight,
            x: Math.random() * 1000 - 500,
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          className="absolute w-8 h-8 flex items-center justify-center rounded-full shadow-lg"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: skill.color,
          }}
        >
          <span className="text-white text-lg">{skill.name[0]}</span>
        </motion.div>
      ))}
    </section>
  );
};

export default Skills;