import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function BlogComponent({ date, tag, image, title, description, author }) {
  return (
    <>
      <div className="px-6 md:px-16 py-12 flex flex-col items-center justify-center">
        <div className="flex gap-5 items-center md:w-[80%]">
          <p className="bg-primary text-white text-lg px-3 py-1 rounded-lg">
            {tag}
          </p>
          <p>{date}</p>
        </div>
        <div className="flex items-center text-start gap-2 md:w-[80%] mt-5">
          <p className="mt-1">Posted By :</p>
          <p className="font-bold text-xl">{author}</p>
        </div>
        <div className="py-10 md:w-[80%]">
          <p className="text-5xl font-semibold">{title}</p>
        </div>
        <div className=" w-full md:w-[80%]">
          <img src={image} className="rounded-3xl" alt="" />
        </div>
        <div
          className="py-10 md:w-[80%]"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
        <div>
          <Link to={"/"}>
            <p className="cursor-pointer text-sm font-semibold px-4 py-1 w-fit rounded-xl bg-primary hover:text-white">
              Back to Home
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BlogComponent;
