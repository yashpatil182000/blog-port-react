import React, { useEffect, useRef, useState } from "react";
import AdminNavbar from "../Components/AdminNavbar";
import { Input, Textarea } from "@material-tailwind/react";
import { storage, databases } from "../Appwrite/appwriteConfig";
import { ID } from "appwrite";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Quill from "quill";

import { useSelector, useDispatch } from "react-redux";

function AddBlog() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [shortDescription, setShortDescription] = useState();
  const [tag, setTag] = useState();
  const [loading, setLoading] = useState(false);

  const userData = useSelector((state) => state.auth.userData);
  const userID = userData.$id;
  const author = userData.name;
  console.log("USER DATA ::", userData);
  console.log("USER ID ::", userID);

  // react quill custom styles
  const Size = Quill.import("formats/size");
  Size.whitelist = ["small", "normal", "large", "huge"]; // Maps to 16px, 18px, 24px
  Quill.register(Size, true);

  const modules = {
    toolbar: [
      [{ size: ["small", "normal", "large", "huge"] }], // Named sizes (16px, 18px, 24px)
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["clean"], // Remove formatting
    ],
  };

  const formats = [
    "size", // Must match the toolbar key
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "link",
  ];
  // react quill custom styles

  const inputFileRef = useRef();
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

      // console.log("Image uploaded successfully:", uploadedFile);

      // Get image preview URL
      const fileUrl = storage.getFilePreview(
        `${import.meta.env.VITE_APPWRITE_BUCKET_ID}`,
        uploadedFile.$id
      );

      // console.log("Generated Image URL:", fileUrl);

      if (title && description && tag) {
        const uploadDoc = await databases.createDocument(
          `${import.meta.env.VITE_APPWRITE_DATABASE_ID}`,
          `${import.meta.env.VITE_APPWRITE_BLOG_COLLECTION_ID}`,
          ID.unique(),
          {
            title,
            description,
            shortDescription,
            tag,
            userID,
            author,
            imageURL: fileUrl,
          }
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
        setShortDescription("");
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
            {/* <Textarea
              className="h-56"
              label="Description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            /> */}
            <div className=" mb-28 md:mb-14">
              <ReactQuill
                theme="snow"
                value={description}
                className="h-56 rounded-lg"
                onChange={setDescription}
                modules={modules}
                formats={formats}
              />
            </div>
          </div>
          <div className="mb-5">
            <Textarea
              className="h-56"
              label="Short Description"
              value={shortDescription}
              onChange={(e) => {
                setShortDescription(e.target.value);
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
