import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import User from "./components/user/User";
import UserSettings from "./components/user/UserSettings";
import { Switch, Route, BrowserRouter } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={User} />
        <Route  path="/settingsuser" component={UserSettings} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
