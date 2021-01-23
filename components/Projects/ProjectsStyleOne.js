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
                                    <a><img src={require("../../images/project/placeholder.png")} alt="image" /></a>
                                </Link>
                                <div className="project-hover-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Lorem</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div> 

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-project-box">
                                <Link href="#">
                                    <a><img src={require("../../images/project/placeholder.png")} alt="image" /></a>
                                </Link>
                                <div className="project-hover-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Lorem</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div> 

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-project-box">
                                <Link href="#">
                                    <a><img src={require("../../images/project/placeholder.png")} alt="image" /></a>
                                </Link>
                                <div className="project-hover-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Lorem</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div> 

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-project-box">
                                <Link href="#">
                                    <a><img src={require("../../images/project/placeholder.png")} alt="image" /></a>
                                </Link>
                                <div className="project-hover-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Lorem</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div> 

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-project-box">
                                <Link href="#">
                                    <a><img src={require("../../images/project/placeholder.png")} alt="image" /></a>
                                </Link>
                                <div className="project-hover-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Lorem</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div> 

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-project-box">
                                <Link href="#">
                                    <a><img src={require("../../images/project/placeholder.png")} alt="image" /></a>
                                </Link>
                                <div className="project-hover-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Lorem</a>
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