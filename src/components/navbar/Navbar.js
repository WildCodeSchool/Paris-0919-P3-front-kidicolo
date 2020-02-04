import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
class Navbar extends React.Component {

  resetLocalStorage = () => {
    localStorage.clear()
    document.location.reload(true);
  }
  render() {
    
    return (
      <nav class="nav fixed-bottom bg-light containerNavbar">
        <Link to="/" className="linkHome"></Link>
        <Link to="/addarticle" className="linkSell"></Link>
        <div className="linkMess"></div>
        <Link to="/userlogin" className="linkProfil"></Link>
        {localStorage.getItem("token") ? (
        <Link className="linkSearch" onClick={this.resetLocalStorage}></Link>):("")}
      </nav>
    );
  }
}

export default Navbar;
