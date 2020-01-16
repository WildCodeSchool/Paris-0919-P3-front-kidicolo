import React from 'react'
import axios from 'axios'
import ReactSearchBox from 'react-search-box'

class Searchbar extends React.Component {
    state = {
        article: [],
        isClicked: false
    }

    onSearchChange = event => {
        if (event.target.value.length === 0) {
            this.setState({ article: [] })
        } else {
            axios
                .get(`http://localhost:2121/article/article/${event.target.value}`)
                .then((res) => {
                    this.setState({ article: res.data })
                    console.log("article :",this.state.article)
                    return res
                })
                
        }
    }


    render() {

        return (
            // <div>
            //     <ReactSearchBox
            //         placeholder="Recherche"
            //         data={this.category}
            //         onSelect={record => console.log(record)}
            //         onFocus={() => {
            //             console.log('This function is called when is focussed')
            //         }}
            //         onChange={value => console.log(value)}
            //         fuseConfigs={{
            //             threshold: 0.05,
            //         }}
                    
            //     />
            // </div>

            // <button onClickconsole.log(category)>button</button>

            <div>
                <input
                    type="text"
                    class="searchTerm"
                    placeholder="recherche"
                    onChange={this.onSearchChange}
                    // onClick={this.handleClick}
                />
            </div>
            
        )
    }
}

export default Searchbar