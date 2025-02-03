import React from "react";
import AdminNavbar from "../Components/AdminNavbar";
import { Input, Textarea } from "@material-tailwind/react";
import DatePicker from "../Components/DatePicker";

function AddBlog() {
  return (
    <>
      <AdminNavbar />
      <div className="py-5">
        <p className="text-4xl font-semibold text-center">Add Blog</p>
      </div>

      <div className="flex justify-center p-5">
        <div className=" w-[95%] md:w-[60%]   bg-white p-5">
          <div className="mb-5">
            <Input label="Title" placeholder="Enter Blog title" />
          </div>
          <div className="mb-5">
            <Textarea className="h-56" label="Description" />
          </div>
          <div className="flex flex-wrap flex-col xl:flex-row justify-between">
            <div className="mb-5 xl:w-[32%]">
              <Input label="Tag" />
            </div>
            <div className="mb-5 xl:w-[32%]">
              <DatePicker />
            </div>
            <div className="mb-5 xl:w-[32%]">
              <Input type="file" label="Image" />
            </div>
            <div className="mb-5 flex justify-center w-full">
              <button className="outline-none bg-primary text-white px-6 py-1 text-md font-semibold rounded-lg hover:bg-white hover:border border-primary hover:text-primary duration-300">
                Add Blog
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddBlog;
