import { FaReact, FaNode, FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";
import { DiMongodb, DiJavascript1 } from "react-icons/di"; // this package is for the skills icons i got this idea from portfolio templates sir
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <section className="relative w-full h-screen bg-red-600 text-white flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 px-6 sm:px-12 max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-white p-2 rounded-full">
              <img
                src="/DY.png"
                alt="Yahia Djouadi Logo"
                className="h-32 w-32 rounded-full border-4 border-white"
              />
            </div>
          </div>

          <h1 className="text-5xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-red-300 mb-6">
            Hi, I'm Yahia Djouadi
          </h1>

          <p className="text-xl  mb-8 font-light max-w-3xl mx-auto">
            Creating Innovative Solutions | Web Development That Speaks for
            Itself | Let's Turn Your Ideas into Reality
          </p>

          <div className="flex justify-center gap-8">
            <Link
              href="/about"
              className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-red-600 hover:text-white hover:scale-105"
            >
              Learn More About Me
            </Link>
            <Link
              href="/projects"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-white hover:text-red-600 hover:scale-105"
            >
              View My Projects
            </Link>
          </div>
        </div>
      </section>
      {/*skills section */}
      <section className="py-16 bg-white text-gray-900">
        <h2 className="text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
          My Skills
        </h2>
        <p className="text-center text-md text-gray-800 max-w-3xl mx-auto mb-6">
          I'm a <strong className="text-red-600">highly skilled</strong> web
          developer, mastering the{" "}
          <strong className="text-red-600">latest technologies</strong> to build{" "}
          <strong className="text-red-600">dynamic</strong>, cutting-edge web
          solutions. I create{" "}
          <strong className="text-red-600">impactful</strong> digital
          experiences with <strong className="text-red-600">precision</strong>{" "}
          and <strong className="text-red-600">expertise</strong>.
        </p>

        <div className="grid grid-cols-4 gap-10 px-6 md:px-20">
          <div className="skill-card group relative p-8 bg-gray-50 shadow-xl rounded-xl hover:shadow-2xl transition duration-300 hover:bg-red-50">
            <div className="icon bg-gray-100 p-6 rounded-full mb-4">
              <FaHtml5 className="text-5xl text-orange-600 group-hover:text-red-600 transition duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-red-600">HTML5</h3>
            <p className="text-gray-700 group-hover:text-red-700 transition duration-300">
              Creating semantic and accessible web structures using modern HTML
              elements.
            </p>
            <p className="text-gray-700 group-hover:text-red-700 transition duration-300">
              Built using Tailwind CSS
            </p>
          </div>

          <div className="skill-card group relative p-8 bg-gray-50 shadow-xl rounded-xl hover:shadow-2xl transition duration-300 hover:bg-red-50">
            <div className="icon bg-gray-100 p-6 rounded-full mb-4">
              <FaCss3Alt className="text-5xl text-blue-600 group-hover:text-red-600 transition duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-red-600">CSS3</h3>
            <p className="text-gray-700 group-hover:text-red-700 transition duration-300">
              Crafting responsive, mobile-first designs with Flexbox, Grid, and
              animations.
            </p>
            <p className="text-gray-700 group-hover:text-red-700 transition duration-300">
              Built using Tailwind CSS
            </p>
          </div>

          <div className="skill-card group relative p-8 bg-gray-50 shadow-xl rounded-xl hover:shadow-2xl transition duration-300 hover:bg-red-50">
            <div className="icon bg-gray-100 p-6 rounded-full mb-4">
              <FaJs className="text-5xl text-yellow-500 group-hover:text-red-600 transition duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-red-600">
              JavaScript
            </h3>
            <p className="text-gray-700 group-hover:text-red-700 transition duration-300">
              Building dynamic and interactive web applications with vanilla JS
              and ES6 features.
            </p>
            <p className="text-gray-700 group-hover:text-red-700 transition duration-300">
              Built using Tailwind CSS
            </p>
          </div>

          <div className="skill-card group relative p-8 bg-gray-50 shadow-xl rounded-xl hover:shadow-2xl transition duration-300 hover:bg-red-50">
            <div className="icon bg-gray-100 p-6 rounded-full mb-4">
              <FaReact className="text-5xl text-blue-500 group-hover:text-red-600 transition duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-red-600">React</h3>
            <p className="text-gray-700 group-hover:text-red-700 transition duration-300">
              Building dynamic, high-performance user interfaces with React and
              its ecosystem.
            </p>
            <p className="text-gray-700 group-hover:text-red-700 transition duration-300">
              Built using Tailwind CSS
            </p>
          </div>

          <div className="skill-card group relative p-8 bg-gray-50 shadow-xl rounded-xl hover:shadow-2xl transition duration-300 hover:bg-red-50">
            <div className="icon bg-gray-100 p-6 rounded-full mb-4">
              <FaNode className="text-5xl text-green-500 group-hover:text-red-600 transition duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-red-600">Node.js</h3>
            <p className="text-gray-700 group-hover:text-red-700 transition duration-300">
              Building efficient, scalable server-side applications using
              Node.js and Express.js.
            </p>
            <p className="text-gray-700 group-hover:text-red-700 transition duration-300">
              Built using Tailwind CSS
            </p>
          </div>

          <div className="skill-card group relative p-8 bg-gray-50 shadow-xl rounded-xl hover:shadow-2xl transition duration-300 hover:bg-red-50">
            <div className="icon bg-gray-100 p-6 rounded-full mb-4">
              <DiMongodb className="text-5xl text-green-700 group-hover:text-red-600 transition duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-red-600">MongoDB</h3>
            <p className="text-gray-700 group-hover:text-red-700 transition duration-300">
              Managing data with MongoDB, a flexible NoSQL database for modern
              applications.
            </p>
            <p className="text-gray-700 group-hover:text-red-700 transition duration-300">
              Built using Tailwind CSS
            </p>
          </div>

          <div className="skill-card group relative p-8 bg-gray-50 shadow-xl rounded-xl hover:shadow-2xl transition duration-300 hover:bg-red-50">
            <div className="icon bg-gray-100 p-6 rounded-full mb-4">
              <DiJavascript1 className="text-5xl text-yellow-500 group-hover:text-red-600 transition duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-red-600">ES6</h3>
            <p className="text-gray-700 group-hover:text-red-700 transition duration-300">
              Using modern JavaScript (ES6+) features like async/await,
              promises, and arrow functions.
            </p>
            <p className="text-gray-700 group-hover:text-red-700 transition duration-300">
              Built using Tailwind CSS
            </p>
          </div>

          <div className="skill-card group relative p-8 bg-gray-50 shadow-xl rounded-xl hover:shadow-2xl transition duration-300 hover:bg-red-50">
            <div className="icon bg-gray-100 p-6 rounded-full mb-4">
              <img
                src="/nextjs-logo.png"
                alt="Next.js"
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-red-600">Next.js</h3>
            <p className="text-gray-700 group-hover:text-red-700 transition duration-300">
              A framework for fast, server-rendered React applications with
              excellent SEO capabilities.
            </p>
            <p className="text-gray-700 group-hover:text-red-700 transition duration-300">
              Built using Tailwind CSS
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
