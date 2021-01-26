import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel3";
import { connect } from "react-redux";
import Partner from "./Partner";

const Partners = ({ homeData }) => {
  const [display, setDisplay] = useState(false);
  let isMounted = false;

  useEffect(() => {
    isMounted = true;
    setDisplay(true);
    return () => {
      isMounted = false;
    };
  });

  const [partners, setPartners] = useState([]);

  useEffect(() => {
    if (Object.keys(homeData).length) {
      setPartners(homeData["Client_Logos"]["Client_Images"]);
    }
  }, [homeData]);

  const options = {
    loop: true,
    nav: false,
    dots: false,
    smartSpeed: 2000,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  };

  return (
    <div className="section-sm bg-grey-lighter">
      <div className="container text-center">
        {display ? (
          <OwlCarousel
            className="partner-slider owl-carousel owl-theme"
            {...options}
          >
            {partners.length
              ? partners.map((item, key) => <Partner key={key} imgUrl={item.url} />)
              : null}
          </OwlCarousel>
        ) : null }
        {/* end owl-carousel */}
      </div>
      {/* end container */}
    </div>
  );
};

const mapStateToProps = ({ home }) => ({
  homeData: home.homeData,
});

export default connect(mapStateToProps)(Partners);
