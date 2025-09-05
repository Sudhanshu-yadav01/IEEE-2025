import React from "react";
import "./Home.css";
import Footer from "./components/Footer";

import Styledbutton from "./components/Styledbutton";
import AnimatedList from "./components/AnimatedList";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full  lg:mt-8 overflow-hidden">
      <div className=" ">
        <div className="flex flex-col items-center mt-16 lg:mt-20 h-[60vh]">
          <div className="glass-card flex items-center gap-4 p-2 mb-8 w-fit mx-auto">
            <img
              className="w-10 h-10 rounded-full overflow-hidden"
              src="https://media.collegedekho.com/media/img/institute/logo/dy_pa.jpeg"
              alt="icon"
            />
            <span className="text-white font-semibold text-lg z-10">
              R . A . I . T
            </span>
          </div>
          <h1 className="lg:text-6xl text-3xl font-medium mb-2 ">
            Welcome to IEEE RAIT
          </h1>
          <p className="text-xs text-center px-2 lg:text-lg text-light text-gray-100 mb-4">
            " Innovating, Inspiring, and Empowering Technology "<br />
            Our Vision is to inspire determination and enthusiasm in a
            professional environment
          </p>

          <div className="w-full flex justify-center items-center gap-x-6 mt-12">
            <Styledbutton />
            <button className="glass-btn btn-shine text-white  text-xs rounded-full font-semibold shadow-lg backdrop-blur-md border border-white/20 bg-white/10 hover:bg-white/20 transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center lg:mt-14   mb-10">
          <AnimatedList />
        </div>

        <div className="flex justify-start items-start w-[88%] text-base mx-auto mt-20 mb-10">
          <div className="flex flex-col text-left w-full">
            <h2 className="text-base font-bold mb-4">Get to Know RAIT IEEE</h2>
            <br />
            <h3>Essentials about RAIT IEEE</h3>
            <br />
            <h5>
              The Institute of Electrical and Electronics Engineers (IEEE) is
              the world’s largest technical professional organization dedicated
              to advancing technology for the benefit of humanity.
              <br /> RAIT IEEE is the official Student Branch of this
              prestigious international organization. It is a committee
              committed to the holistic development of students at RAIT,
              empowering them with skills beyond academics.
              <br />
            </h5>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
