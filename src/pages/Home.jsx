import React from "react";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import MoviesSlider from "../components/MoviesSlider";
import requests from "../Requests";
import { LoadingProvider } from "../context/LoadingContext";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import Modal from "../components/Modal";

const Home = () => {
  const { showModal, setShowModal } = useContext(ModalContext);
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
      {showModal && <Modal />}
    </LoadingProvider>
  );
};

export default Home;
