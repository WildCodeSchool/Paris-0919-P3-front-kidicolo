import React from 'react'
import './Article.css'

const Article = ({ article }) => {
  console.log(article);

  return (
      <div className="card my-3 mx-3 text-center">
        <img className="card-img-top" src={article.photourl} alt="Card cap" />
        <div className="card-body">
          <p className="card-text">{article.brand}</p>
          <h5 className="card-title">{article.name}</h5>
          <p className="card-text">{article.description}</p>
          <h5 className="card-title">{article.price}€</h5>
          <a href="..." className="btn btn-primary">Voir l'article</a>
        </div>
      </div>
    
  )
}

export default Article