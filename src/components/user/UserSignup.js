import React, { Component } from "react";
import {Link, withRouter } from "react-router-dom";
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
  handleChange = (event) =>  {
    this.setState({[event.target.name]: event.target.value });
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
    console.log(this.state);
    return (
      <div className="containerSettingsSignUp">
        <img src={Logo} className="logoK" />
        <form className="formClassSignUp" onSubmit={this.handleSubmit}>
        Prénom
          <input
            className='inputSignUp'
            onChange={this.handleChange}
            placeholder="Ton prénom…"
            type="text"
            name="firstname"
          />
          Nom
          <input
            className='inputSignUp'
            type="text"
            name="lastname"
            onChange={this.handleChange}
            placeholder="Ton nom…"
          />
          Email
          <input
            className='inputSignUp'
            type="text"
            name="mail"
            onChange={this.handleChange}
            placeholder="Ton email…"
          />
          Mot de passe
          <input
            className='inputSignUp'
            type="password"
            name="password"
            onChange={this.handleChange}
            placeholder="Ton Mot de passe…"
          />
          Mot de passe*
          <input
            className='inputSignUp'
            type="password"
            name="passwordbiss"
            onChange={this.handleChange}
            placeholder="Confirmer Mot de passe…"
          />

          Portable:
          <input
            className='inputSignUp'
            type="text"
            name="mobile"
            onChange={this.handleChange}
            placeholder="Ton numéro de portable…"
          />
          Addresse
          <input
            className='inputSignUp'
            type="text"
            name="address"
            onChange={this.handleChange}
            placeholder="Ton adresse…"
          />
          Photo de profil
          <input
            className='inputSignUp'
            type="text"
            name="photo_user"
            onChange={this.handleChange}
            placeholder="Ton url de votre photo de profil…"
          />
          <img src = {this.state.photo_user} alt = "userphoto" />
          <input className="submitButton" type="submit" value="Se connecter" />
        <Link to="/"><button>J'ai un compte!</button></Link>
        </form>
      </div>
    );
  }
}

export default withRouter(UserSignup);