import React from 'react'
import './Footer.css'


const Footer = () => {
    return (
        <footer>
			<div className="section-sm bg-dark">
				<div className="container">
					<div className="row col-spacing-20">
						<div className="col-6 col-sm-6 col-lg-3">
							<h3>Logo</h3>
						</div>
						<div className="col-6 col-sm-6 col-lg-3">
							<h6 className="font-small font-weight-normal uppercase">Useful Links</h6>
							<ul className="list-dash">
								<li><a href="/">About us</a></li>
								<li><a href="/">Team</a></li>
								<li><a href="/">Prices</a></li>
								<li><a href="/">Contact</a></li>
							</ul>
						</div>
						<div className="col-6 col-sm-6 col-lg-3">
							<h6 className="font-small font-weight-normal uppercase">Additional Links</h6>
							<ul className="list-dash">
								<li><a href="/">Services</a></li>
								<li><a href="/">Process</a></li>
								<li><a href="/">FAQ</a></li>
								<li><a href="/">Careers</a></li>
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
							<ul className="list-inline">
								<li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
								<li><a href="/"><i className="fab fa-twitter"></i></a></li>
								<li><a href="/"><i className="fab fa-pinterest"></i></a></li>
								<li><a href="/"><i className="fab fa-instagram"></i></a></li>
							</ul>
						</div>
					</div> {/* <!-- end row(2) --> */}
				</div> {/* <!-- end container --> */}
			</div>
		</footer>
    )
}

export default Footer
