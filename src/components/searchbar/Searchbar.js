import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Searchbar.css'

const Searchbar = ({ article, searchChange }) => {

    onSearchChange = event => {
        if (event.target.value.length === 0) {
            this.setState({ article: [] })
        } else {
            axios
                .get(`http://localhost:5000/article/article/${event.target.value}`)
                .then((res) => {
                    this.setState({ article: res.data })
                    console.log("article :",this.state.article)
                    return res
                })
                
        }
    }
        return (
        <div>
                
            <div className="input-group input-group-lg">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-lg">Recherche</span>
                </div>
                <input type="text" className="form-control searchTerm" aria-label="Default" name='search'  aria-describedby="inputGroup-sizing-sm" onChange={this.onSearchChange} placeholder="Tapez ici le nom de l'article…"/>
            </div>

        </div>
        )
        }
        
        
export default Searchbar