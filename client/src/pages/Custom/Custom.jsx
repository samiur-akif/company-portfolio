import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Banner from '../../components/Banner/Banner';
import About from '../../components/Home/About/About';
import Features from '../../components/Home/Features/Features';
import Partners from '../../components/Home/Partners/Partners';
import Services from '../../components/Home/Services/Services';
import Parallax from "../../components/Parallax/Parallax";
import Contact from "../../components/Home/Contact/Contact";


const Custom = () => {
    const {id} = useParams();
    console.log("page id: ", id);
    const [hasError, setHasError] = useState(false)
    const [customPageData, setCustomPageData] = useState({});
    const [componentData, setComponentData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:1337/${id}`)
        .then(res => res.json())
        .then(data => setCustomPageData(data))
        .catch(err => {
            console.log(err)
            setHasError(true)
        })

    }, [id]);

    console.log('Custom Page Data: ', customPageData);

    useEffect(() => {
        if(Object.keys(customPageData).length){
            const componentArray = [];
            for (const [key, value] of Object.entries(customPageData)) {
                if(dataOptions.hasOwnProperty(key)){
                    componentArray.push(key)
                }
            }
            setComponentData(componentArray)
        }
    }, [customPageData])

    const dataOptions = {
        Key_Features: (key) => <Features key={key} />,
        Client_Logos: (key) => <Partners key={key} />,
        Services: (key) => <Services key={key} />,
        Connection_Details: (key) => <Contact key={key} />,
        Banner: (key) => <Banner key={key} url={`http://localhost:1337/${id}`} />,
        About: (key) => <About key={key} />,
        Main_Banner: (key) => <Parallax key={key} />
    }

    return (
        <>
         {
             hasError ? <div><h1>Sorry Page Not Found</h1></div> :
             <>
                { console.log("Component Data:", componentData) }
                {
                    componentData.length ? componentData.map((item, key) =>
                    {
                        return dataOptions[item](key)
                    }) : null
                }
             </>
         }   
        </>
    )
}

export default Custom
