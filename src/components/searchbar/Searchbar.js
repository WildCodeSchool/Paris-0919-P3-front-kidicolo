import React from 'react'


const Searchbar = ({ article, searchChange }) => {
    
    return (
        <div>
            <input
                name='search'
                type="text"
                class="searchTerm"
                placeholder="recherche"
                onChange={searchChange}
            />
        </div>
    )
}


export default Searchbar