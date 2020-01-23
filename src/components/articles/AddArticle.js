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
    id_state: 1,
    id_user_vendeur: 2,
    id_photoart: 1,
    categoriesList: [],
    subcategoriesList: [],
    agesList: [],
    gendersList: [],
    stateList: [],
    categories: [],
    subcategories: [],
    ages: [],
    genders: [],
    states: []
  };

  handleSubmit = e => {
    e.preventDefault();

    const categories = this.state.categories.map(categorie => {
      return categorie.id;
    });

    const subCategories = this.state.subcategories.map(subCategorie => {
      return subCategorie.id;
    });

    const ages = this.state.ages.map(age => {
      return age.id;
    });

    const genders = this.state.genders.map(gender => {
      return gender.id;
    });

    const states = this.state.states.map(state => {
      return state.id;
    });

    const body = {
      article: {
        brand: this.state.brand,
        description: this.state.description,
        price: this.state.price,
        sold: this.state.sold,
        name: this.state.name,
        id_state: states[0],
        id_user_acheteur: null,
        id_user_vendeur: this.state.id_user_vendeur,
        id_photoart: this.state.id_photoart
      },
      categories: categories,
      subcategories: subCategories,
      genders: genders,
      ages: ages
    };

    axios.post("/article/addarticle", body);
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChangeSelect = event => {
    let list = [];

    switch (event.target.name) {
      case "categories":
        list = this.state.categoriesList;
        break;
      case "subcategories":
        list = this.state.subcategoriesList;
        break;
      case "genders":
        list = this.state.gendersList;
        break;
      case "states":
        list = this.state.stateList;
        break;
      default:
        list = this.state.agesList;
    }

    const tmp = list.filter(item => {
      return item.id == event.target.value;
    });

    this.setState(
      { [event.target.name]: this.state[event.target.name].concat(tmp) },
      () => {
        console.log("poil", this.state);
      }
    );
  };

  getSubcategorie = () => {
    axios.get("/subcategory").then(res => {
      this.setState({ subcategoriesList: res.data });
    });
  };

  getStateOfArticle = () => {
    axios.get("/statearticle").then(res => {
      this.setState({ stateList: res.data });
    });
  };

  getCategorie = () => {
    axios.get("/category").then(res => {
      this.setState({ categoriesList: res.data });
    });
  };

  getGender = () => {
    axios.get("/gender").then(res => {
      this.setState({ gendersList: res.data });
      console.log(this.state);
    });
  };
  getAge = () => {
    axios.get("/age").then(res => {
      this.setState({ agesList: res.data });
      console.log(this.state);
    });
  };
  componentDidMount() {
    this.getAge();
    this.getGender();
    this.getCategorie();
    this.getSubcategorie();
    this.getStateOfArticle();
  }

  handleClickCat = name => {
    const interest = this.state.categories;
    const index = interest.indexOf(name);
    interest.splice(index, 1);
    this.setState({ interest: interest });
  };

  handleClickSub = name => {
    const interest = this.state.subcategories;
    const index = interest.indexOf(name);
    interest.splice(index, 1);
    this.setState({ interest: interest });
  };
  handleClickStat = name => {
    const interest = this.state.states;
    const index = interest.indexOf(name);
    interest.splice(index, 1);
    this.setState({ interest: interest });
  };

  handleClickAge = name => {
    const interest = this.state.ages;
    const index = interest.indexOf(name);
    interest.splice(index, 1);
    this.setState({ interest: interest });
  };

  handleClickGen = name => {
    const interest = this.state.genders;
    const index = interest.indexOf(name);
    interest.splice(index, 1);
    this.setState({ interest: interest });
  };

  render() {
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
          Etat:
          <div>
            <select
              require
              type="text"
              name="states"
              onChange={this.handleChangeSelect}
              placeholder="Etats ..."
            >
              <option>--Selectionez un Etat--</option>
              {this.state.stateList &&
                this.state.stateList.map(data => (
                  <option value={data.id}>{data.name}</option>
                ))}
            </select>
            {this.state.states.map(card => {
              return (
                <li className="listElements">
                  {card.name}
                  <button
                    className="x"
                    onClick={() => this.handleClickStat(card)}
                  >
                    X
                  </button>
                </li>
              );
            })}
          </div>
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
              type="text"
              name="categories"
              placeholder="Enter your address"
              onChange={this.handleChangeSelect}
            >
              <option>--Selectionez une Catégorie--</option>
              {this.state.categoriesList &&
                this.state.categoriesList.map(data => (
                  <option value={data.id}>{data.name}</option>
                ))}
            </select>
            {this.state.categories.map(card => {
              return (
                <li className="listElements">
                  {card.name}
                  <button
                    className="x"
                    onClick={() => this.handleClickCat(card)}
                  >
                    X
                  </button>
                </li>
              );
            })}
          </div>
          Subcategories :
          <div>
            <select
              require
              type="text"
              name="subcategories"
              placeholder="Enter your address"
              onChange={this.handleChangeSelect}
            >
              <option>--Selectionez une Sous-Catégorie--</option>
              {this.state.subcategoriesList &&
                this.state.subcategoriesList.map(data => (
                  <option value={data.id}>{data.name}</option>
                ))}
            </select>
            {this.state.subcategories.map(card => {
              return (
                <li className="listElements">
                  {card.name}
                  <button
                    className="x"
                    onClick={() => this.handleClickSub(card)}
                  >
                    X
                  </button>
                </li>
              );
            })}
          </div>
          Age:
          <div>
            <select
              require
              type="text"
              name="ages"
              placeholder="Enter your address"
              onChange={this.handleChangeSelect}
            >
              <option>--Selectionez un Age--</option>
              {this.state.agesList &&
                this.state.agesList.map(data => (
                  <option value={data.id}>{data.age}</option>
                ))}
            </select>
            {this.state.ages.map(card => {
              return (
                <li className="listElements">
                  {card.age}
                  <button
                    className="x"
                    onClick={() => this.handleClickAge(card)}
                  >
                    X
                  </button>
                </li>
              );
            })}
          </div>
          Gender:
          <div>
            <select
              require
              type="text"
              name="genders"
              onChange={this.handleChangeSelect}
            >
              <option>--Selectionez un Genre--</option>
              {this.state.gendersList &&
                this.state.gendersList.map(data => (
                  <option value={data.id}>{data.gender}</option>
                ))}
            </select>
            {this.state.genders.map(card => {
              return (
                <li className="listElements">
                  {card.gender}
                  <button
                    className="x"
                    onClick={() => this.handleClickGen(card)}
                  >
                    X
                  </button>
                </li>
              );
            })}
          </div>
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
