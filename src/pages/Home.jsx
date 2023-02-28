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
      {requests.map((request, index) => (
        <MoviesSlider
          key={index}
          title={request.title}
          url={request.url}
          image={request.image}
        />
      ))}
    </LoadingProvider>
  );
};

export default Home;
