import React from "react";
import Navbar from "../Components/Navbar.jsx";
import AboutImg1 from "../assets/about-1.png";
import Footer from "../Components/Footer.jsx";

function About() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center py-10">
        <p className="text-md lg:text-lg text-gray-700 font-semibold text-center mb-3 ">
          ABOUT US
        </p>
        <p className="text-3xl lg:text-5xl font-semibold text-center w-[90%] lg:w-[50%]">
          Creative Blog Writting and publishing site
        </p>
      </div>

      <div className="flex flex-col gap-11 justify-center items-center mb-10">
        <div className="w-[90%] lg:w-[80%]">
          <p className="text-center text-base/7">
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
        <div className="w-[90%] lg:w-[80%]">
          <img src={AboutImg1} alt="" />
        </div>

        <div className="w-full bg-white flex flex-col items-center gap-5 py-12">
          <div className="w-[90%] lg:w-[80%]">
            <p className="text-2xl lg:text-4xl font-semibold text-center mb-3 ">
              WHAT WE OFFER
            </p>
            <p className="text-sm lg:text-xl text-gray-800 text-center">
              Our blog covers a wide variety of topics to cater to all interests
            </p>
          </div>
          <div className="w-[90%] lg:w-[80%]">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
              <div className="bg-[url('src/assets/technology.jpg')] bg-cover md:h-[250px] md:w-[400px] flex items-center p-5 ">
                <div className="text-center bg-white/60 p-3 ">
                  <p className="text-xl font-semibold mb-2">
                    Technology & Innovation
                  </p>
                  <p className="text-sm">
                    Explore the newest advancements in technology, from
                    cutting-edge gadgets to breakthrough software. Stay informed
                    on the latest trends shaping industries and the future.
                  </p>
                </div>
              </div>
              <div className="bg-[url('src/assets/well-being.jpg')] bg-cover md:h-[250px] md:w-[400px] flex items-center p-5 ">
                <div className="text-center bg-white/60 p-3 ">
                  <p className="text-xl font-semibold mb-2">
                    Lifestyle & Well-being
                  </p>
                  <p className="text-sm">
                    Learn practical tips to enhance your mental and physical
                    well-being. Discover lifestyle choices that promote a
                    balanced and healthy life, both inside and out.
                  </p>
                </div>
              </div>
              <div className="bg-[url('src/assets/growth.jpg')] bg-cover md:h-[250px] md:w-[400px] flex items-center p-5 ">
                <div className="text-center bg-white/60 p-3 ">
                  <p className="text-xl font-semibold mb-2">
                    Growth & Productivity
                  </p>
                  <p className="text-sm">
                    Unlock your potential with strategies that boost personal
                    development and efficiency. Find actionable tips to help you
                    achieve your goals and stay focused on what matters most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[90%] lg:w-[80%] py-5">
          <p className="text-xl lg:text-4xl font-semibold text-center mb-3 ">
            OUR CORE VALUES
          </p>
          <p className="text-center text-base/7">
            At BLOG PORT, we are driven by a commitment to authenticity,
            quality, inclusivity, and innovation. We believe in sharing real and
            meaningful content that resonates with our readers. Every article we
            publish is carefully crafted to ensure it provides value, whether
            through knowledge, insights, or inspiration. We welcome diverse
            perspectives and strive to create a space where ideas can flourish.
            Embracing creativity and forward-thinking approaches, we
            continuously evolve to bring fresh and engaging content to our
            audience.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
