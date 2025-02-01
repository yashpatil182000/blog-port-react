import React from "react";
import Featuredpost from "../Components/Featuredpost";
import Navbar from "../Components/Navbar";
import AllBlogs from "./AllBlogs";
import Login from "./Login";
import Register from "./Register";

function Home() {
  return (
    <>
      <Navbar />
      <Register />
    </>
  );
}

export default Home;
