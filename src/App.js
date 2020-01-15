import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Searchbar from './components/searchbar/Searchbar';
import BodyData from './components/searchbar/SearchBIS';

function App() {
  return (
    <div className="App">
        <Searchbar />
        {/* < BodyData /> */}
        <Navbar />
    </div>
  );
}

export default App;
