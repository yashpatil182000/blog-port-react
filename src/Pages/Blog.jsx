import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Query } from "appwrite";
import { databases } from "../Appwrite/appwriteConfig";

import { useParams } from "react-router-dom";
import BlogComponent from "../Components/BlogComponent";
import BeatLoader from "react-spinners/BeatLoader";
import Footer from "../Components/Footer";

import { motion } from "framer-motion";

function Blog() {
  const { id } = useParams();

  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(true);

  const fetchBlog = async () => {
    try {
      let responce = await databases.listDocuments(
        `${import.meta.env.VITE_APPWRITE_DATABASE_ID}`,
        `${import.meta.env.VITE_APPWRITE_BLOG_COLLECTION_ID}`,
        [Query.equal("$id", id)]
      );

      if (responce && responce.documents) {
        responce.documents.map((blog) => {
          setBlog(blog);
        });
        setLoading(false);
      }
    } catch (error) {
      console.log("Fetching Error: ", error);
    }
  };
  // console.log(blog);

  useEffect(() => {
    fetchBlog();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      {loading && (
        <div className="flex flex-col items-center justify-center my-10">
          <p className="text-xl font-semibold text-black">Loading Blogs</p>
          <BeatLoader color="#7C4EE4" size={25} />
        </div>
      )}
      {blog && (
        <BlogComponent
          title={blog.title}
          image={blog.imageURL}
          description={blog.description}
          tag={blog.tag}
          date={new Date(blog.$updatedAt).toLocaleString()}
        />
      )}

      <Footer />
    </>
  );
}

export default Blog;
