import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import { connect } from 'react-redux';

const Slider = ({imgUrl, title, buttonText, buttonLink, colors}) => {
   console.log("regular color: ",colors.regular_button_color);
    return (
      <Carousel.Item>
      <img
        className="d-block w-100"
        src={`${process.env.REACT_APP_BACKEND_URL}${imgUrl}`}
        alt="First slide"
      />
      <Carousel.Caption>
        <h1 className="font-weight-light">{title}</h1>
        <a
          className="button button-lg button-radius button-white-3 margin-top-30"
          style={{ background: JSON.parse(colors.regular_button_color).css }}
          href={buttonLink}
        >
          {buttonText}
        </a>
      </Carousel.Caption>
    </Carousel.Item>
    )
}

const mapStateToProps = ({ pages }) => ({
  colors: pages.colors,
});


export default connect(mapStateToProps)(Slider)
