import React from "react";

const DisplayArticle = ({ article }) => {
  console.log(article);

  return (
    <div>
      <img src={article.photourl} alt="Card cap" />
      <div>
        <p>{article.id_user_vendeur}</p>
        <p >{article.brand}</p>
        <h5 >{article.name}</h5>
        <p >{article.description}</p>
        <h5 >{article.price}€</h5>
        <p>{article.id_user_vendeur.firstname}</p>
      </div>
    </div>
  );
};

export default DisplayArticle;
