import React from "react";
import Featuredpost from "../Components/FeaturedBlogComp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AiImg from "../assets/ai.jpg";
import WomensCricketImg from "../assets/womens-cricket.png";
import VRBlogImg from "../assets/vr-blog.png";

import BudgetImg from "../assets/budget.png";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";

function Home() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 3000,
  };
  return (
    <>
      <Navbar />
      <div className="px-8 md:px-12 py-5 bg-[url('src/assets/hero-bg.png')]  bg-cover">
        <div className="text-center pb-10">
          <p className="text-xl font-bold text-white ">Featured Blogs </p>
        </div>
        <Slider {...settings}>
          <div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-[50%] px-5">
                <p className="text-3xl lg:text-5xl font-semibold text-white mb-5">
                  The Rise of AI: Transforming the Future of Technology
                </p>
                <p className="text-base text-white mb-5">
                  Artificial Intelligence (AI) has emerged as one of the most
                  groundbreaking technological advancements of the 21st century.
                  From automating mundane tasks to revolutionizing industries,
                  AI is reshaping the way we live, work, and interact. But what
                  exactly is AI, and why is it gaining so much attention?
                </p>
                <Link to={`Featured-blog/001`}>
                  <p className="cursor-pointer text-sm font-semibold px-4 py-1 w-fit rounded-xl bg-white">
                    Read more
                  </p>
                </Link>
              </div>
              <div className="md:w-[50%] mt-8 md:mt-0">
                <img src={AiImg} className="rounded-3xl" alt="" />
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-[50%] px-5">
                <p className="text-3xl lg:text-5xl font-semibold text-white mb-5">
                  India's Union Budget 2025-26: An In-Depth Overview
                </p>
                <p className="text-base text-white mb-5">
                  On February 1, 2025, India's Finance Minister Nirmala
                  Sitharaman presented the Union Budget for the fiscal year
                  2025-26. The budget focuses on driving economic growth,
                  reducing the fiscal deficit, and addressing concerns of the
                  middle className with significant tax reforms and incentives.
                </p>
                <Link to={`Featured-blog/002`}>
                  <p className="cursor-pointer text-sm font-semibold px-4 py-1 w-fit rounded-xl bg-white">
                    Read more
                  </p>
                </Link>
              </div>
              <div className="md:w-[50%] mt-8 md:mt-0">
                <img src={BudgetImg} className="rounded-3xl" alt="" />
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-[50%] px-5">
                <p className="text-3xl lg:text-5xl font-semibold text-white mb-5">
                  India Clinches Back-to-Back Women's Under-19 T20 World Cup
                  Titles
                </p>
                <p className="text-base text-white mb-5">
                  India's women's Under-19 cricket team has achieved a
                  remarkable feat by winning their second consecutive T20 World
                  Cup title. In the final against South Africa, India secured a
                  nine-wicket victory, with opener G Trisha playing a pivotal
                  role.
                </p>
                <Link to={`Featured-blog/003`}>
                  <p className="cursor-pointer text-sm font-semibold px-4 py-1 w-fit rounded-xl bg-white">
                    Read more
                  </p>
                </Link>
              </div>
              <div className="md:w-[50%] mt-8 md:mt-0">
                <img src={WomensCricketImg} className="rounded-3xl" alt="" />
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="flex justify-center py-12">
        <div className="w-[85%] relative ">
          <div className="">
            <img src={VRBlogImg} alt="" />
          </div>
          <div className="lg:absolute -bottom-36 -right-20 bg-white lg:w-[65%] md:p-12 rounded-3xl mt-5 lg:mt-0 md:w-full p-5">
            <div className="flex gap-5 mb-3">
              <p className="font-semibold">Developement</p>
              <p>18-mar-2025</p>
            </div>
            <div className="mb-3">
              <p className="text-2xl font-semibold">
                How to make a Game look more attractive with New VR & AI
                Technology
              </p>
            </div>
            <div>
              <p className="text-sm ">
                Google has been investing in AI for many years and bringing its
                benefits to individuals, businesses and communities. Whether
                it’s publishing state-of-the-art research, building helpful
                products or developing tools and resources that enable others,
                we’re committed to making AI accessible to everyone.
              </p>
              <Link to={`Featured-blog/004`}>
                <p className="cursor-pointer text-sm font-semibold px-4 py-1 w-fit rounded-xl bg-primary mt-3">
                  Read more
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
