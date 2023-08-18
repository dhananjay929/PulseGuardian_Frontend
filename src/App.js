import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Prediction from './components/Prediction';
import { MyContextProvider } from './MyContext';

function App() {
  
  return (
    <MyContextProvider>
    <div className='container-fluid'>
      <Router>
   
        <Navbar/>
       
        <Routes><Route exact path='/' element={<Home/>}/></Routes>
        <Routes><Route exact path='/about' element={<About/>}/></Routes>
        <Routes><Route exact path='/predict' element={<Prediction/>}/></Routes>
   
      </Router>
   
    </div>
    </MyContextProvider>
  );
}

export default App;
