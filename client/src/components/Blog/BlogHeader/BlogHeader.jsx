import React from 'react'
import { connect } from 'react-redux';

const BlogHeader = ({translation}) => {
    return (
        <div className="section-sm bg-grey-lighter" style={{paddingTop : '100px'}}>
			<div className="container text-center">
				<h3 className="font-family-secondary">{ translation === 'Hebrew' ? 'בלוג' : 'Blog'}</h3>
			</div>
		</div>
    )
}

const mapStateToProps = ({ pages }) => ({
	translation: pages.translation,
  });

export default connect(mapStateToProps)(BlogHeader)
