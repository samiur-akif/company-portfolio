import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const imgAPI = "http://localhost:1337";

const About = ({ homeData }) => {
  const [about, setAbout] = useState({});
  useEffect(() => {
    if (Object.keys(homeData).length) {
      setAbout(homeData["About"]);
    }
  }, [homeData]);

  return (
    <div className="section">
      <div className="container">
        <div className="row align-items-center col-spacing-50">
          <div className="col-12 col-lg-6">
            <img
              className="border-radius"
              src={`${imgAPI}${about?.About_Small_Image?.url}`}
              alt=""
            />
          </div>
          <div className="col-12 col-lg-6">
            <h3 className="font-weight-light margin-bottom-20">
              {about?.About_Title}
            </h3>
            <p>{about?.About_Description}</p>
            <a
              className="button-text-3 margin-top-40"
              href={about?.About_Button_Link}
            >
              {about?.About_Button_Text}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ home }) => ({
  homeData: home.homeData,
});

export default connect(mapStateToProps)(About);
