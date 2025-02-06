import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/blog-port-logo.png";

import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";

function Footer() {
  return (
    <>
      <div className="bg-primary flex flex-col items-center p-12 gap-5 mt-10">
        <div>
          <Link to={"/"}>
            <div className="flex gap-2 justify-center items-center bg-white w-fit px-5 rounded-lg">
              <img src={Logo} alt="Logo" className="h-12" />
              <p className="text-2xl md:text-3xl font-bold text-primary">
                BLOG PORT
              </p>
            </div>
          </Link>
        </div>
        <div className="md:w-[75%]">
          <p className="text-base/6 text-center text-white">
            Welcome to BLOG PORT, your go-to source for insightful, engaging,
            and thought-provoking content! Our mission is to inspire, educate,
            and entertain our readers through a wide range of topics that cater
            to every interest. We believe in the power of stories and ideas to
            connect people, spark change, and open minds. Whether you're here to
            discover the latest trends in technology, explore new ideas in
            lifestyle, or simply find some inspiration, you're in the right
            place.
          </p>
        </div>
        <div className="flex gap-5">
          <TiSocialFacebookCircular
            size={40}
            className="hover:scale-110 duration-200 cursor-pointer"
          />
          <TiSocialTwitterCircular
            size={40}
            className="hover:scale-110 duration-200 cursor-pointer"
          />
          <TiSocialYoutubeCircular
            size={40}
            className="hover:scale-110 duration-200 cursor-pointer"
          />
          <TiSocialLinkedinCircular
            size={40}
            className="hover:scale-110 duration-200 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}

export default Footer;
