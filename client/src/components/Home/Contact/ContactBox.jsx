import React from 'react'

const ContactBox = ({name, details}) => {
    return (
        <div className="col-12 col-sm-6 col-lg-3">
              <h6 className="font-small font-weight-medium uppercase">
                {name}:
              </h6>
              <ul className="list-unstyled">
                <li>{details}</li>
              </ul>
        </div>
    )
}

export default ContactBox
