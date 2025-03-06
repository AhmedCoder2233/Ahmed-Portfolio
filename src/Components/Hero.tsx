"use client";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

// Load Poppins font
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Language icons with their official colors
const languages = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState("Full Stack Web Developer");
  const controls = useAnimation();

  // Text rotation animation
  useEffect(() => {
    const roles = ["Full Stack Web Developer", "Frontend Developer", "Backend Developer"];
    let index = 0;

    const rotateText = async () => {
      while (true) {
        await controls.start({ opacity: 0, y: 20, transition: { duration: 0.5 } });
        setCurrentRole(roles[index]);
        await controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait 2 seconds
        index = (index + 1) % roles.length;
      }
    };

    rotateText();
  }, [controls]);

  // Gradient wave animation variants
  const waveVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className={`relative h-[630px] sm:h-[570px] flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-900 ${poppins.className}`}>
      {/* Gradient Wave Background Animation */}
      <motion.div
        className="absolute inset-0 flex space-x-4"
        variants={waveVariants}
        animate="animate"
      >
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[1000px] h-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-10"
          />
        ))}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Big Man Image (Top on Mobile, Right on Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="order-1 md:order-2 w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
            <Image
              src="/man.png" // Replace with your image path
              alt="Ahmed"
              fill
              className="rounded-full border-8 border-white dark:border-gray-800 shadow-2xl object-cover"
            />
            {/* Floating Stars Animation */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.8 + i * 0.2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  repeatDelay: 1,
                }}
                className="absolute w-4 h-4 bg-white rounded-full shadow-lg"
                style={{
                  top: `${Math.random() * 80 + 10}%`,
                  left: `${Math.random() * 80 + 10}%`,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Text Content (Bottom on Mobile, Left on Desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="order-2 md:order-1 text-left md:w-1/2 mt-8 md:mt-0"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Hi, I&apos;m <span className="text-blue-500">Ahmed</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-8"
          >
            A passionate{" "}
            <motion.span
              animate={controls}
              className="font-semibold text-blue-500"
            >
              {currentRole}
            </motion.span>{" "}
            dedicated to building modern, scalable, and user-friendly web applications.
          </motion.p>
          <motion.a
            href="#Projects"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors shadow-lg"
          >
            View My Work
          </motion.a>
        </motion.div>
      </div>

      {/* Language Icons Animation */}
      {languages.map((lang, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: -100, x: Math.random() * 1000 - 500 }}
          animate={{ opacity: 1, y: window.innerHeight, x: Math.random() * 1000 - 500 }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          className="absolute w-10 h-10 rounded-full shadow-lg flex items-center justify-center"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: "rgba(255, 255, 255, 0.9)", // Add a semi-transparent white background
            zIndex: 1, // Ensure icons are above the gradient wave
          }}
        >
          <lang.icon className="w-6 h-6" style={{ color: lang.color }} />
        </motion.div>
      ))}
    </section>
  );
};

export default Hero;