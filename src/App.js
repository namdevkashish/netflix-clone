import React from 'react';
import {BrowserRouter, Switch, Route, Routes} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import NetFlixShow from './pages/NetFlixShow';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <ScrollToTop />
      <Routes>
      <Route exact path='/' Component={Home} />
      <Route path='/netflix-show' Component={NetFlixShow} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;