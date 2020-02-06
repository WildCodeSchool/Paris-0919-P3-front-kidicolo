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
 ////FONCTION POUR  VALIDER LE PASSWORD////
  validatePassword = () => {
    const password = document.getElementById("password")
    const passwordbis = document.getElementById("passwordbis");
    if (password.value !== passwordbis.value) {            // value={null}
      passwordbis.setCustomValidity("Le mot de passe de correspond pas");
    } else {
      passwordbis.setCustomValidity('');
    }
  }

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
      );
    alert("Votre compte à bien été créé ");
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
            placeholder="Photo de profil ..."
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
            id="password"
            className="inputSignUp"
            type="password"
            name="password"
            onChange={(this.handleChange, this.validatePassword)}
            placeholder="Mot de passe…"
            required
          />

          <input
            id="passwordbis"
            className="inputSignUp"
            type="password"
            name="passwordbis"
            onKeyUp={this.validatePassword}
            placeholder="Confirmation du mot de passe…"
            required
          />

          <input
            required
            className="inputSignUp"
            type="text"
            name="mobile"
            onChange={this.handleChange}
            placeholder="Mobile number…"
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
            placeholder="Your photo(URL)…"
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
