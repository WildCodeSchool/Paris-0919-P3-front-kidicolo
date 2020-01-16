import React, { Component } from "react";
import axios from "axios";
import DisplaySub from "./DisplaySub";

class Categorie extends Component {
  state = {
    subcategory: []
  };

  getSubcategory() {
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
      case "Jeux&Jouets":
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
  }

  componentDidMount() {
    this.getSubcategory();
  }
  render() {
    console.log(this.state.subcategory);
    return (
      <div className="containerSubcategory">
        {this.state.subcategory.map(subcategorys => (
          <DisplaySub subcategorys={subcategorys} key={subcategorys.id} />
        ))}
      </div>
    );
  }
}

export default Categorie;
