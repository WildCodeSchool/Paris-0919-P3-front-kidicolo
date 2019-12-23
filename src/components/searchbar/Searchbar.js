import React from 'react'
import axios from 'axios'

class Searchbar extends React.Component {
    state = {
        suggestion: [],
        text: '',


    }

    // checkDB = () => {
    //     const getSubCategory = {
    //         suggestion: this.state.suggestion
    //     }
    //     axios.post('http://localhost:5000/subcategory/', suggestion)
    //         .then(res => {
    //             if (res.data === 'Logged in successfully') {
    //                 const action = { type: 'LOG', value: this.state.mail }
    //                 this.props.dispatch(action)
    //                 this.redirect()
    //             }
    //         }
    //         )
    // }

    onSearchChange = event => {
        if (event.target.value.length === 0) {
            this.setState({ movies: [] })
        } else {
            axios
                .get(`https://hackathon-wild-hackoween.herokuapp.com/movies/search/title/${event.target.value}`)
                .then((res) => {
                    this.setState({ movies: res.data.movies, isLoaded: true })
                    return res
                })
                .then((res) => {
                    this.props.searchMovies(res)
                    return res
                })
        }
    }

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