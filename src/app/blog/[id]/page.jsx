"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

const BlogPost = () => {
  const { id } = useParams();

  // Sample blog posts data with real source URLs
  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for Modern Web Development",
      content:
        "In this post, we'll explore the best practices for building modern, responsive websites. From using React for dynamic UIs to leveraging Tailwind CSS for rapid styling, you'll learn how to create efficient and scalable web applications.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "October 10, 2023",
      category: "Web Development",
      tags: ["React", "Tailwind CSS", "Next.js"],
      sourceUrl: "https://reactjs.org/docs/getting-started.html", // Official React documentation
    },
    {
      id: 2,
      title: "The Art of UI/UX Design",
      content:
        "Discover the principles of creating user-friendly and visually appealing designs. Learn how to use tools like Figma for prototyping and how to apply design thinking to solve user problems effectively.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      date: "October 5, 2023",
      category: "Design",
      tags: ["Figma", "UI/UX", "Prototyping"],
      sourceUrl: "https://www.figma.com/resources/learn-design/", // Figma's learning resources
    },
    {
      id: 3,
      title: "Mastering JavaScript: Advanced Concepts",
      content:
        "Dive deep into closures, promises, and async/await in JavaScript. This post will help you understand advanced JavaScript concepts and how to use them to write cleaner and more efficient code.",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "October 1, 2023",
      category: "JavaScript",
      tags: ["JavaScript", "Async/Await", "Promises"],
      sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide", // MDN JavaScript Guide
    },
    {
      id: 4,
      title: "Getting Started with Tailwind CSS",
      content:
        "A beginner's guide to building modern UIs with Tailwind CSS. Learn how to set up Tailwind, use utility classes, and create responsive designs with ease.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "September 25, 2023",
      category: "CSS",
      tags: ["Tailwind CSS", "Frontend", "Styling"],
      sourceUrl: "https://tailwindcss.com/docs/installation", // Tailwind CSS official documentation
    },
    {
      id: 5,
      title: "Building REST APIs with Node.js",
      content:
        "Learn how to create scalable and efficient REST APIs using Node.js. This post covers setting up an Express server, handling routes, and connecting to a database.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      date: "September 20, 2023",
      category: "Backend",
      tags: ["Node.js", "REST API", "Express"],
      sourceUrl: "https://expressjs.com/en/guide/routing.html", // Express.js routing guide
    },
    {
      id: 6,
      title: "Introduction to GraphQL",
      content:
        "Understand the basics of GraphQL and how it compares to REST. Learn how to set up a GraphQL server, define schemas, and query data efficiently.",
      image: "https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "September 15, 2023",
      category: "API",
      tags: ["GraphQL", "Backend", "API"],
      sourceUrl: "https://graphql.org/learn/", // Official GraphQL learning resources
    },
  ];

  // Find the blog post by ID
  const post = blogPosts.find((post) => post.id === parseInt(id));

  // If the post is not found, display a message
  if (!post) {
    return (
      <div className="bg-gray-100 min-h-screen py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-red-600">Post Not Found</h1>
          <p className="text-lg text-gray-700 mt-4">
            The blog post you're looking for does not exist.
          </p>
          <Link
            href="/blog"
            className="mt-6 inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-300"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-6">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          {/* Blog Post Image */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg"
          />

          {/* Blog Post Title */}
          <h1 className="text-4xl font-bold text-red-600 mt-6">{post.title}</h1>

          {/* Blog Post Date */}
          <span className="text-sm text-gray-500 mt-2">{post.date}</span>

          {/* Blog Post Content */}
          <div className="mt-6 text-gray-700">
            <p>{post.content}</p>
          </div>

          {/* Blog Post Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Learn More Button */}
          <div className="mt-6">
          <a
  href={post.sourceUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-red-600 border-2 border-red-600 px-6 py-3 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300"
>
  Learn More
</a>
          </div>

          {/* Back to Blog Button */}
          <div className="mt-8">
            <Link
              href="/blog"
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-300"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;