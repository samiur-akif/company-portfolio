import React from "react";

const Service = ({ icon, title, description }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="feature-box dark">
        <div className="feature-box-icon">
          <i className={icon} />
        </div>
        <h5 className="font-weight-normal">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
