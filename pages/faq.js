import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import FaqSection from '../components/Faq/FaqSection';
import SubscribeStyleTwo from '../components/Common/SubscribeStyleTwo';
import PartnerLogos from '../components/Common/PartnerLogos';
import Footer from '../components/Layouts/Footer';

class Faq extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="Faq" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Faq" 
                    breadcrumbUrl="/" 
                />
                <FaqSection />
                <SubscribeStyleTwo />
                <PartnerLogos />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Faq;