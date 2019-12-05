import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import ProfilConnexion from './components/profilConnexion/ProfilConnexion';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={ProfilConnexion} />
      </Switch>
    </div>
  );
}

export default App;
