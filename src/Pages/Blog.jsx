import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Client, Databases, Query } from "appwrite";

import { useParams } from "react-router-dom";
import BlogComponent from "../Components/BlogComponent";
import BeatLoader from "react-spinners/BeatLoader";

function Blog() {
  const { id } = useParams();

  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(true);

  const client = new Client()
    .setEndpoint(`${import.meta.env.VITE_APPWRITE_ENDPOINT}`)
    .setProject(`${import.meta.env.VITE_APPWRITE_PROJECT_ID}`);

  const databases = new Databases(client);

  const fetchBlog = async () => {
    try {
      let responce = await databases.listDocuments(
        `${import.meta.env.VITE_APPWRITE_DATABASE_ID}`,
        `${import.meta.env.VITE_APPWRITE_COLLECTION_ID}`,
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
  console.log(blog);

  useEffect(() => {
    fetchBlog();
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
    </>
  );
}

export default Blog;
