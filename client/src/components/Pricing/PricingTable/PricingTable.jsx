import React from "react";
import PriceBox from "./PriceBox";

const PricingTable = ({ values }) => {
  return (
    <div className="section-lg padding-bottom-2">
      <div className="container">
        <div className="margin-bottom-70">
          <div className="row text-center">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <h2>Pricing Table</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                massa. Cum sociis natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {values.map((item, key) => {
            if (key === 1) {
              return (
                <PriceBox
                  key={key}
                  packageName={item.Package_Name}
                  price={item.Price}
                  subscriptionType={item.Subscription_Type}
                  features={item.Features}
                  recommended={true}
                  purchaseButtonText={item.Purchase_Button_Text}
                />
              );
            } else {
              return (
                <PriceBox
                  key={key}
                  packageName={item.Package_Name}
                  price={item.Price}
                  subscriptionType={item.Subscription_Type}
                  features={item.Features}
                  recommended={false}
                  purchaseButtonText={item.Purchase_Button_Text}
                />
              );
            }
          })}         
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
