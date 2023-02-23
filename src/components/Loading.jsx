import React from "react";
import ReactDOM from "react-dom";
import { ReactComponent as Loader } from "../assets/loader.svg";

const Loading = () => {
  return ReactDOM.createPortal(
    <div className="h-screen w-full bg-black flex items-center justify-center fixed top-0 left-0 z-50">
      <Loader />
    </div>,
    document.body
  );
};

export default Loading;
