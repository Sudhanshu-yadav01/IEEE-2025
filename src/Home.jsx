import React from "react";
import "./Home.css";

import Styledbutton from "./components/Styledbutton";
import AnimatedList from "./components/AnimatedList";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full mt-28 lg:mt-8 overflow-hidden">
      <div className=" ">
        <div className="flex flex-col items-center mt-48 lg:mt-20 h-[60vh]">
          <div className="glass-card flex items-center gap-4 px-6 py-3 mb-8 w-fit mx-auto">
            <img
              className="w-10 h-10 rounded-full overflow-hidden"
              src="https://media.collegedekho.com/media/img/institute/logo/dy_pa.jpeg"
              alt="icon"
            />
            <span className="text-white font-semibold text-lg z-10">
              D.Y Patil - R.A.I.T
            </span>
          </div>
          <h1 className="lg:text-6xl text-4xl font-bold mb-4 ">
            Welcome to IEEE RAIT
          </h1>
          <p className="text-sm lg:text-lg text-gray-100 mt-3">
            " Innovating, Inspiring, and Empowering the Future of Technology "
          </p>
          <p className="text-sm text-center text-gray-100">
            Our Vision is to inspire determination and enthusiasm in a
            professional environment
          </p>

          <div className="w-full flex justify-center items-center gap-x-6 mt-24">
            <Styledbutton />
            <button className="glass-btn btn-shine text-white px-8 py-4 text-lg rounded-full font-semibold shadow-lg backdrop-blur-md border border-white/20 bg-white/10 hover:bg-white/20 transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center lg:mt-14   mb-10">
          <AnimatedList />
        </div>

        <div className="flex justify-start items-start w-[80vw] text-xl mx-auto mt-20 mb-10">
          <div className="flex flex-col text-left w-full">
            <h2 className="text-3xl font-bold mb-4">Get to Know RAIT IEEE</h2>
            <br />
            <h3>Essentials about RAIT IEEE</h3>
            <br />
            <h5>
              The Institute of Electrical and Electronics Engineers (IEEE) is
              the world’s largest technical professional organization dedicated
              to advancing technology for the benefit of humanity. 
              <br /> RAIT IEEE is
              the official Student Branch of this prestigious international
              organization. It is a committee committed to the holistic
              development of students at RAIT, empowering them with skills
              beyond academics.<br/>
              We actively work in diverse fields such as
              Technical, Research, Creative, Publicity, Management, Social
              Media, and Editorial. Our mission as a committee is to inspire
              innovation, encourage technical excellence, foster teamwork, and
              nurture leadership qualities in students. Through events,
              workshops, and collaborative activities, RAIT IEEE aims to create
              impactful engineers who are ready to take on global challenges.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
