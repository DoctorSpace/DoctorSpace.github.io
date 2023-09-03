import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import MainPage from '../MainPage/MainPage';
import AuthorizationPage from '../AuthorizationPage/AuthorizationPage'
import ContactPage from '../ContactPage/ContactPage';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/Authorization' element={<AuthorizationPage />} />
        <Route path='*' element={<MainPage />} />
        <Route path='/Contact' element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;

