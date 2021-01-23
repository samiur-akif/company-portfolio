import React, { Component } from 'react';
import Link from 'next/link';

class WhyChooseUs extends Component {
    render() {
        return (
            <section className="choose-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="choose-content-area">
                                <span>Why Choose Us</span>
                                <h3>Lorem ipsum dolor sit amet</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>

                                <div className="choose-text">
                                    <i className="flaticon-check-mark"></i>
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor abore et dolore magna aliqua.</p>
                                </div>

                                <div className="choose-text">
                                    <i className="flaticon-check-mark"></i>
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor abore et dolore magna aliqua.</p>
                                </div>

                                <div className="choose-text">
                                    <i className="flaticon-check-mark"></i>
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor abore et dolore magna aliqua.</p>
                                </div>

                                <div className="choose-btn">
                                    <Link href="#">
                                        <a className="default-btn-one">Discover More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="choose-image">
                                <img src={require("../../images/placeholder.png")} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhyChooseUs;