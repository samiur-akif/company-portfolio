import React from "react";

const PriceBox = ({recommended, packageName, price, subscriptionType, features, purchaseButtonText}) => {
  return (
    <div className="col-12 col-lg-4">
      <div className={`prices-box border-radius-025 ${ recommended ? 'prices-box-recommended' : ''}`}>
        <h6 className="font-weight-normal">{packageName}</h6>
        <div className="price">
          <h1 className="font-weight-normal">
            {price}<span>/{subscriptionType}</span>
          </h1>
        </div>
        <div className="price-features">
          <ul>
            {features}
          </ul>
        </div>
        <a className="button button-md button-grey button-rounded" href="#">
          {purchaseButtonText}
        </a>
      </div>
    </div>
  );
};

export default PriceBox;
