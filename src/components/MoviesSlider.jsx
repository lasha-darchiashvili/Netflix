import React, { useContext, useEffect, useState } from "react";
import requests from "../Requests";
import { ReactComponent as Loader } from "../assets/loader.svg";
import { LoadingContext } from "../context/LoadingContext";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MoviesSlider = (props) => {
  const { sliderLoading, setSliderLoading, loading, setLoading } =
    useContext(LoadingContext);
  const [movies, setMovies] = useState([]);

  console.log(movies);

  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setTimeout(() => setSliderLoading(false), 600);
      })
      .catch((error) => console.error(error));
  }, []);

  if (loading || sliderLoading) {
    return <></>;
  }

  return (
    <div className="flex flex-col items-center">
      <p className="m-[2rem] text-[2.4rem] text-white">{props.title}</p>
      <div className="w-[96%] group">
        <Swiper
          spaceBetween={10}
          slidesPerView={7}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id} className="w-[400px]">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
                className="w-[400px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MoviesSlider;
