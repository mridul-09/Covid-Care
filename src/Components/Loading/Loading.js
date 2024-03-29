import React from "react";
import CovidGif from "../../assets/images/covid_gif.gif";
import "./Loading.css";
const Loading = () => {
  return (
    <div className="loading">
      <img src={CovidGif} alt="CovidGIF" />
      <h3>Loading...</h3>
    </div>
  );
};

export default Loading;
