import React, { Component } from 'react';
import Link from 'next/link';

class ProjectsStyleOne extends Component {
    render() {
        return (
            <section className="project-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Projects</span>
                        <h3>Our Projects For Client</h3>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-project-box">
                                <Link href="#">
                                    <a><img src={require("../../images/project/1.jpg")} alt="image" /></a>
                                </Link>
                                <div className="project-hover-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Branding</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div> 

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-project-box">
                                <Link href="#">
                                    <a><img src={require("../../images/project/2.jpg")} alt="image" /></a>
                                </Link>
                                <div className="project-hover-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Marketing</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div> 

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-project-box">
                                <Link href="#">
                                    <a><img src={require("../../images/project/3.jpg")} alt="image" /></a>
                                </Link>
                                <div className="project-hover-content">
                                    <h3>
                                        <Link href="#">
                                            <a>SEO</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div> 

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-project-box">
                                <Link href="#">
                                    <a><img src={require("../../images/project/4.jpg")} alt="image" /></a>
                                </Link>
                                <div className="project-hover-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Web Design</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div> 

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-project-box">
                                <Link href="#">
                                    <a><img src={require("../../images/project/5.jpg")} alt="image" /></a>
                                </Link>
                                <div className="project-hover-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Web Development</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div> 

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-project-box">
                                <Link href="#">
                                    <a><img src={require("../../images/project/6.jpg")} alt="image" /></a>
                                </Link>
                                <div className="project-hover-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Digital marketing</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </section>
        );
    }
}

export default ProjectsStyleOne;