import React, { useState, useEffect } from "react";
import axios from "axios";
import '../articles/articlecss/DisplayArticles.css'

const DisplayArticle = ({ article }) => {
  // console.log(article);
  const [photo, setPhoto] = useState("")

  useEffect(() => {
    const photoGet = () => {
      axios.get(`/photo/${article.id_photoart}`).then(res => console.log("++++---+++", res.data[0].photourl) || setPhoto(res.data[0].photourl))
    }
    photoGet()
  }, [])

  console.log("I AM HERE !!!!!!", photo)
  return (
    <div className='container'>
      <div className='row justify-content-center'>
          <div className="card col-4 my-3 mx-3 DisplayArticleCard">
            <img className="card-img-top imgCardArticle" src={photo} alt="Card cap" />
            <div className=" card-body">
              {/* <p>{article.id_user_vendeur}</p> */}
              <p >{article.brand}</p>
              <h5 className="card-title">{article.name}</h5>
              <p className="card-text">{article.description}</p>
              <p>{article.id_user_vendeur.firstname}</p>
              <a href="..." className="btn btn-secondary align-self-end btn btn-block btn btnArticle">Voir l'article</a>
            </div>
          </div>
        
      </div>

    </div>

  );
};

export default DisplayArticle;
