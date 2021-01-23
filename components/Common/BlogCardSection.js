import React, { Component } from 'react';
import Link from 'next/link';

class BlogCardSection extends Component {
    render() {
        return (
            <section className="blog-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Blog</span>
                        <h3>Read Our Latest Project</h3>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item">
                                <div className="blog-image">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../images/blog/placeholder.png")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="single-blog-item">
                                    <ul className="date">
                                        <li>02</li>
                                        <li>January</li>
                                    </ul>

                                    <ul className="blog-list">
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="fa fa-user-alt"></i> By admin
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="far fa-comments"></i> 3 Comments
                                        </li>
                                    </ul>

                                    <div className="blog-content">
                                        <Link href="#">
                                            <a>
                                                <h3>Lorem ipsum dolor sit amet</h3>
                                            </a>
                                        </Link>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>

                                    <div className="blog-btn">
                                        <Link href="#">
                                            <a className="blog-btn-one">Read More</a>
                                        </Link>
                                    </div>
                                </div>  
                            </div>  
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item">
                                <div className="blog-image">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../images/blog/placeholder.png")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="single-blog-item">
                                    <ul className="date">
                                        <li>03</li>
                                        <li>January</li>
                                    </ul>

                                    <ul className="blog-list">
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="fa fa-user-alt"></i> By admin
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="far fa-comments"></i> 3 Comments
                                        </li>
                                    </ul>

                                    <div className="blog-content">
                                        <Link href="#">
                                            <a>
                                                <h3>Lorem ipsum dolor sit amet</h3>
                                            </a>
                                        </Link>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>

                                    <div className="blog-btn">
                                        <Link href="#">
                                            <a className="blog-btn-one">Read More</a>
                                        </Link>
                                    </div>
                                </div>  
                            </div>  
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="blog-item">
                                <div className="blog-image">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../images/blog/placeholder.png")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="single-blog-item">
                                    <ul className="date">
                                        <li>03</li>
                                        <li>January</li>
                                    </ul>

                                    <ul className="blog-list">
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="fa fa-user-alt"></i> By admin
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="far fa-comments"></i> 3 Comments
                                        </li>
                                    </ul>

                                    <div className="blog-content">
                                        <Link href="#">
                                            <a>
                                                <h3>Lorem ipsum dolor sit amet</h3>
                                            </a>
                                        </Link>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                                    </div>

                                    <div className="blog-btn">
                                        <Link href="#">
                                            <a className="blog-btn-one">Read More</a>
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

export default BlogCardSection;