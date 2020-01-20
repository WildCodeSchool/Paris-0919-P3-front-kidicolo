import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";
//Components
import Navbar from "./components/navbar/Navbar";
import User from "./components/user/User";
import UserSettings from "./components/user/UserSettings";
import UserSignup from "./components/user/UserSignup";
import UserLogin from "./components/user/UserLogin";
import Homepage from "./components/homepage/Homepage";
import Categorie from "./components/category/Categorie";
import DisplaySub from "./components/category/DisplaySub";
import Article from "./components/articles/Article";
import AddArticle from "./components/articles/AddArticle";
//Import css
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/" component={UserLogin} />
          <Route path="/settingsuser" component={UserSettings} />
          <Route path="/usersignup" component={UserSignup} />
          <Route path="/user" component={User} />
          <Route path="/homepage" component={Homepage} />
          <Route path="/categorie/:id" component={Categorie} />
          <Route path="/subcategorie/:id" component={DisplaySub} />
          <Route path="/displayarticle/:id" component={Article} />
          <Route path="/addarticle" component={AddArticle} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
