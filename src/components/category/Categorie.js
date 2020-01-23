import React, { Component } from "react";
import axios from "axios";
import DisplaySub from "./DisplaySub";
import DisplayArticle from "../articles/DisplayArticle";
import SearchBar from "../searchbar/Searchbar"
import './Categorie.css'

class Categorie extends Component {
  state = {
    subcategory: [],
    articles: null,
    article: [],
    search: ""
  };

  onSearchChange = e => {
    console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.state.search && this.state.search.length > 1) {
        clearTimeout(this.timeOut)
        this.timeOut = setTimeout(() => {

          // if ()
          axios
            .post(`http://localhost:5000/article/search/`, { name: this.state.search })
            .then((res) => {
              this.setState({ article: res.data })
              return res
            })
        }, 400)
      }
    })
  }
  getSubcategory = () => {
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
      case "Jeux & Jouets":
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
  };

  handleChange = async id => {
    console.log("ta mere le poulet !!!!!!! !!! !!! !!!", id);
    const resultData = await axios.get(`/article/subcat/${id}`);
    console.log(resultData.data);
    this.setState({ articles: resultData.data });
  };


  componentDidMount() {
    this.getSubcategory();
  }
  render() {
    const { subcategory, articles } = this.state
    console.log(this.state.subcategory);
    console.log('yoloArticle :', articles)
    return (
      <div className="containerSubcategory">
        <DisplaySub
          subcategorys={subcategory}
          handleChange={this.handleChange}
        />
        <div className="searchBar">
          <SearchBar searchChange={this.onSearchChange} />
          {this.state.article.map((elem, i) => <p key={i}>{elem.name}</p>)}
        </div>
        <div className="container">
          <div className="row mx-auto">
          {articles &&
            articles.map(article => {
              console.log("article", article);
              return <DisplayArticle article={article} />
            })}
            </div>
        </div>
      </div>
    );
  }
}

export default Categorie;
