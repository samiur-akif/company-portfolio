import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel3";
import TestimonialBox from "./TestimonialBox";

const ClientReviews = ({ values }) => {
  const [display, setDisplay] = useState(false);
  let isMounted = false;

  useEffect(() => {
    isMounted = true;
    setDisplay(true);
    return () => {
      isMounted = false;
    };
  });

  const options = {
    loop: true,
    nav: true,
    dots: false,
    smartSpeed: 2000,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
  };

  return (
    <div className="section border-top">
      <div className="container">
        {values.length && display ? (
          <OwlCarousel className="owl-carousel" {...options}>
            {values.map((item, key) => (
              <TestimonialBox
                key={key}
                review={item.Review}
                imgUrl={item.Image.url}
                name={item.Name}
                designation={item.Designation}
              />
            ))}
          </OwlCarousel>
        ) : null}
        {/* end owl-carousel */}
      </div>
      {/* end container */}
    </div>
  );
};

export default ClientReviews;
