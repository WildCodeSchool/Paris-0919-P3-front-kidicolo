import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from "../../assets/img/logo/logoK.png";
import "./usercss/UserSignup.css";

class UserSignup extends Component {
  state = {
    firstname: "",
    lastname: "",
    mail: "",
    mobile: "",
    location: "",
    password: "",
    photo_user: ""
  };

  ////////////FONCTION POUR RECUP LA VALUE DE NAME PUIS STOCKER DS LA STATE ////////////
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  /////AXIOS
  ///////AXIOS PUT USER /////////
  handleSubmit = e => {
    fetch("/adduser/signup", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(
        res => this.setState({ flash: res.flash }),
        err => this.setState({ flash: err.flash })
      )
      alert("Votre compte à bien été créé ")
    e.preventDefault();
  };

  /////////////////////////////////////////////////////////
  render() {
    return (
      <div className="containerSettingsSignUp">
        <img src={Logo} className="logoK" alt="Logo Kidicolo" />
        <form className="formClassSignUp" onSubmit={this.handleSubmit}>
          <img
            src={this.state.photo_user}
            className="photoProfilUser"
            placeholder="lol"
          />

          <input
          required
            className="inputSignUp"
            onChange={this.handleChange}
            placeholder="Prénom…"
            type="text"
            name="firstname"
          />

          <input
          required
            className="inputSignUp"
            type="text"
            name="lastname"
            onChange={this.handleChange}
            placeholder="Nom…"
          />

          <input
          required
            className="inputSignUp"
            type="email"
            name="mail"
            onChange={this.handleChange}
            placeholder="Email…"
          />

          <input
          required
            className="inputSignUp"
            type="password"
            name="password"
            onChange={this.handleChange}
            placeholder="Mot de passe…"
          />

          <input
          required
            className="inputSignUp"
            type="text"
            name="mobile"
            onChange={this.handleChange}
            placeholder="Numéro de Portable…"
          />

          <input
          required
            className="inputSignUp"
            type="text"
            name="location"
            onChange={this.handleChange}
            placeholder="Adresse…"
          />

          <input
          required
            className="inputSignUp"
            type="text"
            name="photo_user"
            onChange={this.handleChange}
            placeholder="URL Photo de profil…"
          />

          <div className="containerBtnSignUp">
            <input
              className="btnSeconnecterSignUp"
              type="submit"
              value="Valider"
            />
            <Link to="/userlogin">
              <button className="btnSeconnecterjaiCompte">
                J'ai un compte
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(UserSignup);
