import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

import ModalVideo from 'react-modal-video';

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);




const MainBanner = () => {

    /* state = {
        isOpen: false,
    }

    openModal = () => {
        this.setState({isOpen: true})
    } */

        return (
            <React.Fragment>
                <div className="main-banner">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                            <AutoplaySlider
                                    play={true}
                                    cancelOnInteraction={false} // should stop playing on user interaction
                                    interval={6000}
                                    organicArrows={false}
                                >

                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="main-banner-content">
                                            <h1>Lorem ipsum dolor sit amet</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore.</p>
                                            <Link href="#">
                                            <div className="banner-btn">
                                                    <a className="default-btn-one">More About Us</a>
                                            </div>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-12">
                                            <div className="banner-image">
                                                <img src={require("../../images/saas-image/main-image.png")} alt="main-image.png" />
                                            </div>
                                    </div>
                                </div>


                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="main-banner-content">
                                            <h1>Slider 2 </h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-12">
                                            <div className="banner-image">
                                                <img src={require("../../images/saas-image/main-image.png")} alt="main-image.png" />
                                            </div>
                                    </div>
                                </div>


                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="main-banner-content">
                                            <h1>Slider 3</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore.</p>

                                            
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-12">
                                            <div className="banner-image">
                                                <img src={require("../../images/saas-image/main-image.png")} alt="main-image.png" />
                                            </div>
                                    </div>
                                </div>








    

                                    {/* If you want to change the video need to update below videoID */}
                                    {/* <ModalVideo 
                                        channel='youtube' 
                                        isOpen={this.state.isOpen} 
                                        videoId='_ysd-zHamjk' 
                                        onClose={() => this.setState({isOpen: false})} 
                                    /> */}

                                    

                                        {/* <div className="col-lg-6 col-md-12">
                                            <div className="banner-image">
                                                <ReactWOW animation='fadeInLeft' delay='0.5s'>
                                                    <img src={require("../../images/saas-image/arrow.png")} alt="arrow" />
                                                </ReactWOW>

                                                <ReactWOW animation='fadeInUp' delay='0.5s'>
                                                    <img src={require("../../images/saas-image/box1.png")} alt="box1" />
                                                </ReactWOW>

                                                <ReactWOW animation='fadeInLeft' delay='0.5s'>
                                                    <img src={require("../../images/saas-image/boy1.png")} alt="boy1" />
                                                </ReactWOW>

                                                <ReactWOW animation='zoomIn' delay='0.5s'>
                                                    <img src={require("../../images/saas-image/boy2.png")} alt="boy2" />
                                                </ReactWOW>

                                                <ReactWOW animation='bounceIn' delay='0.5s'>
                                                    <img src={require("../../images/saas-image/boy3.png")} alt="boy3" />
                                                </ReactWOW>

                                                <ReactWOW animation='fadeInDown' delay='0.5s'>
                                                    <img src={require("../../images/saas-image/digital-screen.png")} alt="digital-screen" />
                                                </ReactWOW>

                                                <ReactWOW animation='zoomIn' delay='0.5s'>
                                                    <img src={require("../../images/saas-image/filter1.png")} alt="filter1" />
                                                </ReactWOW>

                                                <ReactWOW animation='fadeInUp' delay='0.5s'>
                                                    <img src={require("../../images/saas-image/filter2.png")} alt="filter2" />
                                                </ReactWOW>
                                                
                                                <ReactWOW animation='rotateIn' delay='0.5s'>
                                                    <img src={require("../../images/saas-image/filter3.png")} alt="filter3" />
                                                </ReactWOW>

                                                <ReactWOW animation='fadeInUp' delay='0.5s'>
                                                    <img src={require("../../images/saas-image/girl1.png")} alt="girl1" />
                                                </ReactWOW>

                                                <ReactWOW animation='zoomIn' delay='0.5s'>
                                                    <img src={require("../../images/saas-image/girl2.png")} alt="girl2" />
                                                </ReactWOW>

                                                <ReactWOW animation='fadeInRight' delay='0.5s'>
                                                    <img src={require("../../images/saas-image/monitor.png")} alt="monitor" />
                                                </ReactWOW>

                                                <ReactWOW animation='zoomIn' delay='0.5s'>
                                                    <img src={require("../../images/saas-image/4.png")} alt="4" />
                                                </ReactWOW>
                                                
                                                <ReactWOW animation='zoomIn' delay='0.5s'>
                                                    <img src={require("../../images/saas-image/7.png")} alt="7" />
                                                </ReactWOW>
                                                
                                                
                                                <ReactWOW animation='zoomIn' delay='0.5s'>
                                                    <img src={require("../../images/saas-image/main-image.png")} alt="main-image.png" />
                                                </ReactWOW>
                                            </div>
                                        </div> */}

                                    </AutoplaySlider>
                                </div>
                               

                                {/* <div className="banner-bg-text">SEO</div> */}
                            </div>
                            
                        </div>
                    {/* Shape Images */}
                    <div className="shape-img1">
                        <img src={require("../../images/shape/1.png")} alt="image" />
                    </div>
                    <div className="shape-img2">
                        <img src={require("../../images/shape/2.png")} alt="image" />
                    </div>
                    <div className="shape-img3">
                        <img src={require("../../images/shape/3.png")} alt="image" />
                    </div>
                    <div className="shape-img4">
                        <img src={require("../../images/shape/4.png")} alt="image" />
                    </div>
                    <div className="shape-img5">
                        <img src={require("../../images/shape/5.png")} alt="image" />
                    </div>
                    <div className="shape-img6">
                        <img src={require("../../images/shape/6.png")} alt="image" />
                    </div>
                    <div className="shape-img7">
                        <img src={require("../../images/shape/2.png")} alt="image" />
                    </div>
                    <div className="shape-img8">
                        <img src={require("../../images/shape/10.png")} alt="image" />
                    </div>
                    <div className="shape-img9">
                        <img src={require("../../images/shape/7.png")} alt="image" />
                    </div>
                    <div className="shape-img10">
                        <img src={require("../../images/shape/5.png")} alt="image" />
                    </div>
                    <div className="shape-img11">
                        <img src={require("../../images/shape/11.png")} alt="image" />
                    </div>
                </div>

            </React.Fragment>
        );
}

export default MainBanner;