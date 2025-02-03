import React, { useEffect, useRef, useState } from "react";
import AdminNavbar from "../Components/AdminNavbar";
import { Input, Textarea } from "@material-tailwind/react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import styles

import { Client, Databases, ID, Storage } from "appwrite";
import { RiInputField } from "react-icons/ri";

function AddBlog() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [tag, setTag] = useState();
  const [loading, setLoading] = useState(false);

  const inputFileRef = useRef();

  const client = new Client()
    .setEndpoint(`${import.meta.env.VITE_APPWRITE_ENDPOINT}`)
    .setProject(`${import.meta.env.VITE_APPWRITE_PROJECT_ID}`);

  const databases = new Databases(client);
  const storage = new Storage(client);

  const handleAddBlog = async () => {
    const fileInput = document.getElementById("uploader").files[0];

    if (!fileInput) {
      alert("File not selected");
      return;
    }

    setLoading(true); // Set loading state to true
    const toastId = toast.info("Uploading...", {
      autoClose: false,
      position: "bottom-center",
    });

    try {
      // Upload image to Appwrite storage
      const uploadedFile = await storage.createFile(
        `${import.meta.env.VITE_APPWRITE_BUCKET_ID}`,
        ID.unique(),
        fileInput
      );

      console.log("Image uploaded successfully:", uploadedFile);

      // Get image preview URL
      const fileUrl = storage.getFilePreview(
        `${import.meta.env.VITE_APPWRITE_BUCKET_ID}`,
        uploadedFile.$id
      ); // Ensure `.href` is used to get the actual URL

      console.log("Generated Image URL:", fileUrl);

      // Proceed with document creation only after image URL is available
      if (title && description && tag) {
        const uploadDoc = await databases.createDocument(
          `${import.meta.env.VITE_APPWRITE_DATABASE_ID}`,
          `${import.meta.env.VITE_APPWRITE_COLLECTION_ID}`,
          ID.unique(),
          { title, description, tag, imageURL: fileUrl } // Use `fileUrl` directly
        );

        console.log("Document uploaded successfully:", uploadDoc);

        toast.update(toastId, {
          render: "Blog added successfully!",
          type: "success",
          autoClose: 3000,
          position: "bottom-center",
        });

        setTitle("");
        setDescription("");
        setTag("");
        inputFileRef.current.value = "";
      } else {
        alert("Input fields cannot be empty");
      }
    } catch (error) {
      console.error("Error uploading file or document:", error);
      toast.error("Failed to upload Blog!", {
        position: "bottom-center",
      });
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  useEffect(() => {}, [handleAddBlog]);

  return (
    <>
      <AdminNavbar />
      <ToastContainer />

      <div className="py-5">
        <p className="text-4xl font-semibold text-center">Add Blog</p>
      </div>

      <div className="flex justify-center p-5">
        <div className=" w-[95%] md:w-[60%] rounded-lg bg-white p-5">
          <div className="mb-5">
            <Input
              label="Title"
              placeholder="Enter Blog title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="mb-5">
            <Textarea
              className="h-56"
              label="Description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-wrap flex-col xl:flex-row justify-between">
            <div className="mb-5 xl:w-[45%]">
              <Input
                label="Tag"
                value={tag}
                onChange={(e) => {
                  setTag(e.target.value);
                }}
              />
            </div>

            <div className="mb-5 xl:w-[45%]">
              <Input
                id="uploader"
                type="file"
                label="Image"
                ref={inputFileRef}
              />
            </div>
            <div className="mb-5 flex justify-center w-full">
              <button
                className="outline-none bg-primary text-white px-6 py-1 text-md font-semibold rounded-lg hover:bg-white hover:border border-primary hover:text-primary duration-300"
                onClick={handleAddBlog}
              >
                Add Blog
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddBlog;
