import React, { Component } from 'react';
import Link from 'next/link';

class ContactContent extends Component {
    render() {
        return (
            <section className="contact-area ptb-100">
                <div className="container">
                    {/* Contact Info */}
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="contact-box">
                                <div className="icon">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <div className="content">
                                    <h4>Phone / Fax</h4>
                                    <p>(882) 569-7565</p>
                                    <p>(882) 453-4565</p>
                                </div>
                            </div>
                        </div>
 
                        <div className="col-lg-4 col-md-12">
                            <div className="contact-box">
                                <div className="icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="content">
                                    <h4>E-mail</h4>
                                    <p>hello@example.com</p>
                                    <p>support@example.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="contact-box">
                                <div className="icon">
                                    <i className="fa fa-map-marker"></i>
                                </div>
                                <div className="content">
                                    <h4>Location</h4>
                                    <p>123 street, city, county</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Contact Form */}
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="contact-text">
                                <h3>Get in Touch</h3>
                                <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam tempus magna vel turpis pharetra dictum.</p>
                                <p>Sed blandit tempus purus, sed sodales leo rutrum vel. Nam vulputate ipsum ac est congue, eget commodo magna lobortis.</p>

                                <ul className="social-links">
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
                                    <li>
                                        <Link href="#">
                                            <a>
                                                <i className="fab fa-linkedin"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>
                                                <i className="fab fa-pinterest"></i>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-6">
                            <form id="contactForm">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                
                                <div className="form-group">
                                    <textarea name="message" className="form-control" placeholder="Your Message"></textarea>
                                </div>
                    
                                <div className="send-btn">
                                    <button type="submit" className="send-btn-one">Send Message</button>
                                </div>    
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactContent;