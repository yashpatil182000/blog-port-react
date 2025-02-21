import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { databases, storage } from "../Appwrite/appwriteConfig";
import { Query } from "appwrite";
import Navbar from "../Components/Navbar";
import BeatLoader from "react-spinners/BeatLoader";
import { Input, Textarea } from "@material-tailwind/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Quill from "quill";

function UserEditBlog() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    tag: "",
    imageURL: "",
  });
  const [description, setDescription] = useState(""); // Separate state for ReactQuill
  const [newImage, setNewImage] = useState(null);
  const [loading, setLoading] = useState(true);

  // react quill custom styles
  const Size = Quill.import("formats/size");
  Size.whitelist = ["small", "normal", "large", "huge"];
  Quill.register(Size, true);

  const modules = {
    toolbar: [
      [{ size: ["small", "normal", "large", "huge"] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["clean"],
    ],
  };

  const formats = [
    "size",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "link",
  ];

  const fetchBlog = async () => {
    try {
      let response = await databases.listDocuments(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_BLOG_COLLECTION_ID,
        [Query.equal("$id", id)]
      );

      if (response?.documents?.length) {
        const blog = response.documents[0];

        setFormData({
          title: blog.title || "",
          shortDescription: blog.shortDescription || "",
          tag: blog.tag || "",
          imageURL: blog.imageURL || "",
        });
        setDescription(blog.description || "");
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

  const handleImageChange = (e) => {
    setNewImage(e.target.files[0]);
  };

  const uploadImage = async () => {
    if (!newImage) return formData.imageURL;
    try {
      const file = await storage.createFile(
        import.meta.env.VITE_APPWRITE_BUCKET_ID,
        "unique()",
        newImage
      );
      return storage.getFilePreview(
        import.meta.env.VITE_APPWRITE_BUCKET_ID,
        file.$id
      );
    } catch (error) {
      console.error("Error uploading image:", error);
      return formData.imageURL;
    }
  };

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
        import.meta.env.VITE_APPWRITE_BLOG_COLLECTION_ID,
        id,
        { ...formData, description, imageURL: newImageUrl }
      );
      toast.update(toastId, {
        render: "Blog updated successfully!",
        type: "success",
        autoClose: 3000,
      });
      fetchBlog();
    } catch (error) {
      toast.error("Failed to Update Blog", { type: "error", autoClose: 3000 });
      console.error("Error updating document:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
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
            className="flex flex-col items-center gap-5 w-[90%] md:w-[80%] rounded-lg shadow-md bg-white p-3 md:p-14"
          >
            <Input
              name="title"
              label="Blog Title"
              value={formData.title}
              onChange={handleChange}
            />
            <ReactQuill
              className="h-48 w-full mb-14"
              value={description}
              onChange={setDescription}
              modules={modules}
              formats={formats}
            />
            <Textarea
              name="shortDescription"
              label="Blog Short Description"
              value={formData.shortDescription}
              onChange={handleChange}
            />
            <Input
              name="tag"
              label="Blog Tag"
              value={formData.tag}
              onChange={handleChange}
            />
            <div className="w-full flex flex-col md:flex-row items-center gap-5">
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
              <Input
                type="file"
                label="Upload New Image"
                onChange={handleImageChange}
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-6 py-1 font-semibold rounded-lg hover:bg-white hover:border hover:text-primary duration-300"
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserEditBlog;
