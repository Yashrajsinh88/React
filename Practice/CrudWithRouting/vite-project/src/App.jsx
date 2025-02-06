import { BrowserRouter } from 'react-router-dom'; // Make sure you import BrowserRouter
import './App.css'
import Create from './components/Create'
import { Route, Routes } from 'react-router-dom' // Import Routes and Route from react-router-dom
import Home from './components/Home'
import Read from './components/Read'
import Update from './components/Update'
import { useState } from 'react';

function App() {


  return (
    <BrowserRouter> {/* Wrap everything inside BrowserRouter */}
      <h1>CRUD with Routing</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addData" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
