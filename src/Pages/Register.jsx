import React from "react";
import { GrDocumentUser } from "react-icons/gr";
import { Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <>
        <div className="flex justify-center bg-[url('./assets/hero-bg.png')] bg-cover h-screen">
          <div
            className="md:w-[30%] h-fit w-[90%] mt-20 p-5 
          bg-[url('./assets/log-in-bg.jpg')] bg-cover rounded-lg shadow-md shadow-black"
          >
            <div className="mb-5 flex items-center justify-center gap-2">
              <span>
                <GrDocumentUser className="text-3xl  text-primary" />
              </span>

              <p className="text-3xl font-semibold ">REGISTER </p>
            </div>
            <div className="mb-5">
              <Input label="Name" placeholder="Enter Name Here" color="black" />
            </div>
            <div className="mb-5">
              <Input
                label="Phone Number"
                placeholder="Enter Phone Number Here"
                color="black"
              />
            </div>
            <div className="mb-5">
              <Input
                label="Email"
                placeholder="Enter Email Here"
                color="black"
              />
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
                Register
              </button>
            </div>
            <div className="justify-center flex my-5">
              <p className="">
                Already have an account?
                <Link to={"/login"}>
                  <span className="ms-1 cursor-pointer text-blue-900 underline font-semibold">
                    Log In
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Register;
