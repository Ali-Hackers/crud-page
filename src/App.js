import logo from './logo.svg';
import './App.css';
import {react, useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Student from './student';
import MyComponent from './add';

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Student />} />
        <Route path="/add" element={<MyComponent/>} />
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
