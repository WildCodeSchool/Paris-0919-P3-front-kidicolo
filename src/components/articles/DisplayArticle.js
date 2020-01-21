import React, {useState, useEffect} from "react";
import axios from "axios";

const DisplayArticle = ({ article }) => {
  // console.log(article);
  const [photo, setPhoto] = useState("")
  
  useEffect(() => {
    const photoGet = () => {
      axios.get(`/photo/${article.id_photoart}`).then(res => console.log("++++---+++",res.data[0].photourl) || setPhoto(res.data[0].photourl))
    }
    photoGet()
  }, [])
  
  console.log("I AM HERE !!!!!!", photo.photourl)
  return (
    <div>
      <img src={photo} alt="Card cap" />
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
