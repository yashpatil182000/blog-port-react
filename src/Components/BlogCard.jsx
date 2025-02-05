import React from "react";

function BlogCard({ image, tag, time, title, description }) {
  let trimmedDesc = description.split(" ").slice(0, 15).join(" ");
  let trimmedTitle = title.split(" ").slice(0, 8).join(" ");
  return (
    <div className="w-full sm:w-[300px] md:w-[350px] lg:h-[450px] flex flex-col  gap-2 bg-white rounded-xl hover:shadow-primary shadow-lg duration-200 overflow-hidden group">
      <img
        src={image}
        className="w-full group-hover:scale-110 duration-200"
        alt=""
      />
      <div className="flex gap-3 p-2">
        <p className="bg-gray-400 px-2 rounded">{tag}</p>
        <p>{time}</p>
      </div>
      <div className="w-fit p-2">
        <p className="text-xl font-semibold">{trimmedTitle + "..."}</p>
        <p className="my-2 opacity-70">{trimmedDesc + "..."}</p>
        <p className="text-blue-800 cursor-pointer">Read More...</p>
      </div>
    </div>
  );
}

export default BlogCard;
