import React, { useEffect } from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { connect } from 'react-redux';
import { updateHomeData } from './Redux/Pages/Home/home-action';
import Custom from './pages/Custom/Custom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './App.css';

function App({updateHomeData}) {

  useEffect(() => {
    const dataFetching = () => fetch('http://localhost:1337/home')
    .then(res => res.json())
    .then(data => {
      updateHomeData(data)
    })
    dataFetching()

    return() => {
      dataFetching()
    }
  })
 
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/pages/:id" component={Custom} />
      </Switch>
      <Footer />
     </> 
  );
}


const mapDispatchToProps = dispatch => ({
  updateHomeData: (data) => dispatch(updateHomeData(data))
})

export default connect(null, mapDispatchToProps)(App);
