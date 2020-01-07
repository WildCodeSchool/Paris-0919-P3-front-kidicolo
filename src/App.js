import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Homepage />
      <Navbar />
    </div>
  );
}

export default App;
