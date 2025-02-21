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
import { Query } from "appwrite";

function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });

    if (name === "email") {
      setErrors({
        ...errors,
        email: emailRegex.test(value) ? "" : "Invalid email format",
      });
    }
    if (name === "password") {
      setErrors({
        ...errors,
        password: passwordRegex.test(value)
          ? ""
          : "Password must be min 8 chars with uppercase, lowercase, number & symbol.",
      });
    }
  };

  const handleRegister = async () => {
    if (!userData.name || !userData.email || !userData.password) {
      toast.error("Please fill all fields", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    if (errors.email || errors.password) {
      toast.error("Check your all details are correct before submitting.", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    try {
      // **Check if email is already registered**
      const existingUsers = await databases.listDocuments(
        `${import.meta.env.VITE_APPWRITE_DATABASE_ID}`,
        `${import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID}`,
        [Query.equal("email", userData.email)]
      );

      if (existingUsers.documents.length > 0) {
        toast.error("Email already registered!", {
          position: "top-center",
          autoClose: 3000,
        });
        return;
      }

      const userId = ID.unique();
      const response = await account.create(
        userId,
        userData.email,
        userData.password,
        userData.name
      );

      await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
        userId,
        userData
      );

      toast.success("User Registered Successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
      navigate("/login");
      console.log(response);
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
          className="md:w-[30%] h-fit w-[90%] p-5 bg-cover rounded-lg shadow-md shadow-black"
          style={{ backgroundImage: `url(${LogInBG})` }}
        >
          <div className="mb-5 flex items-center justify-center gap-2">
            <GrDocumentUser className="text-3xl text-primary" />
            <p className="text-3xl font-semibold">REGISTER</p>
          </div>

          <div className="mb-5">
            <Input
              label="Name"
              placeholder="Enter Name Here"
              color="black"
              name="name"
              value={userData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-5">
            <Input
              label="Email"
              placeholder="Enter Email Here"
              color="black"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>

          <div className="mb-5">
            <Input
              label="Password"
              placeholder="Enter Password Here"
              color="black"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
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
            <p>
              Already have an account?
              <Link to="/login">
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
