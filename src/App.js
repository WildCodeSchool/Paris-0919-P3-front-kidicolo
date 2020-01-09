import React from 'react';

//import components
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/Homepage';
import Puericulture from './components/category/Puericulture';
import Jeuxjouets from './components/category/Jeuxjouets';
import Education from './components/category/Education';

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

        <Route path="/puericulture">
          <Puericulture />
        </Route>

        <Route path="/jeuxjouets">
          <Jeuxjouets />
        </Route>


        <Route path="/education">
          <Education />
        </Route>

      </Switch>

      <Navbar />
    </div>
  );
}

export default App;
