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
import UserEditBlog from "./Pages/UserEditBlog.jsx";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";

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
      { path: `/blog/:id`, element: <Blog /> },

      { path: `/featured-blog/:id`, element: <FeaturedBlog /> },
      {
        path: `/user-add-blog`,
        element: (
          <ProtectedRoutes allowedRoles="user">
            <UserAddBlog />
          </ProtectedRoutes>
        ),
      },
      {
        path: `/user-edit-blog/:id`,
        element: (
          <ProtectedRoutes allowedRoles="user">
            <UserEditBlog />
          </ProtectedRoutes>
        ),
      },
      {
        path: `/my-blogs`,
        element: (
          <ProtectedRoutes allowedRoles="user">
            <MyBlogs />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/admin-dashboard",
        element: (
          <ProtectedRoutes allowedRoles="admin">
            <AdminDashBoard />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/add-blog",
        element: (
          <ProtectedRoutes allowedRoles="admin">
            <AddBlog />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/add-admin",
        element: (
          <ProtectedRoutes allowedRoles="admin">
            <AddAdmin />
          </ProtectedRoutes>
        ),
      },
      {
        path: `/edit-blog/:id`,
        element: (
          <ProtectedRoutes allowedRoles="admin">
            <EditBlog />
          </ProtectedRoutes>
        ),
      },
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
