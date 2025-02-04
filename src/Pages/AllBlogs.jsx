import React, { useEffect, useState } from "react";
import BlogImg from "../assets/blog-img.png";
import BlogCard from "../Components/BlogCard";
import Navbar from "../Components/Navbar.jsx";
import { Client, Databases, Query } from "appwrite";
import BeatLoader from "react-spinners/BeatLoader";
import { Link } from "react-router-dom";

function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const client = new Client()
    .setEndpoint(`${import.meta.env.VITE_APPWRITE_ENDPOINT}`)
    .setProject(`${import.meta.env.VITE_APPWRITE_PROJECT_ID}`);

  const databases = new Databases(client);

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
      <Navbar />

      <div className="flex justify-center py-12 px-5 md:px-0">
        <div className="text-center md:w-[55%] flex flex-col gap-3">
          <p className="text-lg font-medium opacity-75">Our Blogs</p>
          <p className="text-4xl font-semibold ">
            Find our all blogs from here
          </p>
          <p className="opacity-75">
            our blogs are written from very research research and well known
            writers writers so that we can provide you the best blogs and
            articles articles for you to read them all along
          </p>
        </div>
      </div>
      {loading && (
        <div className="flex flex-col items-center justify-center my-10">
          <p className="text-xl font-semibold text-black">Loading Blogs</p>
          <BeatLoader color="#7C4EE4" size={25} />
        </div>
      )}
      <div className="w-full flex flex-wrap justify-center px-5 md:px-16 gap-5">
        {blogs ? (
          blogs.map((blog, index) => {
            return (
              <Link to={`/blog/${blog.$id}`} key={index}>
                <BlogCard
                  image={blog.imageURL}
                  tag={blog.tag}
                  title={blog.title}
                  description={blog.shortDescription}
                />
              </Link>
            );
          })
        ) : (
          <p>No BLogs to show</p>
        )}
      </div>
    </>
  );
}
export default AllBlogs;
