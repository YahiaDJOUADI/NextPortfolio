"use client";
import Link from "next/link";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for Modern Web Development",
      excerpt: "Learn the best practices for building modern, responsive websites.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "October 10, 2023",
      category: "Web Development",
      tags: ["React", "Tailwind CSS", "Next.js"],
    },
    {
      id: 2,
      title: "The Art of UI/UX Design",
      excerpt: "Discover the principles of creating user-friendly and visually appealing designs.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      date: "October 5, 2023",
      category: "Design",
      tags: ["Figma", "UI/UX", "Prototyping"],
    },
    {
      id: 3,
      title: "Mastering JavaScript: Advanced Concepts",
      excerpt: "Dive deep into closures, promises, and async/await in JavaScript.",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "October 1, 2023",
      category: "JavaScript",
      tags: ["JavaScript", "Async/Await", "Promises"],
    },
    {
      id: 4,
      title: "Getting Started with Tailwind CSS",
      excerpt: "A beginner's guide to building modern UIs with Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "September 25, 2023",
      category: "CSS",
      tags: ["Tailwind CSS", "Frontend", "Styling"],
    },
    {
      id: 5,
      title: "Building REST APIs with Node.js",
      excerpt: "Learn how to create scalable and efficient REST APIs using Node.js.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      date: "September 20, 2023",
      category: "Backend",
      tags: ["Node.js", "REST API", "Express"],
    },
    {
      id: 6,
      title: "Introduction to GraphQL",
      excerpt: "Understand the basics of GraphQL and how it compares to REST.",
      image: "https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "September 15, 2023",
      category: "API",
      tags: ["GraphQL", "Backend", "API"],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-red-600 mb-4">Blog</h1>
          <p className="text-lg text-gray-700">
            Insights, tutorials, and thoughts on web development, design, and more.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-gray-500">{post.date}</span>
                <h2 className="text-xl font-bold text-red-600 mt-2">{post.title}</h2>
                <p className="text-gray-700 mt-2">{post.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.id}`}
                  className="mt-4 inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
