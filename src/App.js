import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import Home from './components/home'
function App() {
  return (
    <>
    <Header/>
    <Home/>
    <hr style={{marginTop:'0px',margin:'0px'}}></hr>
    <Footer/>
    </>
  );
}

export default App;
