import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="bg-white py-8 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-red-600 mb-8 sm:mb-12">
          About Me
        </h1>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0 flex justify-center">
            <Image
              src="/IMG_3750.jpeg"
              alt="Yahia Djouadi"
              width={300}
              height={300}
              className="rounded-full border-8 border-red-600 shadow-xl w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-2/3 lg:pl-12">
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              Hello! I'm Yahia Djouadi, a passionate Full Stack Developer with a
              strong foundation in both frontend and backend technologies. I
              focus on building clean, modern, and efficient web applications
              that deliver seamless user experiences.
            </p>
            <p className="text-base sm:text-lg text-gray-800 mt-4 sm:mt-6 leading-relaxed">
              With expertise in technologies like React, Node.js, Express, and
              MongoDB, I build dynamic applications from the ground up. I am
              always eager to stay updated with new tools, frameworks, and
              trends to bring innovative solutions to my work.
            </p>
            <p className="text-base sm:text-lg text-gray-800 mt-4 sm:mt-6 leading-relaxed">
              I honed my skills at{" "}
              <strong className="text-red-600">GOMYCODE Algeria</strong>, where
              I completed rigorous training in full-stack web development. This
              experience gave me the practical skills and real-world knowledge
              to succeed in the tech industry.
            </p>
            <p className="text-base sm:text-lg text-gray-800 mt-4 sm:mt-6 leading-relaxed">
              I am excited to collaborate on projects and turn creative ideas
              into fully functional and beautiful web solutions. Let's connect
              and build something amazing together!
            </p>

            {/* Contact Button */}
            <div className="mt-6 sm:mt-8 text-center lg:text-left">
              <Link
                className="inline-block bg-transparent border-2 border-red-600 text-red-600 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-red-600 hover:text-white hover:scale-105"
                href="/contact"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;