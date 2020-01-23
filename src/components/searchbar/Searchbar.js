import React, { useState, useEffect } from 'react'
import Logo from "../../assets/img/logo/Logo_Transparant4.png"
import axios from 'axios'
import './Searchbar.css'

const Searchbar = ({ article, searchChange }) => {

        return (
        <div>
                
                <img src={Logo} className="navbar-brand logoKidicoloSearchBar" alt='logo Kidicolo' />
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <input className="form-control mr-sm-2" type="search" placeholder="Chercher un article" aria-label="Search" onChange={searchChange}/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto"></ul>
                    <form className="form-inline my-2 my-lg-0">

                            <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Chercher</button>
                    </form>
                </div>
            
            </nav>

        </div>
        )
        }
        
        
export default Searchbar