import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { addCartItem } from "../../Redux/Cart/cart-action";
import {
  updateCustomDomain,
  updateUserDomain,
} from "../../Redux/Domain/domain-action";
import "./Domain.css";
import DomainAvailability from "./DomainAvailability/DomainAvailability";

const Domain = ({
  updateCustomDomain,
  updateUserDomain,
  addCartItem,
  cartItems,
  translation,
}) => {
  const [searchStatus, setSearchStatus] = useState(false);
  const [customDomainName, setCustomDomainName] = useState("");
  const [userDomainName, setUserDomainName] = useState("");
  let history = useHistory();
  const handleCustomDomain = (event) => {
    setCustomDomainName(event.target.value);
  };
  const handleUserDomain = (event) => {
    setUserDomainName(event.target.value);
  };
  const handleNext = (status) => {
    if (status === "custom") {
      const domainData = {
        id: 11,
        Package_Name_English: "Domain - Registration",
        Price: 12.99,
        Type: "custom",
      };
      addCartItem(domainData);
      updateCustomDomain(customDomainName);
      setSearchStatus(false);
      setCustomDomainName("");
      setUserDomainName("");
      history.push("/cart");
    } else if (status === "user") {
      updateUserDomain(userDomainName);
      setSearchStatus(false);
      setCustomDomainName("");
      setUserDomainName("");
      history.push("/cart");
    }
  };

  return (
    <>
      <Header blackBack={true} />
      <div
        className="container domain-choose-section"
        style={{ marginTop: "180px", marginBottom: "280px" }}
      >
        {cartItems.length ? (
          <>
            {translation === "Hebrew" ? (
              <div className="row domain-choose-header">
                <h1 className="text-center col-md-12 col-lg-12">
                  ראשית, בוא נקבל את הגדרת הדומיין שלך
                </h1>
                <p className="text-center col-md-12 col-lg-12">
                  הדומיין שלך יהיה הכתובת לאתר שלך.
                </p>
                <p className="text-center col-md-12 col-lg-12">
                  אתה יכול לרשום דומיין חדש או להשתמש בתחום שכבר בבעלותך.
                </p>
              </div>
            ) : (
              <div className="row domain-choose-header">
                <h1 className="text-center col-md-12 col-lg-12">
                  First, Let's Get Your Domain Setup
                </h1>
                <p className="text-center col-md-12 col-lg-12">
                  Your domain will be the address to your website.
                </p>
                <p className="text-center col-md-12 col-lg-12">
                  You can register a new domain or use one you already own.
                </p>
              </div>
            )}

            <div className="row domain-choose-body">
              <div className="domain-choose-box col-md-5 col-lg-5">
                {translation === "Hebrew" ? (
                  <>
                    <h1>רשום דומיין חדש</h1>
                    <p>חפש דומיינים זמינים</p>
                    <input
                  type="text"
                  onChange={handleCustomDomain}
                  value={customDomainName}
                  placeholder="חפש דומיין ..."
                />
                <button onClick={() => setSearchStatus(true)}>לחפש</button>
                  </>
                ) : (
                  <>
                    <h1>Register a new domain</h1>
                    <p>Search available domains</p>
                    <input
                  type="text"
                  onChange={handleCustomDomain}
                  value={customDomainName}
                  placeholder="Search domain..."
                />
                <button onClick={() => setSearchStatus(true)}>{translation === 'Hebrew' ? 'לחפש' : 'Search'}</button>
                  </>
                )}

                
                
              </div>
              <div className="choose-box-middle col-md-1 col-lg-1">
                <p>or</p>
              </div>
              <div className="domain-choose-box col-md-5 col-lg-5">
                {translation === "Hebrew" ? (
                  <>
                    <h1>השתמש בדומיין שבבעלותך</h1>
                    <p>הזן את התחום הקיים שלך</p>
                    <input
                      type="text"
                      onChange={handleUserDomain}
                      value={userDomainName}
                      placeholder="הזן את הדומיין שלך ..."
                    />
                  </>
                ) : (
                  <>
                    <h1>Use a domain you own</h1>
                    <p>Enter your existing domain</p>
                    <input
                      type="text"
                      onChange={handleUserDomain}
                      value={userDomainName}
                      placeholder="Enter your domain..."
                    />
                  </>
                )}
                <button onClick={() => handleNext("user")}>{translation === 'Hebrew' ? 'הַבָּא' : 'Next'}</button>
              </div>
            </div>
            {searchStatus ? (
              <DomainAvailability
                domainName={customDomainName}
                handleNext={handleNext}
              />
            ) : null}
          </>
        ) : translation === "Hebrew" ? (
          <h1 className="text-center" style={{ marginBottom: "600px" }}>
            העגלה שלך ריקה
          </h1>
        ) : (
          <h1 className="text-center" style={{ marginBottom: "600px" }}>
            Your Cart is Empty
          </h1>
        )}
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = ({ cart, pages }) => ({
  cartItems: cart.cart,
  translation: pages.translation,
});

const mapDispatchToProps = (dispatch) => ({
  updateCustomDomain: (name) => dispatch(updateCustomDomain(name)),
  updateUserDomain: (name) => dispatch(updateUserDomain(name)),
  addCartItem: (item) => dispatch(addCartItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Domain);
