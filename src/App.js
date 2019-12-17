import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Searchbar from './components/searchbar/Searchbar';

function App() {
  return (
    <div className="App">
        <Searchbar />
        <Navbar />
    </div>
  );
}

export default App;
