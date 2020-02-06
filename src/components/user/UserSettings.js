import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./usercss/UserSettings.css";
import Logo from "../../assets/img/logo/logoK.png";

class UserSettings extends Component {
  state = {
    firstname: "",
    lastname: "",
    mail: "",
    mobile: "",
    address: "",
    password: "",
    photo_user: ""
  };
  /////////AXIOS GET USER /////////
  getUser() {
    axios.get(`/adduser/getinfo/1`).then(res => {
      this.setState({ ...res.data[0] });
    });
  }

  componentDidMount() {
    this.getUser();
  }

  ////////////FONCTION POUR RECUP LA VALUE DE NAME PUIS STOCKER DS LA STATE ////////////
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  ///////AXIOS PUT USER /////////
  handleSubmit = e => {
    fetch("/adduser/switch/21", {
      method: "PUT",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(
        res => this.setState({ flash: res.flash }),
        err => this.setState({ flash: err.flash })
      );
    e.preventDefault();
  };

  validatePassword = () => {
    const password = document.getElementById("password");
    const passwordbis = document.getElementById("passwordbis");
    if (password.value !== passwordbis.value) {
      passwordbis.setCustomValidity("Le mot de passe de correspond pas");
    } else {
      passwordbis.setCustomValidity("");
    }
  };

  /////////Render//////
  render() {
    return (
      <div className="containerSettingsSignUp">
        <img src={Logo} className="logoK" alt="Logo Kidicolo" />
        <form className=" mb-5 formClassSignUp" onSubmit={this.handleSubmit}>
          Fisrtname:
          <input
            required
            className="inputSignUp"
            onChange={this.handleChange}
            placeholder="Your Firstname"
            value={this.state.firstname}
            type="text"
            name="Prénom…"
          />
          Lastname:
          <input
            required
            className="inputSignUp"
            value={this.state.lastname}
            type="text"
            name="lastname"
            onChange={this.handleChange}
            placeholder="Nom…"
          />
          Email:
          <input
            required
            className="inputSignUp"
            value={this.state.mail}
            type="text"
            name="mail"
            onChange={this.handleChange}
            placeholder="Email…"
          />
          Password:
          <input
            id="password"
            required
            className="inputSignUp"
            type="password"
            name="password"
            onChange={(this.handleChange, this.validatePassword)}
            placeholder="Mot de passe…"
          />
          Password Biss:
          <input
            required
            id="passwordbis"
            className="inputSignUp"
            type="password"
            name="password"
            onChange={this.validatePassword}
            placeholder="Confirmation du mot de passe…"
          />
          Mobile:
          <input
            required
            className="inputSignUp"
            value={this.state.mobile}
            type="text"
            name="mobile"
            onChange={this.handleChange}
            placeholder="Mobile number…"
          />
          Address:
          <input
            className="inputSignUp"
            required
            value={this.state.address}
            type="text"
            name="address"
            onChange={this.handleChange}
            placeholder="Adresse…"
          />
          Photo:
          <input
            className="inputSignUp"
            required
            value={this.state.photo_user}
            type="text"
            name="photo_user"
            onChange={this.handleChange}
            placeholder="Your photo(URL)…"
          />
          <input
            className=" btn btn-info  p-4 submitButton"
            type="submit"
            value="Soumettre"
          />
        </form>
      </div>
    );
  }
}

export default withRouter(UserSettings);
