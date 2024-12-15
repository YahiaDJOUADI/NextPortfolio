import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/*  Links */}
        <div className="flex space-x-8">
          <Link
            href="/"
            className="text-black text-lg font-medium hover:text-red-600 transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-black text-lg font-medium hover:text-red-600 transition-all duration-300"
          >
            About
          </Link>
        </div>

        {/*  Logo */}
        <div className="flex justify-center">
          <img
            src="/DY.png"
            alt="Logo"
            className="h-20 w-18 rounded-full border-2 border-red-600"
          />
        </div>

        {/*  Links */}
        <div className="flex space-x-8">
          <Link
            href="/projects"
            className="text-black text-lg font-medium hover:text-red-600 transition-all duration-300"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-black text-lg font-medium hover:text-red-600 transition-all duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
