import React, { useContext, useEffect, useState } from "react";
import requests from "../Requests";
import { ReactComponent as Loader } from "../assets/loader.svg";
import { LoadingContext } from "../context/LoadingContext";
import { ModalContext } from "../context/ModalContext";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MoviesSlider = (props) => {
  const { sliderLoading, setSliderLoading, loading, setLoading } =
    useContext(LoadingContext);
  const { setChosenMovie, setShowModal } = useContext(ModalContext);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setTimeout(() => setSliderLoading(false), 600);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading || sliderLoading) {
    return <></>;
  }

  return (
    <div className="flex flex-col items-center ">
      <p className="ml-[4rem] mt-[3rem]   text-[2.4rem] text-white self-start">
        {props.title}
      </p>
      <div className=" w-full flex justify-end">
        <div className="w-[98%]  group overflow-visible ">
          <Swiper
            className=""
            spaceBetween={2}
            slidesPerView={2.2}
            onSlideChange={() => console.log("slide change")}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            breakpoints={{
              480: {
                slidesPerView: 3.1,
              },
              576: {
                slidesPerView: 6.2,
                spaceBetween: 10,
              },
            }}
          >
            {movies.map((movie) => (
              <SwiperSlide
                key={movie.id}
                className={`w-[400px] rounded-xl transition duration-200 py-[20px]  hover:scale-[1.05] z-10 hover:z-20 cursor-pointer`}
                onClick={() => {
                  setShowModal(true);
                  setChosenMovie(movie);
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie[props.image]}`}
                  alt={movie.title}
                  className="w-[400px] rounded-xl h-auto"
                />
                <div></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MoviesSlider;
