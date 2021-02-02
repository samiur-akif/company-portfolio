import React, { useEffect, useState } from 'react';
import './Footer.css'
import Logo from '../Header/Logo/Logo';
import SocialLinks from '../Header/SocialLinks/SocialLinks';


const Footer = () => {
	const [usefulLinks, setUsefulLinks] = useState([]);
	const [additionalLinks, setAdditionalLinks] = useState([]);
    
    useEffect(() => {
      fetch("http://localhost:1337/useful-links")
        .then((res) => res.json())
		.then((data) => setUsefulLinks(data));

		fetch("http://localhost:1337/additional-links")
        .then((res) => res.json())
		.then((data) => setAdditionalLinks(data));
	}, []);
	
    return (
        <footer>
			<div className="section-sm bg-dark">
				<div className="container">
					<div className="row col-spacing-20">
						<div className="col-6 col-sm-6 col-lg-3">
							<div><Logo /></div>
						</div>
						<div className="col-6 col-sm-6 col-lg-3 d-flex flex-column align-items-center">
							<h6 className="font-small font-weight-normal uppercase">Useful Links</h6>
							<ul className="list-dash">
								{
									usefulLinks.length ? usefulLinks.map((item, key) => (
										<li key={key}><a href={item.Link}>{item.Name}</a></li>
									)) : null
								}
							</ul>
						</div>
						<div className="col-6 col-sm-6 col-lg-3 d-flex flex-column align-items-center">
							<h6 className="font-small font-weight-normal uppercase">Additional Links</h6>
							<ul className="list-dash">
							{
									additionalLinks.length ? additionalLinks.map((item, key) => (
										<li key={key}><a href={item.Link}>{item.Name}</a></li>
									)) : null
								}
							</ul>
						</div>
						<div className="col-6 col-sm-6 col-lg-3">
							<h6 className="font-small font-weight-normal uppercase">Contact Info</h6>
							<ul className="list-unstyled">
								<li>121 King St, Melbourne VIC 3000</li>
								<li>contact@example.com</li>
								<li>+(123) 456 789 01</li>
							</ul>
						</div>
					</div> {/* <!-- end row(1) --> */}

					<hr className="margin-top-30 margin-bottom-30" />

					<div className="row col-spacing-10">
						<div className="col-12 col-md-6 text-center text-md-left">
							<p>&copy; 2020, All Rights Reserved.</p>
						</div>
						<div className="col-12 col-md-6 text-center text-md-right">
							<SocialLinks />
						</div>
					</div> {/* <!-- end row(2) --> */}
				</div> {/* <!-- end container --> */}
			</div>
		</footer>
    )
}

export default Footer
