import React from "react";

const ContactBox = ({name, icon, details}) => {
  return (
    <div className="col-12 col-sm-6 col-md-3">
      <i className={`${icon} text-dark margin-bottom-20`} />
      <h6 className="font-weight-normal margin-0">{name}:</h6>
      <p>{details}</p>
    </div>
  );
};

export default ContactBox;
