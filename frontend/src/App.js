import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className='App'>
        <Routes>
          <Route exact path='/' Component={Home} />
        </Routes>
        
      </div>
      <Footer />
    </Router>
  );
}

export default App;
