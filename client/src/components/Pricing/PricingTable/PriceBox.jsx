import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import FormattedText from "../../../hooks/FormattedText";
import { connect } from "react-redux";

const PriceBox = ({
  item,
  recommended,
  price,
  translation,
  handleCart
}) => {
  const [description, setDescription] = useState("");
  const [clientId, setClientId] = useState('');
  const [popModel, setPopModel] = useState(false);
  const [popMessage, setPopMessage] = useState('');


  const replaceLineBreak = (search, current) => {
    const substring = new RegExp(search, "gi");
    const result = current.replace(substring, `<br />`);
    return result;
  };

  useEffect(() => {
    const searchTerm = "\n";
    setDescription(parse(replaceLineBreak(searchTerm, item[`Features_${translation}`] )));
  }, [item, translation]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/pay-pal`)
    .then((res) => res.json())
    .then((data) => setClientId(data.Client_Id));

  }, [])

  const onSuccess = () => {
    setPopModel(true);
    setPopMessage("Payment Successful. Thanks for your purchase");
  }

  const onError = () => {
    setPopModel(true);
    setPopMessage("Payment Unsuccessful. Something went wrong please try again");
  }

  const onCancel = () => {
    setPopModel(true);
    setPopMessage("Payment Canceled. Please try again.")
  }

  const popModelClose = () => {
    setPopModel(false);
    setPopMessage('');
  }

  

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
        <div className="price">
          <h1 className="font-weight-normal">
            {price}
            /mo
          </h1>
        </div>
        <div className="price-features">
          <ul>{description}</ul>
        </div>
        <br/>
        <button className="button button-md button-grey button-rounded" onClick={() => handleCart(item)}>Order Now</button>
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
});

export default connect(mapStateToProps)( PriceBox);
