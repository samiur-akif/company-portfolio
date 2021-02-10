import React from "react";
import FormattedText from "../../../hooks/FormattedText";

const imgAPI = "http://localhost:1337";

const DetailsBox = ({
  imgUrl,
  item,
  heading,
  link,
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
          <h4>
            <FormattedText objectName={item} extension="Title" />
            </h4>
        </a>
        <a href={link}>
          <p>
          <FormattedText objectName={item} extension="Description" />
          </p>
        </a>
      </div>
    </div>
  );
};

export default DetailsBox;
