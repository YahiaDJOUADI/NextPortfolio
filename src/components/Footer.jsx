import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; //packege for social media icons

const Footer = () => {
  return (
    <footer className="bg-white py-8 shadow-md mt-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-start mb-6">
          <div className="space-y-2">
            <img
              className="h-14"
              src="/DY.png"
              alt="Yahia Djouadi Portfolio Logo"
            />
          </div>

          <div className="flex space-x-6">
            {/* About Us */}
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-red-600">About</h4>
              <p className="text-sm text-gray-700">
                A collection of web development projects showcasing expertise in
                React, Node.js, and more. Passionate about building clean and
                functional digital solutions.
              </p>
            </div>

            {/* Social Media */}
            <div className="space-y-2">
              <h4 className="text-lg font-medium text-black">Follow Us</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  aria-label="Follow us on Facebook"
                  className="text-black hover:text-red-600 transition-all duration-300 text-xl"
                >
                  <FaFacebookF className="hover:text-red-600" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  aria-label="Follow us on Twitter"
                  className="text-black hover:text-red-600 transition-all duration-300 text-xl"
                >
                  <FaTwitter className="hover:text-red-600" />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  aria-label="Follow us on Instagram"
                  className="text-black hover:text-red-600 transition-all duration-300 text-xl"
                >
                  <FaInstagram className="hover:text-red-600" />
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <h4 className="text-lg font-medium text-black">Contact</h4>
              <p className="text-black text-sm">yahiadjouadi7@gmail.com</p>
              <p className="text-black text-sm">+213 782421592</p>
            </div>
          </div>
        </div>

        <div className="bg-red-600 text-center py-4 mt-6">
          <p className="text-white text-sm flex justify-center items-center space-x-2">
            <span>&copy; 2024</span>
            <img
              className="h-8"
              src="/DY.png"
              alt="Yahia Djouadi Portfolio Logo"
            />
            <span>All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
