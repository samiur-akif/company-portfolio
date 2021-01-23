import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ContactContent from '../components/Contact/ContactContent';
import SubscribeStyleTwo from '../components/Common/SubscribeStyleTwo';
import Footer from '../components/Layouts/Footer';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="Contact" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Contact Us" 
                    breadcrumbUrl="/" 
                />
                <ContactContent />
                <SubscribeStyleTwo />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Contact;