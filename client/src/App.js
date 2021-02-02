import React, { useEffect } from 'react';
import {Route, Switch} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { connect } from 'react-redux';
import { updatePagesData } from './Redux/Pages/Pages/pages-action';
import Custom from './pages/Custom/Custom';
import Blog from './components/Blog/Blog';
import SinglePost from './components/SinglePost/SinglePost';

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
      <Switch>
        <Route path="/" exact component={Custom} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog/:id" component={SinglePost} />
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
