import React, {useState, useEffect}from 'react'
import axios from 'axios'

const Searchbar = ({ article, searchChange }) => {
    const [searchTerm, setSearchTerm] = useState()

    let timeout


    useEffect(()=>{
        const search = () => {
            if(searchChange.length > 0) {
                console.log('poil');
                
                clearTimeout(timeout)
                timeout = setTimeout(()=>searchChange(searchTerm), 3000)
            }

        }
        search()
    }, [searchTerm])

    return (
        <div>
            <input
                id='search'
                type="text"
                class="searchTerm"
                placeholder="recherche"
                // 
                onChange={(e) => setSearchTerm(e.target.value)}
            // onClick={this.handleClick}
            />
        </div>
    )
}


export default Searchbar