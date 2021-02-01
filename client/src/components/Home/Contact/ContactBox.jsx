import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

const ContactBox = ({ name, details }) => {
  const [description, setDescription] = useState("");

  const replaceLineBreak = (search, current) => {
    const substring = new RegExp(search, "gi");
    const result = current.replace(substring, `<br />`);
    return result;
  };

  useEffect(() => {
    const searchTerm = "\n";
    setDescription(parse(replaceLineBreak(searchTerm, details)));
  }, [details]);
  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <h6 className="font-small font-weight-medium uppercase">{name}:</h6>
      <ul className="list-unstyled">
        <li>{description}</li>
      </ul>
    </div>
  );
};

export default ContactBox;
