import React from 'react'
import Logo from "../../assets/img/logo/Logo_Transparant4.png"
import './Searchbar.css'

const Searchbar = ({searchChange }) => {
        return (
            <div>
                <nav className=" navbar  navbar-light   searchArticle mx-5 my-5 ">
                <input name = "search" className="form-control" type="search" placeholder="Chercher un article" aria-label="Search" onChange={searchChange}/>
            </nav>
            
        </div>
        
        )
        }
        
        
export default Searchbar