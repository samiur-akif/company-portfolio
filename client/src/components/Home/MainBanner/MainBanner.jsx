import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row } from "react-bootstrap";
import "./MainBanner.css";
import FormattedText from "../../../hooks/FormattedText";
import { connect } from "react-redux";

const MainBanner = ({ values, colors }) => {

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
                    src={`${process.env.REACT_APP_BACKEND_URL}${item?.Image?.url}`}
                    alt="Slider"
                  />
                  <Carousel.Caption>
                    <h1 className="font-weight-light">
                      <FormattedText objectName={item} extension="Company_Slogan" />
                    </h1>
                    <a
                      className="button button-lg button-radius button-white-3 margin-top-30"
                      href={item?.Button_Link}
                      style={{ background: JSON.parse(colors.regular_button_color).css }}
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


const mapStateToProps = ({ pages }) => ({
  colors: pages.colors,
});


export default connect(mapStateToProps)(MainBanner);
