import Image from "next/image";

const Projects = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold text-center text-red-600 mb-12">
          My Projects
        </h1>
        <div className="space-y-12">
          <div className="flex flex-row items-center gap-8">
            <div className="w-1/3">
              <Image
                src="/Screenshot 2024-11-13 171841.png"
                alt="Games Store Project"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="w-2/3">
              <h2 className="text-2xl font-semibold text-gray-800">
                Games Store
              </h2>
              <p className="text-gray-600 mt-2">
                A dynamic e-commerce application designed for a seamless gaming
                shopping experience. Built using React and Tailwind CSS for the
                frontend and integrated with powerful backend technologies like
                Node.js and MongoDB. This project highlights my expertise in
                building responsive, user-friendly interfaces and scalable
                backend solutions.
              </p>
              <a
                href="https://github.com/YahiaDJOUADI/Games-Store"
                className="mt-4 inline-block text-red-600 hover:text-red-800 font-medium"
                target="_blank"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="flex flex-row items-center gap-8">
            <div className="w-1/3">
              <Image
                src="/Screenshot 2024-11-13 171539.png"
                alt="Weather App"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="w-2/3">
              <h2 className="text-2xl font-semibold text-gray-800">
                Weather App
              </h2>
              <p className="text-gray-600 mt-2">
                A sleek weather forecasting application built with modern
                frontend technologies. This project uses APIs to fetch real-time
                weather data, providing an interactive and visually appealing
                user experience. It highlights my ability to integrate APIs and
                build responsive user interfaces.
              </p>
              <a
                href="https://github.com/YahiaDJOUADI/weather-app"
                className="mt-4 inline-block text-red-600 hover:text-red-800 font-medium"
                target="_blank"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="flex flex-row items-center gap-8">
            <div className="w-1/3">
              <Image
                src="/Screenshot 2024-11-13 171002.png"
                alt="Fifa Cards Project"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="w-2/3">
              <h2 className="text-2xl font-semibold text-gray-800">
                FIFA Cards
              </h2>
              <p className="text-gray-600 mt-2">
                A dynamic full-stack web application that replicates FIFA card
                displays. This project showcases both frontend and backend
                expertise, utilizing technologies like React, Node.js, and
                MongoDB.
              </p>
              <a
                href="https://github.com/YahiaDJOUADI/Fifa-Cards"
                target="_blank"
                className="mt-4 inline-block text-red-600 hover:text-red-800 font-medium"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="flex flex-row items-center gap-8">
            <div className="w-1/3">
              <Image
                src="/IMG_0191.jpeg"
                alt="Pets App Project"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="w-2/3">
              <h2 className="text-2xl font-semibold text-gray-800">Pets App</h2>
              <p className="text-gray-600 mt-2">
                A pet management application allowing users to view, add, and
                manage pet details. This full-stack project combines a modern
                React frontend with a robust Node.js and MongoDB backend.
              </p>
              <a
                href="https://github.com/YahiaDJOUADI/Pets-App"
                target="_blank"
                className="mt-4 inline-block text-red-600 hover:text-red-800 font-medium"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
