import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <div className="containerNavbar">
        <Link to="/homepage" className="linkHome"></Link>
        <div className="linkSearch"></div>
        <Link  to="/addarticle" className="linkSell"></Link>
        <div className="linkMess"></div>
        <Link to="/" className="linkProfil"></Link>
      </div>
    );
  }
}

export default Navbar;
