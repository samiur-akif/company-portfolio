import React, { useEffect, useState } from "react";
import "./Footer.css";
import Logo from "../Header/Logo/Logo";
import SocialLinks from "../Header/SocialLinks/SocialLinks";
import { connect } from "react-redux";
import FormattedText from "../../hooks/FormattedText";

const Footer = ({ translation }) => {
  const [usefulLinks, setUsefulLinks] = useState([]);
  const [additionalLinks, setAdditionalLinks] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/useful-links`)
      .then((res) => res.json())
      .then((data) => setUsefulLinks(data));

    fetch(`${process.env.REACT_APP_BACKEND_URL}/additional-links`)
      .then((res) => res.json())
      .then((data) => setAdditionalLinks(data));
  }, []);

  return (
    <footer>
      <div className="section-sm bg-dark">
        <div className="container">
          <div className="row col-spacing-20">
            {translation === "Hebrew" ? (
              <>
                <div className="col-6 col-sm-6 col-lg-3">
                  <h6 className="font-small font-weight-normal uppercase">
                   
                      פרטים ליצירת קשר
 
                  </h6>
                  <ul className="list-unstyled">
                    <li>123 Street Name, City, State, Country</li>
                    <li>contact@example.com</li>
                    <li>+(123) 456 789 01</li>
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-lg-3 d-flex flex-column align-items-center">
                  <h6 className="font-small font-weight-normal uppercase">
                    
                    קישורים נוספים
                  </h6>
                  <ul className="list-dash">
                    {additionalLinks.length
                      ? additionalLinks.map((item, key) => (
                          <li key={key}>
                            <a href={item.Link}>
                              {
                                <FormattedText
                                  objectName={item}
                                  extension="Name"
                                />
                              }
                            </a>
                          </li>
                        ))
                      : null}
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-lg-3 d-flex flex-column align-items-center">
                  <h6 className="font-small font-weight-normal uppercase">
                    קישורים שימושיים
                  </h6>
                  <ul className="list-dash">
                    {usefulLinks.length
                      ? usefulLinks.map((item, key) => (
                          <li key={key}>
                            <a href={item.Link}>
                              {
                                <FormattedText
                                  objectName={item}
                                  extension="Name"
                                />
                              }
                            </a>
                          </li>
                        ))
                      : null}
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-lg-3">
                  <div>
                    <Logo />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="col-6 col-sm-6 col-lg-3">
                  <div>
                    <Logo />
                  </div>
                </div>

                <div className="col-6 col-sm-6 col-lg-3 d-flex flex-column align-items-center">
                  <h6 className="font-small font-weight-normal uppercase">
                    Useful Links
                  </h6>
                  <ul className="list-dash">
                    {usefulLinks.length
                      ? usefulLinks.map((item, key) => (
                          <li key={key}>
                            <a href={item.Link}>
                              {
                                <FormattedText
                                  objectName={item}
                                  extension="Name"
                                />
                              }
                            </a>
                          </li>
                        ))
                      : null}
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-lg-3 d-flex flex-column align-items-center">
                  <h6 className="font-small font-weight-normal uppercase">
                    Additional Links
                  </h6>
                  <ul className="list-dash">
                    {additionalLinks.length
                      ? additionalLinks.map((item, key) => (
                          <li key={key}>
                            <a href={item.Link}>
                              {
                                <FormattedText
                                  objectName={item}
                                  extension="Name"
                                />
                              }
                            </a>
                          </li>
                        ))
                      : null}
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-lg-3">
                  <h6 className="font-small font-weight-normal uppercase">
                   Contact Info
                  </h6>
                  <ul className="list-unstyled">
                    <li>123 Street Name, City, State, Country</li>
                    <li>contact@example.com</li>
                    <li>+(123) 456 789 01</li>
                  </ul>
                </div>
              </>
            )}
          </div>{" "}
          {/* <!-- end row(1) --> */}
          <hr className="margin-top-30 margin-bottom-30" />
          <div className="row col-spacing-10">
            {translation === "Hebrew" ? (
              <>
                <div className="col-12 col-md-6 text-center text-md-left">
                  <SocialLinks />
                </div>
                <div className="col-12 col-md-6 text-center text-md-right">
                  <p>&copy; 2020, All Rights Reserved.</p>
                </div>
              </>
            ) : (
              <>
                <div className="col-12 col-md-6 text-center text-md-left">
                  <p>&copy; 2020, All Rights Reserved.</p>
                </div>
                <div className="col-12 col-md-6 text-center text-md-right">
                  <SocialLinks />
                </div>
              </>
            )}
          </div>{" "}
          {/* <!-- end row(2) --> */}
        </div>{" "}
        {/* <!-- end container --> */}
      </div>
    </footer>
  );
};

const mapStateToProps = ({ pages }) => ({
  translation: pages.translation,
});

export default connect(mapStateToProps)(Footer);
