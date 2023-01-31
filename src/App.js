import React from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Project';
import Footer from './components/Footer'
import './App.css';
import {send} from 'emailjs-com';

function App() {
  return (
    <div className = 'container'>
      <Header/>
      {/* <Navbar/>
      <Card/>
      <Card/>
      <Card/>
      <Footer/> */}
    </div>
  );
}

export default App;
