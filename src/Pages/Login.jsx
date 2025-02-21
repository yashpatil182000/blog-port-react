import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { TbLogin2 } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/blog-port-logo.png";
import { toast, ToastContainer } from "react-toastify";
import { account, databases } from "../Appwrite/appwriteConfig";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";
import { Query } from "appwrite";
import LogInBG from "../assets/log-in-bg.jpg";

function Login() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Regex for email & password validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Handle input change and clear errors dynamically
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear error for the specific field
    }));
  };

  // Validate form before login
  const validateForm = () => {
    let newErrors = {};
    if (!userData.email) {
      newErrors.email = "Email is required!";
    } else if (!emailRegex.test(userData.email)) {
      newErrors.email = "Invalid email format!";
    }

    if (!userData.password) {
      newErrors.password = "Password is required!";
    } else if (!passwordRegex.test(userData.password)) {
      newErrors.password =
        "Password must be at least 8 chars with uppercase, lowercase, number & symbol.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) {
      toast.error("Please fix errors before submitting!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    try {
      await account.createEmailPasswordSession(
        userData.email,
        userData.password
      );

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
      dispatch(login(loggedInUser));

      toast.success("Login Successful!", {
        position: "top-center",
        autoClose: 3000,
      });

      // Redirect based on role
      navigate(loggedInUser.role === "admin" ? "/admin-dashboard" : "/");
    } catch (error) {
      toast.error("Invalid Credentials!", {
        position: "top-center",
        autoClose: 3000,
      });
      console.error("Login Error:", error);
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
          className="lg:w-[30%] h-fit w-[90%] md:w-[50%] p-5 rounded-lg shadow-md shadow-black bg-cover"
          style={{ backgroundImage: `url(${LogInBG})` }}
        >
          <div className="mb-5 flex items-center justify-center gap-1">
            <TbLogin2 className="text-3xl text-primary" />
            <p className="text-3xl font-semibold">LOG IN</p>
          </div>

          {/* Email Input */}
          <div className="mb-5">
            <Input
              name="email"
              label="Email"
              placeholder="Enter Email Here"
              color="black"
              value={userData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-5">
            <Input
              name="password"
              type="password"
              label="Password"
              placeholder="Enter Password Here"
              color="black"
              value={userData.password}
              onChange={handleInputChange}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          {/* Login Button */}
          <div className="justify-center flex">
            <button
              className="outline-none bg-primary text-white px-6 py-1 text-md font-semibold rounded-lg hover:bg-white hover:border border-primary hover:text-primary duration-300"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>

          {/* Register Link */}
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

          {/* Back to Home */}
          <div className="justify-center flex my-5">
            <p
              className="flex items-center gap-2 cursor-pointer text-blue-900 underline font-semibold hover:text-primary"
              onClick={() => navigate("/")}
            >
              <FaArrowLeft />
              Back to Home
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
