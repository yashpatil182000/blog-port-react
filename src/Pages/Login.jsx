import React, { useEffect, useState } from "react";
import { Input } from "@material-tailwind/react";
import { TbLogin2 } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/blog-port-logo.png";
import { toast, ToastContainer } from "react-toastify";
import { account } from "../Appwrite/appwriteConfig";
import { FaArrowLeft } from "react-icons/fa";

import LogInBG from "../assets/log-in-bg.jpg";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (email == "admin@gmail.com" && password == "admin") {
      navigate("/admin-dashboard");
    } else {
      toast.error("Incorrect Email or Password", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "mt-5",
      });
    }
  };

  const handleRegister = () => {
    toast.info("Registration for new user coming soon!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "mt-5",
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col items-center bg-[url('./assets/hero-bg.png')] bg-cover h-screen">
        <div className="flex gap-2 justify-center items-center bg-white w-fit mt-20 mb-5 px-5 rounded-lg">
          <img src={Logo} alt="Logo" className="h-12" />
          <p className="text-2xl md:text-3xl font-bold text-primary">
            BLOG PORT
          </p>
        </div>

        <div
          className="lg:w-[30%] h-fit w-[90%] md:w-[50%] p-5 
        rounded-lg shadow-md shadow-black bg-cover"
          style={{ backgroundImage: `url(${LogInBG})` }}
        >
          <div className="mb-5 flex items-center justify-center gap-1">
            <span>
              <TbLogin2 className="text-3xl text-primary" />
            </span>

            <p className="text-3xl font-semibold ">LOG IN </p>
          </div>
          <div className="mb-5">
            <Input
              label="Email"
              placeholder="Enter Email Here"
              color="black"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-5">
            <Input
              type="password"
              label="Password"
              placeholder="Enter Password Here"
              color="black"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="justify-center flex">
            <button
              className="outline-none bg-primary text-white px-6 py-1 text-md font-semibold rounded-lg hover:bg-white hover:border border-primary hover:text-primary duration-300"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
          <div className="justify-center flex my-5">
            <p className="">
              Don't have an account?
              <span
                onClick={handleRegister}
                className="ms-1 cursor-pointer text-blue-900 underline font-semibold"
              >
                Register
              </span>
            </p>
          </div>
          <div className="justify-center flex my-5">
            <p
              className="flex items-center gap-2 cursor-pointer text-blue-900 underline font-semibold hover:text-primary"
              onClick={() => {
                navigate("/");
              }}
            >
              {" "}
              <FaArrowLeft color="" />
              Back to Home
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
