import React from 'react'
import axios from 'axios'
import ReactSearchBox from 'react-search-box'

class Searchbar extends React.Component {
    state = {
        article: [],
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

    getArticle = () =>{
        // Send the request
        axios.get(`/article/article`)
            // Extract the DATA from the received response
            .then(res => this.setState({ article: res.data}))
            .then(res => console.log( "my state",this.state))
            // .then(res => console.log(res.data[0].quote))
        // Use this data to update the state

    }; 



    handleChange = (event) => {
        const hChanged = event.target.value
        this.setState({ text: hChanged})
    }

    // onSearchChange = event => {
    //     if (event.target.value.length === 0) {
    //         this.setState({ category: [] })
    //     } else {
    //         axios
    //             .get(`http://localhost:2121/category/${event.target.value}`)
    //             .then((res) => {
    //                 this.setState({ category: res.data.category })
    //                 return res
    //             })
                
    //     }
    // }

    componentDidMount(){
        this.getArticle()
        console.log(this.state.category)
    }

    render() {

        return (
            <div>
                <ReactSearchBox
                    placeholder="Recherche"
                    data={this.category}
                    onSelect={record => console.log(record)}
                    onFocus={() => {
                        console.log('This function is called when is focussed')
                    }}
                    onChange={value => console.log(value)}
                    fuseConfigs={{
                        threshold: 0.05,
                    }}
                    
                />
            </div>

            // <button onClickconsole.log(category)>button</button>

            // <div>
            //     <input
            //         type="text"
            //         class="searchTerm"
            //         placeholder="recherche"
            //         onChange={this.onSearchChange}
            //         onClick={this.handleClick}
            //     />
            // </div>
            
        )
    }
}

export default Searchbar