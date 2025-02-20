import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "./features/authSlice";
import { account, databases } from "./Appwrite/appwriteConfig";
import { Query } from "appwrite";

function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkActiveSession = async () => {
      try {
        const authUser = await account.get();

        if (!authUser) {
          console.log("No active session found.");
          return;
        }

        console.log("Auth User:", authUser);

        const response = await databases.listDocuments(
          `${import.meta.env.VITE_APPWRITE_DATABASE_ID}`,
          `${import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID}`,
          [Query.equal("email", authUser.email)]
        );

        if (response.documents.length === 0) {
          console.error("User not found in database.");
          return;
        }

        const loggedInUser = response.documents[0];

        // Dispatch user data to Redux store
        dispatch(setUser(loggedInUser));
      } catch (error) {
        console.error("Error fetching user session");
      }
    };

    checkActiveSession();
  }, [dispatch]);

  return (
    <>
      <Outlet />
    </>
  );
}

export default Layout;
