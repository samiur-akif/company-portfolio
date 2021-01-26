import React from "react";

const Feature = ({icon, title, description}) => {
  return (
    <div className="col-12 col-lg-4">
      <div className="text-dark margin-bottom-20 margin-lg-bottom-30">
        <i className={icon} />
      </div>
      <h6 className="font-weight-medium font-small uppercase">{title}</h6>
      <p>
        {description}
      </p>
    </div>
  );
};

export default Feature;
