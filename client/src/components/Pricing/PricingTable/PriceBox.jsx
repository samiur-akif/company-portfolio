import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import FormattedText from "../../../hooks/FormattedText";
import { connect } from "react-redux";
import './PriceBox.css';

const PriceBox = ({
  item,
  recommended,
  price,
  translation,
  handleCart,
  colors
}) => {
  const [description, setDescription] = useState("");
  const replaceLineBreak = (search, current) => {
    const substring = new RegExp(search, "gi");
    const result = current.replace(substring, `<br />`);
    return result;
  };

  useEffect(() => {
    const searchTerm = "\n";
    setDescription(parse(replaceLineBreak(searchTerm, item[`Features_${translation}`] )));
  }, [item, translation]);

  

  return (
    <div className="col-12 col-lg-4">
      <div
        className={`prices-box border-radius-025 ${
          recommended ? "prices-box-recommended" : ""
        }`}
      >
        <h6 className="font-weight-normal">
          <FormattedText objectName={item} extension="Package_Name" />
        </h6>
        <div className="price" dir="ltr">
          <h1 className="font-weight-normal">
            {price}
            /mo
          </h1>
        </div>
        <div className="price-features">
          <ul>{description}</ul>
        </div>
        <br/>
        <button className="button button-md button-grey button-rounded order-button"
        style={{ background: JSON.parse(colors.order_button_color).css }}
         onClick={() => handleCart(item)}>
          <FormattedText objectName={item} extension="Purchase_Button_Text" />
        </button>
        {/* {
        
        clientId ? <PayPalButton price={price} clientId={clientId} onCancel={onCancel} onSuccess={onSuccess} onError={onError} /> : null
        }
        {
          popModel && popMessage ? <PopOver message={popMessage} onClose={popModelClose} /> : null
        } */}
      </div>
    </div>
  );
};

const mapStateToProps = ({ pages }) => ({
  translation: pages.translation,
  colors: pages.colors,
});

export default connect(mapStateToProps)( PriceBox);
