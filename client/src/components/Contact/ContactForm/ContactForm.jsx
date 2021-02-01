import React from "react";

const ContactForm = () => {
  return (
    <div className="section">
      <div className="container">
        {/* Contact Form */}
        <div className="margin-top-50 margin-lg-top-60">
          <div className="contact-form">
            <form method="post" id="contactform">
              <div className="form-row">
                <div className="col-12 col-sm-6">
                  <input
                    className="border-radius-0375"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    className="border-radius-0375"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-Mail"
                    required
                  />
                </div>
              </div>
              <input
                className="border-radius-0375"
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                required
              />
              <textarea
                className="border-radius-0375"
                name="message"
                id="message"
                placeholder="Message"
                defaultValue={""}
              />
              <button
                className="button button-lg button-radius button-outline-dark-2"
                type="submit"
              >
                Send Message
              </button>
            </form>
            {/* Submit result */}
            <div className="submit-result">
              <span id="success">Thank you! Your Message has been sent.</span>
              <span id="error">Something went wrong, Please try again!</span>
            </div>
          </div>
          {/* end contact-form */}
        </div>
        {/* end Contact Form */}
      </div>
      {/* end container */}
    </div>
  );
};

export default ContactForm;
