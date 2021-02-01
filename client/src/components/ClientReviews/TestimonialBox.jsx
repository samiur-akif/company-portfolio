import React from "react";

const imgAPI = 'http://localhost:1337';

const TestimonialBox = ({review, imgUrl, name, designation}) => {
  return (
    <div className="testimonial-box">
      <p className="margin-bottom-30">
        "{review}"
      </p>
      <img
        className="margin-bottom-20"
        src={`${imgAPI}${imgUrl}`}
        alt=""
        style={{ objectFit: 'contain'}}
      />
      <h5 className="font-weight-normal margin-0 line-height-140">
        {name}
      </h5>
      <span>{designation}</span>
    </div>
  );
};

export default TestimonialBox;
