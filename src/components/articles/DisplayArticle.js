import React, { useState, useEffect } from "react";
import axios from "axios";
import '../articles/articlecss/DisplayArticles.css';


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
    <div className="card my-3 mx-3">
      <img className="card-img-top" src={photo} alt="Card cap" />
      <div className="card-body d-flex flex-column">
        {/* <p>{article.id_user_vendeur}</p> */}
        <p className="card-text ">{article.brand}</p>
        <h5 className="card-title">{article.name}</h5>
        <p className="card-text">{article.description}</p>
        <h5 className="card-title">{article.price}€</h5>
        <p>{article.id_user_vendeur.firstname}</p>
        <a href={"..."} className="align-self-end btn btn-block btn btnArticle">Voir l'article</a>
      </div>
    </div>
  );
};

  //     if(params.id === "Chaussures"){
  //       console.log("C'est ca gros")
  //     }
  //     axios.get(`/article/subcat/${idarticle}`)
  //       .then(res => {
  //         this.setState({ articles: res.data })
  //       });
  //   }
  //   componentDidMount() {
  //     this.getArticle()
  //   }

  //   render() {
  //     console.log(this.state.articles)
  //     console.log(this.props)
      
  //     return (
  //         <div className="containerSubcategory">
  //           {this.state.articles.map(article => (
  //             < DisplayAllArticle article={article} key={article.id} />
  //           ))
  //           }
  //         </div>

  //     );
  //   }
  // }
  
  export default DisplayArticle
