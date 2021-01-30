import React from "react";

const imgAPI = "http://localhost:1337";

const About = ({ values }) => {
  
  return (
    <div className="section">
      <div className="container">
        <div className="row align-items-center col-spacing-50">
          <div className="col-12 col-lg-6">
            <img
              className="border-radius"
              src={`${imgAPI}${values[0].About_Small_Image.url}`}
              alt=""
            />
          </div>
          <div className="col-12 col-lg-6">
            <h3 className="font-weight-light margin-bottom-20">
              {values[0].Title}
            </h3>
            <p>{values[0].Description}</p>
            <a
              className="button-text-3 margin-top-40"
              href={values[0].Button_Link}
            >
              {values[0].Button_Text}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default About;
