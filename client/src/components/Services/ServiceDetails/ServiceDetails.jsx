import React from 'react'
import DetailsBox from './DetailsBox'

const ServideDetails = ({values}) => {
    return (
        <div className="section border-top">
        <div className="container">
            {
                values.map((item, key) => {
                if( (key+1) % 2 === 0  ){
                    return <DetailsBox key={key} right={true} imgUrl={item.Image.url} heading={item.Heading} boldHeading={item.BoldHeading} description={item.Description} />
                }
                else{
                    return <DetailsBox key={key} right={false} imgUrl={item.Image.url} heading={item.Heading} boldHeading={item.BoldHeading} description={item.Description} />
                }
            })
            } 
        </div>
      </div>
    )
}

export default ServideDetails
