import React from 'react';
// import ReactDom from 'react-dom';
import './App.css';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/navBar/NavBar';
import Hero from './components/HeroSection/Hero'
import Footer from './components/Franchies/Footer/Footer';



function App() {
  return (
    <>
      
        <NavBar />
        
          <Hero />
        
        <Footer/>
     
    </>
  );
}

export default App;
