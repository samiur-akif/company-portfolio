import React, { Component } from 'react';
import Link from 'next/link';

class TeamCard extends Component {
    render() {
        return (
            <section className="team-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Team</span>
                        <h3>Meet Our Team</h3>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="team-item-area">
                                <div className="team-image">
                                    <img src={require("../../images/team/7.jpg")} alt="image" />
                                </div>

                                <div className="team-content">
                                    <h3>Edward Bold</h3>
                                    <span>CEO & Founder</span>

                                    <ul className="team-social">
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="team-item-area">
                                <div className="team-image">
                                    <img src={require("../../images/team/7.jpg")} alt="image" />
                                </div>

                                <div className="team-content">
                                    <h3>Calvin Klein</h3>
                                    <span>Marketing Support</span>

                                    <ul className="team-social">
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                            <div className="team-item-area">
                                <div className="team-image">
                                    <img src={require("../../images/team/7.jpg")} alt="image" />
                                </div>

                                <div className="team-content">
                                    <h3>Alastair Cook</h3>
                                    <span>Underwriter</span>

                                    <ul className="team-social">
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="team-animation">
                    <div className="shape-img1">
                        <img src={require("../../images/shape/7.png")} alt="image" />
                    </div>
                    <div className="shape-img2">
                        <img src={require("../../images/shape/9.png")} alt="image" />
                    </div>
                    <div className="shape-img3">
                        <img src={require("../../images/shape/7.png")} alt="image" />
                    </div>
                    <div className="shape-img4">
                        <img src={require("../../images/shape/9.png")} alt="image" />
                    </div>
                    <div className="shape-img5">
                        <img src={require("../../images/shape/9.png")} alt="image" />
                    </div>
                </div>
            </section>
        );
    }
}

export default TeamCard;