import React, { useEffect, useState } from 'react';
import {Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePagesData, updateTranslation } from './Redux/Pages/pages-action';
import Custom from './pages/Custom/Custom';
import Blog from './components/Blog/Blog';
import SinglePost from './components/SinglePost/SinglePost';
import Whatsapp from './components/Whatsapp/Whatsapp';
import PopUp from './components/PopUp/PopUp';
import Domain from './pages/Domain/Domain';
import Checkout from './pages/Checkout/Checkout';
import Cart from './pages/Cart/Cart';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './App.css';

function App({updatePagesData, translation, updateTranslation}) {

  const [popModelShow, setPopModelShow] = useState(false);
  const [popUpDatails, setPopUpDatails] = useState({});
  const [rtlSetup, setRtlSetup] = useState({'dir': 'ltr'})

  useEffect(() => {
   fetch('https://geolocation-db.com/json/09068b10-55fe-11eb-8939-299a0c3ab5e5')
   .then(res => res.json())
   .then(data => {
     if(data['country_name'] === 'Israel'){
      updateTranslation("Hebrew")
     }
   })
  }, [])


  useEffect(() => {
    const dataFetching = () => fetch(`${process.env.REACT_APP_BACKEND_URL}/pages`)
    .then(res => res.json())
    .then(data => {
      updatePagesData(data)
    })
    dataFetching()

    return() => {
      dataFetching()
    }
  })

  useEffect(() => {
    if(translation === 'Hebrew'){
      setRtlSetup({'dir': 'rtl'})
    }
    else{
      setRtlSetup({'dir': 'ltr'})
    }
  }, [translation])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/popup`)
    .then(res => res.json())
    .then(data => {
      setPopUpDatails(data)
    });
  }, [])

  useEffect(() => {
    if(Object.keys(popUpDatails).length){
    console.log('pop up data', popUpDatails)
     setTimeout(() => {
        setPopModelShow(true);
      }, popUpDatails.Interval * 1000 );
    }
  }, [popUpDatails])

  const onClose = () => {
    setPopModelShow(false);
  }
 
  return (
    <div className="hero" {...rtlSetup}>
      <Switch>
        <Route path="/" exact component={Custom} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog/:slug" component={SinglePost} />
        <Route path="/domain" exact component={Domain} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/:id" component={Custom} />
        
      </Switch>
      {
        popModelShow ? <PopUp item={popUpDatails} onClose={onClose} /> : null
      }
      <Whatsapp />
     </div> 
  );
}

const mapStateToProps = ({pages }) => ({
  translation: pages.translation
});

const mapDispatchToProps = dispatch => ({
  updatePagesData: (data) => dispatch(updatePagesData(data)),
  updateTranslation: (language) => dispatch(updateTranslation(language)),
})

export default connect(mapStateToProps , mapDispatchToProps)(App);
