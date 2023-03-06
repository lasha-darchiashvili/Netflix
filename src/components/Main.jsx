import React, { useContext, useEffect, useState } from "react";
import requests from "../Requests";
import { ReactComponent as Loader } from "../assets/loader.svg";
import Navbar from "./Navbar";
import { LoadingContext } from "../context/LoadingContext";
import { ModalContext } from "../context/ModalContext";
import Loading from "./Loading";

const Main = () => {
  const { sliderLoading, setSliderLoading, loading, setLoading } =
    useContext(LoadingContext);
  const { chosenMovie, setChosenMovie, showModal, setShowModal } =
    useContext(ModalContext);

  const [movie, setMovie] = useState();

  useEffect(() => {
    fetch(requests[2].url)
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        setMovie(data.results[randomIndex]);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);
  // console.log(showModal, "modal");
  // console.log(loading, sliderLoading);

  if (loading || sliderLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="sm:h-[600px] h-[450px] w-full font-roboto">
        <div className="absolute sm:h-[600px] h-[450px] w-full bg-black opacity-60"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie["backdrop_path"]}`}
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute top-[12%]  sm:w-[600px] xs:m-[4rem] m-[2rem]">
          <p className="text-[2.4rem] sm:text-[4.8rem] text-white font-bold my-[1rem] xs:whitespace-nowrap">
            {movie.title}
          </p>
          <button
            onClick={() => {
              setShowModal(true);
              setChosenMovie(movie);
            }}
            className="bg-gray-300 rounded-md text-[1.4rem] text-black py-2 px-5 my-[1rem] font-semibold mr-[2rem] tracking-wider hover:opacity-[0.9]"
          >
            Play
          </button>
          <button className=" text-[1.4rem]  rounded-md py-2 px-5 my-[1rem] border border-gray-300 text-white">
            Information
          </button>
          <p className="text-gray-500 text-[1.2rem] my-[1rem]">
            Released {movie.release_date}
          </p>
          <p className="xs:text-[1.6rem] mob:text-[1.2rem] text-white mob:w-[200px]">
            {movie?.overview.slice(1, 200) + "..."}
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
