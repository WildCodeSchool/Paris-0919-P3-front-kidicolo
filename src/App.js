import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/Homepage';
import Categorie from './components/category/Categorie';

const App = () => {
  return (
    <div className="App">
        <Homepage />
        <Categorie />
        <Navbar />
    </div>
  );
}

export default App;
