"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation"; // Import usePathname

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Helper function to determine if a link is active
  const isActive = (href) => pathname === href;

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo - Home Link with Animation */}
        <div className="flex justify-center">
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

        {/* Desktop Links with Hover Animations */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            href="/about"
            className={`text-lg font-medium relative group transition-all duration-300 ${
              isActive("/about")
                ? "text-red-600"
                : "text-black hover:text-red-600"
            }`}
          >
            About
            <span
              className={`absolute left-0 bottom-0 h-0.5 bg-red-600 transition-all duration-300 ${
                isActive("/about") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </Link>
          <Link
            href="/projects"
            className={`text-lg font-medium relative group transition-all duration-300 ${
              isActive("/projects")
                ? "text-red-600"
                : "text-black hover:text-red-600"
            }`}
          >
            Projects
            <span
              className={`absolute left-0 bottom-0 h-0.5 bg-red-600 transition-all duration-300 ${
                isActive("/projects") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </Link>
          <Link
            href="/blog"
            className={`text-lg font-medium relative group transition-all duration-300 ${
              isActive("/blog")
                ? "text-red-600"
                : "text-black hover:text-red-600"
            }`}
          >
            Blog
            <span
              className={`absolute left-0 bottom-0 h-0.5 bg-red-600 transition-all duration-300 ${
                isActive("/blog") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </Link>
          <Link
            href="/contact"
            className={`text-lg font-medium relative group transition-all duration-300 ${
              isActive("/contact")
                ? "text-red-600"
                : "text-black hover:text-red-600"
            }`}
          >
            Contact
            <span
              className={`absolute left-0 bottom-0 h-0.5 bg-red-600 transition-all duration-300 ${
                isActive("/contact") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </Link>
          <a
            href="https://linkedin.com/in/yahia-djouadi-19550b323"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-red-600 transition-all duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md shadow-lg">
          <div className="flex flex-col space-y-4 p-6">
            <Link
              href="/about"
              onClick={toggleMenu}
              className={`text-lg font-medium relative group transition-all duration-300 ${
                isActive("/about")
                  ? "text-red-600"
                  : "text-black hover:text-red-600"
              }`}
            >
              About
              <span
                className={`absolute left-0 bottom-0 h-0.5 bg-red-600 transition-all duration-300 ${
                  isActive("/about") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <Link
              href="/projects"
              onClick={toggleMenu}
              className={`text-lg font-medium relative group transition-all duration-300 ${
                isActive("/projects")
                  ? "text-red-600"
                  : "text-black hover:text-red-600"
              }`}
            >
              Projects
              <span
                className={`absolute left-0 bottom-0 h-0.5 bg-red-600 transition-all duration-300 ${
                  isActive("/projects") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <Link
              href="/blog"
              onClick={toggleMenu}
              className={`text-lg font-medium relative group transition-all duration-300 ${
                isActive("/blog")
                  ? "text-red-600"
                  : "text-black hover:text-red-600"
              }`}
            >
              Blog
              <span
                className={`absolute left-0 bottom-0 h-0.5 bg-red-600 transition-all duration-300 ${
                  isActive("/blog") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <Link
              href="/contact"
              onClick={toggleMenu}
              className={`text-lg font-medium relative group transition-all duration-300 ${
                isActive("/contact")
                  ? "text-red-600"
                  : "text-black hover:text-red-600"
              }`}
            >
              Contact
              <span
                className={`absolute left-0 bottom-0 h-0.5 bg-red-600 transition-all duration-300 ${
                  isActive("/contact") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <a
              href="https://linkedin.com/in/yahia-djouadi-19550b323"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-red-600 transition-all duration-300"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;