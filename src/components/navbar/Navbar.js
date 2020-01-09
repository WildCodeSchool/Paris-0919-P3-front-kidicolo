import React from "react";
import "./Navbar.css"

import { Link} from 'react-router-dom';
class Navbar extends React.Component{
    render() {
        return(
            <div className="containerNavbar">
                <Link to="/"className="linkHome"></Link>
                <div className="linkSearch"></div>
                <div className="linkSell"></div>
                <div className="linkMess"></div>
                <div className="linkProfil"></div>
            </div>
        )
    }
}

export default Navbar