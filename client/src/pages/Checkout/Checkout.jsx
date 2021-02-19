import React, { useEffect, useState } from "react";
import "./Checkout.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { connect } from "react-redux";
import CartItem from "./CartItem/CartItem";
import { Redirect, useHistory } from "react-router-dom";
import { deleteCartItem, deleteAllItem } from "../../Redux/Cart/cart-action";
import PayPalButton from "../../components/PayPal/PayPalButton";
import PopOver from "../../components/PopOver/PopOver";
import TextField from "@material-ui/core/TextField";

const Checkout = ({
  customDomain,
  userDomain,
  cartItem,
  deleteItem,
  hostingPack,
  delteAllItem,
  translation,
}) => {
  const [clientId, setClientId] = useState("");
  const [popModel, setPopModel] = useState(false);
  const [popMessage, setPopMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  let history = useHistory();
  console.log("User Domain: ", userDomain);

  const handleHostingDelete = (item) => {
    deleteItem(item);
  };

  const priceCounter = (items) => {
    return items.reduce((accumulator, currentValue) => {
      if (
        Object.prototype.hasOwnProperty.call(
          currentValue,
          "Two_Year_Package_Price"
        )
      ) {
        return (
          accumulator +
          billingYearPrice(currentValue, hostingPack.Billing_Year) *
            (hostingPack.Billing_Year * 12)
        );
      } else {
        return accumulator + currentValue.Price;
      }
    }, 0);
  };

  const billingYearPrice = (item, year) => {
    if (year === 1) {
      return item.Price;
    } else if (year == 2) {
      return item.Two_Year_Package_Price;
    } else if (year == 3) {
      return item.Three_Year_Package_Price;
    }
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/pay-pal`)
      .then((res) => res.json())
      .then((data) => setClientId(data.Client_Id));
  }, []);

  const orderDetailsGenerator = (cartItem) => {
    let details = "";
    cartItem.map((item) => {
      if (
        Object.prototype.hasOwnProperty.call(item, "Two_Year_Package_Price")
      ) {
        details +=
          item.Package_Name_English +
          " web hosting for " +
          hostingPack.Billing_Year +
          " year total: $" +
          `${
            billingYearPrice(item, hostingPack.Billing_Year) *
            (hostingPack.Billing_Year * 12)
          }` +
          " USD" +
          "\n";
      } else {
        details +=
          item.Package_Name_English + " price: $" + item.Price + " USD" + "\n";
      }
    });
    return details
  };

  const onSuccess = () => {
    setPopModel(true);
    setPopMessage("Payment Successful. Thanks for your purchase. Redirecting to homepage....");
    const orderDetails = {
      Email: email,
      Name: firstName + " " + lastName,
      Order_ID: new Date().valueOf(),
      Total: priceCounter(cartItem),
      Details: orderDetailsGenerator(cartItem),
      Delivered: false,
    };
    fetch(`${process.env.REACT_APP_BACKEND_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        history.push('/')
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const onError = () => {
    setPopModel(true);
    setPopMessage(
      "Payment Unsuccessful. Something went wrong please try again"
    );
  };

  const onCancel = () => {
    setPopModel(true);
    setPopMessage("Payment Canceled. Please try again.");
  };

  const popModelClose = () => {
    setPopModel(false);
    setPopMessage("");
  };

  return (
    <>
      <Header blackBack={true} />
      <div className="checkout-page container">
        <h1>Review & Checkout</h1>
        <div className="row">
          <div className="checkout-page-cart-items col-md-7 col-lg-7">
            {cartItem.length ? (
              <>
                <div className="row cart-items-header d-flex justify-content-between">
                  <div className="col-md-7 col-lg-7">
                    <p>
                      {translation === "Hebrew"
                        ? "מוצר / אפשרויות"
                        : "Product/Options"}
                    </p>
                  </div>
                  <div className="col-md-5 col-lg-5">
                    <p>
                      {translation === "Hebrew"
                        ? "מחיר / מחזור"
                        : "Price/Cycle"}
                    </p>
                  </div>
                </div>

                <hr />

                {customDomain ? (
                  <>
                    {cartItem.map((item, key) => {
                      return (
                        <>
                          <CartItem
                            key={key}
                            item={item}
                            domainName={customDomain}
                            deleteItem={handleHostingDelete}
                            priceWithYear={billingYearPrice}
                            billingYear={hostingPack.Billing_Year}
                          />
                          <hr />
                        </>
                      );
                    })}
                  </>
                ) : userDomain ? (
                  cartItem.map((item, key) => {
                    return (
                      <>
                        <CartItem
                          key={key}
                          item={item}
                          domainName={userDomain}
                          deleteItem={handleHostingDelete}
                          priceWithYear={billingYearPrice}
                          billingYear={hostingPack.Billing_Year}
                        />
                        <hr />
                      </>
                    );
                  })
                ) : null}

                <div className="row cart-items-actions d-flex justify-content-between">
                  <div className="col-md-3 col-lg-3">
                    <button onClick={() => history.push("/cart")}>
                      <i class="fas fa-arrow-left"></i>
                      {translation === "Hebrew" ? " תחזור " : " Go Back "}
                    </button>
                  </div>
                  <div className="col-md-3 col-lg-3">
                    <button onClick={() => delteAllItem()}>
                      <i class="fas fa-trash"></i>{" "}
                      {translation === "Hebrew" ? "עגלה ריקה" : " Empty Cart "}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <h1 className="text-center">
                {" "}
                {translation === "Hebrew"
                  ? "העגלה שלך ריקה."
                  : "Your Cart is Empty."}
              </h1>
            )}
          </div>

          <div className="order-summary col-md-4 col-lg-4 offset-md-1 offset-lg-1">
            <h3 className="text-center">
              {" "}
              {translation === "Hebrew" ? "סיכום הזמנה" : "Order Summary"}
            </h3>

            {cartItem.length
              ? cartItem.map((item, key) => (
                  <div
                    key={key}
                    className="order-item d-flex justify-content-between"
                  >
                    <p>{item.Package_Name_English}</p>
                    {Object.prototype.hasOwnProperty.call(
                      hostingPack,
                      "Billing_Year"
                    ) &&
                    Object.prototype.hasOwnProperty.call(
                      item,
                      "Two_Year_Package_Price"
                    ) ? (
                      <p>
                        ${billingYearPrice(item, hostingPack.Billing_Year)} x{" "}
                        {hostingPack.Billing_Year * 12} -{" "}
                        {billingYearPrice(item, hostingPack.Billing_Year) *
                          (hostingPack.Billing_Year * 12)}{" "}
                        USD
                      </p>
                    ) : (
                      <p>${item.Price}</p>
                    )}
                  </div>
                ))
              : null}

            <hr />

            <div className="order-item-subtotal d-flex justify-content-between">
              <p>{translation === "Hebrew" ? "סך הכל" : "Subtotal"}</p>
              {Object.prototype.hasOwnProperty.call(
                hostingPack,
                "Billing_Year"
              ) ? (
                <p>${priceCounter(cartItem)} USD</p>
              ) : null}
            </div>
            <p className="total-due">
              {translation === "Hebrew"
                ? 'סה"כ לפירעון היום'
                : "Total Due Today"}
            </p>
            {Object.prototype.hasOwnProperty.call(
              hostingPack,
              "Billing_Year"
            ) ? (
              <h2>${priceCounter(cartItem)} USD</h2>
            ) : null}

            {Object.prototype.hasOwnProperty.call(
              hostingPack,
              "Billing_Year"
            ) && clientId && firstName && lastName && email ? (
              <PayPalButton
                price={priceCounter(cartItem)}
                clientId={clientId}
                onCancel={onCancel}
                onSuccess={onSuccess}
                onError={onError}
              />
            ) : null}


            {popModel && popMessage ? (
              <PopOver message={popMessage} onClose={popModelClose} />
            ) : null}
          </div>
        </div>

        <div className="row billing-details">
          <div className="col-md-6">
          <div className="row">
            <div className="col-md-12">
              <h3>Billing Details</h3>
            </div>
          </div>
          <div className="row" style={{marginBottom: '4px', marginTop: '16px'}}>
            <div className="col-md-6">
              <TextField
                onChange={(e) => setFirstName(e.target.value)}
                required
                id="outlined-basic"
                label="First Name"
                variant="outlined"
              />
            </div>
            <div className="col-md-6">
              <TextField
                onChange={(e) => setLastName(e.target.value)}
                required
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                required
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
            </div>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = ({ domain, cart, pages }) => ({
  customDomain: domain.Custom_Domain,
  userDomain: domain.User_Domain,
  cartItem: cart.cart,
  hostingPack: cart.hostingPack,
  translation: pages.translation,
});

const mapDisPatchToProps = (dispatch) => ({
  deleteItem: (item) => dispatch(deleteCartItem(item)),
  delteAllItem: () => dispatch(deleteAllItem()),
});

export default connect(mapStateToProps, mapDisPatchToProps)(Checkout);
