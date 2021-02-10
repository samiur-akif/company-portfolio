import React from "react";
import { connect } from "react-redux";
import PriceBox from "./PriceBox";

const PricingTable = ({ values, translation }) => {
  return (
    <div className="section-lg padding-bottom-2">
      <div className="container">
        <div className="margin-bottom-70">
          <div className="row text-center">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <h2>{ translation === 'Hebrew' ? 'טבלת תמחור' : 'Pricing Table' }</h2>
              <p>
                {
                  translation === 'Hebrew' ? 'מחקר לתואר ראשון. מסה של יסמין. כאשר מושך קרניים הרי סופרבול באופן מיידי' : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus'
                }
                
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
                  item={item}
                  price={item.Price}
                  recommended={true}
                />
              );
            } else {
              return (
                <PriceBox
                  key={key}
                  item={item}
                  price={item.Price}
                  recommended={false}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ pages }) => ({
  translation: pages.translation,
});

export default connect(mapStateToProps)(PricingTable);
