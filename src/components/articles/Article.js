import React, {Component} from "react"
import axios from "axios"

class Article extends  Component {
    state = {
      articles: [],
    };


    getArticleFake(){
      axios.get(`/article/`)
        .then(res => {
          this.setState({ articles: res.data })
        });
    }
    componentDidMount() {
      this.getArticleFake()
    }

    render() {
      console.log(this.state.articles)
      console.log(this.props)
      
      return (
          <div className="containerSubcategory">
            {/* {this.state.articles.map(article => (
              < DisplayArticle article={article} key={article.id} />
            ))
            } */}
          </div>

      );
    }
  }
  
  export default Article
