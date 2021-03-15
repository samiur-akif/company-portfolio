import React from "react";
import { connect } from "react-redux";
import FormattedText from "../../../hooks/FormattedText";

const Service = ({ icon, item, translation }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="feature-box dark">
        <div className={`feature-box-icon ${translation === 'Hebrew' ? 'hebrew-active' : ''}`}>
          <i className={icon} />
        </div>
        <h5 className="font-weight-normal" style={translation === 'Hebrew' ? {marginRight: '60px'} : {}}>
          <FormattedText objectName={item} extension="Name" />
        </h5>
        <p style={translation === 'Hebrew' ? {marginTop: '20px'} : {}}>
          <FormattedText objectName={item} extension="Description" />
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = ({ pages }) => ({
  translation: pages.translation,
});

export default connect(mapStateToProps)(Service);
