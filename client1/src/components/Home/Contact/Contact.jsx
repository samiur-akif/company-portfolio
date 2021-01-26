import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ContactBox from "./ContactBox";

const Contact = ({ homeData }) => {
  const [contactData, setContactData] = useState({});
  useEffect(() => {
    if (Object.keys(homeData).length) {
      setContactData(homeData["Connection_Details"]);
    }
  }, [homeData]);
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          {contactData.length
            ? contactData.map((item, key) => (
                <ContactBox key={key} name={item.Name} details={item.Details} />
              ))
            : null}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </div>
  );
};

const mapStateToProps = ({ home }) => ({
  homeData: home.homeData,
});

export default connect(mapStateToProps)(Contact);
