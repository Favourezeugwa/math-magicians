import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Calculator from './Components/Calculator';
import Home from './Components/Home';
import Quote from './Components/Quote';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/calculator" element={<Calculator />} />
          <Route exact path="/quote" element={<Quote />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
