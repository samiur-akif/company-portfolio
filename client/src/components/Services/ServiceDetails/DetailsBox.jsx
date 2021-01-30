import React from 'react'

const imgAPI = 'http://localhost:1337';

const DetailsBox = ({imgUrl, heading, boldHeading, description, right}) => {
    return (
        <div className={`row align-items-center col-spacing-50 ${right ? 'text-md-right' : ''}`}>
            <div className={`col-12 col-md-6 ${right ? 'order-md-2' : ''}`}>
              <img className="border-radius box-shadow-with-hover" src={`${imgAPI}${imgUrl}`} alt="" />
            </div>
            <div className={`col-12 col-md-6 ${right ? 'order-md-1' : ''}`}>
              <h6 className="font-family-tertiary font-small font-weight-normal uppercase">{heading}</h6>
              <h4>{boldHeading}</h4>
              <p>{description}</p>
            </div>
          </div>
    )
}

export default DetailsBox
