import React from "react";

const imgAPI = "http://localhost:1337";

const Partner = ({imgUrl}) => {
  return (
    <div className="client-box">
      <a href="/">
        <img src={`${imgAPI}${imgUrl}`} alt="" />
      </a>
    </div>
  );
};

export default Partner;
