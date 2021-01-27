import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row } from "react-bootstrap";
import "./MainBanner.css";

const imgAPI = "http://localhost:1337";

const MainBanner = ({ homeData }) => {
  console.log("home data", homeData);
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    if (Object.keys(homeData).length) {
      setSliderData(homeData["Main_Slider"]);
    }
  }, [homeData]);

  return (
    <div className="bg-black-05">
      <Container fluid className="main-banner">
        <Row>
          {sliderData.length ? (
            <Carousel>
              {sliderData.map((item, key) => (
                <Carousel.Item key={key}>
                  <img
                    className="d-block w-100"
                    src={`${imgAPI}${item?.slider_images?.url}`}
                    alt="Slider Image"
                  />
                  <Carousel.Caption>
                    <h1 className="font-weight-light">
                      {item?.Company_Slogan}
                    </h1>
                    <a
                      className="button button-lg button-radius button-white-3 margin-top-30"
                      href={item?.button_link}
                    >
                      {item?.button_text}
                    </a>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          ) : null}
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = ({ home }) => ({
  homeData: home.homeData,
});

export default connect(mapStateToProps)(MainBanner);
