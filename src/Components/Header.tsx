// components/Header.tsx
"use client"; // Ensure this is a client component
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode based on system preference or localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const menuVariants = {
    open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
    closed: { opacity: 0, x: "100%", transition: { duration: 0.2 } },
  };

  const linkVariants = {
    hover: { scale: 1.1, color: "#3B82F6", transition: { duration: 0.3 } },
  };

  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-md z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Portfolio Name */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-gray-800 dark:text-white"
        >
          Ahmed Portfolio
        </motion.div>

        {/* Dark Mode Toggle and Hamburger Menu */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className="text-xl text-gray-800 dark:text-white cursor-pointer"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </motion.div>

          {/* Hamburger Menu Icon */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
            className="z-50 text-2xl text-gray-800 dark:text-white cursor-pointer lg:hidden"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-8">
          <motion.a
            href="/"
            whileHover="hover"
            variants={linkVariants}
            className="text-gray-800 dark:text-white hover:text-blue-500"
          >
            Home
          </motion.a>
          <motion.a
            href="#Features"
            whileHover="hover"
            variants={linkVariants}
            className="text-gray-800 dark:text-white hover:text-blue-500"
          >
            Why Choose Me?
          </motion.a>
          <motion.a
            href="#Skills"
            whileHover="hover"
            variants={linkVariants}
            className="text-gray-800 dark:text-white hover:text-blue-500"
          >
            Skills
          </motion.a>
          <motion.a
            href="#Projects"
            whileHover="hover"
            variants={linkVariants}
            className="text-gray-800 dark:text-white hover:text-blue-500"
          >
            Projects
          </motion.a>
          <motion.a
            href="#Contact"
            whileHover="hover"
            variants={linkVariants}
            className="text-gray-800 dark:text-white hover:text-blue-500"
          >
            Contact
          </motion.a>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed top-0 z-50 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg lg:hidden"
            >
              <div className="flex flex-col space-y-6 p-8">
                <motion.a
                  href="/"
                  whileHover="hover"
                  variants={linkVariants}
                  className="text-gray-800 dark:text-white hover:text-blue-500"
                >
                  Home
                </motion.a>
                <motion.a
                  href="#Features"
                  whileHover="hover"
                  variants={linkVariants}
                  className="text-gray-800 dark:text-white hover:text-blue-500"
                >
                  Why Choose Me?
                </motion.a>
                <motion.a
                  href="#Skills"
                  whileHover="hover"
                  variants={linkVariants}
                  className="text-gray-800 dark:text-white hover:text-blue-500"
                >
                  Skills
                </motion.a>
                <motion.a
                  href="#Projects"
                  whileHover="hover"
                  variants={linkVariants}
                  className="text-gray-800 dark:text-white hover:text-blue-500"
                >
                  Projects
                </motion.a>
                <motion.a
                  href="#Contact"
                  whileHover="hover"
                  variants={linkVariants}
                  className="text-gray-800 dark:text-white hover:text-blue-500"
                >
                  Contact
                </motion.a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;