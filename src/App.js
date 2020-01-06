import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';

import Categorie from './components/category/Categorie';

const App = () => {
  return (
    <div className="App">
        <Categorie />
        <Navbar />
    </div>
  );
}

export default App;
