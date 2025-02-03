import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default Layout;
