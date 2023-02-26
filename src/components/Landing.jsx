import React from "react";
import LandingImg from "../assets/Landingimg.jpg";
import Navbar from "./Navbar";

const Landing = () => {
  return (
    <div className="">
      <Navbar />
      <div className="w-full h-screen absolute">
        <img
          src={LandingImg}
          alt="Landingimg"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60"></div>

      <div className="absolute w-full top-[40%] flex-col flex items-center">
        <p className="sm:text-[4.8rem] text-[2.4rem] text-white text-center font-bold sm:w-[600px] w-[80%]">
          Unlimited movies, TV shows, and more{" "}
        </p>
        <p className="sm:text-[2.4rem] text-[1.6rem] text-white text-center">
          Watch anywhere. Cancel anytime.{" "}
        </p>
      </div>
    </div>
  );
};

export default Landing;
