import React from "react";

const imgAPI = "http://localhost:1337";

const Banner = ({ values }) => {
  return (
    <div
      className="section-xl bg-image parallax"
      data-bg-src={`${imgAPI}${values[0].Image.url}`}
    >
      <div className="bg-black-06">
        <div className="container text-center">
          <h1 className="font-weight-light">{values[0].title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
