import React from "react";

const AchievementBox = ({ name, number }) => {
  return (
    <div className="col-6 col-md-4 col-lg-2">
      <h2 className="font-weight-light margin-0">
        <span className="counter">{number}</span>
      </h2>
      <p>{name}</p>
    </div>
  );
};

export default AchievementBox;
