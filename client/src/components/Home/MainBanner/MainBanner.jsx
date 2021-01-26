import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row } from "react-bootstrap";
import "./MainBanner.css";

const imgAPI = 'http://localhost:1337';

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
          <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${imgAPI}${sliderData[0]?.slider_images?.url}`}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 className="font-weight-light">{sliderData[0]?.Company_Slogan}</h1>
              <a
                className="button button-lg button-radius button-white-3 margin-top-30"
                href={sliderData[0]?.button_link}
              >
                {sliderData[0]?.button_text}
              </a>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${imgAPI}${sliderData[1]?.slider_images?.url}`}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 className="font-weight-light">{sliderData[1]?.Company_Slogan}</h1>
              <a
                className="button button-lg button-radius button-white-3 margin-top-30"
                href={sliderData[1]?.button_link}
              >
                {sliderData[1]?.button_text}
              </a>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${imgAPI}${sliderData[2]?.slider_images?.url}`}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 className="font-weight-light">{sliderData[2]?.Company_Slogan}</h1>
              <a
                className="button button-lg button-radius button-white-3 margin-top-30"
                href={sliderData[2]?.button_link}
              >
                {sliderData[2]?.button_text}
              </a>
            </Carousel.Caption>
          </Carousel.Item>
            {/* {sliderData.length
              ? sliderData.map((item, key) => (
                  <Slider
                    key={key}
                    imgUrl={item["slider_images"].url}
                    title={item.Company_Slogan}
                    buttonText={item.button_text}
                    buttonLink={item.button_link}
                  />
                ))
              : null} */}
          </Carousel>
        </Row>
      </Container>
    </div>

    /* <div
        className="section-2xl bg-image parallax"
        data-bg-src="/background.jpg"
      >
        <div className="bg-black-05">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8 col-xl-6">
                <h1 className="font-weight-light">
                  {bannerData.Company_Slogan}
                </h1>
                <a
                  className="button button-lg button-radius button-white-3 margin-top-30"
                  href={bannerData.button_link}
                >
                  {bannerData.button_text}
                </a>
              </div>
            </div>
            end row 
          </div>
          end container
        </div>
      </div> */
  );
};

const mapStateToProps = ({ home }) => ({
  homeData: home.homeData,
});

export default connect(mapStateToProps)(MainBanner);
