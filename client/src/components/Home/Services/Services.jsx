import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Service from "./Service";

const Services = ({ homeData }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    if (Object.keys(homeData).length) {
      setServices(homeData["Services"]);
    }
  }, [homeData]);
  return (
    <div className="section">
      <div className="container">
        <div className="margin-bottom-70">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7">
              <h3 className="font-weight-light">
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
              </h3>
            </div>
          </div>
          {/* end row */}
        </div>
        <div className="row">
          {services.length
            ? services.map((item, key) => (
                <Service
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

export default connect(mapStateToProps)(Services);
