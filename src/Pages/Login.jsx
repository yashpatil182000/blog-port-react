import React, { useEffect, useState } from "react";
import { Input } from "@material-tailwind/react";
import { TbLogin2 } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/blog-port-logo.png";
import { toast, ToastContainer } from "react-toastify";
import { account, databases } from "../Appwrite/appwriteConfig";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/authSlice";
import { Query } from "appwrite";

import LogInBG from "../assets/log-in-bg.jpg";

function Login() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      // Create a session for authentication
      await account.createEmailPasswordSession(
        userData.email,
        userData.password
      );

      // Fetch user data from database
      const response = await databases.listDocuments(
        `${import.meta.env.VITE_APPWRITE_DATABASE_ID}`,
        `${import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID}`,
        [Query.equal("email", userData.email)]
      );

      if (response.documents.length === 0) {
        toast.error("User not found!", {
          position: "top-center",
          autoClose: 3000,
        });
        return;
      }

      const loggedInUser = response.documents[0];

      console.log("loggedInUser", loggedInUser);

      // Dispatch user data to Redux
      dispatch(login(loggedInUser));

      // Redirect based on role
      if (loggedInUser.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const handleRegister = () => {
    // toast.info("Registration for new user coming soon!", {
    //   position: "top-center",
    //   autoClose: 3000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   className: "mt-5",
    // });

    navigate("/register");
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
                setUserData({ ...userData, email: e.target.value });
              }}
            />
          </div>
          <div className="mb-5">
            <Input
              type="text"
              label="Password"
              placeholder="Enter Password Here"
              color="black"
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
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
            <button
              className="outline-none bg-primary text-white px-6 py-1 text-md font-semibold rounded-lg hover:bg-white hover:border border-primary hover:text-primary duration-300"
              onClick={async () => {
                await account.deleteSession("current");
                dispatch(logout());
              }}
            >
              Logout
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
