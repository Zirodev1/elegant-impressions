import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminPanel from './pages/AdminPanel';
import Post from './components/Post';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className='App'>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path='/blog' Component={Blog} />
          <Route path='/contact' Component={Contact} />
          <Route path='/admin' Component={AdminPanel} />
          <Route path='/post/:id' Component={Post} />
        </Routes>
        
      </div>
      <Footer />
    </Router>
  );
}

export default App;
