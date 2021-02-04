import React, { useEffect, useState } from "react";
import SocialLinks from "./SocialLinks/SocialLinks";
import { Helmet } from "react-helmet";
import Logo from "./Logo/Logo";


const imgAPI = "http://localhost:1337";

const Header = ({blackBack}) => {
  const [menus, setMenus] = useState([]);
  const [handleShow, setHandleShow] = useState(false);
  const [favicon, setFavicon] = useState('');

  useEffect(() => {
    fetch("http://localhost:1337/menus")
      .then((res) => res.json())
      .then((data) => setMenus(data));
    
    fetch("http://localhost:1337/favicon")
      .then((res) => res.json())
      .then((data) => setFavicon(data.Favicon.url));

  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
        if(window.scrollY > 150){
          setHandleShow(true)
        }
        else{
          setHandleShow(false)
        }
    });
    return () => {
        window.removeEventListener("scroll");
    }
    
}, [])

  const NavElement = ({ name, link }) => (
    <li className="nav-item">
      <a className="nav-link" href={link}>
        {name}
      </a>
    </li>
  );

  return (
    <>
    {
      favicon ? <Helmet>
      <link rel="icon" type="image/png" href={`${imgAPI}${favicon}`} sizes="64x64" />
    </Helmet> : null
    }
    <div className="header right absolute-light sticky-autohide" style={ handleShow || blackBack ? {background: '#262626'} : {}}>
      <div className="container">
        <Logo />

        <div className="header-menu">
          <ul className="nav">
            {menus.length
              ? menus.map((item, key) => (
                  <NavElement key={key} name={item.Name} link={item.Link} />
                ))
              : null}
          </ul>
        </div>

        <SocialLinks />

        <button className="header-toggle">
        <span />
        </button>
      </div>
      {/* end container */}
    </div>
    </>
  );
};

export default Header;
