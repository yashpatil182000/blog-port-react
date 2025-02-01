import React from "react";

function BlogCard({ image, tag, time, title, description }) {
  let trimmedDesc = description.split(" ").slice(0, 15).join(" ");
  return (
    <>
      <div className="md:w-[25%] flex flex-col p-2 gap-2 bg-white rounded-xl hover:shadow-primary shadow-lg duration-200">
        <img src={image} alt="" />
        <div className="flex gap-3">
          <p className="bg-gray-400 px-2 rounded">{tag}</p>
          <p>{time}</p>
        </div>
        <div className="w-fit">
          <p className="text-xl font-semibold">{title}</p>
          <p className="my-2 opacity-70">{trimmedDesc + "..."}</p>
          <p className="text-blue-800 cursor-pointer">Read More...</p>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
