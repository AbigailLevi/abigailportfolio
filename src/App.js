import React from 'react';
import Abigail from "./Abigailf";
import About from "./Aboutme"
import Projects from "./Projects"
import Contact from "./Contact"
// import './App.css';
import {Route, Routes} from "react-router-dom"


function App() {
  return (
    <Routes>
      <Route path = "/" element={<Abigail />} />
      <Route path = "/aboutme" element={<About />} />
      <Route path = "/projects" element={<Projects/>} />
      <Route path = "/contact" element={<Contact />} />
      </Routes>
  );
}

export default App;
