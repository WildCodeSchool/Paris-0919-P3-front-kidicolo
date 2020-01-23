import React, {useState, useEffect}from 'react'
import axios from 'axios'

const Searchbar = ({ article, searchChange }) => {
    
    return (
        <div>
            <input
                name='search'
                type="text"
                class="searchTerm"
                placeholder="recherche"
                onChange={searchChange}
                // 
                // onChange={(e) => setSearchTerm(e.target.value)}
            // onClick={this.handleClick}
            />
        </div>
    )
}


export default Searchbar