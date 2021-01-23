import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ServicesContent from '../components/Common/ServicesContent';
import WhyChooseUs from '../components/Common/WhyChooseUs';
import SubscribeStyleTwo from '../components/Common/SubscribeStyleTwo';
import PartnerLogos from '../components/Common/PartnerLogos';
import Footer from '../components/Layouts/Footer';

class Services extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="Services" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Services" 
                    breadcrumbUrl="/" 
                />
                <ServicesContent />
                <WhyChooseUs />
                <SubscribeStyleTwo />
                <PartnerLogos />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Services;