"use client";
import Image from "next/image";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();

  const handleSend = (e) => {
    e.preventDefault();

    // Show a styled alert
    Swal.fire({
      title: "Message Sent!",
      text: "Thank you for reaching out! I'll contact you soon.",
      icon: "success",
      confirmButtonColor: "#dc2626", // Red-600
      confirmButtonText: "OK",
      customClass: {
        popup: "bg-gray-100 text-gray-800",
        title: "text-red-600 font-bold text-2xl",
        confirmButton: "bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300",
      },
    }).then(() => {
      // Redirect to the homepage after the alert is closed
      router.push("/");
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Image
            src="/DY.png"
            alt="Yahia Djouadi Logo"
            width={150}
            height={150}
            className="mx-auto mb-4 animate-bounce"
          />
          <h1 className="text-5xl font-bold text-red-600 mb-4">Contact Me</h1>
          <p className="text-lg text-gray-700">
            I'm available for inquiries, collaborations, or just a friendly
            chat. Feel free to reach out!
          </p>
        </div>
        <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105">
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300"
                placeholder="Your Name"
                required
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300"
                placeholder="Your Message"
                required
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
    </div>
  );
};

export default Contact;