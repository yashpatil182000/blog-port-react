import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "./Layout.jsx";
import AllBlogs from "./Pages/AllBlogs.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import About from "./Pages/About.jsx";
import FeaturedBlog from "./Pages/FeaturedBlog.jsx";
import AddBlog from "./Pages/AddBlog.jsx";
import AdminDashBoard from "./Pages/AdminDashBoard.jsx";
import Blog from "./Pages/Blog.jsx";
import EditBlog from "./Pages/EditBlog.jsx";

import { store } from "./store/store.js";
import { Provider } from "react-redux";
import AddAdmin from "./Pages/AddAdmin.jsx";
import UserAddBlog from "./Pages/UserAddBlog.jsx";
import MyBlogs from "./Pages/MyBlogs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/all-blogs", element: <AllBlogs /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/about", element: <About /> },
      { path: `/featured-blog/:id`, element: <FeaturedBlog /> },
      { path: `/user-add-blog`, element: <UserAddBlog /> },
      { path: `/my-blogs`, element: <MyBlogs /> },
      {
        path: "/admin-dashboard",
        element: <AdminDashBoard />,
      },
      { path: "/add-blog", element: <AddBlog /> },
      { path: "/add-admin", element: <AddAdmin /> },
      { path: `/blog/:id`, element: <Blog /> },
      { path: `/edit-blog/:id`, element: <EditBlog /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
