import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export function BlogCard({ image, tag, time, title, description }) {
  let trimmedDesc = description.split(" ").slice(0, 20).join(" ");
  // let trimmedTitle = title.split(" ").slice(0, 8).join(" ");
  return (
    <Card className="max-w-[24rem] overflow-hidden max-h-[30rem] mb-5 hover:shadow-gray-600 shadow-lg ">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img src={image} alt="" />
      </CardHeader>
      <CardBody>
        <div className="flex justify-between">
          <Typography className="text-sm mb-2 bg-gray-300 px-3 py-1 rounded-lg text-blue-gray-900 font-semibold">
            {tag}
          </Typography>
          <Typography className="text-sm mb-2">{time}</Typography>
        </div>

        <Typography variant="h5" color="blue-gray">
          {title}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-1 text-md">
          {trimmedDesc + "..."}
        </Typography>
        <span className="flex items-center gap-2 text-black mt-2">
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </span>
      </CardBody>
    </Card>
  );
}

export default BlogCard;

// function BlogCard({ image, tag, time, title, description }) {
//   let trimmedDesc = description.split(" ").slice(0, 15).join(" ");
//   let trimmedTitle = title.split(" ").slice(0, 8).join(" ");
//   return (
//     <div className="w-full sm:w-[300px] md:w-[350px] lg:h-[450px] flex flex-col  gap-2 bg-white rounded-xl hover:shadow-primary shadow-lg duration-200 overflow-hidden group">
//       <img
//         src={image}
//         className="w-full group-hover:scale-110 duration-200"
//         alt=""
//       />
//       <div className="flex gap-3 p-2">
//         <p className="bg-gray-400 px-2 rounded">{tag}</p>
//         <p>{time}</p>
//       </div>
//       <div className="w-fit p-2">
//         <p className="text-xl font-semibold">{trimmedTitle + "..."}</p>
//         <p className="my-2 opacity-70">{trimmedDesc + "..."}</p>
//         <p className="text-blue-800 cursor-pointer">Read More...</p>
//       </div>
//     </div>
//   );
// }
