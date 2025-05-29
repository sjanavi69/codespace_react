// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import Home from './Module 4/React Router - Navigation in React/Home';
import About from './Module 4/React Router - Navigation in React/About';
import Contact from './Module 4/React Router - Navigation in React/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/about/subpage" element={<SubPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
