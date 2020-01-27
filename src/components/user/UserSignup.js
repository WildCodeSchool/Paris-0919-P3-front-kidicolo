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
    return (
      <div className="containerSettingsSignUp">
        <img src={Logo} className="logoK" alt="Logo Kidicolo" />
        <form className="formClassSignUp" onSubmit={this.handleSubmit}>
        <img src = {this.state.photo_user} className="photoProfilUser" />
        
          <input
            className='inputSignUp'
            onChange={this.handleChange}
            placeholder="Prénom…"
            type="text"
            name="firstname"
          />
          
          <input
            className='inputSignUp'
            type="text"
            name="lastname"
            onChange={this.handleChange}
            placeholder="Nom…"
          />
          
          <input
            className='inputSignUp'
            type="text"
            name="mail"
            onChange={this.handleChange}
            placeholder="Email…"
          />
          
          <input
            className='inputSignUp'
            type="password"
            name="password"
            onChange={this.handleChange}
            placeholder="Mot de passe…"
          />
          
          <input
            className='inputSignUp'
            type="text"
            name="mobile"
            onChange={this.handleChange}
            placeholder="Numéro de Portable…"
          />
          
          <input
            className='inputSignUp'
            type="text"
            name="address"
            onChange={this.handleChange}
            placeholder="Adresse…"
          />
          
          <input
            className='inputSignUp'
            type="text"
            name="photo_user"
            onChange={this.handleChange}
            placeholder="URL Photo de profil…"
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