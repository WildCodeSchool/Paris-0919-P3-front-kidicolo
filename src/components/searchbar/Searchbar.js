import React from 'react'

class Searchbar extends React.Component {
    render() {
        return (
            <div className="container">
                <label for="searchbar">Search the category:</label>
                <input type="search" id="searchbar" name="q"
                    aria-label="Search through site content" />

                <button>Search</button>
            </div>
        )
    }
}

export default Searchbar