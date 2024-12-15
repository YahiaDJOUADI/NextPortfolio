"use client";
import Image from "next/image";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// I heard from Djacer and sir that this package is popular and better than alert,
// so I'm using it for showing notifications. However, I didn't know how to style it yet.

const Contact = () => {
  const handleSend = (e) => {
    e.preventDefault();
    toast.success("Thank you for reaching out! I'll contact you soon.");
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Image
            src="/DY.png"
            alt="Yahia Djouadi Logo"
            width={150}
            height={150}
            className="mx-auto mb-4"
          />
          <h1 className="text-5xl font-bold text-red-600 mb-4">Contact Me</h1>
          <p className="text-lg text-gray-700">
            I'm available for inquiries, collaborations, or just a friendly
            chat. Feel free to reach out!
          </p>
        </div>
        <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSend}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-800 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-800 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-800 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Contact;
