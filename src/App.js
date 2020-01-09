import React from 'react';

//import components
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/Homepage';
import Categorie from './components/category/Categorie';

//import csss
import './App.css';
import { Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route path="/categorie">
          <Categorie />
        </Route>

      </Switch>

      <Navbar />
    </div>
  );
}

export default App;
