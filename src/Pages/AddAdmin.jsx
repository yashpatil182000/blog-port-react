import React, { useState } from "react";
import AdminNavbar from "../Components/AdminNavbar";
import { GrDocumentUser } from "react-icons/gr";
import { Input } from "@material-tailwind/react";
import { account, databases } from "../Appwrite/appwriteConfig";
import { ID } from "appwrite";
import { toast, ToastContainer } from "react-toastify";

function AddAdmin() {
  const [adminData, setAdminData] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin",
  });

  const handleAddAdmin = async () => {
    const adminId = ID.unique();
    try {
      if (!adminData.name || !adminData.email || !adminData.password) {
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
        await account.create(
          adminId,
          adminData.email,
          adminData.password,
          adminData.name
        );

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
        });
      }
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
      <div className="flex flex-col items-center  bg-cover h-screen">
        <div
          className="md:w-[30%] h-fit w-[90%] p-5 
         bg-white rounded-lg shadow-md shadow-black mt-5"
        >
          <div className="mb-5 flex items-center justify-center gap-2">
            <span>
              <GrDocumentUser className="text-3xl  text-primary" />
            </span>

            <p className="text-3xl font-semibold ">Add New Admin </p>
          </div>
          <div className="mb-5">
            <Input
              label="Name"
              value={adminData.name}
              placeholder="Enter Name Here"
              color="black"
              onChange={(e) => {
                setAdminData({ ...adminData, name: e.target.value });
              }}
            />
          </div>

          <div className="mb-5">
            <Input
              label="Email"
              value={adminData.email}
              placeholder="Enter Email Here"
              color="black"
              onChange={(e) => {
                setAdminData({ ...adminData, email: e.target.value });
              }}
            />
          </div>
          <div className="mb-5">
            <Input
              label="Password"
              value={adminData.password}
              placeholder="Enter Password Here"
              color="black"
              onChange={(e) => {
                setAdminData({ ...adminData, password: e.target.value });
              }}
            />
          </div>
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
