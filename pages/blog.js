import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import BlogCardContent from '../components/Blog/BlogCardContent';
import Footer from '../components/Layouts/Footer';

class Blog extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="Blog" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Blog" 
                    breadcrumbUrl="/" 
                />
                <BlogCardContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Blog;