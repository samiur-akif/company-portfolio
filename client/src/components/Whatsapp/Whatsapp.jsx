import React, { useEffect, useState } from "react";
import WhatsAppWidget from "react-whatsapp-widget";
import "./WhatsApp.css";
import "react-whatsapp-widget/dist/index.css";
import { connect } from "react-redux";

const Whatsapp = ({ translation }) => {
  const [number, setNumber] = useState("");
  useEffect(() => {
    fetch("http://localhost:1337/whats-app")
      .then((res) => res.json())
      .then((data) => setNumber(data.Phone));
  }, []);

  return (
    <>
      {number ? (
        <>
          {translation === "Hebrew" ? (
            <div className="whatsapp-button left">
              <WhatsAppWidget phoneNumber={number} />
            </div>
          ) : (
            <div className="whatsapp-button">
              <WhatsAppWidget phoneNumber={number} />
            </div>
          )}
        </>
      ) : null}
    </>
  );
};

const mapStateToProps = ({ pages }) => ({
  translation: pages.translation,
});

export default connect(mapStateToProps)(Whatsapp);
