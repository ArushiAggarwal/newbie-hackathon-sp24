import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar'
import Home from './components/home'
import Library from './components/library'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/home" element={< Home />}></Route>
        <Route path="/library" element={< Library />}></Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
  