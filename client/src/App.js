import React, { useEffect } from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { connect } from 'react-redux';
import { updatePagesData } from './Redux/Pages/Pages/pages-action';
import Custom from './pages/Custom/Custom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './App.css';

function App({updatePagesData}) {

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
 
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Custom} />
        <Route path="/:id" component={Custom} />
      </Switch>
      <Footer />
     </> 
  );
}


const mapDispatchToProps = dispatch => ({
  updatePagesData: (data) => dispatch(updatePagesData(data))
})

export default connect(null, mapDispatchToProps)(App);
