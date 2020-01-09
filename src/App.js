import React from "react";
//import components
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";
import Categorie from "./components/category/Categorie";
import DisplaySubcategorie from "./components/category/Displaysubcategorie";
//import csss
import "./App.css";
import { Switch, Route } from "react-router-dom";


const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/categorie" component = {Categorie}></Route>
        <Route path="/subcategorie/:id" component = {DisplaySubcategorie}></Route>
        <Navbar />
      </Switch>


    </div>
  );
};

export default App;
