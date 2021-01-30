import React from "react";
import AchievementBox from "./AchievementBox";

const Achievement = ({ values }) => {
  return (
    <div className="section">
      <div className="container">
        <div className="row margin-top-70 text-center">
          {values.map((item, key) => (
            <AchievementBox key={key} name={item.Name} number={item.Number} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievement;
