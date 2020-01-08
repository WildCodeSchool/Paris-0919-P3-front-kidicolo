import React from 'react';

//import components
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/Homepage';
import Categorie from './components/category/Categorie';

//import csss
import './App.css';


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
