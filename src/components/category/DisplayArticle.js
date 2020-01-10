import React, {Component} from "react"
import axios from "axios"
import DisplayArticle2 from "./DisplayArticle2"

class Categorie extends  Component {
    state = {
      articles: []
    };
  
    getArticle() {
      const { match: { params } } = this.props;
      let url = 0;
      if(params.id === "Chaussures"){
        url = 5
      }

      axios.get(`/article/subcat/${url}`)
        .then(res => {
          this.setState({ articles: res.data })
        });
    }
    componentDidMount() {
      this.getArticle()
    }

    render() {
      console.log(this.state.articles)
      return (
          <div className="containerSubcategory">
            {this.state.articles.map(article => (
              < DisplayArticle2 article={article} key={article.id} />
            ))
            }
          </div>

      );
    }
  }
  
  export default Categorie
