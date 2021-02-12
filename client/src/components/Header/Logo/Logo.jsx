import React, { useEffect, useState } from 'react'

const imgAPI = "http://localhost:1337";

const Logo = () => {
    const [logoUrl, setLogoUrl] = useState('');
    
    useEffect(() => {
      fetch("http://localhost:1337/logo")
        .then((res) => res.json())
        .then((data) => setLogoUrl(data.Image[0].url));
    }, []);

    return (
        <div className="header-logo" style={{marginLeft: '20px'}}>
         
          <a href="/">
            <img class="logo-light" src={`${imgAPI}${logoUrl}`} alt="" /> 
          </a>
          
          
      </div>
    )
}



export default Logo
