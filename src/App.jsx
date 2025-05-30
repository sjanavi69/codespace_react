// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Navigate }  from "react-router-dom";
import Home from './Module 4/React Router - Navigation in React/Home';
import About from './Module 4/React Router - Navigation in React/About';
import NavBar from './Module 4/React Router - Navigation in React/NavBar';
import Contact from './Module 4/React Router - Navigation in React/Contact';
import Subpage from './Module 4/React Router - Navigation in React/Subpage';
function App  (){
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/about" element={<About />}>
  <Route path="subpage" element={<SubPage />} />
    </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    
    </BrowserRouter>
  );
};

export default App;
