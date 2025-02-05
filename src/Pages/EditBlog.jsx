import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { databases, storage } from "../Appwrite/appwriteConfig";
import { Query } from "appwrite";
import AdminNavbar from "../Components/AdminNavbar";
import BeatLoader from "react-spinners/BeatLoader";
import { Input, Textarea } from "@material-tailwind/react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditBlog() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    shortDescription: "",
    tag: "",
    imageURL: "",
  });
  const [newImage, setNewImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBlog = async () => {
    try {
      let response = await databases.listDocuments(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_COLLECTION_ID,
        [Query.equal("$id", id)]
      );

      if (response?.documents?.length) {
        const blog = response.documents[0];
        setFormData({
          title: blog.title,
          description: blog.description,
          shortDescription: blog.shortDescription,
          tag: blog.tag,
          imageURL: blog.imageURL,
        });
      }
      setLoading(false);
    } catch (error) {
      console.error("Fetching Error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image selection
  const handleImageChange = (e) => {
    setNewImage(e.target.files[0]); // Store new image file
  };

  // Upload new image to Appwrite Storage
  const uploadImage = async () => {
    if (!newImage) return formData.imageURL; // Keep the old image if no new one is selected

    try {
      const file = await storage.createFile(
        import.meta.env.VITE_APPWRITE_BUCKET_ID,
        "unique()",
        newImage
      );

      // Get the preview URL from Appwrite
      return storage.getFilePreview(
        import.meta.env.VITE_APPWRITE_BUCKET_ID,
        file.$id
      );
    } catch (error) {
      console.error("Error uploading image:", error);
      return formData.imageURL; // Return the old image URL if upload fails
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.info("Updating blog...", {
      autoClose: false,
      position: "bottom-center",
    });

    const newImageUrl = await uploadImage();
    try {
      await databases.updateDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_COLLECTION_ID,
        id,
        { ...formData, imageURL: newImageUrl }
      );

      toast.update(toastId, {
        render: "Blog updated successfully!",
        type: "success",
        autoClose: 3000,
        position: "bottom-center",
      });
      fetchBlog();
    } catch (error) {
      toast.error("Failed to Update Blog", {
        type: "error",
        autoClose: 3000,
        position: "bottom-center",
      });
      console.error("Error updating document:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {}, [handleSubmit, handleImageChange]);

  return (
    <>
      <AdminNavbar />
      <ToastContainer />

      <div className="py-5">
        <p className="text-xl md:text-3xl font-semibold text-center">
          Manage Blog
        </p>
        {loading && (
          <div className="flex flex-col items-center justify-center my-10">
            <p className="text-xl font-semibold text-black">Loading Blog...</p>
            <BeatLoader color="#7C4EE4" size={25} />
          </div>
        )}
        <div className="flex justify-center py-12">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-5 w-[80%]"
          >
            <div className="w-[80%]">
              <Input
                name="title"
                color="black"
                label="Blog Title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="w-[80%]">
              <Textarea
                name="description"
                color="black"
                className="h-56"
                label="Blog Description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="w-[80%]">
              <Textarea
                name="shortDescription"
                color="black"
                className="h-56"
                label="Blog Short Description"
                value={formData.shortDescription}
                onChange={handleChange}
              />
            </div>
            <div className="w-[80%]">
              <Input
                name="tag"
                color="black"
                label="Blog Tag"
                value={formData.tag}
                onChange={handleChange}
              />
            </div>
            <div className="w-[80%] flex flex-col md:flex-row items-center gap-5">
              <div className="relative">
                <p className="absolute text-white text-center bottom-0 bg-black/50 w-full py-3 rounded-lg">
                  Current Image
                </p>
                <img
                  src={formData.imageURL}
                  className="w-96 rounded-lg"
                  alt="Blog"
                />
              </div>
              <div>
                <Input
                  name="image"
                  id="uploader"
                  type="file"
                  label="Upload New Image"
                  onChange={handleImageChange}
                />
              </div>
            </div>
            <div className="w-[80%] flex justify-center">
              <button
                type="submit"
                className="outline-none bg-primary text-white px-6 py-1 text-md font-semibold rounded-lg hover:bg-white hover:border border-primary hover:text-primary duration-300"
              >
                {loading ? "Updating..." : "Update"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditBlog;
