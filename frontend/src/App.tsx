import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/home'
import Library from './components/library'
import Blur from './components/blur'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/home" element={< Home />}></Route>
        <Route path="/library" element={< Library />}></Route> 
        <Route path="/blur" element={< Blur />}></Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
  