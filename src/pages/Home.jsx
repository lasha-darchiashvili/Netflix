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
      <MoviesSlider title="Upcoming" url={requests.fetchUpcoming} />
      {/* <MoviesSlider title="Latest" url={requests.fetchLatest} /> */}
      <MoviesSlider title="Top Rated" url={requests.fetchTopRated} />
      <MoviesSlider title="Popular" url={requests.fetchPopular} />
      <MoviesSlider title="Now Playing" url={requests.fetchNowPlaying} />
    </LoadingProvider>
  );
};

export default Home;
