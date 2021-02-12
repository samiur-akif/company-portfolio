import React, { useEffect, useState } from 'react';
import {Route, Switch} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { connect } from 'react-redux';
import { updatePagesData } from './Redux/Pages/Pages/pages-action';
import Custom from './pages/Custom/Custom';
import Blog from './components/Blog/Blog';
import SinglePost from './components/SinglePost/SinglePost';
import Whatsapp from './components/Whatsapp/Whatsapp';
import PopUp from './components/PopUp/PopUp';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './App.css';

function App({updatePagesData}) {

  const [popModelShow, setPopModelShow] = useState(false);
  const [popUpDatails, setPopUpDatails] = useState({});

  useEffect(() => {
    const dataFetching = () => fetch('http://localhost:1337/pages')
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
    fetch('http://localhost:1337/popup')
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
    <>
      <Switch>
        <Route path="/" exact component={Custom} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog/:slug" component={SinglePost} />
        <Route path="/:id" component={Custom} />
      </Switch>
      {
        popModelShow ? <PopUp item={popUpDatails} onClose={onClose} /> : null
      }
      <Whatsapp />
     </> 
  );
}


const mapDispatchToProps = dispatch => ({
  updatePagesData: (data) => dispatch(updatePagesData(data))
})

export default connect(null, mapDispatchToProps)(App);
