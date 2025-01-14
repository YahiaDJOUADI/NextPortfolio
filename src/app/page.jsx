"use client";
import Link from "next/link";
import { FaReact, FaNode, FaCss3Alt, FaHtml5, FaJs, FaLinkedin } from "react-icons/fa";
import { DiMongodb, DiJavascript1 } from "react-icons/di";
import { motion } from "framer-motion";
import { Tab } from "@headlessui/react";

const Home = () => {
  // Define skill categories
  const categories = {
    Frontend: [
      { icon: <FaHtml5 className="text-5xl text-orange-600" />, title: "HTML5", description: "Creating semantic and accessible web structures using modern HTML elements.", proficiency: 95 },
      { icon: <FaCss3Alt className="text-5xl text-blue-600" />, title: "CSS3", description: "Crafting responsive, mobile-first designs with Flexbox, Grid, and animations.", proficiency: 90 },
      { icon: <FaJs className="text-5xl text-yellow-500" />, title: "JavaScript", description: "Building dynamic and interactive web applications with vanilla JS and ES6 features.", proficiency: 85 },
      { icon: <FaReact className="text-5xl text-blue-500" />, title: "React", description: "Building dynamic, high-performance user interfaces with React and its ecosystem.", proficiency: 90 },
    ],
    Backend: [
      { icon: <FaNode className="text-5xl text-green-500" />, title: "Node.js", description: "Building efficient, scalable server-side applications using Node.js and Express.js.", proficiency: 80 },
      { icon: <DiMongodb className="text-5xl text-green-700" />, title: "MongoDB", description: "Managing data with MongoDB, a flexible NoSQL database for modern applications.", proficiency: 75 },
    ],
    Tools: [
      { icon: <DiJavascript1 className="text-5xl text-yellow-500" />, title: "ES6", description: "Using modern JavaScript (ES6+) features like async/await, promises, and arrow functions.", proficiency: 85 },
      { icon: <img src="/nextjs-logo.png" alt="Next.js" className="w-16 h-16 object-contain" />, title: "Next.js", description: "A framework for fast, server-rendered React applications with excellent SEO capabilities.", proficiency: 90 },
    ],
  };

  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-red-600 text-white flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 px-4 sm:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="bg-white p-2 rounded-full">
                <img
                  src="/DY.png"
                  alt="Yahia Djouadi Logo"
                  className="h-24 w-24 sm:h-32 sm:w-32 rounded-full border-4 border-white"
                />
              </div>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-red-300 mb-4 sm:mb-6">
              Hi, I'm Yahia Djouadi
            </h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 font-light max-w-3xl mx-auto">
              Creating Innovative Solutions | Web Development That Speaks for Itself | Let's Turn Your Ideas into Reality
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
              <Link
                href="/about"
                className="bg-white text-red-600 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-red-600 hover:text-white hover:scale-105 active:scale-95"
              >
                Learn More About Me
              </Link>
              <Link
                href="/projects"
                className="bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-white hover:text-red-600 hover:scale-105 active:scale-95"
              >
                View My Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section with Tabs */}
      <section className="py-12 sm:py-16 bg-white text-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            My Skills
          </h2>
          <p className="text-center text-md sm:text-lg text-gray-800 max-w-3xl mx-auto mb-6">
            I'm a <strong className="text-red-600">highly skilled</strong> web developer, mastering the{" "}
            <strong className="text-red-600">latest technologies</strong> to build{" "}
            <strong className="text-red-600">dynamic</strong>, cutting-edge web solutions. I create{" "}
            <strong className="text-red-600">impactful</strong> digital experiences with{" "}
            <strong className="text-red-600">precision</strong> and{" "}
            <strong className="text-red-600">expertise</strong>.
          </p>

          {/* Tabs */}
          <Tab.Group>
            <Tab.List className="flex justify-center overflow-x-auto pb-2 space-x-2 sm:space-x-4 mb-6 sm:mb-8">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    `px-4 py-2 sm:px-6 sm:py-2 rounded-full text-sm sm:text-lg font-semibold focus:outline-none transition-all duration-300 ${
                      selected
                        ? "bg-red-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="px-4 sm:px-20">
              {Object.values(categories).map((skills, idx) => (
                <Tab.Panel key={idx}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="skill-card group relative p-6 sm:p-8 bg-gray-50 shadow-xl rounded-xl hover:shadow-2xl transition duration-300 hover:bg-red-50"
                      >
                        <div className="icon bg-gray-100 p-4 sm:p-6 rounded-full mb-4">
                          {skill.icon}
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-red-600">{skill.title}</h3>
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                          <div
                            className="bg-red-600 h-2 rounded-full"
                            style={{ width: `${skill.proficiency}%` }}
                          ></div>
                        </div>
                        <p className="text-sm sm:text-md text-gray-700 group-hover:text-red-700 transition duration-300">
                          {skill.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;