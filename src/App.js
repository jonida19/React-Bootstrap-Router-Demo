import React from 'react';
import { ThemeProvider } from "react-bootstrap"
import { Navigate, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

let App = () => {
  return (

    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div>
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/about">About</Link> |
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
