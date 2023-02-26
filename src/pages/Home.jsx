import React from "react";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import MoviesSlider from "../components/MoviesSlider";
import requests from "../Requests";
import { LoadingProvider } from "../context/LoadingContext";

const Home = () => {
  return (
    <LoadingProvider>
      <Main />
      <MoviesSlider
        title="Upcoming"
        url={requests.fetchUpcoming}
        image="poster_path"
      />
      <MoviesSlider
        title="Top Rated"
        url={requests.fetchTopRated}
        image="backdrop_path"
      />
      <MoviesSlider
        title="Now Playing"
        url={requests.fetchNowPlaying}
        image="backdrop_path"
      />
      <MoviesSlider
        title="Popular TV"
        url={requests.fetchPopularTv}
        image="backdrop_path"
      />
      <MoviesSlider
        title="Top Rated TV"
        url={requests.fetchTopRatedTv}
        image="backdrop_path"
      />
      <MoviesSlider
        title="TV Airing Today"
        url={requests.fetchOnAiringToday}
        image="backdrop_path"
      />
      <MoviesSlider
        title="Horror"
        url={requests.fetchHorror}
        image="backdrop_path"
      />
      <MoviesSlider
        title="Fantasy"
        url={requests.fetchFantasy}
        image="backdrop_path"
      />
      <MoviesSlider
        title="Western"
        url={requests.fetchWestern}
        image="backdrop_path"
      />
    </LoadingProvider>
  );
};

export default Home;
