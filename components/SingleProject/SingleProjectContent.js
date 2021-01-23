import React, { Component } from 'react';
import Link from 'next/link';

class SingleProjectContent extends Component {
    render() {
        return (
            <section className="project-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src={require("../../images/services-details-image/1.jpg")} alt="projects" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src={require("../../images/services-details-image/2.jpg")} alt="projects" />
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="projects-details-desc">
                                <h3>Competitor Analysis</h3>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                                
                                <p>laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui </p>

                                <div className="features-text">
                                    <h4><i className="flaticon-check-mark"></i> Core Development</h4>
                                    <p>laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui </p>
                                </div>

                                <div className="features-text">
                                    <h4><i className="flaticon-check-mark"></i> Define Your Choices</h4>
                                    <p>laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui </p>
                                </div>

                                <p>laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui </p>

                                <div className="project-details-info">
                                    <div className="single-info-box">
                                        <h4>Client</h4>
                                        <span>James Anderson</span>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Category</h4>
                                        <span>Network, Marketing</span>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Date</h4>
                                        <span>February 28, 2020</span>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Share</h4>
                                        <ul className="social">
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank">
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="single-info-box">
                                        <Link href="#">
                                            <a className="default-btn-one">Live Preview</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SingleProjectContent;