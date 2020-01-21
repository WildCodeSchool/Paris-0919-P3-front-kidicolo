import React, { Component } from "react";
import axios from "axios";
import DisplaySub from "./DisplaySub";
import DisplayArticle from "../articles/DisplayArticle";

class Categorie extends Component {
  state = {
    subcategory: [],
    articles: null
  };

  getSubcategory = () => {
    const {
      match: { params }
    } = this.props;
    let url = 0;

    switch (params.id) {
      case "Vetements":
        url = 3;
        break;
      case "Puericulture":
        url = 1;
        break;
      case "Jeux & Jouets":
        url = 2;
        break;
      case "Education":
        url = 4;
        break;
      default:
        console.log("Badest things");
    }
    axios.get(`/subcategory/${url}`).then(res => {
      this.setState({ subcategory: res.data });
    });
    console.log(url);
  };

  handleChange = async id => {
    console.log("ta mere le poulet !!!!!!! !!! !!! !!!", id);
    const resultData = await axios.get(`/article/subcat/${id}`);
    console.log(resultData.data);
    this.setState({ articles: resultData.data });
  };

  componentDidMount() {
    this.getSubcategory();
  }
  render() {
    const {subcategory, articles} = this.state
    console.log(this.state.subcategory);
    console.log('yoloArticle :', articles )
    return (
      <div className="containerSubcategory">
        {/* {this.state.subcategory.map(subcategorys => (
          <DisplaySub subcategorys={subcategorys} key={subcategorys.id} />
        ))} */}

        <DisplaySub
          subcategorys={subcategory}
          handleChange={this.handleChange}
        />
        {/* <DisplayArticle /> */}
        {/* {JSON.stringify(articles)} */}
        <div>
          {articles &&
            articles.map(article => {
              console.log("article", article);
              return <DisplayArticle article={article} />
            })}
        </div>
      </div>
    );
  }
}

export default Categorie;
