"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Projects = () => {
  // Projects data
  const projects = [
    {
      title: "Minecraft Website",
      description: "A modern and responsive minecraft website showcasing my skills and projects.",
      image: "/project2.png", // Replace with your image path
      liveLink: "https://mine-craft-website.vercel.app/",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Minecraft Website(2)",
      description: "A fully functional minecraft website with user authentication and payment integration.",
      image: "/project1.png", // Replace with your image path
      liveLink: "https://shock-smp.vercel.app/",
      technologies: ["TailwindCSS", "Next.js", "Clerk", "Stripe"],
    },
    {
      title: "Ecommerce Platform",
      description: "A fully functional ecommerce website with user authentication and payment integration.",
      image: "/project3.png", // Replace with your image path
      liveLink: "https://final-hackathon-3-zzop.vercel.app/",
      technologies: ["Next.js", "Tailwind", "Typescript", "Stripe", "Clerk"],
    },
    {
      title: "Ecommerce Platform",
      description: "A fully functional ecommerce website",
      image: "/project4.png", // Replace with your image path
      liveLink: "https://hackathon3-sw9s.vercel.app/",
      technologies: ["Next.js", "React.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Restaurent Website",
      description: "A restaurent website with all functionalities.",
      image: "/project5.png", // Replace with your image path
      liveLink: "https://restaurent-web-u2bu.vercel.app/",
      technologies: ["Next.js", "Typescript", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Blog Website",
      description: "A blog website with live blogs and comment section.",
      image: "/project6.png", // Replace with your image path
      liveLink: "https://blog-assignment-pearl.vercel.app/",
      technologies: ["Next.js", "Typescript", "Tailwind CSS", "Framer Motion"],
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gray-50 dark:bg-gray-900" id="Projects">
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
          My Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300"
        >
          Here are some of the projects I've worked on.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 mt-12 px-4 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            {/* Project Image */}
            <div className="relative h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Icons Animation */}
      {[...Array(20)].map((_, i) => (
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
          className="absolute w-8 h-8 bg-blue-500 rounded-full shadow-lg"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </section>
  );
};

export default Projects;