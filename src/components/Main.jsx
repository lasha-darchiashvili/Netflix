import React, { useEffect } from "react";
import requests from "../Requests";

const Main = () => {
  useEffect(() => {
    fetch(requests.fetchUpcoming)
      .then((response) => response.json())
      .then((data) => console.log(data.results))
      .catch((error) => console.error(error));
  }, []);

  return <div>zori</div>;
};

export default Main;
