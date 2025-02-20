import React, { useState } from "react";
import { GrDocumentUser } from "react-icons/gr";
import Logo from "../assets/blog-port-logo.png";
import LogInBG from "../assets/log-in-bg.jpg";

import { Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { account, databases } from "../Appwrite/appwriteConfig";
import { ID } from "appwrite";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
  // const [userData, setUserData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });

  // const handleRegister = async () => {
  //   try {
  //     if (!userData.name || !userData.email || !userData.password) {
  //       toast.error("Please fill all fields", {
  //         position: "top-center",
  //         autoClose: 3000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         className: "mt-5",
  //       });
  //     } else {
  //       await account
  //         .create(ID.unique(), userData.email, userData.password, userData.name)
  //         .then((user) => {
  //           console.log(user);
  //           setUserData({
  //             name: "",
  //             email: "",
  //             password: "",
  //           });

  //           toast.success("User registered successfully!", {
  //             position: "top-center",
  //             autoClose: 3000,
  //           });
  //         });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Registration failed!", {
  //       position: "top-center",
  //       autoClose: 3000,
  //     });
  //   }
  // };

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin",
  });
  const navigate = useNavigate();

  const handleRegister = async () => {
    const userId = ID.unique();
    try {
      if (!userData.name || !userData.email || !userData.password) {
        toast.error("Please fill all fields", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: "mt-5",
        });
      } else {
        const response = await account.create(
          userId,
          userData.email,
          userData.password,
          userData.name
        );

        await databases.createDocument(
          `${import.meta.env.VITE_APPWRITE_DATABASE_ID}`,
          `${import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID}`,
          userId,
          userData
        );

        toast.success("User Registered Successfully!", {
          position: "top-center",
          autoClose: 3000,
        });
        navigate("/login");
        console.log(response);
      }
    } catch (error) {
      console.log(error);
      toast.error("Registration failed!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
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
          className="md:w-[30%] h-fit w-[90%] p-5 
           bg-cover rounded-lg shadow-md shadow-black"
          style={{ backgroundImage: `url(${LogInBG})` }}
        >
          <div className="mb-5 flex items-center justify-center gap-2">
            <span>
              <GrDocumentUser className="text-3xl  text-primary" />
            </span>

            <p className="text-3xl font-semibold ">REGISTER </p>
          </div>
          <div className="mb-5">
            <Input
              label="Name"
              placeholder="Enter Name Here"
              color="black"
              onChange={(e) => {
                setUserData({ ...userData, name: e.target.value });
              }}
            />
          </div>
          {/* <div className="mb-5">
              <Input
                label="Phone Number"
                placeholder="Enter Phone Number Here"
                color="black"
                onChange={(e) => {
                  setUserData({ ...userData, phoneNumber: e.target.value });
                }}
              />
            </div> */}
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
              onClick={handleRegister}
            >
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
  );
}

export default Register;
