"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedFeatures = () => {
  const controls = useAnimation();
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight);
    }
  }, [])

  // Infinite scroll animation for cards
  useEffect(() => {
    const scrollCards = async () => {
      while (true) {
        await controls.start({
          x: "-100%",
          transition: { duration: 20, ease: "linear" },
        });
        await controls.start({ x: "0%", transition: { duration: 0 } }); // Reset position
      }
    };

    scrollCards();
  }, [controls]);

  // Features data
  const features = [
    {
      title: "Modern Design",
      description: "Sleek and intuitive designs for a seamless user experience.",
      icon: "🎨",
    },
    {
      title: "High Performance",
      description: "Optimized for speed and efficiency, ensuring smooth performance.",
      icon: "⚡",
    },
    {
      title: "Responsive UI",
      description: "Fully responsive layouts that adapt to any device.",
      icon: "📱",
    },
    {
      title: "Dark/Light Mode",
      description: "Elegant themes for both dark and light preferences.",
      icon: "🌓", // Neutral icon for both modes
    },
    {
      title: "Scalable Solutions",
      description: "Built to grow with your needs, from small to large scale.",
      icon: "📈",
    },
    {
      title: "Interactive Animations",
      description: "Engaging animations that bring your content to life.",
      icon: "✨",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gray-50 dark:bg-gray-800" id="Features">
      {/* Background Gradient */}
      <div className="relative z-10 text-center mt-0">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Why Choose Me?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300"
        >
          We deliver cutting-edge solutions tailored to your needs.
        </motion.p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10 dark:opacity-20"></div>

      {/* Infinite Scrolling Cards */}
      <motion.div
        className="flex space-x-8"
        animate={controls}
        style={{ width: "200%" }} // Double width for seamless looping
      >
        {[...features, ...features].map((feature, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 w-64 mt-10 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg flex flex-col items-center text-center"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: -100, x: Math.random() * 1000 - 500 }}
          animate={{
            opacity: [0, 1, 0],
            y: windowHeight, // ✅ Fixed window issue
            x: Math.random() * 1000 - 500,
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          className="absolute w-2 h-2 bg-blue-500 rounded-full shadow-lg"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

    </section>
  );
};

export default AnimatedFeatures;