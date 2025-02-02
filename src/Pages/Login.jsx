import React from "react";
import { Input } from "@material-tailwind/react";
import { TbLogin2 } from "react-icons/tb";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="flex justify-center bg-[url('./assets/hero-bg.png')] bg-cover h-screen">
        <div
          className="md:w-[30%] h-fit w-[90%] mt-20 p-5 
        bg-[url('./assets/log-in-bg.jpg')] bg-cover rounded-lg shadow-md shadow-black"
        >
          <div className="mb-5 flex items-center justify-center gap-1">
            <span>
              <TbLogin2 className="text-3xl text-primary" />
            </span>

            <p className="text-3xl font-semibold ">LOG IN </p>
          </div>
          <div className="mb-5">
            <Input label="Email" placeholder="Enter Email Here" color="black" />
          </div>
          <div className="mb-5">
            <Input
              label="Password"
              placeholder="Enter Password Here"
              color="black"
            />
          </div>
          <div className="justify-center flex">
            <button className="outline-none bg-primary text-white px-6 py-1 text-md font-semibold rounded-lg hover:bg-white hover:border border-primary hover:text-primary duration-300">
              Login
            </button>
          </div>
          <div className="justify-center flex my-5">
            <p className="">
              Don't have an account?
              <Link to={"/register"}>
                <span className="ms-1 cursor-pointer text-blue-900 underline font-semibold">
                  Register
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
