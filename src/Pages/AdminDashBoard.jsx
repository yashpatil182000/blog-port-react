import React, { useState, useEffect } from "react";
import AdminNavbar from "../Components/AdminNavbar";
import { databases } from "../Appwrite/appwriteConfig";
import BeatLoader from "react-spinners/BeatLoader";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function AdminDashBoard() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    try {
      let responce = await databases.listDocuments(
        `${import.meta.env.VITE_APPWRITE_DATABASE_ID}`,
        `${import.meta.env.VITE_APPWRITE_COLLECTION_ID}`
      );

      if (responce && responce.documents) {
        setBlogs(responce.documents);
        setLoading(false);
      }
    } catch (error) {
      console.log("Fetching Error: ", error);
    }
  };
  // console.log(blogs);

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <AdminNavbar />
      <div className="py-5">
        <p className="text-3xl md:text-5xl font-semibold text-center">
          Admin Dashboard
        </p>
      </div>
      {loading && (
        <div className="flex flex-col items-center justify-center my-10">
          <p className="text-xl font-semibold text-black">Loading Blogs</p>
          <BeatLoader color="#7C4EE4" size={25} />
        </div>
      )}
      <div className="flex flex-col items-center gap-6 lg:gap-14 lg:py-5">
        <div className="w-[80%]">
          <p className="text-xl text-center md:text-2xl">
            Total Blogs Published:{" "}
            <span className="text-2xl font-bold">{blogs.length}</span>
          </p>
        </div>
        <div className="w-[86%] md:w-[95%] lg:w-[90%] xl:w-[85%]">
          {blogs &&
            blogs.map((blog, index) => {
              return (
                <div
                  className="flex flex-col md:flex-row items-center  bg-white mb-6 rounded-2xl overflow-hidden shadow-md shadow-black/40"
                  key={index}
                >
                  <div className="w-full md:w-[25%]">
                    <img
                      src={blog.imageURL}
                      className="w-full md:w-60"
                      alt=""
                    />
                  </div>
                  <div className="w-full md:w-[55%] py-2 md:py-0 px-3 md:px-5 ">
                    <p className="lg:text-2xl font-semibold">{blog.title}</p>
                    <p className="text-sm md:text-md font-semibold mt-3">
                      Last Updated :{" "}
                      <span className="text-md font-normal">
                        {new Date(blog.$updatedAt).toLocaleString()}
                      </span>
                    </p>
                  </div>
                  <div className="xl:w-[20%] flex justify-center my-5">
                    <button
                      className="flex items-center justify-center gap-1 bg-primary px-5 py-1 rounded-lg text-white font-semibold hover:text-black duration-200 me-5"
                      onClick={() => {
                        navigate(`/edit-blog/${blog.$id}`);
                      }}
                    >
                      <span>
                        <MdOutlineModeEdit size={20} />
                      </span>
                      Edit
                    </button>
                    <button className="flex items-center justify-center gap-1 bg-primary px-5 py-1 rounded-lg text-white font-semibold hover:text-black duration-200 me-5">
                      <span>
                        <RiDeleteBin6Line size={20} />
                      </span>
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default AdminDashBoard;
