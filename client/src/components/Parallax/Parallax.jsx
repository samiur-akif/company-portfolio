import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const imgAPI = "http://localhost:1337";

const Parallax = ({homeData}) => {
  
  const [parallaxData, setParallaxData] = useState({})
  useEffect(() => {
    if (Object.keys(homeData).length) {
      setParallaxData(homeData["Main_Banner"]);
    }
  }, [homeData]);
    return (
        <div
        className="section-xl bg-image parallax"
        data-bg-src={`${imgAPI}${parallaxData?.Banner_Image?.url}`}
      >
        <div className="bg-black-05">
          <div className="container text-right">
            <h1 className="font-weight-light">
              {parallaxData?.Banner_Text}
            </h1>
            <a
              className="button button-lg button-radius button-white-3 margin-top-20"
              href={parallaxData?.Banner_Button_Link}
            >
              {parallaxData?.Banner_Button_Text}
            </a>
          </div>
          {/* end container */}
        </div>
      </div>
    )
}

const mapStateToProps = ({ home }) => ({
  homeData: home.homeData,
});

export default connect(mapStateToProps)(Parallax)
