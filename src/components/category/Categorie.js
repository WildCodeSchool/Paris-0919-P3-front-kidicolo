import React, { Component } from "react";
import axios from "axios";
import DisplaySub from "./DisplaySub";

class Categorie extends Component {
  state = {
    subcategory: []
  };

  // getSubcategory() {
  //   console.log(this);

  //   const { match: { params } } = this.props;
  //   let url = 0;
  //   if(params.id === "Vetements"){
  //     url = 3
  //   }
  //   if(params.id === "Puericulture"){
  //     url = 1
  //   }
  //   if(params.id === "Jeux&Jouets"){
  //     url = 2
  //   }
  //   if(params.id === "Education"){
  //     url = 4
  //   }
  //   axios.get(`/subcategory/${url}`)
  //     .then(res => {
  //       this.setState({ subcategory: res.data })
  //     });
  // }

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
        console.log("pas bien");
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
        {/* {this.state.subcategory.map(subcategorys => (
          <DisplaySub subcategorys={subcategorys} key={subcategorys.id} />
        ))} */}

        <DisplaySub subcategorys={this.state.subcategory}  />

      </div>
    );
  }
}

export default Categorie;
