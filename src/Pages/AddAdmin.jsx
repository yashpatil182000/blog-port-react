import React, { useState } from "react";
import AdminNavbar from "../Components/AdminNavbar";
import { GrDocumentUser } from "react-icons/gr";
import { Input } from "@material-tailwind/react";
import { account, databases } from "../Appwrite/appwriteConfig";
import { ID, Query } from "appwrite";
import { toast, ToastContainer } from "react-toastify";

function AddAdmin() {
  const [adminData, setAdminData] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Email & Password Validation Regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...adminData, [name]: value });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Validate input fields
  const validateForm = () => {
    let newErrors = {};

    if (!adminData.name) {
      newErrors.name = "Name is required!";
    }

    if (!adminData.email) {
      newErrors.email = "Email is required!";
    } else if (!emailRegex.test(adminData.email)) {
      newErrors.email = "Invalid email format!";
    }

    if (!adminData.password) {
      newErrors.password = "Password is required!";
    } else if (!passwordRegex.test(adminData.password)) {
      newErrors.password =
        "Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number, and a special character.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Admin Registration
  const handleAddAdmin = async () => {
    if (!validateForm()) {
      toast.error("Please fix errors before submitting!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    const adminId = ID.unique();

    try {
      // **Check if admin email already exists**
      const existingAdmins = await databases.listDocuments(
        `${import.meta.env.VITE_APPWRITE_DATABASE_ID}`,
        `${import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID}`,
        [Query.equal("email", adminData.email)]
      );

      if (existingAdmins.documents.length > 0) {
        toast.error("Admin with this email already exists!", {
          position: "top-center",
          autoClose: 3000,
        });
        return;
      }

      // Register Admin in Appwrite
      await account.create(
        adminId,
        adminData.email,
        adminData.password,
        adminData.name
      );

      // Save Admin details in the database
      await databases.createDocument(
        `${import.meta.env.VITE_APPWRITE_DATABASE_ID}`,
        `${import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID}`,
        adminId,
        adminData
      );

      toast.success("Admin Registered Successfully!", {
        position: "top-center",
        autoClose: 3000,
      });

      setAdminData({
        name: "",
        email: "",
        password: "",
        role: "admin",
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <AdminNavbar />
      <div className="flex flex-col items-center bg-cover h-screen">
        <div
          className="md:w-[30%] h-fit w-[90%] p-5 
         bg-white rounded-lg shadow-md shadow-black mt-5"
        >
          <div className="mb-5 flex items-center justify-center gap-2">
            <span>
              <GrDocumentUser className="text-3xl text-primary" />
            </span>
            <p className="text-3xl font-semibold">Add New Admin</p>
          </div>

          {/* Name Input */}
          <div className="mb-5">
            <Input
              name="name"
              label="Name"
              value={adminData.name}
              placeholder="Enter Name Here"
              color="black"
              onChange={handleInputChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Email Input */}
          <div className="mb-5">
            <Input
              name="email"
              label="Email"
              value={adminData.email}
              placeholder="Enter Email Here"
              color="black"
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
              label="Password"
              type="password"
              value={adminData.password}
              placeholder="Enter Password Here"
              color="black"
              onChange={handleInputChange}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          {/* Add Button */}
          <div className="justify-center flex">
            <button
              className="outline-none bg-primary text-white px-6 py-1 text-md font-semibold rounded-lg hover:bg-white hover:border border-primary hover:text-primary duration-300"
              onClick={handleAddAdmin}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddAdmin;
