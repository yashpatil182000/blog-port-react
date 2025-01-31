import React from "react";

function BlogCard({ image, tag, time, title, description }) {
  return (
    <>
      <div className="md:w-[30%] flex flex-col p-2 gap-2">
        <img src={image} alt="" />
        <div className="flex gap-3">
          <p>{tag}</p>
          <p>{time}</p>
        </div>
        <div className="w-fit">
          <p className="text-xl font-semibold">{title}</p>
          <p className="my-2 opacity-70">{description}</p>
          <p className="text-blue-800">Read More...</p>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
