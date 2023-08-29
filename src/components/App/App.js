import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import MainPage from '../MainPage/MainPage';
import AuthorizationPage from '../AuthorizationPage/AuthorizationPage'
import ViewWindow from '../UI/ViewWindow/ViewWindow';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/Authorization' element={<AuthorizationPage />} />
        <Route path='*' element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;

