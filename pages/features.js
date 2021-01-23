import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import FeaturesContent from '../components/HomeOne/FeaturesContent';
import TabsContent from '../components/HomeOne/TabsContent';
import SubscribeStyleTwo from '../components/Common/SubscribeStyleTwo';
import PartnerLogos from '../components/Common/PartnerLogos';
import Footer from '../components/Layouts/Footer';

class Features extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="Features" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Features" 
                    breadcrumbUrl="/" 
                />
                <FeaturesContent />
                <div className="pb-100">
                    <TabsContent />
                </div>
                <SubscribeStyleTwo />
                <PartnerLogos />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Features;