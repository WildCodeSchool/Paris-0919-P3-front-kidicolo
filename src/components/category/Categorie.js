import React, { Component } from "react";
import axios from "axios";
import DisplaySub from "./DisplaySub";
import SearchBar from "../searchbar/Searchbar"

class Categorie extends Component {
  state = {
    subcategory: [],
    article: [],
    search: ""
  };

  // onChange = e => {
  //   const searchTerm = { name : e}
  //   console.log(searchTerm)
  //   // if(searchTerm && searchTerm.name.length >= 3){
  //   //   this.getResFromSearch(searchTerm)
  //   // }
  // }

  // getResFromSearch = (term) => {
  //     axios
  //         .post(`http://localhost:5000/article/search/`, term)
  //         .then((res) => {
  //           this.setState({ article: res.data })
  //           return res
  //         })
  // }

  onSearchChange = e => {
    console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.state.search && this.state.search.length > 1) {
        clearTimeout(this.timeOut)
        this.timeOut = setTimeout(() => {
          axios
            .post(`http://localhost:5000/article/search/`, { name: this.state.search })
            .then((res) => {
              this.setState({ article: res.data })
              return res
            })
        }, 400)
      }
    })
    // if (e.target.value.length === 0) {
    //   this.setState({ article: [] })
    // } else {
    //   axios
    //     .post(`http://localhost:5000/article/search/`, {name: e.target.value})
    //     .then((res) => {
    //       this.setState({ article: res.data })
    //       return res
    //     })
    // }
  }

  getSubcategory() {
    const {
      match: { params }
    } = this.props;
    let url = 0;
    switch (params.id) {
      case "Vetements":
        url = 3;
        break;
      case "Puericulture":
        url = 1;
        break;
      case "Jeux&Jouets":
        url = 2;
        break;
      case "Education":
        url = 4;
        break;
      default:
        console.log("Badest things");
    }
    axios.get(`/subcategory/${url}`).then(res => {
      this.setState({ subcategory: res.data });
    });
    console.log(url);
  }

  componentDidMount() {
    this.getSubcategory();
  }
  render() {
    console.log(this.state.subcategory);
    console.log('====================================');
    console.log("state", this.state.article);
    console.log('====================================');
    return (
      <div className="containerSubcategory">
        {this.state.subcategory.map(subcategorys => (
          <DisplaySub subcategorys={subcategorys} key={subcategorys.id} />
        ))}
        <div className="searchBar">
          <SearchBar searchChange={this.onSearchChange} />
          {/* <input
            type="text"
            class="searchTerm"
            placeholder="recherche"
            onChange={this.onSearchChange}
          // onClick={this.handleClick}
          /> */}
          {this.state.article.map((elem, i) => <p key={i}>{elem.name}</p>)}
        </div>
      </div>

    );
  }
}

export default Categorie;
