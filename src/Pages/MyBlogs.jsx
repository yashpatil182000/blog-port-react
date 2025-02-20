import React from "react";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";

function MyBlogs() {
  const userData = useSelector((state) => state.auth.userData);
  return (
    <>
      <Navbar />
      <div className="py-5">
        <p className="text-4xl font-semibold text-center">My Blogs</p>
      </div>
    </>
  );
}

export default MyBlogs;
