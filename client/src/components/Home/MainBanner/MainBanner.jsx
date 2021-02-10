import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row } from "react-bootstrap";
import "./MainBanner.css";
import FormattedText from "../../../hooks/FormattedText";

const imgAPI = "http://localhost:1337";

const MainBanner = ({ values }) => {

  return (
    <div className="bg-black-05">
      <Container fluid className="main-banner">
        <Row>
          {values.length ? (
            <Carousel>
              {values.map((item, key) => (
                <Carousel.Item key={key}>
                  <img
                    className="d-block w-100"
                    src={`${imgAPI}${item?.Image?.url}`}
                    alt="Slider"
                  />
                  <Carousel.Caption>
                    <h1 className="font-weight-light">
                      <FormattedText objectName={item} extension="Company_Slogan" />
                    </h1>
                    <a
                      className="button button-lg button-radius button-white-3 margin-top-30"
                      href={item?.Button_Link}
                    >
                      <FormattedText objectName={item} extension="Button_Text" />
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



export default MainBanner;
