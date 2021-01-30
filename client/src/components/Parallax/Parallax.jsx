import React from "react";

const imgAPI = "http://localhost:1337";

const Parallax = ({ values }) => {  
    return (
        <div
        className="section-xl bg-image parallax"
        data-bg-src={`${imgAPI}${values[0].Banner_Image.url}`}
      >
        <div className="bg-black-05">
          <div className="container text-right">
            <h1 className="font-weight-light">
              {values[0].Banner_Text}
            </h1>
            <a
              className="button button-lg button-radius button-white-3 margin-top-20"
              href={values[0].Button_Link}
            >
              {values[0].Button_Text}
            </a>
          </div>
        </div>
      </div>
    )
}


export default Parallax
