import React from "react";
import "./CartBox.css";

const CartBox = ({ price, year, billingChange, value, billingBox }) => {
  return (
    <div className="col-md-4 col-lg-4 cart-box-parent">
      <div className="cart-box" onClick={() => billingChange(value)}>
        <p>
          <div
            className={`check-point ${value === billingBox ? "active" : ""}`}
          >
          </div>{" "}
          {year} Years
        </p>
        <h2>${price} USD/mo</h2>
      </div>
    </div>
  );
};

export default CartBox;
