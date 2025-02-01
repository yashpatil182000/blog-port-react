import React from "react";
import BlogImg from "../assets/blog-img.png";
import BlogCard from "../Components/BlogCard";

function AllBlogs() {
  const Blogs = [
    {
      title: "How to Be a Dancer in 2023 with proper skills?",
      description:
        "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive ",
      tag: "Sports",
      time: `${new Date().toLocaleDateString()}`,
      image: BlogImg,
    },
    {
      title: "How to Be a Dancer in 2023 with proper skills?",
      description:
        "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive ",
      tag: "Sports",
      time: `${Date.now()}`,
      image: BlogImg,
    },
    {
      title: "How to Be a Dancer in 2023 with proper skills?",
      description:
        "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive ",
      tag: "Sports",
      time: `${Date.now()}`,
      image: BlogImg,
    },
    {
      title: "How to Be a Dancer in 2023 with proper skills?",
      description:
        "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive ",
      tag: "Sports",
      time: `${Date.now()}`,
      image: BlogImg,
    },
  ];
  return (
    <>
      <div className="flex justify-center py-12 px-5 md:px-0">
        <div className="text-center md:w-[55%] flex flex-col gap-3">
          <p className="text-lg font-medium opacity-75">Our Blogs</p>
          <p className="text-4xl font-semibold ">
            Find our all blogs from here
          </p>
          <p className="opacity-75">
            our blogs are written from very research research and well known
            writers writers so that we can provide you the best blogs and
            articles articles for you to read them all along
          </p>
        </div>
      </div>
      <div className="flex-wrap justify-center flex px-5 md:px-16 gap-5">
        {Blogs.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              image={blog.image}
              tag={blog.tag}
              time={blog.time}
              title={blog.title}
              description={blog.description}
            />
          );
        })}
      </div>
    </>
  );
}

export default AllBlogs;
