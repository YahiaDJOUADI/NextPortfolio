"use client";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import Swal from "sweetalert2"; // Import SweetAlert2

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle form submission
  const handleSubscribe = (e) => {
    e.preventDefault(); // Prevent default form submission
    const email = e.target.email.value; // Get the email input value

    // Show SweetAlert with custom styling
    Swal.fire({
      title: "Subscribed!",
      text: `Thank you for subscribing, ${email}!`,
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#EF4444", // Red color to match your theme
      background: "#1F2937", // Dark background to match the footer
      color: "#FFFFFF", // White text color
      iconColor: "#EF4444", // Red icon color
      customClass: {
        title: "text-red-600", // Red title color
        content: "text-gray-400", // Gray text color
        confirmButton: "bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300", // Custom button styling
      },
      buttonsStyling: false, // Disable default button styling
    });

    // Clear the form
    e.target.reset();
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex justify-center md:justify-start">
              <Link href="/">
                <motion.img
                  src="/DY.png"
                  alt="Logo"
                  className="h-20 w-18 rounded-full border-2 border-red-600 cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </Link>
            </div>
            <p className="text-sm text-gray-400 text-center md:text-left">
              Passionate about building clean, functional, and innovative digital solutions.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link
                href="https://www.facebook.com/share/1GR5KFGZ3A/?mibextid=wwXIfr" // Updated Facebook link
                target="_blank"
                aria-label="Follow me on Facebook"
                className="text-gray-400 hover:text-red-600 transition-all duration-300 text-xl"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://x.com/leon_yahia?s=21" // Updated Twitter (X) link
                target="_blank"
                aria-label="Follow me on Twitter"
                className="text-gray-400 hover:text-red-600 transition-all duration-300 text-xl"
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://www.instagram.com/leon_dz10?igsh=MWJxaGZ3Mm0xaTg4dw==" // Updated Instagram link
                target="_blank"
                aria-label="Follow me on Instagram"
                className="text-gray-400 hover:text-red-600 transition-all duration-300 text-xl"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://linkedin.com/in/yahia-djouadi-19550b323" // LinkedIn link
                target="_blank"
                aria-label="Connect with me on LinkedIn"
                className="text-gray-400 hover:text-red-600 transition-all duration-300 text-xl"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-red-600">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-400 hover:text-red-600 transition-all duration-300"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-gray-400 hover:text-red-600 transition-all duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-400 hover:text-red-600 transition-all duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-400 hover:text-red-600 transition-all duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-red-600">Newsletter</h4>
            <p className="text-sm text-gray-400">
              Subscribe to my newsletter to stay updated with my latest projects and insights.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full sm:w-48 px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-red-600">Contact</h4>
            <p className="text-sm text-gray-400">yahiadjouadi7@gmail.com</p>
            <p className="text-sm text-gray-400">+213 782421592</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Copyright and Back-to-Top Button */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-gray-400">
            &copy; 2024 Yahia Djouadi. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-sm text-gray-400 hover:text-red-600 transition-all duration-300"
          >
            <span>Back to Top</span>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;