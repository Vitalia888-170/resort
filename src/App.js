import './App.css';
import React, { useEffect } from 'react';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Header from './components/Header/Header'
import { Switch, Route } from "react-router-dom";
import Basket from './pages/Basket';
import { Footer } from './components/Footer/Footer';

const App = () => {
  const resizeHeader = () => {
    let distanceY = window.pageYOffset || document.documentElement.scrollTop;
    let space = window.innerHeight;
    let header = document.querySelector('.header-container');
    if (distanceY > space) {
      header.classList.add('resizeToSmall');
    } else {
      header.classList.remove('resizeToSmall');
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', resizeHeader);
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/rooms/' exact component={Rooms} />
        <Route path='/rooms/:type' exact component={SingleRoom} />
        <Route path='/basket' exact component={Basket} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  )
}

export default App;
