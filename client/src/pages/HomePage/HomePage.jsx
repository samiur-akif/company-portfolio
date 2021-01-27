import React from "react";
import "./HomePage.css";
import MainBanner from '../../components/Home/MainBanner/MainBanner';
import About from '../../components/Home/About/About';
import Features from '../../components/Home/Features/Features';
import Partners from '../../components/Home/Partners/Partners';
import Services from '../../components/Home/Services/Services';
import Parallax from "../../components/Parallax/Parallax";
import Contact from "../../components/Home/Contact/Contact";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const HomePage = () => {
  
  return (
      <>
      <MainBanner />
      <About />
      <Features />
      <Partners />
      <Services />
      <Parallax />
      <Contact/>
      <ScrollToTop />
    </>
  );
};

export default HomePage;
