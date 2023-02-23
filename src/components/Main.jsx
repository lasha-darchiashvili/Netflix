import React, { useContext, useEffect, useState } from "react";
import requests from "../Requests";
import { ReactComponent as Loader } from "../assets/loader.svg";
import Navbar from "./Navbar";
import { LoadingContext } from "../context/LoadingContext";
import Loading from "./Loading";

const Main = () => {
  const { sliderLoading, setSliderLoading, loading, setLoading } =
    useContext(LoadingContext);

  const [movies, setMovies] = useState([]);

  const randomIndex = Math.floor(Math.random() * movies.length);
  const movie = movies[randomIndex];

  useEffect(() => {
    fetch(requests.fetchNowPlaying)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setTimeout(() => setLoading(false), 600);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(loading, sliderLoading);

  if (loading || sliderLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="h-[600px] w-full font-roboto">
        <div className="absolute h-[600px] w-full bg-black opacity-60"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie["backdrop_path"]}`}
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute top-[12%] w-[600px] m-[4rem]">
          <p className="text-[4.8rem] text-white font-bold my-[1rem] whitespace-nowrap">
            {movie.title}
          </p>
          <button className="bg-gray-300 text-[1.4rem] text-black py-2 px-5 my-[1rem] font-semibold mr-[2rem] tracking-wider hover:opacity-[0.9]">
            Play
          </button>
          <button className=" text-[1.4rem] py-2 px-5 my-[1rem] border border-gray-300 text-white">
            Information
          </button>
          <p className="text-gray-500 text-[1.2rem] my-[1rem]">
            Released {movie.release_date}
          </p>
          <p className="text-[1.6rem] text-white ">{movie?.overview}</p>
        </div>
      </div>
    </>
  );
};

export default Main;
