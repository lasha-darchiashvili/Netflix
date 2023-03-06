import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [chosenMovie, setChosenMovie] = useState();
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalContext.Provider
      value={{ chosenMovie, setChosenMovie, showModal, setShowModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
