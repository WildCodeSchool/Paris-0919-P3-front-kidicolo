import React from "react";
import axios from 'axios'
import Article from './Article'



class ArticleList extends React.Component {
  state = {
    articles: []
  }


  fetchData = () => {
    axios.get('http://localhost:5000/article')
      .then(res => this.setState({ articles: res.data })) ;
  }

  componentDidMount() {
    this.fetchData()
  }

  render() { 
    console.log(this.state.articles)
    return (
      
      <div className="container">
        <div className="row">
          {this.state.articles.map(article => {
            return <Article article={article} key={article.id} />
          })}
        </div>
      </div>

    )
    
  }
}

export default ArticleList
