import './App.css';
import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Latest from './pages/Latest';
import Error from './pages/Error';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="*" element={ <Error/> } />
        <Route path="/latest" element={ <Latest/> } />
        <Route path="/catalog" element={ <Catalog/> } />
        <Route path="/contact" element={ <Contact/> } />
    </Routes>
  )
}

export default App;


