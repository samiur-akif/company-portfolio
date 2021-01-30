import React from "react";

const IconBox = ({icon, title}) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-2">
      <i className={`${icon} text-dark margin-bottom-20`} />
      <h6 className="font-weight-normal margin-0">{title}</h6>
    </div>
  );
};

export default IconBox;
