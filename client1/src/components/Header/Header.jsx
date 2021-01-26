import React, { useEffect, useState } from "react";
import SocialLinks from "./SocialLinks/SocialLinks";
import Logo from "./Logo/Logo";

const Header = () => {
  const [menus, setMenus] = useState([]);
  const [handleShow, setHandleShow] = useState(false)

  useEffect(() => {
    fetch("http://localhost:1337/menus")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
        if(window.scrollY > 350){
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
    <div className="header right absolute-light sticky-autohide" style={ handleShow ? {background: '#262626'} : {}}>
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
  );
};

export default Header;
