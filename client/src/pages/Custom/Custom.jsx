import React, { useEffect, useState } from 'react'
import About from '../../components/Home/About/About';
import Features from '../../components/Home/Features/Features';
import Partners from '../../components/Home/Partners/Partners';
import Services from '../../components/Home/Services/Services';
import Parallax from "../../components/Parallax/Parallax";
import Contact from "../../components/Home/Contact/Contact";
import MainBanner from '../../components/Home/MainBanner/MainBanner';
import Achievements from '../../components/About/Achievements/Achievements';
import TextSection from '../../components/About/TextSection/TextSection';
import Banner from '../../components/Banner/Banner';
import ClientReviews from '../../components/ClientReviews/ClientReviews';
import ContactRow from '../../components/Contact/ContactRow/ContactRow';
import FAQ from '../../components/FAQ/FAQ';
import PricingTable from '../../components/Pricing/PricingTable/PricingTable';
import ServiceDetails from '../../components/Services/ServiceDetails/ServiceDetails';
import ServiceIcons from '../../components/Services/ServiceIcons/ServiceIcons';

import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';


const Custom = ({pageData}) => {
    const [specificPage, setSpecificPage] = useState([]);
    const [componentSquence, setComponentSquence] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        if(pageData.length){
            if(id){
                const pageMatch = pageData.find((item) => item["Page_Title"].toLowerCase() === id.toLowerCase())
                setSpecificPage(pageMatch.Section)
            }
            else{
                const pageMatch = pageData.find((item) => item["Page_Title"].toLowerCase() === "home" )
                setSpecificPage(pageMatch.Section)
            }
        }
    }, [pageData]);



    const regexMatch = (text) => {
        const regex = /\.(.*)/g;
        const found = text.match(regex);
        return found[0].replace(".", "")
    }
    
    const dataOptions = {
        "key-feature": (values, key) => <Features key={key} values={values} />,
        "client-logos": (values, key) => <Partners key={key} values={values} />,
        "service": (values, key) => <Services key={key} values={values} />,
        "home-slider": (values, key) => <MainBanner key={key} values={values} />,
        "connection-row": (values, key) => <Contact key={key} values={values}  />,
        "about-us": (values, key) => <About key={key} values={values} />,
        "home-banner": (values, key) => <Parallax key={key} values={values} />,
        "achievement-item": (values, key) => <Achievements key={key} values={values} />,
        "text-row": (values, key) => <TextSection key={key} values={values} />,
        "banner": (values, key) => <Banner key={key} values={values} />,
        "client-review": (values, key) => <ClientReviews key={key} values={values} />,
        "contact-item": (values, key) => <ContactRow key={key} values={values} />,
        "faq-item": (values, key) => <FAQ key={key} values={values} />,
        "price-box": (values, key) => <PricingTable key={key} values={values} />,
        "details-row": (values, key) => <ServiceDetails key={key} values={values} />,
        "icon-row": (values, key) => <ServiceIcons key={key} values={values} />
    }


    useEffect(() => {
        if(specificPage.length){
            const componentArray = [];
            let tempArray = [];
            for (let i=0; i < specificPage.length; i++){
                const componentName = regexMatch(specificPage[i]["__component"]);
                let nextComponentName = '';
                let prevComponentName = '';
                if(i !== (specificPage.length - 1) ){
                    nextComponentName = regexMatch(specificPage[i+1]["__component"]);
                }
                if(i > 0 ){
                    prevComponentName = regexMatch(specificPage[i-1]["__component"]);
                }

                if(componentName === nextComponentName){
                    tempArray.push(specificPage[i]);
                    console.log('Im here next match');
                }
                else if (componentName === prevComponentName){
                    tempArray.push(specificPage[i]);
                    componentArray.push(dataOptions[componentName](tempArray, i ));
                    tempArray = []
                }
                else{
                    if(tempArray.length){
                        console.log("temp array is:", tempArray);
                        componentArray.push(dataOptions[componentName](tempArray, i ));
                        tempArray = []
                    }
                    else{
                        tempArray.push(specificPage[i]);
                        componentArray.push(dataOptions[componentName](tempArray, i ));
                        tempArray = [];
                    }
                    
                }
            }
            setComponentSquence(componentArray)
        }
    }, [specificPage])

    

    return (
        <>
            {
                componentSquence.length ? componentSquence.map((item) => item) : null
            }
              
        </>
    )
}

const mapStateToProps = ({pages}) => ({
    pageData : pages.data
})


export default connect(mapStateToProps)(Custom)
