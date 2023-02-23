import React, { createContext, useState } from "react";

export const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [sliderLoading, setSliderLoading] = useState(true);
  const [loading, setLoading] = useState(true);

  return (
    <LoadingContext.Provider
      value={{ sliderLoading, setSliderLoading, loading, setLoading }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
