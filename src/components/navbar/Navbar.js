import React from "react";
import "./Navbar.css"

class Navbar extends React.Component{
    render() {
        return(
            <div className="containerNavbar">
                <div className="linkHome"></div>
                <div className="linkSearch"></div>
                <div className="linkSell"></div>
                <div className="linkMess"></div>
                <div className="linkProfil"></div>
            </div>
        )
    }
}

export default Navbar