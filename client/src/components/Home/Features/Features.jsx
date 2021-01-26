import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Feature from "./Feature";

const Features = ({ homeData }) => {
  const [keyFeature, setKeyFeature] = useState([]);
  useEffect(() => {
    if (Object.keys(homeData).length) {
      setKeyFeature(homeData["Key_Features"]);
    }
  }, [homeData]);

  return (
    <div className="section padding-top-0">
      <div className="container icon-5xl">
        <div className="row">
          {keyFeature.length
            ? keyFeature.map((item, key) => (
                <Feature
                  key={key}
                  icon={item.Icon}
                  title={item.Name}
                  description={item.Description}
                />
              ))
            : null}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </div>
  );
};

const mapStateToProps = ({ home }) => ({
  homeData: home.homeData,
});

export default connect(mapStateToProps)(Features);
