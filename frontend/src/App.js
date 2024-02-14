import './App.css';
import Header from './components/Header';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Appointment from './components/Appointment';
import Counsellor from './components/Counsellor';
import Visitor from './components/Visitor';
import StickyFooter from './components/StickyFooter';
import Contact from './components/Contact';
import FetchRegistration from './components/FetchRegistration';

function App() {
  

  
  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/signup' element={<Signup/>} exact/>
        <Route path='/login' element={<Login/>} exact/>
        <Route path='/appointment' element={<Appointment/>} exact/>
        <Route path='/visitor' element={< Visitor/>} exact/>
        <Route path='/counsellor' element={< Counsellor/>} exact/>
        <Route path='/contact' element={< Contact/>} exact/>
        <Route path='/fetch-registartion' element={< FetchRegistration/>} exact/>
        
      

        
      </Routes>
    </main>
    <StickyFooter/>

   
    
   
  </React.Fragment>
  
   
  }

export default App;
