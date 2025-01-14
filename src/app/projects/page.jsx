import { FaTools, FaRegClock } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        {/* Maintenance Icon */}
        <div className="flex justify-center">
          <FaTools className="text-red-600 text-6xl mb-4 animate-pulse" />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Under Maintenance
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg mb-6">
          We're working hard to bring you something amazing. Please check back
          soon!
        </p>

        {/* Countdown or Progress Indicator */}
        <div className="flex items-center justify-center space-x-2 text-gray-600">
          <FaRegClock className="text-xl" />
          <span>Coming Soon</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;