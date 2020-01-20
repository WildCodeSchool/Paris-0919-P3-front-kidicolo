import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class AddArticle extends Component {
  state = {
    brand: "",
    description: "",
    price: 0,
    sold: 0,
    name: "",
    id_state: null,
    id_user_vendeur: "",
    id_photoart: "",
    categoriesList: [],
    subcategoriesList: [],
    agesList: [],
    gendersList: [],
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state)
  };

  handleSubmit = e => {

    axios.post("/article/addarticle",
    )
      .then(res => res.json())
      .then(
        res => this.setState({ flash: res.flash }),
        err => this.setState({ flash: err.flash })
      );
    e.preventDefault();
  };

  getSubcategorie(){
    axios.get("/subcategory").then(res => {
      this.setState({subcategoriesList : res.data})
    })
  }

  getCategorie(){
    axios.get("/category").then(res => {
      this.setState({categoriesList : res.data})
    })
  }

  getGender() {
    axios.get("/gender").then(res => {
      this.setState({ gendersList : res.data });
      console.log(this.state);
    });
  }
  getAge() {
    axios.get("/age").then(res => {
      this.setState({ agesList : res.data });
      console.log(this.state);
    });
  }
  componentDidMount() {
    this.getAge();
    this.getGender();
    this.getCategorie();
    this.getSubcategorie();
  }

  render() {
    console.log(this.state.categories);
    return (
      <div className="containerSettings">
        <form className="formClass" onSubmit={this.handleSubmit}>
          Marque:
          <input
          require
            onChange={this.handleChange}
            placeholder="Brand..."
            type="text"
            name="brand"
          />
          Description:
          <textarea
          require
            type="textarea"
            name="description"
            onChange={this.handleChange}
            placeholder="Description du produit..."
          />
          Prix:
          <input
          require
            type="text"
            name="price"
            onChange={this.handleChange}
            placeholder="Price ..."
          />
          Nom:
          <input
          require
            type="text"
            name="name"
            onChange={this.handleChange}
            placeholder="Enter the name ..."
          />
          Catégorie :
          <div>
          <select
          require
            type="checkbox"
            name="categories"
            placeholder="Enter your address"
            onChange={this.handleChange}
          >
               {this.state.categoriesList.map((data) => (
             <option value={data.id}>{data.name}</option>
             
            ))}
          </select>
          </div>
          Subcategories :
          <select
          require
            type="text"
            name="subcategories"
            placeholder="Enter your address"
            onChange={this.handleChange}
          >
               {this.state.subcategoriesList.map((data) => (
             <option value={data.id}>{data.name}</option>
            ))}
          </select>
          Age:
          <select
          require
            type="text"
            name="ages"
            placeholder="Enter your address"
            onChange={this.handleChange}
          >
               {this.state.agesList.map((data) => (
             <option value={data.id}>{data.age}</option>
            ))}
          </select>
          Gender:
          <select
          require
            type="text"
            name="genders"
            onChange={this.handleChange}
          >
               {this.state.gendersList.map((data) => (
             <option value={data.id}>{data.gender}</option>
            ))}
          </select>
          Photo:
          <input
            type="text"
            name="id_photoart"
            onChange={this.handleChange}
            placeholder="Enter the url of the photo"
          />
          <input className="submitButton" type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
export default withRouter(AddArticle);
