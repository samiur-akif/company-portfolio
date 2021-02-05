import React from "react";

const imgAPI = "http://localhost:1337";

const DetailsBox = ({
  imgUrl,
  heading,
  link,
  boldHeading,
  description,
  right,
}) => {
  return (
    <div
      className={`row align-items-center col-spacing-50 ${
        right ? "text-md-right" : ""
      }`}
    >
      <div className={`col-12 col-md-6 ${right ? "order-md-2" : ""}`}>
        <a href={link}>
          <img
            className="border-radius box-shadow-with-hover"
            src={`${imgAPI}${imgUrl}`}
            alt=""
          />
        </a>
      </div>
      <div className={`col-12 col-md-6 ${right ? "order-md-1" : ""}`}>
        <a href={link}>
          <h6 className="font-family-tertiary font-small font-weight-normal uppercase">
            {heading}
          </h6>
        </a>
        <a href={link}>
          <h4>{boldHeading}</h4>
        </a>
        <a href={link}>
          <p>{description}</p>
        </a>
      </div>
    </div>
  );
};

export default DetailsBox;
