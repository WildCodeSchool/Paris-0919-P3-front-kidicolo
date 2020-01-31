import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from '../../assets/img/logo/logoK.png'
import './usercss/UserSignup.css'

class UserSignup extends Component {
  state = {
    firstname: "",
    lastname: "",
    mail: "",
    mobile: "",
    address: "",
    password: "",
    photo_user: "",
  };

  ////////////FONCTION POUR RECUP LA VALUE DE NAME PUIS STOCKER DS LA STATE ////////////
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  ///////////// FONCTION POUR LA CONFIRMATION DU PASSWORD //////////////////////
  validatePassword = () => {
    const password = document.getElementById("password")
    const passwordbis = document.getElementById("passwordbis");
    if (password.value !== passwordbis.value) {
      passwordbis.setCustomValidity("Le mot de passe de correspond pas");
    } else {
      passwordbis.setCustomValidity('');
    }
  }


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
      .then(res => res.json())
      .then(
        res => this.setState({ flash: res.flash }),
        err => this.setState({ flash: err.flash })
      );
    e.preventDefault();
  };

  /////////////////////////////////////////////////////////
  render() {
    return (
      <div className="containerSettingsSignUp">
        <img src={Logo} className="logoK" alt="Logo Kidicolo" />
        <form className="formClassSignUp" onSubmit={this.handleSubmit}>
          <img src={this.state.photo_user} className="photoProfilUser" />

          <input
            className='inputSignUp'
            onChange={this.handleChange}
            placeholder="Prénom…"
            type="text"
            name="firstname"
            required
          />

          <input
            className='inputSignUp'
            type="text"
            name="lastname"
            onChange={this.handleChange}
            placeholder="Nom…"
            required
          />

          <input
            className='inputSignUp'
            type="text"
            name="mail"
            onChange={this.handleChange}
            placeholder="Email…"
            required
          />

          <input
            id="password"
            className='inputSignUp'
            type="password"
            name="password"
            onChange={this.handleChange, this.validatePassword}
            placeholder="Mot de passe…"
            required
          />

          <input
            id="passwordbis"
            className='inputSignUp'
            type="password"
            name="passwordbis"
            onKeyUp={this.validatePassword}
            placeholder="Confirmation mot de passe…"
            required
          />

          <input
            className='inputSignUp'
            type="text"
            name="mobile"
            onChange={this.handleChange}
            placeholder="Numéro de Portable…"
            required
          />

          <input
            className='inputSignUp'
            type="text"
            name="address"
            onChange={this.handleChange}
            placeholder="Adresse…"
            required
          />

          <input
            className='inputSignUp'
            type="text"
            name="photo_user"
            onChange={this.handleChange}
            placeholder="URL Photo de profil…"
            required
          />

          <div className="containerBtnSignUp">
            <input className="btnSeconnecterSignUp" type="submit" value="Se connecter" />
            <Link to="/"><button className="btnSeconnecterjaiCompte">J'ai un compte</button></Link>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(UserSignup);