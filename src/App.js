import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import User from "./components/user/User";
import UserSettings from "./components/user/UserSettings";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import UserSignup from "./components/user/UserSignup";
import UserLogin from "./components/user/UserLogin";
import Homepage from "./components/homepage/Homepage";
import Categorie from "./components/category/Categorie";
import DisplaySubcategorie from "./components/category/Displaysubcategorie";
//import csss
import "./App.css";


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={User} />
        <Route  path="/settingsuser" component={UserSettings} />
        <Route path="/usersignup" component={UserSignup} />
        <Route path="/userlogin" component={UserLogin} />
        <Route  path="/homepage" component={Homepage}/>
        <Route path="/categorie" component = {Categorie}/>
        <Route path="/subcategorie/:id" component = {DisplaySubcategorie}/>
        <Navbar />
        </Switch>
      </BrowserRouter>

    </div>
  );
};

export default App;
