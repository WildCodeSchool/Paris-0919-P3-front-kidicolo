import React from "react";
import Logo from "../../assets/img/logo/Logo_Transparant4.png"
import './RechercheBS.css'
import "./Homepage.css";
import { NavLink } from "react-router-dom";


const RechercheBS = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img src={Logo} className="navbar-brand logoKidicoloSearchBar" alt='logo Kidicolo' />
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto"></ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Chercher un article" aria-label="Search"/>
                            <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Chercher</button>
                    </form>
                </div>
            </nav>
        </div>
            );
          };
          
          export default RechercheBS;
