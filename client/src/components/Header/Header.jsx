import React, { useEffect, useState } from "react";
import SocialLinks from "./SocialLinks/SocialLinks";
import { Helmet } from "react-helmet";
import {Dropdown} from 'react-bootstrap'
import Logo from "./Logo/Logo";
import { updateTranslation } from "../../Redux/Pages/Pages/pages-action";
import { connect } from "react-redux";


const imgAPI = "http://localhost:1337";

const Header = ({blackBack, translation, updateTranslation}) => {
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
              ? menus.map((item, key) => {
                  if(translation === 'en'){
                    return <NavElement key={key} name={item.Name_English} link={item.Link} />
                  }
                  else if(translation === 'he'){
                    return <NavElement key={key} name={item.Name_Hebrew} link={item.Link} />
                  }
              })
              : null}
          </ul>
        </div>

        <SocialLinks />

        <Dropdown>
  <Dropdown.Toggle id="dropdown-basic" style={{background: 'transparent', marginLeft: '12px', border: 'none'}}>
    {translation}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1" onClick={ () => updateTranslation('en') }>English - en</Dropdown.Item>
    <Dropdown.Item href="#/action-2" onClick={ () => updateTranslation('he') }>Hebrew - he</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

        <button className="header-toggle">
        <span />
        </button>
      </div>
      {/* end container */}
    </div>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  updateTranslation : (language) => dispatch(updateTranslation(language))
})

const mapStateToProps = ({pages}) => ({
  translation: pages.translation
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
