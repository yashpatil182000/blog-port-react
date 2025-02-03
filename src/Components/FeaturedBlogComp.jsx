import React from "react";
import { Link } from "react-router-dom";

function FeaturedBlogComp({ id, date, tag, image, title, description }) {
  return (
    <>
      <div className="px-6 md:px-16 py-12 flex flex-col items-center justify-center">
        <div className="flex gap-5 items-center md:w-[80%]">
          <p className="bg-primary text-white text-lg px-3 py-1 rounded-lg">
            {tag}
          </p>
          <p>{date}</p>
        </div>
        <div className="py-10 md:w-[80%]">
          <p className="text-5xl font-semibold">{title}</p>
        </div>
        <div className=" w-full md:w-[80%]">
          <img src={image} className="rounded-3xl" alt="" />
        </div>
        <div className="py-10 md:w-[80%]">{description}</div>
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

export default FeaturedBlogComp;
