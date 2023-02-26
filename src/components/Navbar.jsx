import React, { useContext } from "react";
import NetflixLogo from "../assets/netflixLogo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center absolute w-full z-10">
      <div className="mx-[1.5rem]  sm:mx-[4rem] my-[2rem]">
        <Link to="/">
          {" "}
          <img
            src={NetflixLogo}
            alt="NetflixLogo"
            className="sm:h-[5.5rem]  h-[3rem] "
          />
        </Link>
      </div>
      {user ? (
        <div className="sm:mx-[5rem] my-[2rem] mx-[2rem]">
          <Link
            className=" bg-red px-[1.5rem] py-[0.5rem] rounded text-white text-[1.6rem] font-semibold"
            onClick={logOut}
            to="/"
          >
            Log Out
          </Link>
        </div>
      ) : (
        <div className="sm:mx-[5rem] my-[2rem] mx-[2rem]">
          <Link
            className=" rounded text-white text-[1.6rem] font-semibold mr-[2rem]"
            to="/signin"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-red px-[1.5rem] py-[0.5rem] rounded text-white text-[1.6rem] font-semibold"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
