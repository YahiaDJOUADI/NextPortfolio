import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-red-600 mb-12">
          About Me
        </h1>
        <div className="flex items-center justify-center">
          <div className="w-1/3 mb-8">
            <Image
              src="/IMG_3750.jpeg"
              alt="Yahia Djouadi"
              width={300}
              height={300}
              className="rounded-full border-8 border-red-600 shadow-xl"
            />
          </div>
          <div className="w-2/3 pl-10">
            <p className="text-lg text-gray-800 leading-relaxed">
              Hello! I'm Yahia Djouadi, a passionate Full Stack Developer with a
              strong foundation in both frontend and backend technologies. I
              focus on building clean, modern, and efficient web applications
              that deliver seamless user experiences.
            </p>
            <p className="text-lg text-gray-800 mt-6 leading-relaxed">
              With expertise in technologies like React, Node.js, Express, and
              MongoDB, I build dynamic applications from the ground up. I am
              always eager to stay updated with new tools, frameworks, and
              trends to bring innovative solutions to my work.
            </p>
            <p className="text-lg text-gray-800 mt-6 leading-relaxed">
              I honed my skills at{" "}
              <strong className="text-red-600">GOMYCODE Algeria</strong>, where
              I completed rigorous training in full-stack web development. This
              experience gave me the practical skills and real-world knowledge
              to succeed in the tech industry.
            </p>
            <p className="text-lg text-gray-800 mt-6 leading-relaxed">
              I am excited to collaborate on projects and turn creative ideas
              into fully functional and beautiful web solutions. Let's connect
              and build something amazing together!
            </p>

            <div className="mt-8 text-center">
              <Link
                className="bg-transparent border-2 border-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-red-600 hover:text-white hover:scale-105"
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
