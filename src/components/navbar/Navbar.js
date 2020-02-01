import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <nav class="nav fixed-bottom bg-light containerNavbar">
        <Link to="/" className="linkHome"></Link>
        <Link to="/addarticle" className="linkSell"></Link>
        <div className="linkMess"></div>
        <Link to="/userlogin" className="linkProfil"></Link>
      </nav>
    );
  }
}

export default Navbar;
