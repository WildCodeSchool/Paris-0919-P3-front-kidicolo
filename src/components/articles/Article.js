import React, { Component } from "react"
import axios from "axios"
import DisplayArticle from "./DisplayArticle"


class Article extends Component {
  state = {
    articles: [],
  };

  // getArticle() {
  //   const { match: { params } } = this.props;
  //   axios.get(`/article/subcat/${params.id}`)
  //     .then(res => {
  //       this.setState({ articles: res.data })
  //     });
  // }

  // componentDidMount() {
  //   this.getArticle()
  // }

  getArticleFake() {
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
      <div>
        
          {this.state.articles.map(article => (
            < DisplayArticle article={article} key={article.id} />
          ))
          }
        </div>
      

    );
  }
}

export default Article
