import React, {Component} from "react"
import axios from "axios"
import DisplayAllArticle from "./Di"

class Categorie extends  Component {
    state = {
      articles: [],
    };

    getArticle() {
     
      const { match: { params } } = this.props;
      let idarticle = 0;

      if(params.id === "Chaussures"){
        console.log("C'est ca gros")
      }
      axios.get(`/article/subcat/${idarticle}`)
        .then(res => {
          this.setState({ articles: res.data })
        });
    }
    componentDidMount() {
      this.getArticle()
    }

    render() {
      console.log(this.state.articles)
      console.log(this.props)
      
      return (
          <div className="containerSubcategory">
            {this.state.articles.map(article => (
              < DisplayAllArticle article={article} key={article.id} />
            ))
            }
          </div>

      );
    }
  }
  
  export default Categorie
