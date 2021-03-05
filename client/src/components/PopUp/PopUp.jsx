import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import FormattedText from "../../hooks/FormattedText";

const PopOver = ({ item, onClose, translation }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title
            style={translation === "Hebrew" ? { textAlign: "right" } : {}}
          >
            <FormattedText objectName={item} extension="Heading" />{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={
            translation === "Hebrew"
              ? {
                  fontSize: "16px",
                  marginTop: "20px",
                  marginBottom: "30px",
                  textAlign: "right",
                }
              : { fontSize: "16px", marginTop: "20px", marginBottom: "30px" }
          }
        >
          <FormattedText objectName={item} extension="Description" />
        </Modal.Body>
        <a className="btn btn-primary" href={item.Button_Link}>
          <FormattedText objectName={item} extension="Button_Text" />
        </a>
      </Modal>
    </>
  );
};

const mapStateToProps = ({ pages }) => ({
  translation: pages.translation,
});

export default connect(mapStateToProps)(PopOver);
