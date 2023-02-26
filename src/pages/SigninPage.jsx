import React from "react";
import Signin from "../components/Signin";
import Navbar from "../components/Navbar";
import LandingImg from "../assets/Landingimg.jpg";

const SigninPage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full">
        <div className="w-full h-screen absolute">
          <img
            src={LandingImg}
            alt="Landingimg"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60"></div>
        <Signin />
      </div>
    </div>
  );
};

export default SigninPage;
