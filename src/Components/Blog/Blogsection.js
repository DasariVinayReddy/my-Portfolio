import { motion } from "framer-motion";
import cricket from "../../asstes/portfolio/blogs/cricket.jpg";
import devOps from "../../asstes/portfolio/blogs/devops.jpg";
import React from "react";

const blogs = [
  {
    id: 1,
    image:
      "https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg",
    date: "Dec 22, 2023",
    title: "Meet Our Designs, the best",
    description: "Banners, posters, Websites Design",
  },
  {
    id: 2,
    image: cricket,
    date: "Jun 12, 2024",
    title: "The Rise of T20 Cricket",
    description:
      "The game of cricket has undergone a seismic shift with the advent of the Twenty20 (T20) format. Introduced in 2003, T20 cricket was initially met with skepticism.",
  },
  {
    id: 3,
    image: devOps,
    date: "Dec 22, 2023",
    title: "DevOps using CI/CD Documentation",
    description: "I have completed DevOps using CI/CD with Jenkins.",
  },
];

export const BlogSection = () => {
  return (
    <section
      className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-gray-100"
      id="blog"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mx-auto max-w-[510px] mb-12 lg:mb-20">
          <span className="mb-2 block text-lg font-semibold text-red-500">
            VISIT MY BLOG AND KEEP YOUR FEEDBACK
          </span>
          <h2 className="text-4xl font-bold text-gray-900">My Blog</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover rounded-xl mb-4"
              />
              <span className="text-sm bg-red-500 text-white px-3 py-1 rounded-full">
                {blog.date}
              </span>
              <h3 className="text-xl font-semibold mt-4 text-gray-800">
                {blog.title}
              </h3>
              <p className="text-gray-600 mt-2">{blog.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
