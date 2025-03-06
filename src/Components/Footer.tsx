"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative py-8 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10 dark:opacity-20"></div>

      {/* Footer Content */}
      <div className="relative z-10 text-center">
        {/* Copyright Notice */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm text-gray-600 dark:text-gray-300"
        >
          © {new Date().getFullYear()} Ahmed Memon. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;