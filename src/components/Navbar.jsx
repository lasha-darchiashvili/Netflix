import React from "react";
import NetflixLogo from "../assets/netflixLogo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center absolute w-full z-10">
      <img
        src={NetflixLogo}
        alt="NetflixLogo"
        className="sm:h-[5.5rem] sm:mx-[5rem] my-[2rem] h-[3rem] mx-[1.5rem]"
      />
      <div className="sm:mx-[5rem] my-[2rem] mx-[2rem]">
        <button className=" rounded text-white text-[1.6rem] font-semibold mr-[2rem]">
          Sign In
        </button>
        <button className="bg-red px-[1.5rem] py-[0.5rem] rounded text-white text-[1.6rem] font-semibold">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
