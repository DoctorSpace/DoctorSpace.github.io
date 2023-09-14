import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import MainPage from '../MainPage/MainPage';
import AuthorizationPage from '../AuthorizationPage/AuthorizationPage'
import ContactPage from '../ContactPage/ContactPage';
import Yandex from '../Yandex/Yandex';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/Authorization' element={<AuthorizationPage />} />
        <Route path='*' element={<MainPage />} />
        <Route path='/Contact' element={<ContactPage />} />
        <Route path='/yandex_2e9e41e634307037.html' element={<Yandex />} />
      </Routes>
    </div>
  );
}

export default App;

