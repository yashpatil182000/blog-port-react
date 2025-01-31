import { useState } from "react";
import Logo from "../assets/blog-port-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburger = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="flex px-6 md:px-16 py-3 justify-between items-center shadow-md bg-white">
      <div className="flex gap-2 justify-center items-center">
        <img src={Logo} alt="Logo" className="h-12" />
        <p className="text-2xl md:text-3xl font-bold text-primary">BLOG PORT</p>
      </div>

      <div className="hidden md:flex gap-5 items-center">
        <ul className="flex gap-5">
          <li className="cursor-pointer text-md  hover:text-primary">Blogs</li>
          <li className="cursor-pointer text-md  hover:text-primary">About</li>
        </ul>
        <button className="outline-none bg-primary text-white px-6 py-1 text-md font-semibold rounded-lg hover:bg-white hover:border border-primary hover:text-primary duration-300">
          Login
        </button>
      </div>

      <button
        onClick={handleHamburger}
        className="md:hidden block button-three border-2 rounded-full border-gray-200 "
        aria-controls="primary-navigation"
        aria-expanded={isMenuOpen}
      >
        <svg
          stroke="var(--button-color)"
          fill="none"
          className="hamburger w-10 h-10"
          viewBox="-10 -10 120 120"
        >
          <path
            className="line"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
          ></path>
        </svg>
      </button>

      <div
        id="mobile-menu"
        className={`absolute top-16 left-0 w-full bg-white shadow-md p-5 flex flex-col gap-4 items-center ${
          isMenuOpen ? "block" : "hidden"
        } md:hidden`}
      >
        <ul className="flex flex-col gap-4 text-lg">
          <li className="cursor-pointer  hover:text-primary">Blogs</li>
          <li className="cursor-pointer  hover:text-primary">About</li>
        </ul>
        <button className="outline-none bg-primary text-white px-10 py-1 text-md font-semibold rounded-lg hover:bg-white hover:border border-primary hover:text-primary duration-300">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
