import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Searchbar.css'

const Searchbar = ({ article, searchChange }) => {

    return (
        <div>
            <div className="input-group input-group-lg">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-lg">Recherche</span>
                </div>
                <input type="text" className="form-control searchTerm" aria-label="Default" name='search'  aria-describedby="inputGroup-sizing-sm" onChange={searchChange} placeholder="Tapez ici le nom de l'article…"/>
            </div>

            </div>
            )
        }
        
        
export default Searchbar